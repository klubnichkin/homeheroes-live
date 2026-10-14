#!/usr/bin/env node
// Measures how similar same-template pages are (5-word shingles, Jaccard) on the built site.
// Header, footer, nav, scripts and styles are stripped so only page content is compared.
// Usage: npm run build && node scripts/check-duplicates.mjs [--max 0.5]

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const maxIdx = args.indexOf('--max');
const MAX = maxIdx >= 0 ? Number(args[maxIdx + 1]) : 0.5;
const dist = path.resolve('dist');

function text(file) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<(script|style|noscript|svg|header|footer|nav)[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  html = html.replace(/<section[^>]*id="contact-form"[\s\S]*?<\/section>/gi, ' ');
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').toLowerCase().match(/[a-z0-9']+/g) ?? [];
}
function shingles(words, k = 5) {
  const set = new Set();
  for (let i = 0; i + k <= words.length; i++) set.add(words.slice(i, i + k).join(' '));
  return set;
}
function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter || 1);
}
const pageFile = url => path.join(dist, url, 'index.html');

const cities = fs.readdirSync(dist).filter(d => /-nc$/.test(d) && fs.existsSync(path.join(dist, d, 'appliance-repair', 'index.html')));
const services = fs.readdirSync(path.join(dist, 'charlotte-nc')).filter(s => /-repair$/.test(s) && fs.existsSync(path.join(dist, 'huntersville-nc', s)));

const groups = [];
// Same service across cities (including Charlotte).
for (const s of services) groups.push({ name: `service:${s}`, urls: ['charlotte-nc', ...cities].map(c => `${c}/${s}`) });
// City hubs against each other.
groups.push({ name: 'city hubs', urls: cities.map(c => `${c}/appliance-repair`) });
// Neighborhood pages.
const areaDir = path.join(dist, 'charlotte-nc', 'areas');
groups.push({ name: 'neighborhoods', urls: fs.readdirSync(areaDir).filter(a => fs.statSync(path.join(areaDir, a)).isDirectory()).map(a => `charlotte-nc/areas/${a}`) });
// Premium pages per brand.
for (const brand of ['sub-zero', 'wolf']) {
  const urls = [];
  for (const d of fs.readdirSync(dist)) {
    const dir = path.join(dist, d);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const s of fs.readdirSync(dir)) if (s.startsWith(`${brand}-repair`) && !s.includes('appliance') && fs.existsSync(pageFile(`${d}/${s}`))) urls.push(`${d}/${s}`);
  }
  groups.push({ name: `premium:${brand}`, urls });
}
// Different services within one suburb.
groups.push({ name: 'huntersville services', urls: services.map(s => `huntersville-nc/${s}`) });

let worstOverall = 0;
let failures = 0;
for (const g of groups) {
  const urls = g.urls.filter(u => fs.existsSync(pageFile(u)));
  const sets = urls.map(u => shingles(text(pageFile(u))));
  let worst = { j: 0, a: '', b: '' };
  let sum = 0, n = 0;
  for (let i = 0; i < sets.length; i++)
    for (let k = i + 1; k < sets.length; k++) {
      const j = jaccard(sets[i], sets[k]);
      sum += j; n++;
      if (j > worst.j) worst = { j, a: urls[i], b: urls[k] };
    }
  worstOverall = Math.max(worstOverall, worst.j);
  const flag = worst.j > MAX ? '✗' : '✓';
  if (worst.j > MAX) failures++;
  console.log(`${flag} ${g.name.padEnd(34)} pages=${String(urls.length).padStart(2)}  avg=${(sum / (n || 1)).toFixed(2)}  worst=${worst.j.toFixed(2)}  (${worst.a} ↔ ${worst.b})`);
}
console.log(`\nThreshold ${MAX}. Worst pair overall: ${worstOverall.toFixed(2)}. ${failures ? `${failures} group(s) above threshold.` : 'All groups within threshold.'}`);
process.exit(failures ? 1 : 0);
