export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  displayName: string;
  phone: string;
  phoneHref: string;
}

export const cities: City[] = [
  {
    slug: 'charlotte-nc',
    name: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    displayName: 'Charlotte, NC',
    phone: '(704) 512-0111',
    phoneHref: 'tel:+17045120111',
  },
  {
    slug: 'huntersville-nc',
    name: 'Huntersville',
    state: 'North Carolina',
    stateAbbr: 'NC',
    displayName: 'Huntersville, NC',
    phone: '(704) 512-0111',
    phoneHref: 'tel:+17045120111',
  },
  {
    slug: 'mooresville-nc',
    name: 'Mooresville',
    state: 'North Carolina',
    stateAbbr: 'NC',
    displayName: 'Mooresville, NC',
    phone: '(704) 512-0111',
    phoneHref: 'tel:+17045120111',
  },
  {
    slug: 'concord-nc',
    name: 'Concord',
    state: 'North Carolina',
    stateAbbr: 'NC',
    displayName: 'Concord, NC',
    phone: '(704) 512-0111',
    phoneHref: 'tel:+17045120111',
  },
  {
    slug: 'matthews-nc',
    name: 'Matthews',
    state: 'North Carolina',
    stateAbbr: 'NC',
    displayName: 'Matthews, NC',
    phone: '(704) 512-0111',
    phoneHref: 'tel:+17045120111',
  },
  {
    slug: 'cornelius-nc',
    name: 'Cornelius',
    state: 'North Carolina',
    stateAbbr: 'NC',
    displayName: 'Cornelius, NC',
    phone: '(704) 512-0111',
    phoneHref: 'tel:+17045120111',
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}
