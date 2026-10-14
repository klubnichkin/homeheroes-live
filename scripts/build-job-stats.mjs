#!/usr/bin/env node
// Turns a CRM job export into aggregate stats for the site (src/data/jobStats.json).
//
// Input CSV columns (header row required, order doesn't matter):
//   date, city, zip, neighborhood, appliance_type, brand, model, symptom, diagnosis, parts_replaced, total_price, technician
// Personal data (names, street addresses, phones) must NOT be in the export.
//
// Usage:
//   node scripts/build-job-stats.mjs                       # data-private/jobs.csv -> src/data/jobStats.json
//   node scripts/build-job-stats.mjs --in file.csv --out /tmp/stats.json --months 12

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
const input = path.resolve(root, args.in ?? 'data-private/jobs.csv');
const output = path.resolve(root, args.out ?? 'src/data/jobStats.json');
const months = Number(args.months ?? 12);
const MIN_JOBS = 5; // slices with fewer jobs are dropped (noise + privacy)

const norm = JSON.parse(fs.readFileSync(path.join(root, 'scripts/normalize.json'), 'utf8'));

if (!fs.existsSync(input)) {
  console.error(`No input file at ${input}. Export closed jobs from the CRM to that path first.`);
  process.exit(1);
}

// ── CSV parsing (handles quoted fields with commas and escaped quotes) ─────────
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [header, ...body] = rows.filter(r => r.some(v => v.trim() !== ''));
  const keys = header.map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));
  return body.map(r => Object.fromEntries(keys.map((k, i) => [k, (r[i] ?? '').trim()])));
}

const lower = s => (s ?? '').toLowerCase().trim();
const lookup = (dict, value) => {
  const v = lower(value);
  if (!v) return null;
  if (dict[v]) return dict[v];
  // Longest key first, whole words only: "dish washer" must not match "washer", "gaggenau" must not match "ge".
  const esc = k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const hit = Object.keys(dict)
    .sort((a, b) => b.length - a.length)
    .find(k => new RegExp(`(^|[^a-z])${esc(k)}([^a-z]|$)`).test(v));
  return hit ? dict[hit] : null;
};
const price = s => {
  const n = Number(String(s ?? '').replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : null;
};
const splitParts = s => String(s ?? '').split(/[;|]/).map(p => p.trim()).filter(Boolean);

// ── Load and normalize ─────────────────────────────────────────────────────────
const raw = parseCsv(fs.readFileSync(input, 'utf8'));
const cutoff = new Date();
cutoff.setMonth(cutoff.getMonth() - months);

const jobs = [];
let skipped = 0;
for (const r of raw) {
  const date = new Date(r.date);
  const city = lookup(norm.cities, r.city);
  const appliance = lookup(norm.appliances, r.appliance_type);
  if (Number.isNaN(date.getTime()) || !city || !appliance || date < cutoff) { skipped++; continue; }
  jobs.push({
    date,
    city,
    area: city === 'charlotte-nc' ? lookup(norm.neighborhoods, r.neighborhood) : null,
    zip: (r.zip ?? '').slice(0, 5),
    service: appliance.service,
    group: norm.groups[appliance.service],
    brand: lookup(norm.brands, r.brand) ?? (r.brand ? r.brand.trim() : null),
    symptom: r.symptom ? r.symptom.trim().toLowerCase() : null,
    parts: splitParts(r.parts_replaced).map(p => p.toLowerCase()),
    price: price(r.total_price),
  });
}

// ── Aggregation helpers ────────────────────────────────────────────────────────
const top = (values, n = 5) => {
  const counts = new Map();
  for (const v of values) if (v) counts.set(v, (counts.get(v) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
};
const quantile = (sorted, q) => {
  if (!sorted.length) return null;
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
};
const monthLabel = d => d.toLocaleString('en-US', { month: 'long', year: 'numeric' });

function summarize(list) {
  const prices = list.map(j => j.price).filter(p => p != null).sort((a, b) => a - b);
  const first = list.reduce((min, j) => (j.date < min ? j.date : min), list[0].date);
  return {
    jobs: list.length,
    since: monthLabel(first),
    topZips: top(list.map(j => j.zip)),
    topBrands: top(list.map(j => j.brand)),
    topSymptoms: top(list.map(j => j.symptom)),
    topParts: top(list.flatMap(j => j.parts)),
    median: quantile(prices, 0.5),
    p25: quantile(prices, 0.25),
    p75: quantile(prices, 0.75),
  };
}

const buckets = new Map();
const add = (key, job) => {
  if (!buckets.has(key)) buckets.set(key, []);
  buckets.get(key).push(job);
};
for (const j of jobs) {
  add(`city:${j.city}`, j);
  add(`city:${j.city}|service:${j.service}`, j);
  add(`city:${j.city}|group:${j.group}`, j);
  if (j.area) {
    add(`area:${j.area}`, j);
    add(`area:${j.area}|group:${j.group}`, j);
  }
  if (j.brand) {
    add(`brand:${lower(j.brand)}`, j);
    add(`brand:${lower(j.brand)}|service:${j.service}`, j);
    if (j.area) add(`brand:${lower(j.brand)}|area:${j.area}`, j);
    add(`brand:${lower(j.brand)}|city:${j.city}`, j);
  }
}

const slices = {};
for (const [key, list] of [...buckets.entries()].sort()) {
  if (list.length >= MIN_JOBS) slices[key] = summarize(list);
}

const dates = jobs.map(j => j.date.getTime());
const result = {
  generatedAt: new Date().toISOString().slice(0, 10),
  periodStart: dates.length ? new Date(Math.min(...dates)).toISOString().slice(0, 10) : null,
  periodEnd: dates.length ? new Date(Math.max(...dates)).toISOString().slice(0, 10) : null,
  totalJobs: jobs.length,
  slices,
};
fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
console.log(`Read ${raw.length} rows, used ${jobs.length}, skipped ${skipped}. Wrote ${Object.keys(slices).length} slices (≥${MIN_JOBS} jobs) to ${path.relative(root, output)}.`);
