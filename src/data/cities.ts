import { business } from './business';

// Location profiles for every city we publish pages for.
// Each profile carries copy that only fits that city, so /{city}/{service} pages are genuinely different
// from each other rather than the same template with the name swapped.

export type ApplianceGroup = 'cold' | 'laundry' | 'cooking' | 'dish';

export interface LocationFAQ {
  q: string;
  a: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  displayName: string;
  county: string;
  phone: string;
  phoneHref: string;
  /** The city's top appliance-repair page. Charlotte's is the main /appliance-repair-charlotte page. */
  hubPath: string;
  shortDesc: string;
  areaType: string;
  zips: string[];
  /** Communities and corridors inside the city that residents use to describe where they live. */
  neighborhoods: string[];
  landmarks: string[];
  housing: string;
  utilities: string;
  intro: string[];
  localContext: string[];
  customerTypes: string[];
  applianceNotes: Record<ApplianceGroup, string>;
  faq: LocationFAQ[];
  nearby: string[];
  updatedAt: string;
}

const base = {
  state: 'North Carolina',
  stateAbbr: 'NC',
  phone: business.phone,
  phoneHref: business.phoneHref,
};

export const cities: City[] = [
  {
    ...base,
    slug: 'charlotte-nc',
    name: 'Charlotte',
    displayName: 'Charlotte, NC',
    county: 'Mecklenburg County',
    hubPath: '/appliance-repair-charlotte',
    shortDesc: 'Same-day appliance repair across every Charlotte neighborhood, from Uptown towers to Ballantyne cul-de-sacs.',
    areaType: 'City',
    zips: ['28202', '28203', '28204', '28205', '28206', '28207', '28208', '28209', '28210', '28211', '28212', '28213', '28215', '28216', '28217', '28226', '28227', '28262', '28269', '28270', '28273', '28277', '28278'],
    neighborhoods: ['Uptown', 'South End', 'Dilworth', 'Myers Park', 'Eastover', 'SouthPark', 'Elizabeth', 'Plaza Midwood', 'NoDa', 'Cotswold', 'Ballantyne', 'University City', 'Highland Creek', 'Steele Creek'],
    landmarks: ['Uptown and the LYNX Blue Line', 'SouthPark Mall', 'UNC Charlotte', 'Ballantyne Corporate Park', 'Freedom Park'],
    housing:
      'Charlotte packs every kind of housing into one service area: 1920s bungalows in Dilworth and Plaza Midwood, mid-century ranches in Cotswold, 1990s and 2000s subdivisions in Ballantyne and Highland Creek, and Uptown and South End towers with stacked laundry and compact kitchens.',
    utilities:
      'Duke Energy supplies electricity across the city and Piedmont Natural Gas serves gas ranges and dryers. Summer thunderstorms and the occasional winter ice storm cause outages that show up as failed control boards and confused electronics a day or two later.',
    intro: [
      'Charlotte is our home base. Technicians start the day inside the city, so most Charlotte calls are reached the same day, often within a few hours of the first phone call.',
    ],
    localContext: [],
    customerTypes: [],
    applianceNotes: {
      cold:
        'Charlotte summers are long and humid, and that is when refrigerators fail. A condenser coated in spring pine pollen and pet hair runs hotter all July, and refrigerators parked in garages in Ballantyne and Steele Creek fight 95-degree heat. Most warm-refrigerator calls in the city turn out to be airflow or defrost problems rather than a dead compressor.',
      laundry:
        'Laundry calls change with the building. Uptown and South End units usually have stacked or compact washer-dryer pairs in a closet with a long, shared vent run; older Dilworth and Plaza Midwood homes have laundry in basements or converted porches; suburban Charlotte homes have full-size pairs in a mudroom. Vent length and lint, not the dryer itself, cause many “not drying” calls.',
      cooking:
        'Gas cooking is common in older Charlotte neighborhoods and in newer custom homes, while apartments and townhomes lean electric and induction. Igniters, bake elements and touch controls make up most range and oven calls, and pro-style ranges in Myers Park and Eastover kitchens need model-specific parts.',
      dish:
        'Dishwashers in Charlotte apartments see heavy daily use, and many sit next to a garbage disposal that shares the drain line. Drain clogs, failed pumps and door latches are the usual faults, and newer Bosch and KitchenAid units in remodeled kitchens have their own error codes.',
    },
    faq: [],
    nearby: ['huntersville-nc', 'matthews-nc', 'mint-hill-nc', 'pineville-nc', 'concord-nc', 'belmont-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'huntersville-nc',
    name: 'Huntersville',
    displayName: 'Huntersville, NC',
    county: 'Mecklenburg County',
    hubPath: '/huntersville-nc/appliance-repair',
    shortDesc: 'Fast-growing north Mecklenburg town with large family communities and Lake Norman access.',
    areaType: 'North Mecklenburg suburb',
    zips: ['28078'],
    neighborhoods: ['Birkdale', 'Vermillion', 'Skybrook', 'Northstone', 'Monteith Park', 'Gilead Road corridor'],
    landmarks: ['Birkdale Village', 'Latta Nature Preserve', 'Rural Hill', 'I-77 at exits 23 and 25'],
    housing:
      'Most Huntersville homes were built from the late 1990s on, so many kitchens are on their second set of appliances, and the newest subdivisions arrive with builder packages from Whirlpool, GE, Samsung and LG.',
    utilities:
      'Huntersville gets its water from Charlotte Water and its power from Duke Energy, with natural gas widely available in newer subdivisions.',
    intro: [
      'Huntersville is one of the fastest-growing communities in the Charlotte metro — a sprawling north Mecklenburg suburb that has become a destination for families seeking more space, newer homes, and proximity to Lake Norman without sacrificing access to the city. The area\'s growth has brought thousands of newer homes filled with mid-range to premium appliances, and as those appliances age, the demand for reliable repair service continues to increase.',
      'We cover Huntersville from the Birkdale Village area east to Skybrook and north toward the Cornelius line. Because I-77 runs straight through town, a technician finishing a call in north Charlotte can usually reach a Huntersville home the same afternoon.',
    ],
    localContext: [
      'Huntersville is anchored by Birkdale Village, a walkable town center with retail, dining, and entertainment.',
      'Large planned communities including Vermillion, Skybrook, and Birkdale are home to families with newer-construction appliances.',
      'Lake Norman access drives waterfront and near-lake residential development, including larger homes with premium kitchen setups.',
      'Huntersville\'s proximity to Cornelius and Davidson extends our north Charlotte service coverage across the entire Lake Norman corridor.',
      'We serve both established subdivisions and the area\'s rapidly growing new-construction communities.',
    ],
    customerTypes: [
      'Homeowners in Birkdale, Vermillion, Skybrook, and other planned communities',
      'Families in newer construction homes with standard and premium appliances',
      'Waterfront and near-lake homeowners with high-end kitchen equipment',
      'Property managers overseeing rental homes in Huntersville\'s growing inventory',
      'Restaurants and businesses in and around Birkdale Village',
    ],
    applianceNotes: {
      cold:
        'Huntersville refrigerators are mostly French-door and side-by-side models from the last fifteen years, which means ice makers, dispensers and electronic controls. Many families also run a second refrigerator or freezer in the garage, and those units struggle in July heat and can stop cooling the freezer on January nights when the garage drops near freezing.',
      laundry:
        'Large families in Vermillion and Skybrook run their washers daily, so front-load door seals, drain pumps and drum bearings wear faster here than in a two-person household. Second-floor laundry rooms are common in newer Huntersville homes, which makes a slow leak or a failed water valve urgent rather than an inconvenience.',
      cooking:
        'Newer Huntersville kitchens often have gas cooktops with a separate wall oven, or slide-in ranges with glass touch controls. Touch panel failures, weak oven igniters and burners that keep clicking after a spill are typical calls.',
      dish:
        'Builder-grade dishwashers in homes from the 2000s are reaching the age where pumps and control boards fail, and the decision between repair and replacement becomes real. We give a straight answer on whether a repair makes sense before any work starts.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Huntersville?', a: 'Yes. We dispatch same-day to Huntersville and the surrounding north Charlotte area. Call before noon for best availability.' },
      { q: 'Do you repair refrigerators in Huntersville?', a: 'Yes. Refrigerator repair is our most common call in Huntersville. We carry parts for all major brands and fix most issues on the first visit.' },
      { q: 'Do you service newer homes and appliances in Huntersville?', a: 'Absolutely. Huntersville\'s large supply of newer construction homes means we often work with appliances that are a few years old — straightforward, parts-in-stock repairs in most cases.' },
      { q: 'Why does my garage refrigerator stop working in winter?', a: 'Many refrigerators are designed for indoor temperatures. In a cold Huntersville garage the thermostat in the fresh-food section rarely calls for cooling, so the freezer warms up. Moving the unit, or using a model rated for garages, usually solves it; we can confirm nothing is actually broken.' },
      { q: 'Can you work with property managers in Huntersville?', a: 'Yes. We work with property managers and landlords across Huntersville, providing fast service and detailed repair invoices.' },
    ],
    nearby: ['cornelius-nc', 'davidson-nc', 'concord-nc', 'charlotte-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'cornelius-nc',
    name: 'Cornelius',
    displayName: 'Cornelius, NC',
    county: 'Mecklenburg County',
    hubPath: '/cornelius-nc/appliance-repair',
    shortDesc: 'Lake Norman town with lakefront homes, second homes and a busy restaurant corridor.',
    areaType: 'Lake Norman suburb',
    zips: ['28031'],
    neighborhoods: ['The Peninsula', 'Antiquity', 'Bailey\'s Glen', 'Smithville', 'Catawba Avenue corridor', 'Jetton Road area'],
    landmarks: ['Lake Norman', 'Jetton Park', 'Ramsey Creek Park', 'Catawba Avenue', 'I-77 exit 28'],
    housing:
      'Cornelius mixes lakefront custom homes, golf-community houses on The Peninsula, townhomes near Catawba Avenue and active-adult communities, so we see both builder appliances and full premium kitchens on the same day.',
    utilities:
      'Cornelius is served by Charlotte Water and Duke Energy. Lakefront homes are exposed to summer thunderstorms rolling across the water, and power surges are a common root cause of failed control boards.',
    intro: [
      'Cornelius is one of Lake Norman\'s most active and upscale communities — a growing town that blends waterfront living with a vibrant bar-and-restaurant district, growing residential neighborhoods, and easy highway access to Charlotte. Lake Norman homeowners invest heavily in premium kitchen appliances, and the local restaurant scene along Catawba Avenue creates meaningful commercial repair demand alongside residential service.',
      'Many Cornelius houses are second homes or rentals that sit empty for weeks. Appliances that sit unused behave differently: ice maker water lines dry out, door gaskets take a set, and a refrigerator that failed on a Tuesday is not discovered until the weekend. We schedule around owners who are out of town and send findings with photos.',
    ],
    localContext: [
      'Cornelius is part of the Lake Norman shoreline community alongside Huntersville and Davidson, all of which we serve.',
      'Catawba Avenue hosts one of the lake area\'s most active dining and nightlife corridors, including waterfront restaurants.',
      'Lakefront and near-lake residential communities often feature premium kitchen equipment including built-in refrigerators, wine coolers, and high-end ranges.',
      'The area has seen significant new residential development, bringing newer appliances that require trained technicians familiar with current models.',
      'We serve the full spectrum — modest residential homes to lakefront estates with luxury appliance packages.',
    ],
    customerTypes: [
      'Homeowners in lakefront and near-lake residential communities',
      'Owners of luxury estates with premium appliance brands',
      'Restaurants and bars along Catawba Avenue and the lake corridor',
      'Property managers overseeing Cornelius rental homes and communities',
      'Short-term rental operators running lake vacation properties',
    ],
    applianceNotes: {
      cold:
        'Lake houses in Cornelius often have more refrigeration than kitchens elsewhere: a built-in refrigerator, an undercounter wine cooler, an ice maker at the bar and a beverage center on the porch. Outdoor and covered-patio units work hard in summer humidity, and condensers near the water pick up debris quickly.',
      laundry:
        'Rental and second homes on the lake turn over linens constantly, so washers and dryers run far more cycles than the owner realizes. Dryer vents in larger homes often run long distances to an outside wall, and a restricted vent is the most common reason a dryer takes two cycles to dry towels.',
      cooking:
        'Pro-style gas ranges from Wolf, Thermador and Viking are common in Cornelius lake homes. Burners that click without lighting after a boil-over, oven igniters that weaken with age and convection fans are the typical repairs, and we confirm part availability before the visit.',
      dish:
        'Dishwashers in rental properties take a beating from guests who skip scraping plates, which means clogged filters and drain pumps. Panel-ready dishwashers in custom kitchens need careful removal so the cabinet panel is not damaged.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Cornelius?', a: 'Yes. We serve Cornelius the same day as part of our Lake Norman service zone. Call before noon for same-day scheduling.' },
      { q: 'Do you repair high-end appliances in lakefront Cornelius homes?', a: 'Yes. We\'re experienced with luxury brands including Sub-Zero, Wolf, Viking, Thermador, and Miele — common in Cornelius lakefront homes.' },
      { q: 'Can you repair appliances while I am away from my lake house?', a: 'Yes. Many Cornelius owners are out of town. Arrange access with a lockbox, neighbor or property manager, and we send the diagnosis and estimate for approval before any repair.' },
      { q: 'Can you service restaurant and bar kitchen equipment in Cornelius?', a: 'We assist Cornelius restaurants and bars with commercial-grade refrigerators, ice makers, and dishwashers. Call to confirm your specific equipment.' },
      { q: 'Do you work with property managers in Cornelius?', a: 'Yes. We work with property managers across Cornelius and the Lake Norman area, including short-term rental operators.' },
    ],
    nearby: ['davidson-nc', 'huntersville-nc', 'mooresville-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'davidson-nc',
    name: 'Davidson',
    displayName: 'Davidson, NC',
    county: 'Mecklenburg County',
    hubPath: '/davidson-nc/appliance-repair',
    shortDesc: 'Historic college town on Lake Norman with a walkable downtown and older homes.',
    areaType: 'College town / Lake Norman suburb',
    zips: ['28036'],
    neighborhoods: ['Downtown Davidson', 'River Run', 'McConnell', 'Summers Walk', 'Griffith Street corridor'],
    landmarks: ['Davidson College', 'South Main Street', 'Lake Davidson', 'Fisher Farm Park'],
    housing:
      'Davidson has historic homes near the college with older wiring and tight kitchens, golf-community homes in River Run, and newer neighborhoods on the town\'s east side.',
    utilities:
      'Davidson is supplied by Charlotte Water and Duke Energy. Older houses near downtown sometimes have laundry and kitchen circuits that were not designed for modern appliances, which we check when a breaker keeps tripping.',
    intro: [
      'Davidson is a genuinely charming small town built around Davidson College — a nationally recognized liberal arts institution that gives the community an intellectual character and a walkable historic downtown that distinguishes it from other Lake Norman suburbs. Residents here tend to be highly educated, community-minded, and invested in their homes.',
      'Davidson calls range from a forty-year-old refrigerator in a house near Main Street to a panel-ready dishwasher in a renovated kitchen. In older homes we check the outlet, circuit and water supply as part of the diagnosis, because the appliance is not always the part that failed.',
    ],
    localContext: [
      'Davidson College anchors the town\'s academic and cultural identity, and the surrounding residential community reflects that character.',
      'The historic downtown along South Main Street features local restaurants, coffee shops, and boutique retail.',
      'Davidson residents include college faculty and staff, longtime community families, and newer residents attracted to the town\'s quality of life.',
      'Lake Norman access brings waterfront properties and upscale residential communities into the Davidson service area.',
      'Davidson is adjacent to Cornelius and Huntersville, making it part of a continuous Lake Norman service corridor for HomeHeroes.',
    ],
    customerTypes: [
      'Davidson College faculty and staff in residential properties',
      'Long-term community families in established Davidson neighborhoods',
      'Lakefront homeowners with premium appliances',
      'Residents of newer Davidson-area developments',
      'Local restaurants and cafes in downtown Davidson',
    ],
    applianceNotes: {
      cold:
        'In Davidson we still see refrigerators that are twenty or more years old in well-kept historic homes. Some are worth fixing and some are not; an old unit with a failing compressor rarely is, while a worn door gasket or a defrost part usually is. We give the honest math before anything is ordered.',
      laundry:
        'Laundry in older Davidson homes is often tucked into a hall closet or a mudroom addition, with short clearances behind the machines. Vibration on wooden floors, kinked dryer vents and washers that walk across the floor are common complaints.',
      cooking:
        'Renovated kitchens near downtown often pair a vintage-look range with modern electronics, while River Run homes tend to have gas cooktops and wall ovens. Oven temperature that drifts, weak igniters and cooktop burners that will not light are the usual calls.',
      dish:
        'Dishwashers installed during kitchen remodels are frequently panel-ready Bosch or KitchenAid units. Their quiet operation hides slow leaks, so we check the base pan and leak sensor on every service call.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Davidson?', a: 'Yes. We dispatch same-day to Davidson as part of our Lake Norman service zone. Call in the morning for best same-day availability.' },
      { q: 'Do you service older appliances in Davidson\'s historic homes?', a: 'Yes. We\'re experienced diagnosing and repairing older appliances. We give honest repair-versus-replace guidance based on the actual condition of the unit.' },
      { q: 'Can you work with Davidson College-area landlords and property managers?', a: 'Absolutely. We work with landlords and property managers throughout Davidson, including those managing rental properties near the college.' },
      { q: 'Do you repair refrigerators in Davidson?', a: 'Yes. Refrigerator repair is our most common call in Davidson. We carry parts for all major brands and complete most repairs on the first visit.' },
      { q: 'What appliance brands do you repair in Davidson?', a: 'All major brands: Samsung, LG, Whirlpool, GE, Maytag, Frigidaire, KitchenAid, Bosch, Sub-Zero, and more.' },
    ],
    nearby: ['cornelius-nc', 'huntersville-nc', 'mooresville-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'mooresville-nc',
    name: 'Mooresville',
    displayName: 'Mooresville, NC',
    county: 'Iredell County',
    hubPath: '/mooresville-nc/appliance-repair',
    shortDesc: '"Race City USA" on the western shore of Lake Norman, with lakefront estates and new subdivisions.',
    areaType: 'Lake Norman suburb',
    zips: ['28115', '28117'],
    neighborhoods: ['The Point', 'Morrison Plantation', 'Mallard Head', 'Curtis Pond', 'Brawley School Road peninsula', 'Downtown Mooresville'],
    landmarks: ['Lake Norman', 'Lowe\'s corporate headquarters', 'Downtown Main Street', 'I-77 exits 33 and 36'],
    housing:
      'Mooresville ranges from lakefront estates on the Brawley School Road peninsula and The Point to large new subdivisions off NC-150 and older homes near downtown Main Street.',
    utilities:
      'Mooresville runs its own water system drawn from Lake Norman, and Duke Energy supplies most homes with power. Peninsula homes can be a long drive from the main roads, so we plan routes before confirming arrival windows.',
    intro: [
      'Mooresville — widely known as "Race City USA" for its concentration of NASCAR teams and motorsports industry — is one of the Charlotte metro\'s most rapidly expanding communities. Stretching along the western shore of Lake Norman, Mooresville\'s residential landscape includes everything from lakefront estates and upscale new construction to more modest established neighborhoods.',
      'We route Mooresville calls up I-77 from north Charlotte and the Lake Norman towns. Lakefront homes on the peninsulas take longer to reach, so we confirm the address and access details when you book and give a realistic arrival window.',
    ],
    localContext: [
      'Mooresville is home to numerous NASCAR racing teams and motorsports-related businesses, creating a significant professional and commercial community.',
      'Lake Norman waterfront communities in Mooresville include upscale estates with premium appliance packages.',
      'The area has seen consistent residential growth with large new-construction subdivisions and planned communities.',
      'Mooresville\'s position on I-77 north of Charlotte makes it a natural extension of the Lake Norman service corridor.',
      'We serve the full range of Mooresville residential types — from starter homes to lakefront luxury properties.',
    ],
    customerTypes: [
      'Homeowners in lakefront and near-lake Mooresville communities',
      'Families in new-construction subdivisions across Iredell County',
      'Racing industry professionals and employees in the Mooresville area',
      'Property managers overseeing rental homes in and around Mooresville',
      'Restaurants and commercial kitchens in Mooresville\'s growing business corridors',
    ],
    applianceNotes: {
      cold:
        'Mooresville kitchens on the lake often have built-in or column refrigerators plus separate wine and beverage refrigeration. Newer subdivisions lean toward Samsung and LG French-door models, where ice maker freeze-ups and fan errors are the most common calls.',
      laundry:
        'New Mooresville homes typically put the laundry room upstairs or off the garage. Front-load washers in these homes need their drain pump filters cleaned more often than owners expect, and an upstairs leak is the reason many people call the same day.',
      cooking:
        'Lake homes here favor gas, often with a pro-style range or a rangetop and double wall ovens. Newer construction more often has slide-in electric or induction ranges with touch controls that can fail after a power surge.',
      dish:
        'In larger Mooresville homes it is common to find two dishwashers, one in the kitchen and one at a bar or in a butler\'s pantry. The second unit sits unused for long stretches, and seals and inlet valves suffer for it.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Mooresville?', a: 'Yes. We dispatch same-day to Mooresville. Its location along I-77 makes scheduling efficient from our Charlotte base.' },
      { q: 'Do you repair high-end appliances in Mooresville lakefront homes?', a: 'Yes. We service luxury brands including Sub-Zero, Wolf, Thermador, Viking, and Miele common in Mooresville\'s lakefront and new-construction communities.' },
      { q: 'Do you come out to homes on the Brawley School Road peninsula?', a: 'Yes. Peninsula addresses take a little longer to reach, so we confirm access details when you book and give you a realistic arrival window.' },
      { q: 'Can you service Mooresville businesses and commercial kitchens?', a: 'We can assist Mooresville businesses with commercial-grade refrigerators, ice makers, and dishwashers. Call to confirm your specific equipment.' },
      { q: 'Do you work with property managers in Mooresville?', a: 'Yes. We work with property managers and landlords throughout Mooresville and Iredell County.' },
    ],
    nearby: ['cornelius-nc', 'davidson-nc', 'huntersville-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'matthews-nc',
    name: 'Matthews',
    displayName: 'Matthews, NC',
    county: 'Mecklenburg County',
    hubPath: '/matthews-nc/appliance-repair',
    shortDesc: 'Established southeast suburb with a historic downtown and a mix of older and newer homes.',
    areaType: 'Southeast Charlotte suburb',
    zips: ['28104', '28105'],
    neighborhoods: ['Downtown Matthews', 'Trade Street area', 'Sardis Road corridor', 'Weddington Road corridor', 'Sam Newell Road area'],
    landmarks: ['Stumptown Park', 'Four Mile Creek Greenway', 'Sycamore Commons', 'Independence Boulevard (US-74)'],
    housing:
      'Matthews has 1970s through 1990s subdivisions close to town, newer planned communities toward Union County and a small historic core around Trade Street.',
    utilities:
      'Matthews homes on the Mecklenburg side are on Charlotte Water and Duke Energy. Older subdivisions frequently still have original shut-off valves behind the refrigerator and dishwasher that have seized, which matters during any water-related repair.',
    intro: [
      'Matthews is one of the Charlotte metro\'s most established and family-friendly communities — a southeast suburb with a genuine small-town feel, a walkable historic downtown, and a large residential base that spans both longtime homeowners and newer families. The area\'s mix of older homes and newer developments means appliance needs vary widely: some properties have appliances approaching the end of their lifespan, while newer subdivisions are filled with current-generation equipment under warranty or just past it.',
      'Our technicians reach Matthews from south and east Charlotte along Independence Boulevard and Sardis Road, which makes same-day service routine for most of the town.',
    ],
    localContext: [
      'Matthews has its own incorporated downtown district along Trade Street, with local restaurants, shops, and community events.',
      'The town includes a mix of older established neighborhoods and newer planned communities on its expanding eastern edge.',
      'Matthews is adjacent to Mint Hill and Stallings, extending our southeast Charlotte coverage across a broad residential corridor.',
      'The area attracts long-term residents who value community stability alongside newer families moving out from Charlotte proper.',
      'We serve Matthews across all neighborhood types — from older single-family homes near downtown to newer subdivisions along the town\'s growth edges.',
    ],
    customerTypes: [
      'Homeowners in established neighborhoods near downtown Matthews',
      'Families in newer subdivisions and planned communities',
      'Renters and tenants in Matthews single-family and multi-family properties',
      'Property managers overseeing rental homes across the Matthews area',
      'Local restaurants and businesses in the historic downtown district',
    ],
    applianceNotes: {
      cold:
        'Older Matthews homes were built around 30-inch top-freezer or side-by-side refrigerators, and many owners keep a second unit in the garage. Defrost problems, noisy fans and leaking water lines are the most common refrigerator calls, along with ice makers on newer French-door models.',
      laundry:
        'Washer and dryer repair is among our most common calls in Matthews. Many homes have laundry rooms off the kitchen or garage with older rigid or foil vent ducts, and we often find a vent problem behind a dryer that “stopped heating.”',
      cooking:
        'Electric smooth-top ranges are standard in Matthews subdivisions from the 1980s and 1990s, while newer homes add gas. Surface element switches, bake elements and oven sensors are routine same-day repairs.',
      dish:
        'Dishwashers that share a drain with a garbage disposal are the norm in Matthews kitchens, and a clogged air gap or disposal knockout is behind many “not draining” calls. Pumps, latches and control boards follow.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Matthews?', a: 'Yes. We dispatch same-day to Matthews from our Charlotte base. Morning calls typically get same-afternoon service.' },
      { q: 'Do you repair washers and dryers in Matthews?', a: 'Yes. Washer and dryer repair is among our most common calls in Matthews. We fix most issues on the first visit and carry common parts on the truck.' },
      { q: 'Is it worth repairing an older appliance in a Matthews home?', a: 'Often, yes. Most failures in 10- to 15-year-old appliances are fans, pumps, elements or switches that cost far less than a new unit. We quote before starting and tell you when replacement makes more sense.' },
      { q: 'Can you work with property managers in Matthews?', a: 'Absolutely. We work with landlords and property managers across Matthews, providing fast turnaround and proper documentation for maintenance records.' },
      { q: 'Do you service apartments and condos in Matthews?', a: 'Yes. We service all residential property types in Matthews — single-family homes, townhomes, condos, and apartments.' },
    ],
    nearby: ['mint-hill-nc', 'charlotte-nc', 'pineville-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'mint-hill-nc',
    name: 'Mint Hill',
    displayName: 'Mint Hill, NC',
    county: 'Mecklenburg County',
    hubPath: '/mint-hill-nc/appliance-repair',
    shortDesc: 'East Mecklenburg town with larger lots, established neighborhoods and new subdivisions.',
    areaType: 'East Mecklenburg suburb',
    zips: ['28227'],
    neighborhoods: ['Lawyers Road corridor', 'Matthews-Mint Hill Road area', 'Fairview Road corridor', 'Idlewild Road area'],
    landmarks: ['Carl J. McEwen Historic Village', 'Novant Health Mint Hill Medical Center', 'I-485 on the town\'s west side'],
    housing:
      'Mint Hill has a more spread-out feel than most of Mecklenburg County: ranch homes on large lots, 1980s and 1990s subdivisions and newer communities filling in near I-485.',
    utilities:
      'Mint Hill is on Duke Energy power, and most neighborhoods are served by Charlotte Water. Homes on larger lots often have detached garages or workshops with a second refrigerator or chest freezer.',
    intro: [
      'Mint Hill sits on the eastern edge of Mecklenburg County, between Matthews and the Cabarrus and Union county lines. It still has a small-town pace, with a historic village, local parks and neighborhoods where houses sit on generous lots, but I-485 has brought new subdivisions and shorter drives into Charlotte.',
      'That mix shows up in our calls. One appointment is a chest freezer in a workshop that has run for twenty years; the next is a two-year-old smart range with a touch panel that stopped responding. We reach Mint Hill from east Charlotte and Matthews, and same-day visits are routine.',
    ],
    localContext: [
      'Mint Hill stretches along Lawyers Road, Matthews-Mint Hill Road and Fairview Road, with I-485 running through the west side of town.',
      'The Carl J. McEwen Historic Village preserves the town\'s history near its civic center.',
      'Novant Health Mint Hill Medical Center opened in 2018 and anchors new growth near I-485.',
      'Many properties have detached garages, workshops or outbuildings with extra refrigerators and freezers.',
      'Mint Hill borders Matthews and east Charlotte, both of which we serve daily.',
    ],
    customerTypes: [
      'Homeowners on larger lots with garage and workshop refrigeration',
      'Families in newer subdivisions near I-485',
      'Long-time residents with older, well-maintained appliances',
      'Landlords and property managers with single-family rentals',
      'Small businesses and restaurants along Lawyers Road and Matthews-Mint Hill Road',
    ],
    applianceNotes: {
      cold:
        'Extra freezers and refrigerators in Mint Hill garages and workshops are often the ones that fail, because they live through summer heat and winter cold without climate control. Chest freezers that frost over, compressors that cycle constantly and garage refrigerators that warm up in winter are typical calls.',
      laundry:
        'Ranch homes in Mint Hill usually have the laundry on the main floor, often in a mudroom by the garage. Older top-load washers with worn lid switches and couplers are still common, and many dryers vent through a crawlspace where lint collects.',
      cooking:
        'We see a lot of electric coil and smooth-top ranges in Mint Hill\'s established neighborhoods and gas in newer homes. Infinite switches, bake elements and igniters cover most cooking repairs.',
      dish:
        'Dishwashers in older Mint Hill kitchens are often on their second or third replacement, and inexpensive models are not always worth a pump or board. We tell you when the repair costs more than the dishwasher is worth.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Mint Hill?', a: 'Yes. Mint Hill is close to our east Charlotte and Matthews routes, so same-day service is available most days when you call in the morning.' },
      { q: 'Can you repair a chest freezer or refrigerator in my garage or workshop?', a: 'Yes. We repair garage and workshop units as well as kitchen appliances. Tell us where the unit is when you book so we bring the right parts.' },
      { q: 'Do you repair older appliances in Mint Hill?', a: 'Yes. Many older units are well worth repairing. We diagnose first, quote the repair and give you an honest repair-or-replace recommendation.' },
      { q: 'What does an appliance repair visit cost in Mint Hill?', a: `The diagnostic visit is $${business.diagnosticFee} and is waived when you approve the repair. Most repairs fall between $89 and $300 depending on the part.` },
      { q: 'What brands do you service in Mint Hill?', a: 'All major brands, including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid and Bosch.' },
    ],
    nearby: ['matthews-nc', 'charlotte-nc', 'concord-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'pineville-nc',
    name: 'Pineville',
    displayName: 'Pineville, NC',
    county: 'Mecklenburg County',
    hubPath: '/pineville-nc/appliance-repair',
    shortDesc: 'Compact south Mecklenburg town near the South Carolina line, with apartments and established homes.',
    areaType: 'South Charlotte suburb',
    zips: ['28134'],
    neighborhoods: ['Downtown Pineville (Main Street)', 'Carolina Place area', 'Johnston Road corridor', 'NC-51 corridor'],
    landmarks: ['Carolina Place Mall', 'President James K. Polk State Historic Site', 'I-485 and US-521'],
    housing:
      'Pineville is small but dense: established single-family streets near Main Street, many apartment and townhome communities around Carolina Place and newer infill along NC-51.',
    utilities:
      'Pineville sits on major corridors (I-485, US-521 and NC-51), which keeps travel time short from our south Charlotte routes.',
    intro: [
      'Pineville sits at the southern edge of Charlotte\'s Mecklenburg County footprint — a community shaped by its position along the major retail and residential corridor connecting Charlotte to the South Carolina border. The area blends established single-family neighborhoods with apartment communities, commercial strips, and the Carolina Place Mall retail zone.',
      'Because so many Pineville residents rent, a lot of our calls come through property managers and apartment maintenance teams. We document each repair with the model, the failed part and the work done, so the owner has a clear record.',
    ],
    localContext: [
      'Pineville is anchored by the Carolina Place Mall corridor on US-521, one of Charlotte\'s primary south-end retail destinations.',
      'The area includes a mix of established single-family neighborhoods, apartment complexes, and newer townhome developments.',
      'Pineville borders the South Carolina state line, just south of Ballantyne and Steele Creek.',
      'Its position along key highway corridors makes Pineville easily accessible for same-day dispatch from our Charlotte base.',
      'We serve homeowners, renters, and business operators across the full Pineville service area.',
    ],
    customerTypes: [
      'Homeowners in established Pineville residential neighborhoods',
      'Apartment and townhome residents',
      'Property managers overseeing rental properties in the Pineville area',
      'Restaurant and retail operators along the US-521 corridor',
      'Short-term rental operators in south Charlotte communities',
    ],
    applianceNotes: {
      cold:
        'Apartment-grade top-freezer refrigerators from Frigidaire, GE and Whirlpool dominate Pineville rentals. Defrost failures that cause a warm fresh-food section and water on the floor are the classic call, and they are usually an affordable repair.',
      laundry:
        'Stacked washer-dryer units and compact laundry closets are common in Pineville apartments and townhomes. Tight closets make vent problems more likely, and stacked units need to be separated carefully to reach the washer.',
      cooking:
        'Most Pineville rentals have electric ranges, and burner switches and oven elements are the routine repairs. Over-the-range microwaves that stop heating or have a broken door latch are also frequent.',
      dish:
        'Rental dishwashers here are generally basic models. Drain problems, door latches and inlet valves are the usual faults, and we give property managers a clear repair-or-replace recommendation per unit.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Pineville?', a: 'Yes. We dispatch same-day to Pineville. Its location on the south Charlotte corridor makes scheduling efficient.' },
      { q: 'Can you service apartments in Pineville?', a: 'Absolutely. We service all residential property types — single-family homes, apartments, townhomes, and condos throughout Pineville.' },
      { q: 'Do you work with property managers in Pineville?', a: 'Yes. We work with property managers and landlords across the Pineville area, providing prompt service and professional documentation.' },
      { q: 'Do you repair washing machines in Pineville?', a: 'Yes. Washer repair is a common call in Pineville. We carry parts for all major brands and complete most repairs on the first visit.' },
      { q: 'What appliance brands do you repair in Pineville?', a: 'All major brands: Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, and more.' },
    ],
    nearby: ['charlotte-nc', 'matthews-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'concord-nc',
    name: 'Concord',
    displayName: 'Concord, NC',
    county: 'Cabarrus County',
    hubPath: '/concord-nc/appliance-repair',
    shortDesc: 'Cabarrus County seat northeast of Charlotte, home to Charlotte Motor Speedway and Concord Mills.',
    areaType: 'Charlotte metro city',
    zips: ['28025', '28027'],
    neighborhoods: ['Downtown Concord (Union Street)', 'Afton Village', 'Christenbury', 'Moss Creek', 'Poplar Tent Road corridor'],
    landmarks: ['Charlotte Motor Speedway', 'Concord Mills', 'Historic Union Street', 'Frank Liske Park'],
    housing:
      'Concord combines historic homes and older mill-era neighborhoods near downtown with large subdivisions built since the 2000s around Afton Village, Christenbury and the Poplar Tent Road corridor.',
    utilities:
      'The City of Concord operates its own electric and water utilities for much of the city, while some outlying areas are on Duke Energy. After a storm, we check for surge damage on control boards first.',
    intro: [
      'Concord is the county seat of Cabarrus County and one of the Charlotte metro\'s most active growth corridors — a city that has evolved from a textile and manufacturing center into a broad suburban community with diverse residential neighborhoods, major retail destinations, and a strong employment base. It is home to Charlotte Motor Speedway and Concord Mills, and new subdivisions continue to spread along the I-85 and Poplar Tent Road corridors.',
      'As Concord\'s housing ages, we see both ends of the appliance lifecycle: original appliances wearing out in 2000s-era subdivisions and brand-new smart appliances in recently built homes. We reach Concord from northeast Charlotte along I-85 and Highway 49.',
    ],
    localContext: [
      'Concord Mills, one of the region\'s largest shopping destinations, anchors a major commercial and residential growth corridor near I-85.',
      'Charlotte Motor Speedway brings major race weekends; we plan routes around event traffic on those days.',
      'The city\'s residential landscape ranges from established older neighborhoods near downtown Concord to large new-construction subdivisions on the city\'s expanding edges.',
      'Concord is directly adjacent to Kannapolis and northeast of Charlotte, an important node in the metro\'s northeast residential belt.',
      'We serve Concord\'s full range of housing types, from historic homes near Union Street to large family homes in newer planned communities.',
    ],
    customerTypes: [
      'Homeowners across Concord\'s established and newer residential neighborhoods',
      'Families in new-construction subdivisions northeast of Charlotte',
      'Renters and tenants across Concord\'s single-family and multi-family rental stock',
      'Property managers overseeing rental properties in the Concord area',
      'Restaurants and businesses in downtown Concord and along Concord\'s commercial corridors',
    ],
    applianceNotes: {
      cold:
        'Afton Village and Christenbury homes from the 2000s are on their second generation of refrigerators, usually French-door models with ice makers in the door. Ice maker failures, frozen fill tubes and evaporator fans are the frequent repairs; older homes near downtown still run reliable top-freezer units with defrost issues.',
      laundry:
        'Concord families with kids run heavy laundry loads, and we replace a lot of front-load door gaskets, drain pumps and dryer heating elements. Many newer homes have second-floor laundry, so we always check the drain pan and supply hoses.',
      cooking:
        'Gas ranges are common in Concord subdivisions with natural gas service, and electric smooth-tops in others. Igniters that glow without lighting the oven and cracked glass cooktops are frequent calls.',
      dish:
        'Builder dishwashers in Concord homes from the 2000s and 2010s often need pumps or latches. Newer Samsung and LG models come with error codes, and we read and clear them as part of the diagnosis.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Concord?', a: 'Yes. We dispatch same-day to Concord from our Charlotte base. Morning calls receive priority for same-day scheduling.' },
      { q: 'Do you repair refrigerators in Concord?', a: 'Yes. Refrigerator repair is one of our most common calls in Concord. We carry parts for all major brands and complete most repairs in a single visit.' },
      { q: 'Do you service older homes and appliances in Concord?', a: 'Absolutely. We work with all appliance ages — from older units in Concord\'s established neighborhoods to newer equipment in recently built homes.' },
      { q: 'Will race weekends affect my appointment?', a: 'Large events at Charlotte Motor Speedway affect traffic near the speedway and Concord Mills. We plan around them and give you an accurate arrival window.' },
      { q: 'Can you work with property managers in Concord?', a: 'Yes. We regularly work with property managers and landlords across the Concord area, providing fast turnaround and detailed repair documentation.' },
    ],
    nearby: ['kannapolis-nc', 'huntersville-nc', 'charlotte-nc', 'mint-hill-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'kannapolis-nc',
    name: 'Kannapolis',
    displayName: 'Kannapolis, NC',
    county: 'Cabarrus and Rowan Counties',
    hubPath: '/kannapolis-nc/appliance-repair',
    shortDesc: 'Former mill town north of Concord with a revitalized downtown and new neighborhoods.',
    areaType: 'Charlotte metro city',
    zips: ['28081', '28083'],
    neighborhoods: ['Downtown Kannapolis (West Avenue)', 'North Carolina Research Campus area', 'Kannapolis Parkway corridor', 'Mill village neighborhoods'],
    landmarks: ['North Carolina Research Campus', 'Atrium Health Ballpark', 'Village Park', 'I-85'],
    housing:
      'Kannapolis was built as a Cannon Mills company town, so mill houses with small kitchens and older wiring sit alongside newer subdivisions toward Concord and along Kannapolis Parkway.',
    utilities:
      'Kannapolis provides city water, and Duke Energy supplies power across most of the city. Older mill houses may have laundry hookups and circuits that were added decades after the house was built.',
    intro: [
      'Kannapolis grew up around Cannon Mills, and much of the original mill village still stands near downtown. Since the mill closed, the city has rebuilt its center around the North Carolina Research Campus and Atrium Health Ballpark, and new neighborhoods have filled in toward Concord and I-85.',
      'For appliance repair, that means very different kitchens a few minutes apart. In mill houses we work in tight spaces with older hookups; in newer homes we see the same Samsung, LG and Whirlpool appliances found across the metro. We reach Kannapolis from Concord and northeast Charlotte.',
    ],
    localContext: [
      'Downtown Kannapolis has been redeveloped around West Avenue and Atrium Health Ballpark, home of the Kannapolis Cannon Ballers.',
      'The North Carolina Research Campus occupies the former Cannon Mills site.',
      'Historic mill village homes remain near downtown, many renovated with modern appliances.',
      'Newer subdivisions extend along Kannapolis Parkway toward Concord and I-85.',
      'Kannapolis spans Cabarrus and Rowan counties, and we serve both sides.',
    ],
    customerTypes: [
      'Owners of renovated mill village homes',
      'Families in newer Kannapolis Parkway subdivisions',
      'Landlords with single-family rentals near downtown',
      'Property managers with apartment communities near I-85',
      'Restaurants and businesses in downtown Kannapolis',
    ],
    applianceNotes: {
      cold:
        'Refrigerators in renovated mill houses often had to fit openings built for much smaller units, so counter-depth and narrow models are common. Their cramped installations restrict condenser airflow, and that heat shortens fan and compressor life.',
      laundry:
        'Laundry in older Kannapolis homes is often on a back porch, in a utility room or in a converted closet, with dryer vents that run through floors or crawlspaces. Vent cleaning and replacing crushed foil ducts are part of many dryer repairs here.',
      cooking:
        'Electric ranges are the norm in older Kannapolis homes, with gas more common in newer construction. Burner switches, bake elements and oven sensors are the typical repairs.',
      dish:
        'Many mill houses did not have a dishwasher originally, so the one there now was retrofitted, sometimes with a creative drain connection. We check the installation as well as the dishwasher when it will not drain.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Kannapolis?', a: 'Yes. We serve Kannapolis on our Concord and northeast Charlotte routes, and same-day visits are available most days.' },
      { q: 'Can you work in older mill village homes?', a: 'Yes. We are used to tight kitchens, older hookups and retrofitted laundry spaces, and we check the connection and circuit as well as the appliance.' },
      { q: 'Do you serve the Rowan County side of Kannapolis?', a: 'Yes. We serve addresses in both the Cabarrus and Rowan County parts of Kannapolis.' },
      { q: 'What does a repair visit cost in Kannapolis?', a: `The diagnostic visit is $${business.diagnosticFee} and is waived when you approve the repair. We quote every repair before starting.` },
      { q: 'What brands do you repair in Kannapolis?', a: 'All major brands, including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid and Bosch.' },
    ],
    nearby: ['concord-nc', 'huntersville-nc', 'mooresville-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'belmont-nc',
    name: 'Belmont',
    displayName: 'Belmont, NC',
    county: 'Gaston County',
    hubPath: '/belmont-nc/appliance-repair',
    shortDesc: 'Riverfront Gaston County town just across the Catawba River from Charlotte.',
    areaType: 'Gaston County town',
    zips: ['28012'],
    neighborhoods: ['Downtown Belmont (Main Street)', 'South Point peninsula', 'Belmont Abbey College area', 'Catawba River and Lake Wylie communities'],
    landmarks: ['Belmont Abbey College', 'Daniel Stowe Botanical Garden', 'Main Street', 'I-85 at the Catawba River'],
    housing:
      'Belmont has historic mill homes near Main Street, established neighborhoods around Belmont Abbey and newer lake and river communities on the South Point peninsula.',
    utilities:
      'Belmont is just across the Catawba River from west Charlotte and the airport, so it is a short drive on I-85. Waterfront homes on the peninsula face the same humidity and storm exposure as Lake Norman properties.',
    intro: [
      'Belmont sits on the Gaston County side of the Catawba River, minutes from Charlotte Douglas International Airport. Its restored Main Street, Belmont Abbey College and the river and Lake Wylie neighborhoods on the South Point peninsula have made it one of the fastest-changing towns west of Charlotte.',
      'We reach Belmont across the I-85 bridge from west Charlotte. Calls range from small mill houses near downtown to waterfront homes with outdoor kitchens and built-in refrigeration.',
    ],
    localContext: [
      'Belmont\'s downtown Main Street has been restored and is lined with restaurants and shops.',
      'Belmont Abbey College and its basilica sit on the north side of town.',
      'The South Point peninsula between the Catawba and South Fork rivers is home to newer waterfront communities.',
      'Daniel Stowe Botanical Garden is just south of Belmont on the Lake Wylie side.',
      'Belmont is a short drive from west Charlotte and the airport via I-85.',
    ],
    customerTypes: [
      'Homeowners in historic homes near Main Street',
      'Waterfront homeowners on the South Point peninsula',
      'Families in newer Belmont subdivisions',
      'Landlords and property managers with rentals near downtown',
      'Restaurants and cafes on Main Street',
    ],
    applianceNotes: {
      cold:
        'Waterfront homes on the South Point peninsula often have outdoor refrigerators, beverage centers and ice makers that live with river humidity. Condenser corrosion and clogged coils are common, as are ice makers that stop after sitting unused over the winter.',
      laundry:
        'Older Belmont houses near downtown put the washer and dryer wherever they would fit, often in a kitchen alcove or back hall. Shorter vent runs help, but crushed transition ducts behind the dryer are a frequent find.',
      cooking:
        'Renovated downtown kitchens and new river homes favor gas ranges and cooktops. Igniters, spark modules and oven temperature problems are the usual cooking repairs.',
      dish:
        'We see a lot of mid-range Whirlpool, GE and Bosch dishwashers in Belmont kitchens. Drain pumps, filters clogged by unscraped dishes and door latches account for most calls.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Belmont?', a: 'Yes. Belmont is a short drive from west Charlotte on I-85, and same-day appointments are available most days.' },
      { q: 'Do you service outdoor refrigerators and ice makers?', a: 'Yes. We repair outdoor-rated refrigerators, beverage centers and ice makers, which are common in Belmont waterfront homes.' },
      { q: 'Do you cover the South Point peninsula?', a: 'Yes. We serve South Point and the Catawba River and Lake Wylie communities as well as downtown Belmont.' },
      { q: 'What does a repair visit cost in Belmont?', a: `The diagnostic visit is $${business.diagnosticFee} and is waived when you approve the repair. Most repairs fall between $89 and $300.` },
      { q: 'What brands do you repair in Belmont?', a: 'All major brands, including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch and premium brands such as Sub-Zero and Wolf.' },
    ],
    nearby: ['gastonia-nc', 'charlotte-nc'],
    updatedAt: '2026-10-14',
  },

  {
    ...base,
    slug: 'gastonia-nc',
    name: 'Gastonia',
    displayName: 'Gastonia, NC',
    county: 'Gaston County',
    hubPath: '/gastonia-nc/appliance-repair',
    shortDesc: 'Gaston County seat west of Charlotte, with historic neighborhoods and growing south-side subdivisions.',
    areaType: 'Gaston County city',
    zips: ['28052', '28054', '28056'],
    neighborhoods: ['Downtown Gastonia and the FUSE District', 'York-Chester historic district', 'Union Road corridor', 'New Hope Road corridor', 'Robinwood Road area'],
    landmarks: ['CaroMont Health Park', 'Schiele Museum of Natural History', 'Crowders Mountain State Park', 'I-85'],
    housing:
      'Gastonia has early-1900s homes in the York-Chester district, mill-era neighborhoods, mid-century ranches and newer subdivisions in south Gastonia along Union Road and New Hope Road.',
    utilities:
      'The City of Gastonia runs its own electric utility for much of the city. Power quality issues and storm outages are a common background cause of control board failures we diagnose here.',
    intro: [
      'Gastonia is the seat of Gaston County and the largest city west of Charlotte. Its downtown has been reshaped around the FUSE District and CaroMont Health Park, while the south side keeps adding subdivisions along Union Road and New Hope Road toward the South Carolina line.',
      'We reach Gastonia on I-85 through Belmont. The housing stock spans more than a century, so our technicians come prepared for both a 1950s range and a brand-new smart washer on the same route.',
    ],
    localContext: [
      'Gastonia\'s downtown has been revitalized around the FUSE District and CaroMont Health Park.',
      'The York-Chester historic district preserves early-1900s homes west of downtown.',
      'South Gastonia continues to grow with new subdivisions along Union Road and New Hope Road.',
      'The Schiele Museum and nearby Crowders Mountain State Park are regional landmarks.',
      'Gastonia sits on I-85 about twenty miles west of Uptown Charlotte.',
    ],
    customerTypes: [
      'Owners of historic homes in York-Chester and near downtown',
      'Families in newer south Gastonia subdivisions',
      'Landlords with single-family rental portfolios',
      'Property managers with apartment communities along I-85',
      'Restaurants and businesses in the FUSE District',
    ],
    applianceNotes: {
      cold:
        'Gastonia\'s older neighborhoods still have plenty of top-freezer refrigerators and chest freezers that are worth keeping running. Defrost timers and heaters, start relays and door gaskets are inexpensive fixes that add years to these units.',
      laundry:
        'Rental homes and older houses in Gastonia often have top-load washers that see years of heavy use. Lid switches, couplers, pumps and dryer belts are routine, same-visit repairs.',
      cooking:
        'Electric ranges dominate older Gastonia homes, and we replace many surface elements, infinite switches and bake elements. Newer homes on the south side add gas ranges and smooth-top electrics with touch controls.',
      dish:
        'Dishwashers in older Gastonia kitchens are frequently retrofits with tight cabinet openings. Drain hoses that kink when the unit is pushed back and inlet valves are common problems.',
    },
    faq: [
      { q: 'Do you offer same-day appliance repair in Gastonia?', a: 'Yes. We reach Gastonia on I-85 through Belmont, and same-day appointments are available most days when you call in the morning.' },
      { q: 'Do you repair older appliances in Gastonia homes?', a: 'Yes. Older refrigerators, freezers and ranges are often well worth repairing, and we quote before any work so you can decide.' },
      { q: 'Do you work with Gastonia landlords?', a: 'Yes. We work with landlords and property managers across Gastonia and send a clear record of every repair.' },
      { q: 'What does a repair visit cost in Gastonia?', a: `The diagnostic visit is $${business.diagnosticFee} and is waived when you approve the repair.` },
      { q: 'What brands do you service in Gastonia?', a: 'All major brands, including Whirlpool, GE, Frigidaire, Maytag, Samsung, LG, KitchenAid and Bosch.' },
    ],
    nearby: ['belmont-nc', 'charlotte-nc'],
    updatedAt: '2026-10-14',
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export const suburbs = cities.filter(c => c.slug !== 'charlotte-nc');
