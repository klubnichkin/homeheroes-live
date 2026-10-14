#!/usr/bin/env node
// Post-build SEO checks over dist/: unique titles/H1/descriptions, lengths, canonical, robots.
// Usage: npm run build && node scripts/check-seo.mjs   (exit code 1 on errors)

import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(process.argv[2] ?? 'dist');
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(dist);

const decode = s => s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pick = (html, re) => (html.match(re)?.[1] ?? '').trim();
const urlOf = f => '/' + path.relative(dist, f).replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '');

const errors = [];
const warnings = [];
const seen = { title: new Map(), h1: new Map(), description: new Map() };

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const url = urlOf(f);
  if (url === '/404') continue;
  const robots = pick(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i);
  const noindex = /noindex/i.test(robots);
  const title = decode(pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
  const description = decode(pick(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i));
  const canonical = pick(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => decode(m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));

  if (!title) errors.push(`${url}: missing <title>`);
  if (!description) errors.push(`${url}: missing meta description`);
  if (!canonical) errors.push(`${url}: missing canonical`);
  if (h1s.length !== 1) errors.push(`${url}: ${h1s.length} H1 tags`);
  if (title.length > 65) warnings.push(`${url}: title ${title.length} chars — "${title}"`);
  if (description.length > 165) warnings.push(`${url}: description ${description.length} chars`);
  if (description && description.length < 70) warnings.push(`${url}: description only ${description.length} chars`);
  if (canonical && /\/$/.test(canonical) && url !== '/') warnings.push(`${url}: canonical has trailing slash`);
  if (noindex) continue; // duplicates among noindex pages do not matter

  for (const [key, value] of [['title', title], ['h1', h1s[0] ?? ''], ['description', description]]) {
    if (!value) continue;
    const list = seen[key].get(value) ?? [];
    list.push(url);
    seen[key].set(value, list);
  }
}

for (const [key, map] of Object.entries(seen)) {
  for (const [value, urls] of map) {
    if (urls.length > 1) errors.push(`duplicate ${key} on ${urls.length} pages: "${value.slice(0, 80)}" → ${urls.slice(0, 4).join(', ')}${urls.length > 4 ? ' …' : ''}`);
  }
}

console.log(`Checked ${files.length} pages.`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.slice(0, 40).forEach(w => console.log('  ⚠ ' + w));
  if (warnings.length > 40) console.log(`  … and ${warnings.length - 40} more`);
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  errors.forEach(e => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('\nNo errors.');
