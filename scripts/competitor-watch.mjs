#!/usr/bin/env node
// Snapshots competitors' sitemaps and reports what changed since the last run.
// Snapshots and reports go to data-private/competitors/ (git-ignored).
// Usage: node scripts/competitor-watch.mjs

import fs from 'node:fs';
import path from 'node:path';

const COMPETITORS = [
  { name: 'Oleg Charlotte', sitemap: 'https://olegappliancerepaircharlotte.com/sitemap.xml' },
  { name: 'Oleg Miami', sitemap: 'https://olegappliancerepair.com/sitemap_index.xml' },
  { name: 'Berne', sitemap: 'https://bernerepair.com/sitemap_index.xml' },
];

const outDir = path.resolve('data-private/competitors');
fs.mkdirSync(outDir, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
// A plain browser UA — some competitors sit behind Cloudflare rules that reject custom bot strings.
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36';

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function collect(sitemapUrl, seen = new Set()) {
  if (seen.has(sitemapUrl)) return [];
  seen.add(sitemapUrl);
  const xml = await fetchText(sitemapUrl);
  if (/<sitemapindex/i.test(xml)) {
    const children = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
    const nested = await Promise.all(children.map(c => collect(c, seen).catch(e => (console.warn('  skip', e.message), []))));
    return nested.flat();
  }
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => ({
    loc: (m[1].match(/<loc>([^<]+)<\/loc>/)?.[1] ?? '').trim(),
    lastmod: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '').trim().slice(0, 10),
  })).filter(u => u.loc && !/\.(jpg|jpeg|png|webp|gif)$/i.test(u.loc));
}

// Group URLs by template so "added 40 /service-areas/* pages" reads clearly.
const pattern = loc => {
  const parts = new URL(loc).pathname.split('/').filter(Boolean);
  if (parts.length === 0) return '/';
  if (parts.length === 1) return '/*';
  return `/${parts.slice(0, -1).join('/')}/*`;
};

const report = [`# Competitor watch — ${today}`, ''];

for (const c of COMPETITORS) {
  const slug = c.name.toLowerCase().replace(/\s+/g, '-');
  const dir = path.join(outDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  let urls;
  try {
    urls = await collect(c.sitemap);
  } catch (e) {
    report.push(`## ${c.name}`, `Could not fetch sitemap: ${e.message}`, '');
    continue;
  }
  const previousFile = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== `${today}.json`).sort().pop();
  fs.writeFileSync(path.join(dir, `${today}.json`), JSON.stringify(urls, null, 2));

  report.push(`## ${c.name}`, `${urls.length} URLs in sitemap.`);
  if (!previousFile) {
    const byPattern = {};
    for (const u of urls) byPattern[pattern(u.loc)] = (byPattern[pattern(u.loc)] ?? 0) + 1;
    report.push('First snapshot — baseline by section:', ...Object.entries(byPattern).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([p, n]) => `- ${p}: ${n}`), '');
    continue;
  }
  const prev = JSON.parse(fs.readFileSync(path.join(dir, previousFile), 'utf8'));
  const prevMap = new Map(prev.map(u => [u.loc, u.lastmod]));
  const nowMap = new Map(urls.map(u => [u.loc, u.lastmod]));
  const added = urls.filter(u => !prevMap.has(u.loc));
  const removed = prev.filter(u => !nowMap.has(u.loc));
  const updated = urls.filter(u => prevMap.has(u.loc) && prevMap.get(u.loc) !== u.lastmod);

  report.push(`Since ${previousFile.replace('.json', '')}: +${added.length} new, −${removed.length} removed, ${updated.length} updated.`);
  const group = list => {
    const g = {};
    for (const u of list) (g[pattern(u.loc)] ??= []).push(u.loc);
    return Object.entries(g).sort((a, b) => b[1].length - a[1].length);
  };
  if (added.length) {
    report.push('', '### New pages');
    for (const [p, list] of group(added)) report.push(`- ${p} (${list.length}): ${list.slice(0, 5).map(l => new URL(l).pathname).join(', ')}${list.length > 5 ? ' …' : ''}`);
  }
  if (updated.length) {
    report.push('', '### Updated pages');
    for (const [p, list] of group(updated).slice(0, 10)) report.push(`- ${p} (${list.length})`);
  }
  report.push('');
}

const reportFile = path.join(outDir, `report-${today}.md`);
fs.writeFileSync(reportFile, report.join('\n') + '\n');
console.log(report.join('\n'));
console.log(`\nSaved ${path.relative(process.cwd(), reportFile)}`);
