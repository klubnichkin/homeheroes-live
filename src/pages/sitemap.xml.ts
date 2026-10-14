import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { brands } from '../data/brands';
import { cities } from '../data/cities';
import { symptoms } from '../data/symptoms';
import { areas } from '../data/areas';
import { repairCases } from '../data/repairCases';
import { brandAppliances } from '../data/brandAppliances';
import { premiumPages } from '../data/premium';
import { SITE_URL } from '../data/business';
import { articles } from '../data/articles';

// Only indexable, canonical URLs belong here — no redirects, no noindex pages.
// lastmod comes from the content's own updatedAt/date wherever the data has one.

const CONTENT_UPDATED = '2026-10-14'; // pages whose template or copy changed in the October 2026 rebuild
const LEGACY = '2026-05-17';          // hand-written pages untouched since May 2026

const slugOf = (file: string) => file.split('/').pop()!.replace('.astro', '');
const charlotteStatic = Object.keys(import.meta.glob('./charlotte-nc/*.astro')).map(slugOf);
const usefulInfo = Object.keys(import.meta.glob('./blog/useful-info/*.astro')).map(slugOf).filter(s => s !== 'index');
const ownPages = Object.keys(import.meta.glob('./*.astro')).map(slugOf);

export const GET: APIRoute = () => {
  const entries = new Map<string, string>();
  const add = (path: string, lastmod: string) => entries.set(`${SITE_URL}${path}`, lastmod);

  add('/', LEGACY);
  add('/appliance-repair-charlotte', CONTENT_UPDATED);
  add('/plumbing-charlotte', LEGACY);
  add('/services/hvac', '2026-06-01');
  add('/services/electrical', '2026-06-03');
  for (const p of ['about', 'editorial-policy', 'privacy', 'terms']) if (ownPages.includes(p)) add(`/${p}`, p === 'privacy' || p === 'terms' ? LEGACY : CONTENT_UPDATED);

  // Charlotte: hand-written pages (handyman, cost guides, symptom guides…)
  for (const slug of charlotteStatic) add(`/charlotte-nc/${slug}`, LEGACY);

  // Service pages for every city, plus suburb hubs
  for (const city of cities) {
    if (city.slug !== 'charlotte-nc') add(city.hubPath, city.updatedAt);
    for (const s of services) add(`/${city.slug}/${s.slug}`, city.updatedAt);
  }

  // Charlotte-only data pages
  for (const b of brands) add(`/charlotte-nc/${b.slug}`, CONTENT_UPDATED);
  for (const s of symptoms) if (!charlotteStatic.includes(s.slug)) add(`/charlotte-nc/${s.slug}`, CONTENT_UPDATED);
  for (const b of brandAppliances) add(`/charlotte-nc/${b.slug}`, b.updatedAt);
  add('/charlotte-nc/brands', CONTENT_UPDATED);
  add('/charlotte-nc/common-appliance-problems', CONTENT_UPDATED);
  for (const p of premiumPages) add(p.path, CONTENT_UPDATED);

  // Neighborhoods
  add('/charlotte-nc/areas', CONTENT_UPDATED);
  for (const a of areas) add(`/charlotte-nc/areas/${a.slug}`, a.updatedAt);

  // Blog
  add('/blog', CONTENT_UPDATED);
  add('/blog/recent-repairs', CONTENT_UPDATED);
  for (const rc of repairCases) add(`/blog/recent-repairs/${rc.slug}`, rc.dateISO);
  add('/blog/useful-info', CONTENT_UPDATED);
  for (const slug of usefulInfo) if (slug !== '[slug]') add(`/blog/useful-info/${slug}`, LEGACY);
  for (const a of articles) add(`/blog/useful-info/${a.slug}`, a.updatedAt);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...entries].map(([loc, lastmod]) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
