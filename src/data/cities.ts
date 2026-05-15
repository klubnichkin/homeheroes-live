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
];

export function getCity(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}
