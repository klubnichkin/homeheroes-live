import { areas } from './areas';
import { cities, suburbs } from './cities';

export interface LocationLink {
  name: string;
  href: string;
  kind: 'neighborhood' | 'city';
}

export const neighborhoodHref = (areaSlug: string) => `/charlotte-nc/areas/${areaSlug}`;

export const neighborhoodLinks: LocationLink[] = areas.map(a => ({
  name: a.name,
  href: neighborhoodHref(a.slug),
  kind: 'neighborhood',
}));

export const cityLinks: LocationLink[] = suburbs.map(c => ({ name: c.name, href: c.hubPath, kind: 'city' }));

/** Charlotte neighborhoods first, then surrounding towns — used by footers and coverage blocks. */
export const allLocationLinks: LocationLink[] = [...neighborhoodLinks, ...cityLinks];

export const charlotte = cities.find(c => c.slug === 'charlotte-nc')!;
