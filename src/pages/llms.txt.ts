import type { APIRoute } from 'astro';
import { business, priceRanges, sealedSystemRange, SITE_URL } from '../data/business';
import { services } from '../data/services';
import { brands } from '../data/brands';
import { brandAppliances } from '../data/brandAppliances';
import { areas } from '../data/areas';
import { suburbs } from '../data/cities';
import { premiumPages } from '../data/premium';
import { articles } from '../data/articles';

// llms.txt — a plain-text map of the site for AI assistants, generated from the same data as the pages.

const u = (path: string) => `${SITE_URL}${path}`;

export const GET: APIRoute = () => {
  const b = business;
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(
    `# ${b.applianceBrand}`,
    '',
    `> Same-day appliance repair in Charlotte, NC and surrounding towns. $${b.diagnosticFee} diagnostic visit, waived when the repair is approved. ${b.warrantyDays}-day warranty on parts and labor. Call ${b.phone}.`,
    '',
    `${b.name} is a Charlotte-based home maintenance company. This file describes its appliance repair service; the homepage ${u('/')} also covers plumbing, HVAC, handyman and electrical work.`,
    '',
    '## Key facts',
    '',
    `- Phone: ${b.phone} (${b.phoneHref})`,
    `- Hours: ${b.hours.label}`,
    `- Service call: $${b.diagnosticFee} diagnostic${b.diagnosticWaivedWithRepair ? ', waived when you approve the repair' : ''}`,
    `- Warranty: ${b.warrantyDays} days on parts and labor`,
    `- Service area: Charlotte (Mecklenburg County) and ${suburbs.map(c => c.name).join(', ')}`,
    `- In business since: ${b.foundingYear}`,
  );
  if (b.rating) push(`- Rating: ${b.rating.value}★ from ${b.rating.countLabel} reviews (${b.rating.source})`);
  if (b.licenses.length) push(`- Licenses: ${b.licenses.map(l => `${l.name} #${l.number}`).join('; ')}`);
  if (b.certifications.length) push(`- Certifications: ${b.certifications.join(', ')}`);
  push('');

  push('## Pricing (typical totals, parts and labor)', '');
  for (const r of priceRanges) push(`- ${r.appliance}: ${r.range} — ${r.commonRepairs}`);
  push(`- Refrigerator sealed system (compressor, refrigerant): ${sealedSystemRange}`);
  push(`- Full guide: ${u('/charlotte-nc/appliance-repair-cost')}`, '');

  push('## Services', '', `- [Appliance repair in Charlotte (overview)](${u('/appliance-repair-charlotte')})`);
  for (const s of services) push(`- [${s.name}](${u(`/charlotte-nc/${s.slug}`)})`);
  push('');

  push('## Repair by brand and appliance', '');
  for (const p of brandAppliances) {
    const codes = p.codes.length ? ` — codes: ${p.codes.map(c => c.code).join(', ')}` : '';
    push(`- [${p.brand} ${p.appliance} Repair](${u(`/charlotte-nc/${p.slug}`)})${codes}`);
  }
  push('', '## Brands', '');
  push(brands.map(br => `[${br.name}](${u(`/charlotte-nc/${br.slug}`)})`).join(', '), '');

  push('## Premium appliance service by location', '');
  for (const p of premiumPages) push(`- [${p.brand.name} repair — ${p.location.name}](${u(p.path)})`);
  push('');

  push('## Service areas', '', `- [All service areas](${u('/charlotte-nc/areas')})`);
  push(`- Charlotte neighborhoods: ${areas.map(a => `[${a.name}](${u(`/charlotte-nc/areas/${a.slug}`)})`).join(', ')}`);
  push(`- Surrounding towns: ${suburbs.map(c => `[${c.name}](${u(c.hubPath)})`).join(', ')}`);
  push('- Service pages follow the pattern /{city-slug}/{service}, e.g. /huntersville-nc/refrigerator-repair', '');

  push(
    '## Guides',
    '',
    `- [Common appliance problems](${u('/charlotte-nc/common-appliance-problems')})`,
    `- [Appliance repair cost in Charlotte](${u('/charlotte-nc/appliance-repair-cost')})`,
    `- [When not to repair an appliance](${u('/charlotte-nc/when-not-to-repair-an-appliance')})`,
    `- [How long appliances last](${u('/charlotte-nc/how-long-do-appliances-last')})`,
    `- [Recent repairs](${u('/blog/recent-repairs')})`,
    `- [Useful info](${u('/blog/useful-info')})`,
    ...articles.map(a => `- [${a.title}](${u(`/blog/useful-info/${a.slug}`)})`),
    '',
    '## Company',
    '',
    `- [About](${u('/about')})`,
    `- [Editorial policy](${u('/editorial-policy')})`,
    `- [Warranty](${u('/charlotte-nc/appliance-repair-warranty')})`,
    '',
    '## Common questions',
    '',
    `**How much does appliance repair cost in Charlotte?** The diagnostic visit is $${b.diagnosticFee} and is waived when you approve the repair. Most repairs fall between $89 and $300 including parts and labor; sealed-system refrigerator work is ${sealedSystemRange}.`,
    '',
    `**Is same-day service available?** Yes, ${b.hours.label}. Morning calls are usually seen the same day.`,
    '',
    `**Do you repair commercial appliances?** Some commercial equipment is supported; call ${b.phone} to confirm your equipment. See ${u('/charlotte-nc/commercial-appliance-repair')}.`,
    '',
    '## Sitemap',
    '',
    `- ${u('/sitemap.xml')}`,
  );

  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
