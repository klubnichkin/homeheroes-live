// Premium brand × location pages, e.g. /charlotte-nc/sub-zero-repair-myers-park and /cornelius-nc/sub-zero-repair.
// Location copy is written per place so pages for the same brand differ substantially.

export interface PremiumBrand {
  key: 'sub-zero' | 'wolf';
  name: string;
  brandSlug: string;           // existing /charlotte-nc/{brand}-appliance-repair
  brandAppliancePage: string;  // /charlotte-nc/{slug} brand + appliance page
  products: string;
  models: string[];
  commonWork: { title: string; detail: string }[];
}

export interface PremiumLocation {
  key: string;                 // URL suffix or city slug
  name: string;
  citySlug: string;            // 'charlotte-nc' for neighborhoods
  areaSlug?: string;           // linked neighborhood page
  zips: string[];
  homes: string;
  kitchens: string;
  access: string;
  climate: string;
  brandNotes: Record<PremiumBrand['key'], string>;
  faq: { q: string; a: string }[];
}

export const premiumBrands: PremiumBrand[] = [
  {
    key: 'sub-zero',
    name: 'Sub-Zero',
    brandSlug: 'sub-zero-appliance-repair',
    brandAppliancePage: 'sub-zero-refrigerator-repair',
    products: 'built-in refrigerators, columns, undercounter units and wine storage',
    models: [
      'Classic built-in side-by-side and over-and-under',
      'Designer integrated columns and drawers',
      'PRO 48',
      'Legacy 500 and 600 series',
      'Undercounter refrigeration, freezer drawers and wine storage',
    ],
    commonWork: [
      { title: 'Condenser cleaning and airflow', detail: 'A dusty condenser behind the top grille is the most common reason a Sub-Zero runs warm.' },
      { title: 'Fans and defrost', detail: 'Evaporator and condenser fans and defrost components wear with age and cause rising temperatures.' },
      { title: 'Sealed system', detail: 'Leaks and compressor problems can be repaired, often with extended factory parts coverage on newer units.' },
      { title: 'Doors and gaskets', detail: 'Heavy panel-ready doors wear hinges, closers and gaskets, letting humid air in.' },
    ],
  },
  {
    key: 'wolf',
    name: 'Wolf',
    brandSlug: 'wolf-appliance-repair',
    brandAppliancePage: 'wolf-range-repair',
    products: 'ranges, rangetops, cooktops, wall ovens and steam ovens',
    models: [
      'Dual-fuel ranges',
      'Gas ranges and rangetops',
      'Gas and induction cooktops',
      'Built-in wall ovens and steam ovens',
      'Outdoor grills',
    ],
    commonWork: [
      { title: 'Burner ignition', detail: 'Clicking burners and burners that will not stay lit trace to moisture, burner caps or spark modules.' },
      { title: 'Oven heating', detail: 'Weak gas igniters and failed bake or convection elements cause slow preheats.' },
      { title: 'Convection fans', detail: 'Noisy or stopped convection fans are a common wear repair.' },
      { title: 'Temperature and controls', detail: 'Ovens that drift off temperature need a sensor check or calibration.' },
    ],
  },
];

export const premiumLocations: PremiumLocation[] = [
  {
    key: 'myers-park',
    name: 'Myers Park',
    citySlug: 'charlotte-nc',
    areaSlug: 'myers-park-appliance-repair',
    zips: ['28207', '28209'],
    homes:
      'Myers Park was laid out in the early 1900s as one of Charlotte\'s first planned streetcar suburbs, and its oak-lined streets are still full of Colonial Revival, Tudor and Georgian homes from the 1920s and 1930s.',
    kitchens:
      'Most of those kitchens have been rebuilt at least once. Renovations tend to fit panel-ready refrigeration and a pro-style range into a footprint that was never designed for them, with custom cabinetry built tight around each appliance.',
    access:
      'Older houses mean narrow doorways, original hardwood floors and finished trim close to the appliances. We protect floors, work from the front wherever the model allows and plan any pull-out before we start.',
    climate:
      'Summer humidity and the dense tree canopy also matter: pollen and leaf dust collect on condensers and grilles faster here than in newer neighborhoods.',
    brandNotes: {
      'sub-zero': 'Sub-Zero columns and built-ins installed during Myers Park renovations are often fully integrated behind cabinet panels. Many homes also keep an older 500 or 600 series unit in a butler\'s pantry or basement bar, and those legacy units are usually still worth servicing.',
      wolf: 'Wolf dual-fuel ranges and rangetops with separate wall ovens are a common pairing in renovated Myers Park kitchens. Burner ignition and oven igniters are the repairs we make most, and older Wolf units remain fully serviceable.',
    },
    faq: [
      { q: 'Do you work in historic Myers Park homes?', a: 'Yes. We work carefully around original floors, trim and custom cabinetry, and plan any removal before we start.' },
      { q: 'Can you service an older Sub-Zero or Wolf in a renovated Myers Park kitchen?', a: 'Yes. Both brands design their products to be serviced, and parts remain available for many older models.' },
      { q: 'How fast can you reach Myers Park?', a: 'Myers Park is central to our daily routes, so same-day visits are common when you call in the morning.' },
    ],
  },
  {
    key: 'eastover',
    name: 'Eastover',
    citySlug: 'charlotte-nc',
    areaSlug: 'eastover-appliance-repair',
    zips: ['28207'],
    homes:
      'Eastover developed from the late 1920s beside Myers Park and is home to the Mint Museum Randolph. Its large lots hold some of Charlotte\'s biggest estate homes.',
    kitchens:
      'Kitchens here are often designed around entertaining: 48-inch built-in refrigeration or paired refrigerator and freezer columns, separate wine storage, a pro-style range or rangetop with wall ovens, and sometimes a catering kitchen or outdoor kitchen as well.',
    access:
      'Many Eastover homes have household managers or staff who coordinate service. We can schedule with them, send findings and estimates to whoever manages the home and arrive within an agreed window.',
    climate:
      'Multiple refrigeration units in one home means some sit lightly used for long periods, and those are the ones that develop door seal and ice maker problems first.',
    brandNotes: {
      'sub-zero': 'Eastover kitchens commonly run several Sub-Zero units at once — columns, drawers, undercounter refrigeration and wine storage. We service the whole set and flag units that need condenser cleaning or gasket work before they fail.',
      wolf: 'Wolf rangetops paired with Wolf wall ovens and steam ovens are common in Eastover. Steam oven descaling, convection fans and ignition are typical service items.',
    },
    faq: [
      { q: 'Can you coordinate with our household manager?', a: 'Yes. We can schedule, report findings and send estimates to whoever manages the home.' },
      { q: 'Do you service several premium appliances in one visit?', a: 'Yes. Tell us which units need attention when you book and we will plan the visit and parts accordingly.' },
      { q: 'Do you repair outdoor kitchen appliances in Eastover?', a: 'Yes. We repair outdoor-rated refrigeration and many outdoor cooking appliances.' },
    ],
  },
  {
    key: 'southpark',
    name: 'SouthPark',
    citySlug: 'charlotte-nc',
    areaSlug: 'southpark-appliance-repair',
    zips: ['28209', '28210', '28211'],
    homes:
      'SouthPark around SouthPark Mall and Phillips Place mixes mid-century houses with the new custom homes replacing them, along with residential towers and luxury apartments near Morrison Boulevard.',
    kitchens:
      'New custom homes here are typically specified with integrated refrigeration and pro-style cooking from the start, while condo towers use integrated or counter-depth refrigeration and induction or gas cooktops with wall ovens.',
    access:
      'In SouthPark towers we coordinate with building management for service elevator time, loading dock access and any insurance certificates the building requires.',
    climate:
      'New construction brings its own early problems: drywall dust in condensers, water lines that were not flushed and appliances that were never leveled properly.',
    brandNotes: {
      'sub-zero': 'Sub-Zero integrated columns and drawers are a common specification in new SouthPark homes and condos. Early-life calls are often installation-related — leveling, door alignment and water connections — alongside normal service.',
      wolf: 'Wolf induction and gas cooktops with matching wall ovens are popular in SouthPark condos, and dual-fuel ranges in new homes. We diagnose induction boards, ignition and oven heating.',
    },
    faq: [
      { q: 'Can you work in SouthPark condo towers?', a: 'Yes. Share the building and management contact when you book and we will arrange access and paperwork.' },
      { q: 'My new Sub-Zero or Wolf has a problem. Is it under warranty?', a: 'Newer premium appliances usually are. We help you confirm coverage and will tell you when an issue looks like a warranty item.' },
      { q: 'Do you offer same-day service in SouthPark?', a: 'Yes, most days, when you call in the morning.' },
    ],
  },
  {
    key: 'ballantyne',
    name: 'Ballantyne',
    citySlug: 'charlotte-nc',
    areaSlug: 'ballantyne-appliance-repair',
    zips: ['28277'],
    homes:
      'Ballantyne grew up in the 1990s and 2000s around Ballantyne Country Club, Piper Glen and the corporate park, with large two-story homes on golf-course and cul-de-sac lots.',
    kitchens:
      'Many of those homes were built with premium appliance packages, which means a lot of original built-in refrigeration and pro-style ranges are now around twenty years old.',
    access:
      'Ballantyne homes are generally easy to work in, with roomy kitchens and garages, so repairs that require pulling a unit out are straightforward.',
    climate:
      'At this age the big question is repair versus replace. We give an honest assessment based on the unit\'s condition and part availability, not a sales pitch.',
    brandNotes: {
      'sub-zero': 'Original Sub-Zero 500 and 600 series built-ins are common in Ballantyne homes from the late 1990s and 2000s. Many are still worth repairing; we tell you plainly when the sealed system or parts make replacement the better choice.',
      wolf: 'Wolf and other pro-style ranges installed when Ballantyne homes were built are reaching the age where igniters, spark modules and oven elements need replacing. Those are routine repairs.',
    },
    faq: [
      { q: 'Is my original Sub-Zero worth repairing?', a: 'Often, yes. We check the sealed system and part availability and give you a clear quote and recommendation.' },
      { q: 'Do you repair 20-year-old Wolf ranges?', a: 'Yes. Wolf ranges are built to be serviced, and most repairs on older units are routine.' },
      { q: 'Do you cover all of Ballantyne?', a: 'Yes, including Ballantyne Country Club, Piper Glen and the surrounding south Charlotte neighborhoods.' },
    ],
  },
  {
    key: 'cornelius-nc',
    name: 'Lake Norman (Cornelius)',
    citySlug: 'cornelius-nc',
    zips: ['28031'],
    homes:
      'Cornelius lines the eastern shore of Lake Norman, with lakefront custom homes, The Peninsula\'s golf community and many second homes and vacation rentals.',
    kitchens:
      'Lake homes tend to have more refrigeration and cooking than kitchens in town: built-in refrigeration indoors, undercounter units at the bar, outdoor refrigerators and grills on covered patios and docks.',
    access:
      'Many owners are away for weeks at a time. We work with lockboxes, neighbors and property managers, and send photos and estimates for approval before any repair.',
    climate:
      'Lakeside humidity, summer storms rolling across the water and appliances that sit idle between visits create their own problems: dried-out water lines, sticky gaskets and surge-damaged controls.',
    brandNotes: {
      'sub-zero': 'Lake Norman homes often pair an indoor Sub-Zero built-in with Sub-Zero undercounter and outdoor-rated refrigeration. Outdoor units and units that sit idle between visits need the most attention.',
      wolf: 'Wolf ranges indoors and Wolf outdoor grills are a common Lake Norman combination. We repair the indoor range, rangetop and ovens, and diagnose ignition on outdoor units.',
    },
    faq: [
      { q: 'Can you repair appliances while I am away from the lake house?', a: 'Yes. Arrange access with a lockbox, neighbor or manager and we will send photos and an estimate for approval.' },
      { q: 'Do you service outdoor Sub-Zero and Wolf units?', a: 'Yes. We service outdoor-rated refrigeration and diagnose outdoor grill ignition problems.' },
      { q: 'Do you cover all of Lake Norman?', a: 'We cover Cornelius, Davidson, Huntersville and Mooresville on the lake.' },
    ],
  },
  {
    key: 'davidson-nc',
    name: 'Davidson',
    citySlug: 'davidson-nc',
    zips: ['28036'],
    homes:
      'Davidson combines historic homes near Davidson College and Main Street with River Run\'s golf community and lake-access neighborhoods.',
    kitchens:
      'Renovated historic kitchens often fit integrated refrigeration and a pro-style range into a modest footprint, while River Run and lake homes have larger, open kitchens.',
    access:
      'In older Davidson homes we check the circuit, outlet and water supply along with the appliance, because the house is sometimes part of the problem.',
    climate:
      'Davidson\'s mix of very old houses and newer construction means we see both legacy premium units and recently installed ones on the same day.',
    brandNotes: {
      'sub-zero': 'Integrated Sub-Zero refrigeration in renovated downtown homes and built-ins in River Run are both common. Condenser cleaning and gasket work keep these units running well.',
      wolf: 'Wolf ranges and cooktops in Davidson kitchens are usually paired with powerful hoods; ignition, oven heating and convection fans are the typical repairs.',
    },
    faq: [
      { q: 'Do you repair premium appliances in Davidson\'s historic homes?', a: 'Yes. We work carefully around older construction and check the electrical and water supply as part of the diagnosis.' },
      { q: 'Do you cover River Run?', a: 'Yes, along with downtown Davidson and the lake neighborhoods.' },
      { q: 'How quickly can you reach Davidson?', a: 'Davidson is on our Lake Norman route, and same-day visits are available most days.' },
    ],
  },
];

export interface PremiumPage {
  brand: PremiumBrand;
  location: PremiumLocation;
  citySlug: string;
  slug: string;
  path: string;
}

export const premiumPages: PremiumPage[] = premiumBrands.flatMap(brand =>
  premiumLocations.map(location => {
    const slug = location.citySlug === 'charlotte-nc' ? `${brand.key}-repair-${location.key}` : `${brand.key}-repair`;
    return { brand, location, citySlug: location.citySlug, slug, path: `/${location.citySlug}/${slug}` };
  }),
);
