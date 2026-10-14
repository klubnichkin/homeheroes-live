import { SITE_URL } from '../data/business';

export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

interface CityLike {
  name: string;
  displayName: string;
}

/**
 * Fill {city} / {cityState} placeholders in data copy.
 * Data strings are written for Charlotte; suburbs get their own name substituted.
 */
export function fill(template: string, city: CityLike): string {
  return template.replaceAll('{cityState}', city.displayName).replaceAll('{city}', city.name);
}

/** Stable 32-bit hash so variant choices never change between builds. */
export function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministically pick `n` items from `items` for a given seed, preserving original order. */
export function pickStable<T>(items: T[], n: number, seed: string): T[] {
  if (items.length <= n) return items;
  const scored = items.map((item, i) => ({ item, i, score: hash(`${seed}:${i}`) }));
  return scored
    .sort((a, b) => a.score - b.score)
    .slice(0, n)
    .sort((a, b) => a.i - b.i)
    .map(s => s.item);
}

/** Deterministically pick one variant. */
export const pickOne = <T>(items: T[], seed: string): T => items[hash(seed) % items.length];

/** "Refrigerator Repair" -> "refrigerator" */
export const applianceNoun = (serviceName: string) => serviceName.replace(/ Repair$/, '').toLowerCase();

/** Join a list as "a, b and c". */
export function humanList(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
