import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { brands } from '../data/brands';
import { cities } from '../data/cities';
import { symptoms } from '../data/symptoms';
import { areas } from '../data/areas';
import { repairCases } from '../data/repairCases';

export const GET: APIRoute = () => {
  const base = 'https://tryhomeheroes.com';

  const entries: { loc: string; lastmod: string; priority: string; changefreq: string }[] = [
    { loc: `${base}/`, lastmod: '2026-05-17', priority: '1.0', changefreq: 'weekly' },
    { loc: `${base}/blog`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'weekly' },
    { loc: `${base}/privacy`, lastmod: '2026-05-17', priority: '0.3', changefreq: 'yearly' },
    { loc: `${base}/terms`, lastmod: '2026-05-17', priority: '0.3', changefreq: 'yearly' },
  ];

  for (const city of cities) {
    entries.push({ loc: `${base}/${city.slug}/appliance-repair`, lastmod: '2026-05-17', priority: '0.9', changefreq: 'monthly' });
    entries.push({ loc: `${base}/${city.slug}/services`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'monthly' });
    entries.push({ loc: `${base}/${city.slug}/brands`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'monthly' });
    entries.push({ loc: `${base}/${city.slug}/common-appliance-problems`, lastmod: '2026-05-17', priority: '0.85', changefreq: 'monthly' });
    for (const s of services) {
      entries.push({ loc: `${base}/${city.slug}/${s.slug}`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'monthly' });
    }
    for (const b of brands) {
      entries.push({ loc: `${base}/${city.slug}/${b.slug}`, lastmod: '2026-05-17', priority: '0.7', changefreq: 'monthly' });
    }
    for (const s of symptoms) {
      entries.push({ loc: `${base}/${city.slug}/${s.slug}`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'monthly' });
    }
  }

  // Area hub + individual area pages (charlotte-nc only for now)
  entries.push({ loc: `${base}/charlotte-nc/areas`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'monthly' });
  for (const area of areas) {
    entries.push({ loc: `${base}/charlotte-nc/areas/${area.slug}`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'monthly' });
  }

  // Blog — repair cases
  entries.push({ loc: `${base}/blog/recent-repairs`, lastmod: '2026-05-17', priority: '0.8', changefreq: 'weekly' });
  for (const rc of repairCases) {
    entries.push({ loc: `${base}/blog/recent-repairs/${rc.slug}`, lastmod: rc.dateISO, priority: '0.75', changefreq: 'monthly' });
  }

  // Blog — useful info
  entries.push({ loc: `${base}/blog/useful-info`, lastmod: '2026-05-17', priority: '0.75', changefreq: 'weekly' });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(
      e =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
