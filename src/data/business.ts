// Single source of truth for business facts.
// Every page, schema block and llms.txt reads from here — change a fact once, it changes everywhere.
// Values marked TODO are either unknown or carried over from existing site copy and should be verified.

export const SITE_URL = 'https://tryhomeheroes.com';

export interface PriceRange {
  appliance: string;
  range: string;
  commonRepairs: string;
}

export const business = {
  name: 'HomeHeroes',
  applianceBrand: 'HomeHeroes Appliance Repair',
  legalName: null as string | null, // TODO: legal entity name as registered with NC Secretary of State
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  image: `${SITE_URL}/images/hero/hero-technician.webp`,

  phone: '(704) 512-0111',
  phoneE164: '+17045120111',
  phoneHref: 'tel:+17045120111',
  email: null as string | null, // TODO

  // Service-area business: street stays null unless there is a staffed public address.
  address: {
    street: null as string | null, // TODO
    city: 'Charlotte',
    state: 'NC',
    zip: null as string | null, // TODO
    country: 'US',
  },
  geo: { lat: 35.2271, lng: -80.8431 },

  hours: {
    label: '7 days a week, 8am–7pm',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '19:00',
  },

  foundingYear: 2014, // TODO verify — carried over from header "Est. 2014"

  diagnosticFee: 89,
  diagnosticWaivedWithRepair: true,
  warrantyDays: 90,

  // TODO verify against the Google Business Profile — carried over from existing site copy.
  rating: { value: 4.9, count: 200, countLabel: '200+', source: 'Google' } as
    | { value: number; count: number; countLabel: string; source: string }
    | null,
  repairsCompleted: '4,800+', // TODO verify

  owner: null as null | { name: string; title: string; bio: string; photo: string },
  licenses: [] as { name: string; number: string; issuer: string; url?: string }[], // TODO
  certifications: [] as string[], // TODO e.g. 'EPA Section 608 Universal'
  memberships: [] as { name: string; url: string }[], // TODO e.g. UASA, Marcone MSA, local chambers

  profiles: {
    google: null as string | null, // TODO Google Business Profile share link
    yelp: null as string | null,
    bbb: null as string | null,
    angi: null as string | null,
    thumbtack: 'https://www.thumbtack.com/nc/charlotte/appliance-repair/home-heroes-services/service/583449664044261385' as string | null,
    nextdoor: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
    linkedin: null as string | null,
    houzz: null as string | null,
    ncSecretaryOfState: null as string | null,
  },
};

export const sameAs = (): string[] =>
  Object.values(business.profiles).filter((u): u is string => Boolean(u));

// Typical Charlotte repair ranges — same numbers as /charlotte-nc/appliance-repair-cost.
export const priceRanges: PriceRange[] = [
  { appliance: 'Refrigerator', range: '$89–$300', commonRepairs: 'Evaporator fan, defrost system, ice maker, water valve' },
  { appliance: 'Washer', range: '$89–$250', commonRepairs: 'Drain pump, lid or door lock, belt, control board' },
  { appliance: 'Dryer', range: '$89–$200', commonRepairs: 'Heating element, igniter, belt, rollers, thermal fuse' },
  { appliance: 'Dishwasher', range: '$89–$280', commonRepairs: 'Drain or circulation pump, door latch, control board' },
  { appliance: 'Oven / Range', range: '$89–$300', commonRepairs: 'Igniter, bake element, temperature sensor, control board' },
  { appliance: 'Microwave (OTR / built-in)', range: '$80–$250', commonRepairs: 'Door switch, magnetron, diode, control board' },
];

export const sealedSystemRange = '$300–$600';

/** One-line service promise reused in quick answers and CTAs. */
export const servicePromise = `Same-day appointments ${business.hours.label}. $${business.diagnosticFee} diagnostic, waived when you approve the repair. ${business.warrantyDays}-day warranty on parts and labor.`;

/**
 * Organization + LocalBusiness nodes that every page's @graph can reference by @id.
 * aggregateRating is opt-in: it was only ever declared on the main appliance page.
 */
export function businessGraph({ withRating = false }: { withRating?: boolean } = {}) {
  const org: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: business.name,
    url: SITE_URL,
    logo: business.logo,
    foundingDate: String(business.foundingYear),
  };
  if (business.legalName) org.legalName = business.legalName;
  const links = sameAs();
  if (links.length) org.sameAs = links;
  if (business.memberships.length) {
    org.memberOf = business.memberships.map(m => ({ '@type': 'Organization', name: m.name, url: m.url }));
  }

  const local: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: business.applianceBrand,
    parentOrganization: { '@id': `${SITE_URL}/#org` },
    url: SITE_URL,
    telephone: business.phoneE164,
    image: business.image,
    logo: business.logo,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...(business.address.street ? { streetAddress: business.address.street } : {}),
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      ...(business.address.zip ? { postalCode: business.address.zip } : {}),
      addressCountry: business.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.hours.days,
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
  };
  if (links.length) local.sameAs = links;
  if (withRating && business.rating) {
    local.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(business.rating.value),
      reviewCount: String(business.rating.count),
    };
  }
  return [org, local];
}
