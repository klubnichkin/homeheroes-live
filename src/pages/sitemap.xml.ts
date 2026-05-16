import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { brands } from '../data/brands';
import { cities } from '../data/cities';
import { symptoms } from '../data/symptoms';

export const GET: APIRoute = () => {
  const base = 'https://tryhomeheroes.com';
  const today = '2026-05-15';

  const entries: { loc: string; priority: string; changefreq: string }[] = [
    { loc: `${base}/`, priority: '1.0', changefreq: 'weekly' },
  ];

  for (const city of cities) {
    entries.push({ loc: `${base}/${city.slug}/appliance-repair`, priority: '0.9', changefreq: 'monthly' });
    entries.push({ loc: `${base}/${city.slug}/services`, priority: '0.8', changefreq: 'monthly' });
    entries.push({ loc: `${base}/${city.slug}/brands`, priority: '0.8', changefreq: 'monthly' });
    entries.push({ loc: `${base}/${city.slug}/common-appliance-problems`, priority: '0.85', changefreq: 'monthly' });
    for (const s of services) {
      entries.push({ loc: `${base}/${city.slug}/${s.slug}`, priority: '0.8', changefreq: 'monthly' });
    }
    for (const b of brands) {
      entries.push({ loc: `${base}/${city.slug}/${b.slug}`, priority: '0.7', changefreq: 'monthly' });
    }
    for (const s of symptoms) {
      entries.push({ loc: `${base}/${city.slug}/${s.slug}`, priority: '0.8', changefreq: 'monthly' });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(
      e =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
