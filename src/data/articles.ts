// Data-driven "Useful info" articles rendered by src/pages/blog/useful-info/[slug].astro.
// Hand-written .astro articles in the same folder keep working; these are added alongside them.

export interface ArticleSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  icon: string;
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  answer: string;              // direct answer shown first
  sections: ArticleSection[];
  faq: { q: string; a: string }[];
  related: { title: string; href: string }[];
  relatedService: { label: string; href: string };
}

export const articles: Article[] = [
  {
    slug: 'garage-refrigerator-not-cooling-winter-charlotte',
    title: 'Why Your Garage Refrigerator Stops Working in Winter (and Struggles in Summer)',
    seoTitle: 'Garage Refrigerator Not Cooling in Winter? | Charlotte Guide',
    description:
      'Why a garage refrigerator lets the freezer thaw on cold Charlotte nights and runs nonstop in July — and what to do about it before you call for repair.',
    category: 'Refrigerator',
    icon: '🏠',
    publishedAt: '2026-10-14',
    updatedAt: '2026-10-14',
    readMinutes: 6,
    answer:
      'Most standard refrigerators are designed for indoor temperatures. In a cold garage, the thermostat in the fresh-food section rarely asks for cooling, so the compressor barely runs and the freezer warms up. In a hot summer garage the opposite happens: the unit runs almost nonstop and wears out faster. A garage-rated refrigerator, or moving the unit indoors, fixes both — and often nothing is actually broken.',
    sections: [
      {
        h2: 'Why cold weather makes the freezer thaw',
        paragraphs: [
          'On most single-compressor refrigerators, one temperature sensor in the fresh-food compartment decides when the compressor runs. The freezer only gets cold air when that sensor asks for it.',
          'When the garage itself drops into the 30s and 40s — which happens on plenty of Charlotte nights from December through February — the fresh-food section stays cold on its own. The sensor is satisfied, the compressor stays off, and the freezer slowly warms. Owners find soft ice cream and assume the refrigerator has failed.',
        ],
        bullets: [
          'Freezer soft or thawing while the refrigerator side is cold',
          'Problem appears on cold nights and disappears when the weather warms',
          'Compressor rarely heard running',
        ],
      },
      {
        h2: 'Why hot garages wear refrigerators out',
        paragraphs: [
          'Charlotte summers regularly reach the 90s, and an attached garage with the door closed gets hotter still. A refrigerator rejects heat through its condenser into the surrounding air; when that air is already very hot, the compressor runs almost constantly to keep up.',
          'Long run times stress the compressor, condenser fan and start components. Add a dusty condenser — common in garages and worse during spring pollen season — and a unit that coped in May can start running warm in July.',
        ],
        bullets: [
          'Refrigerator running constantly and the cabinet sides feel hot',
          'Food not as cold as it should be on the hottest days',
          'Clicking at the back as the compressor tries to restart',
        ],
      },
      {
        h2: 'What you can check yourself',
        paragraphs: ['Before booking a repair, a few simple checks often explain the problem:'],
        bullets: [
          'Note the garage temperature when the problem happens. If it only fails on cold nights or very hot days, placement is the likely cause.',
          'Give the unit space: at least a few inches behind and above it so the condenser can breathe.',
          'Unplug the unit and vacuum the condenser coils and the front grille (see the manual for where they are).',
          'Check that the doors close fully and the gaskets seal; garage refrigerators get opened with full hands and bumped often.',
          'Look up the model\'s rated operating temperature in the manual. Many standard models are not rated for unheated spaces.',
        ],
      },
      {
        h2: 'Long-term fixes',
        paragraphs: [
          'If you want a second refrigerator in the garage, a model sold as garage-ready (rated for a wide ambient temperature range) is the most reliable answer. Some manufacturers also sell a heater kit for specific models that tricks the fresh-food sensor into running the compressor in cold weather — check your model\'s documentation before buying one.',
          'If the refrigerator still runs warm indoors or in mild weather, something has failed — often a condenser fan, defrost part or start relay — and that is worth having diagnosed.',
        ],
      },
    ],
    faq: [
      { q: 'Is it bad to keep a refrigerator in the garage?', a: 'Not if it is rated for it. Standard indoor models struggle in cold winters and very hot summers; garage-ready models are designed for those swings.' },
      { q: 'Why is my garage freezer soft but the refrigerator is cold?', a: 'In cold weather the fresh-food thermostat rarely calls for cooling, so the freezer does not get cold air. It is usually a placement issue rather than a failure.' },
      { q: 'Can a garage refrigerator be repaired?', a: 'Yes. If it fails in normal temperatures, fans, defrost parts, relays and thermostats are common, affordable repairs.' },
    ],
    related: [
      { title: 'Refrigerator not cooling', href: '/charlotte-nc/refrigerator-not-cooling' },
      { title: 'Freezer not freezing', href: '/charlotte-nc/freezer-not-freezing' },
      { title: 'How often to clean refrigerator coils', href: '/blog/useful-info/how-often-clean-refrigerator-coils' },
    ],
    relatedService: { label: 'Refrigerator Repair →', href: '/charlotte-nc/refrigerator-repair' },
  },
  {
    slug: 'lake-norman-lake-house-appliance-care',
    title: 'Lake House Appliance Care: Closing Up and Opening Up on Lake Norman',
    seoTitle: 'Lake House Appliance Checklist | Lake Norman, NC',
    description:
      'How to protect refrigerators, ice makers, washers and dishwashers in a Lake Norman second home or rental between visits — and what to check when you return.',
    category: 'Seasonal',
    icon: '🛶',
    publishedAt: '2026-10-14',
    updatedAt: '2026-10-14',
    readMinutes: 7,
    answer:
      'Appliances in lake houses fail less from use than from sitting idle in humid air. Before you leave, shut off water to the ice maker, washer and dishwasher, empty the ice bin and leave washer and dishwasher doors cracked. When you return, check for leaks before restoring water, discard the first batches of ice, and make sure outdoor refrigerators are on and their GFCI outlet has not tripped.',
    sections: [
      {
        h2: 'Why lake house appliances fail',
        paragraphs: [
          'Homes around Lake Norman — in Cornelius, Davidson, Huntersville and Mooresville — often sit empty for days or weeks and then host a full house. Appliances that sit idle develop their own problems: water lines and valves stick, door gaskets take a set, ice in the bin fuses into a block and mildew grows in washers and dishwashers.',
          'The lake adds humidity, and summer storms that roll across the water bring outages and surges. A refrigerator that failed early in the week may not be noticed until the weekend, so a few minutes of preparation saves a lot of spoiled food and water damage.',
        ],
      },
      {
        h2: 'Before you leave',
        paragraphs: ['A short checklist for stays of more than a week:'],
        bullets: [
          'Refrigerator: leave it running at normal settings, or empty, unplug and prop the doors open so mold cannot grow inside. Do not unplug a closed refrigerator.',
          'Ice maker: switch it off, shut the supply valve and empty the bin so ice does not fuse together.',
          'Washer: shut both supply valves, wipe the door gasket and leave the door or lid open.',
          'Dishwasher: run it empty with a cleaner, shut the supply valve under the sink and leave the door cracked.',
          'Outdoor refrigeration: decide whether to keep it running; if you turn it off, prop the door open.',
          'Surge protection: a whole-home surge protector installed by an electrician protects boards that are expensive to replace.',
        ],
      },
      {
        h2: 'When you come back',
        paragraphs: ['Do these before guests arrive:'],
        bullets: [
          'Look under and around the refrigerator, dishwasher and washer for water before opening the supply valves.',
          'Open the valves slowly and watch the connections for a minute.',
          'Run a couple of glasses of water through the refrigerator dispenser and throw away the first two batches of ice.',
          'Check that outdoor refrigerators and ice makers are actually running — a tripped GFCI outlet is a common reason they are off.',
          'Run the dishwasher and washer on a short cycle and confirm they drain.',
        ],
      },
      {
        h2: 'Outdoor kitchens and docks',
        paragraphs: [
          'Outdoor-rated refrigerators, beverage centers and ice makers on patios and docks deal with humidity, pollen, insects and direct sun. Clean their condenser grilles at the start and middle of the season, keep them shaded if possible and make sure they are on a properly protected circuit.',
        ],
      },
    ],
    faq: [
      { q: 'Should I unplug my lake house refrigerator when I leave?', a: 'Only if it is empty and you prop the doors open. Otherwise leave it running at normal settings; an unplugged, closed refrigerator grows mold quickly in humid weather.' },
      { q: 'Why is my outdoor ice maker not working after the winter?', a: 'Common causes are a tripped GFCI outlet, a closed or stuck water valve, and a frozen or cracked water line. If those check out, the ice maker itself may need service.' },
      { q: 'Can you repair appliances while I am away?', a: 'Yes. Many Lake Norman owners arrange access through a lockbox, neighbor or property manager and approve the estimate remotely.' },
    ],
    related: [
      { title: 'Appliance repair in Cornelius', href: '/cornelius-nc/appliance-repair' },
      { title: 'Appliance repair in Mooresville', href: '/mooresville-nc/appliance-repair' },
      { title: 'Ice maker repair', href: '/charlotte-nc/ice-maker-repair' },
      { title: 'Power outage appliance protection', href: '/blog/useful-info/power-outage-appliance-protection' },
    ],
    relatedService: { label: 'Lake Norman Appliance Repair →', href: '/cornelius-nc/appliance-repair' },
  },
  {
    slug: 'pollen-season-appliance-care-charlotte',
    title: 'Pollen Season and Your Appliances: A Spring Checklist for Charlotte',
    seoTitle: 'Pollen Season Appliance Checklist | Charlotte, NC',
    description:
      'Charlotte\'s spring pine pollen coats more than cars. How it clogs refrigerator condensers, dryer vents and range hood filters — and a 20-minute checklist to prevent summer breakdowns.',
    category: 'Seasonal',
    icon: '🌼',
    publishedAt: '2026-10-14',
    updatedAt: '2026-10-14',
    readMinutes: 5,
    answer:
      'The yellow pine pollen that covers Charlotte every spring is drawn into appliances along with dust and lint. Once pollen season is over, unplug the refrigerator and vacuum its condenser coils and front grille, check that the dryer\'s outside vent flap opens freely, and wash the range hood filters. That 20 minutes reduces the strain appliances face in the summer heat.',
    sections: [
      {
        h2: 'Where pollen ends up',
        paragraphs: [
          'Refrigerators pull room air across the condenser to shed heat. In spring, that air carries pollen and dust that cling to the coils and the grille at the bottom front of many models. A coated condenser makes the compressor run longer — just as Charlotte heads into the hottest months of the year.',
          'Dryer vents are the other weak point. The outside vent hood can collect pollen, lint and even nesting material, and a flap that sticks closed restricts airflow. Restricted airflow is a leading reason dryers take two cycles, overheat and blow their thermal fuse.',
        ],
      },
      {
        h2: 'The 20-minute spring checklist',
        paragraphs: ['Do this once the heavy pollen has passed, usually by late April:'],
        bullets: [
          'Refrigerator: unplug it, remove the front grille or rear panel as the manual describes and vacuum the coils with a brush attachment. Plug it back in.',
          'Garage refrigerator or freezer: same cleaning — garages collect the most dust and pollen.',
          'Dryer: clean the lint screen with warm soapy water if it looks coated, then go outside and check that the vent flap opens when the dryer runs.',
          'Range hood: soak metal grease filters in hot water with dish soap or run them through the dishwasher.',
          'Washer: wipe the door gasket and leave the door open to dry; spring humidity encourages mildew.',
          'Outdoor refrigerators and ice makers: brush off the condenser grille and check for insect nests.',
        ],
      },
      {
        h2: 'Signs a cleaning is not enough',
        paragraphs: ['If you notice any of these after cleaning, it is time for a diagnosis:'],
        bullets: [
          'Refrigerator still running constantly or not holding temperature',
          'A buzzing or clicking sound from the back of the refrigerator',
          'Dryer still taking more than one cycle with a clear vent',
          'A burning smell from the dryer (stop using it and call)',
        ],
      },
    ],
    faq: [
      { q: 'How often should I clean refrigerator coils in Charlotte?', a: 'At least once a year, and twice if you have pets or the refrigerator is in a garage. After spring pollen season is a good time.' },
      { q: 'Is it safe to clean condenser coils myself?', a: 'Yes, if you unplug the refrigerator first and use a vacuum brush. Do not bend the fins or touch wiring.' },
      { q: 'Why does my dryer take longer in spring?', a: 'Pollen and lint can partially block the vent or the outside flap. Check that air flows strongly from the vent while the dryer runs.' },
    ],
    related: [
      { title: 'How often to clean refrigerator coils', href: '/blog/useful-info/how-often-clean-refrigerator-coils' },
      { title: 'Signs your dryer vent needs cleaning', href: '/blog/useful-info/signs-dryer-vent-needs-cleaning' },
      { title: 'Dryer taking too long to dry', href: '/charlotte-nc/dryer-taking-too-long-to-dry' },
    ],
    relatedService: { label: 'Charlotte Appliance Repair →', href: '/appliance-repair-charlotte' },
  },
  {
    slug: 'how-to-find-appliance-model-number',
    title: 'How to Find Your Appliance Model Number (and Why It Speeds Up Repairs)',
    seoTitle: 'Where Is the Model Number on My Appliance? | HomeHeroes',
    description:
      'Where to find the model and serial number on refrigerators, washers, dryers, dishwashers, ranges and microwaves — and why sharing it before a repair visit saves time.',
    category: 'Repair Tips',
    icon: '🔎',
    publishedAt: '2026-10-14',
    updatedAt: '2026-10-14',
    readMinutes: 5,
    answer:
      'The model number is on a label that is usually hidden in plain sight: inside the refrigerator on a side wall or ceiling, around the door opening on washers and dryers, on the edge of the dishwasher door or tub, and behind the storage drawer or around the oven door frame on ranges. Sending it when you book lets the technician bring the right parts and finish most repairs in one visit.',
    sections: [
      {
        h2: 'Why the model number matters',
        paragraphs: [
          'Two appliances that look identical can use different parts. The model number tells a technician which control board, pump, fan or igniter your unit uses, and which error codes apply. With it, we can check part availability before arriving and bring the parts most likely to be needed. Without it, a simple repair can turn into two visits.',
          'The serial number matters too: it often encodes the production date, which affects warranty coverage and which revision of a part fits.',
        ],
      },
      {
        h2: 'Where to look, by appliance',
        paragraphs: ['Labels are usually white or silver stickers or metal plates. Use a flashlight and your phone camera.'],
        bullets: [
          'Refrigerator: inside the fresh-food section on a side wall, on the ceiling near the light, or behind the crisper drawers. Built-in models often have it behind the top grille or inside near the top.',
          'Freezer (upright or chest): inside the lid or door, or on the back of the cabinet.',
          'Top-load washer: under the lid, on the back of the control panel or on the rear of the cabinet.',
          'Front-load washer: around the door opening or on the inside of the door frame.',
          'Dryer: inside the door opening, on the door rim, or on the back panel.',
          'Dishwasher: on the edge of the door (left or right side) or on the top or side of the tub opening — open the door to see it.',
          'Range or oven: behind the storage or warming drawer, or around the oven door frame. Wall ovens usually have it on the frame when the door is open.',
          'Over-the-range microwave: inside the door frame, on the front wall behind the door, or on the back of the unit.',
        ],
      },
      {
        h2: 'What else to send when you book',
        paragraphs: ['Along with the model and serial number, these details help us diagnose faster:'],
        bullets: [
          'What the appliance is doing (or not doing) and when it started',
          'Any error code or flashing lights on the display',
          'A photo of the label and, if useful, a short video of the problem',
          'Whether it is gas or electric (for ranges and dryers)',
        ],
      },
    ],
    faq: [
      { q: 'Is the model number the same as the serial number?', a: 'No. The model number identifies the product design; the serial number identifies your individual unit and often its production date. Send both if you can.' },
      { q: 'What if the label is missing or unreadable?', a: 'Send photos of the appliance, the control panel and any labels you can find. The brand and approximate age still help us prepare.' },
      { q: 'Do I need the model number to book a repair?', a: 'No, but it helps. We can still diagnose without it; having it simply makes a first-visit fix more likely.' },
    ],
    related: [
      { title: 'Common appliance problems', href: '/charlotte-nc/common-appliance-problems' },
      { title: 'Appliance repair cost in Charlotte', href: '/charlotte-nc/appliance-repair-cost' },
      { title: 'Washer error codes', href: '/charlotte-nc/washer-error-codes' },
    ],
    relatedService: { label: 'Book Appliance Repair →', href: '/appliance-repair-charlotte' },
  },
];

export const getArticle = (slug: string) => articles.find(a => a.slug === slug);
