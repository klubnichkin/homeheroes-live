export interface BrandWeakness {
  issue: string;
  detail: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface BrandPage {
  slug: string;
  name: string;
  priceRange: 'Budget' | 'Mid-Range' | 'Premium' | 'Luxury';
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  strengths: string[];
  weaknesses: BrandWeakness[];
  commonAppliances: string[];
  faq: FAQ[];
  relatedServices: string[];
}

export const brands: BrandPage[] = [
  {
    slug: 'samsung-appliance-repair',
    name: 'Samsung',
    priceRange: 'Mid-Range',
    seoTitle: 'Samsung Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Expert Samsung appliance repair in Charlotte, NC. We fix Samsung refrigerators, washers, dryers, dishwashers & more. Same-day service. Call (704) 512-0111.',
    h1: 'Samsung Appliance Repair in Charlotte, NC',
    intro:
      'Samsung appliances are packed with smart features and modern design, but they are known for specific failure patterns — especially ice maker issues in French door refrigerators and control board failures in front-load washers. HomeHeroes technicians in Charlotte know these failure points well and carry the most commonly needed Samsung parts on every truck.',
    strengths: [
      'Innovative smart home integration with SmartThings platform',
      'Wide parts availability through Samsung service network',
      'Strong warranty programs on major appliances',
      'Stylish modern designs competitive in Mid-Range market',
      'Competitive pricing for the features offered',
    ],
    weaknesses: [
      {
        issue: 'French door ice maker failures',
        detail:
          'The dual ice maker system in Samsung French door refrigerators (2017–2022 models especially) has a well-documented freeze-up issue where ice builds up around the fan and evaporator, stopping ice production. A defrost retrofit kit is the established fix.',
      },
      {
        issue: 'Control board failures',
        detail:
          'Touch screen panels and digital control boards on Samsung washers and ranges fail more frequently than equivalent mechanical controls. Smart features add complexity that can fail independently of core appliance function.',
      },
      {
        issue: 'SmartThings connectivity issues',
        detail:
          'Smart features including the Family Hub display can freeze, disconnect, or require factory reset. While this does not affect basic appliance function, it is frustrating on a premium-priced unit.',
      },
    ],
    commonAppliances: [
      'French door refrigerators with dual ice makers',
      'Front-load and top-load washing machines',
      'Electric and gas dryers',
      'Built-in and over-the-range dishwashers',
      'Over-the-range and countertop microwaves',
      'Gas and electric ranges',
    ],
    faq: [
      {
        q: 'Why do Samsung refrigerators have ice maker problems?',
        a: 'Samsung French door refrigerators from approximately 2017–2022 have a design issue where the evaporator coils in the ice maker compartment accumulate ice and freeze the fan. Samsung developed a defrost kit fix that we install — it includes a foam housing cover and a small heater to prevent freeze-up.',
      },
      {
        q: 'Is Samsung worth buying or repairing?',
        a: "Samsung appliances are worth repairing because parts are readily available, the issues are well-documented, and experienced technicians know exactly what to look for. The ice maker issue in particular has a proven fix that's not expensive.",
      },
      {
        q: 'Does HomeHeroes service Samsung smart appliances?',
        a: 'Yes — we service all Samsung appliance models including Family Hub refrigerators, SmartThings-connected washers, and Wi-Fi enabled ranges. We focus on the mechanical and electrical repair; smart connectivity issues that require Samsung support are a separate matter.',
      },
      {
        q: 'What is the most common Samsung appliance repair?',
        a: 'By far the most common Samsung repair we perform in Charlotte is the French door refrigerator ice maker freeze-up fix. The second most common is door latch and seal replacement on front-load washers.',
      },
      {
        q: 'How much does Samsung appliance repair cost in Charlotte?',
        a: 'Samsung repair costs in Charlotte range from $150 for a simple part replacement to $450 for more involved work like control boards or ice maker rebuilds. We provide a flat-rate quote before any work begins.',
      },
    ],
    relatedServices: [
      'refrigerator-repair',
      'washer-repair',
      'dryer-repair',
      'dishwasher-repair',
      'microwave-repair',
      'ice-maker-repair',
    ],
  },

  {
    slug: 'lg-appliance-repair',
    name: 'LG',
    priceRange: 'Mid-Range',
    seoTitle: 'LG Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Expert LG appliance repair in Charlotte, NC. Fix linear compressor fridges, front-load washers, dryers & more. Same-day service. Call (704) 512-0111.',
    h1: 'LG Appliance Repair in Charlotte, NC',
    intro:
      'LG builds some of the most energy-efficient appliances on the market, and their front-load washers and French door refrigerators are popular across Charlotte. Their linear compressor refrigerators and direct-drive washers have specific failure patterns that require experienced technicians. HomeHeroes is fully equipped to diagnose and repair LG appliances, including units affected by the known compressor issue.',
    strengths: [
      'Excellent energy efficiency ratings across the product line',
      'InverterDirect Drive technology in washers (quieter, more efficient)',
      'Linear compressor technology in refrigerators (energy savings)',
      'ThinQ smart platform with useful remote diagnostics',
      'Good longevity when properly maintained',
    ],
    weaknesses: [
      {
        issue: 'Linear compressor failures',
        detail:
          "LG's linear compressors are more energy-efficient than traditional compressors but are more expensive and complex to replace when they fail. A 2019 class action established LG's liability for certain compressor failures — we help diagnose affected models.",
      },
      {
        issue: 'InstaView door-in-door hinge wear',
        detail:
          "The door-in-door feature on LG's InstaView refrigerators develops hinge looseness over time, affecting the inner door seal and causing subtle temperature fluctuations.",
      },
      {
        issue: 'Drum bearing wear on front-load washers',
        detail:
          'LG front-load washers develop a characteristic loud rumbling sound during the spin cycle when the rear drum bearing wears — typically after 5–8 years of use. Bearing replacement is a significant disassembly repair.',
      },
    ],
    commonAppliances: [
      'French door and side-by-side refrigerators',
      'InstaView door-in-door refrigerators',
      'Front-load and top-load washing machines',
      'Gas and electric dryers',
      'Built-in dishwashers',
      'Ranges and microwaves',
    ],
    faq: [
      {
        q: "What is LG's linear compressor and is it reliable?",
        a: "LG's linear compressor uses a back-and-forth piston motion instead of a rotary motion, making it more energy-efficient and quieter. It is generally reliable but when it fails, the replacement cost is higher than a standard compressor. LG extended the warranty on affected models.",
      },
      {
        q: 'Is there an LG class action lawsuit about compressors I should know about?',
        a: "Yes — a 2019 class action (In re LG Refrigerator Litigation) established that certain LG linear compressor models (2014–2017) were prone to premature failure. The settlement provides compensation and extended warranty coverage. We can help identify if your model is affected.",
      },
      {
        q: 'My LG washer shows an LE error — what does that mean?',
        a: "LE on an LG washer indicates a motor or stator issue — the motor is drawing more current than it should, or the hall sensor (motor position sensor) has failed. It can also occur from an overloaded drum. We test the motor, hall sensor, and stator assembly to find the specific failure.",
      },
      {
        q: "Does LG's ThinQ app affect repairability?",
        a: "No — the mechanical and electrical systems operate independently of the ThinQ smart features. A refrigerator with a failed ThinQ connection can still cool perfectly; a washer with Wi-Fi issues can still wash perfectly. We repair the appliance function, not the app.",
      },
      {
        q: 'How much does LG appliance repair cost in Charlotte?',
        a: 'LG repairs in Charlotte typically run $150 to $400 for most failures. Linear compressor replacement is more expensive — $400–$600 — and we will assess whether it is economically worthwhile given the age of the unit.',
      },
    ],
    relatedServices: [
      'refrigerator-repair',
      'washer-repair',
      'dryer-repair',
      'dishwasher-repair',
      'ice-maker-repair',
    ],
  },

  {
    slug: 'whirlpool-appliance-repair',
    name: 'Whirlpool',
    priceRange: 'Mid-Range',
    seoTitle: 'Whirlpool Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Whirlpool appliance repair in Charlotte, NC. Expert service on washers, dryers, refrigerators, dishwashers & ranges. Same-day available. Call (704) 512-0111.',
    h1: 'Whirlpool Appliance Repair in Charlotte, NC',
    intro:
      "Whirlpool is the best-selling appliance brand in America for good reason — they are reliable workhorses built to last. When they do break, they are also among the easiest and most affordable to repair, thanks to decades of consistent design, abundant parts, and technicians who know the platform inside and out. HomeHeroes services Whirlpool and all brands under the Whirlpool Corporation umbrella.",
    strengths: [
      'Exceptional parts availability — the largest parts network in the US',
      'Consistent design over decades makes units easy to service',
      'Proven reliability with lower failure rates than many competitors',
      'Affordable repair costs due to parts availability and design simplicity',
      'Made in America for many flagship models',
    ],
    weaknesses: [
      {
        issue: 'Water inlet valve failure on older side-by-sides',
        detail:
          'The water inlet valve is a well-documented weak point in older Whirlpool side-by-side refrigerators. The valve body cracks or the solenoid fails, stopping water and ice production. A common repair we carry parts for.',
      },
      {
        issue: 'Control board sensitivity on newer models',
        detail:
          'Newer Whirlpool digital control boards are more failure-prone than the mechanical controls of earlier units. A power surge or voltage spike can damage the board even with protection.',
      },
      {
        issue: 'Top-loader lid switch failure',
        detail:
          'The lid switch on Whirlpool top-load washers — the safety interlock that prevents spinning with the lid open — is a common failure point after 5+ years. When it fails, the washer fills but will not agitate or spin.',
      },
    ],
    commonAppliances: [
      'Top-load and front-load washing machines',
      'Gas and electric dryers',
      'Side-by-side and French door refrigerators',
      'Built-in and portable dishwashers',
      'Electric and gas ranges and wall ovens',
    ],
    faq: [
      {
        q: 'Why is Whirlpool so popular for repair?',
        a: 'Two reasons: first, parts for Whirlpool appliances are the most widely available and competitively priced of any brand. Second, Whirlpool designs have been consistent for decades — a technician who knows a 2008 Whirlpool washer largely knows a 2018 one. That means lower diagnostic time and lower labor cost.',
      },
      {
        q: 'Is a 15-year-old Whirlpool worth fixing?',
        a: 'Often yes — especially for washers and refrigerators. Parts are available for most models going back 20 years, and the designs are robust enough to run another 5+ years after a single component repair. We will assess the specific failure and give you an honest recommendation.',
      },
      {
        q: 'What do most Whirlpool repairs cost?',
        a: 'Most Whirlpool repairs run $80–$250 — significantly lower than comparable repairs on European or premium brands, because parts cost less. A lid switch, water inlet valve, or door gasket replacement is typically $80–$150.',
      },
      {
        q: 'Does HomeHeroes service Whirlpool-owned brands like Amana?',
        a: 'Yes — Whirlpool Corporation owns and manufactures Amana, Maytag, JennAir, and KitchenAid in addition to the Whirlpool brand. Many parts are shared across these brands, and we service all of them.',
      },
      {
        q: 'How long do Whirlpool appliances last?',
        a: 'Whirlpool washers and dryers typically last 10–14 years; refrigerators 14–17 years; dishwashers 10–13 years. These are among the highest longevity figures in the mid-range market.',
      },
    ],
    relatedServices: [
      'washer-repair',
      'dryer-repair',
      'refrigerator-repair',
      'dishwasher-repair',
      'oven-repair',
    ],
  },

  {
    slug: 'ge-appliance-repair',
    name: 'GE Appliances',
    priceRange: 'Mid-Range',
    seoTitle: 'GE Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'GE appliance repair in Charlotte, NC. Expert service on GE refrigerators, washers, ranges, dishwashers & more. Same-day available. Call (704) 512-0111.',
    h1: 'GE Appliance Repair in Charlotte, NC',
    intro:
      "GE Appliances (now owned by Haier but manufactured in Louisville, KY) has been a staple of American kitchens since 1907. With over 100 years of engineering refinement and an excellent parts infrastructure, GE is one of the most serviceable brands on the market. HomeHeroes technicians service all GE tiers — from budget GE to GE Profile and GE Café.",
    strengths: [
      'Over 100 years of engineering refinement and design consistency',
      'Excellent nationwide parts distribution network',
      'Wide range of price points from entry-level GE to premium GE Café',
      'Strong technician training programs and service documentation',
      'US manufacturing for many flagship GE Profile and Café models',
    ],
    weaknesses: [
      {
        issue: 'GE Profile French door ice maker issues',
        detail:
          'The ice maker assembly in GE Profile French door refrigerators is a known failure point — particularly the fill tube freezing and the ice maker module failing. We carry replacement assemblies for the most common Profile models.',
      },
      {
        issue: 'Front-load washer door boot seal',
        detail:
          "GE's front-load washers are prone to door boot/gasket tearing and the subsequent mold buildup from trapped moisture. Regular cleaning and prompt gasket replacement prevent this from becoming a health issue.",
      },
      {
        issue: 'Control board failures on digital display models',
        detail:
          "GE's newer digital display boards are more vulnerable to failure than their older mechanical counterparts. A power surge that would not affect a mechanical timer can damage a digital ERC (Electronic Range Control).",
      },
    ],
    commonAppliances: [
      'Side-by-side and French door refrigerators (GE and GE Profile)',
      'Front-load and top-load washing machines',
      'Gas and electric ranges (GE Café and GE Profile)',
      'Built-in dishwashers',
      'Over-the-range and built-in microwaves',
      'Wall ovens and cooktops',
    ],
    faq: [
      {
        q: "What is the difference between GE, GE Profile, and GE Café, and does it affect repair costs?",
        a: 'GE is the entry-level line; GE Profile adds smart features and upgraded aesthetics; GE Café is the premium line with commercial-inspired design and commercial-grade components. Café repairs may cost more due to specialized parts, but Profile and base GE repairs are comparably priced.',
      },
      {
        q: 'Does Haier ownership affect GE parts availability?',
        a: "No — Haier's acquisition of GE Appliances has not materially affected parts availability or service support. GE maintains its US parts infrastructure and service network independently under the GE Appliances brand.",
      },
      {
        q: 'What are the most common GE refrigerator repairs in Charlotte?',
        a: "The most common GE refrigerator repairs we perform are ice maker assembly replacement (GE Profile French door models), water inlet valve replacement (side-by-side models), and door gasket replacement. All are parts we stock.",
      },
      {
        q: 'How much does GE appliance repair cost?',
        a: 'GE appliance repairs typically run $120–$350 in Charlotte. Parts availability is excellent, so repair costs are competitive. GE Café model repairs may be slightly higher due to specialized components.',
      },
      {
        q: 'Does HomeHeroes service GE Monogram appliances?',
        a: 'Yes — GE Monogram is the ultra-premium GE line. We service Monogram refrigerators, ranges, and dishwashers. Parts lead times may be longer for some Monogram-specific components, and we will advise you on timing.',
      },
    ],
    relatedServices: [
      'refrigerator-repair',
      'washer-repair',
      'oven-repair',
      'dishwasher-repair',
      'microwave-repair',
    ],
  },

  {
    slug: 'maytag-appliance-repair',
    name: 'Maytag',
    priceRange: 'Mid-Range',
    seoTitle: 'Maytag Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Maytag appliance repair in Charlotte, NC. Service on washers, dryers, refrigerators, dishwashers & more. Built tough — we fix it right. Call (704) 512-0111.',
    h1: 'Maytag Appliance Repair in Charlotte, NC',
    intro:
      "Maytag built its reputation on commercial-grade durability — the \"dependability\" promise is not just marketing. Maytag (a Whirlpool brand) top-load washers use commercial-grade motors and are among the most robust residential washers available. When a Maytag does need service, it is excellent repair value thanks to the shared Whirlpool parts ecosystem.",
    strengths: [
      'Heavy-duty build quality, especially in washer and dryer lines',
      'PowerWash system for superior cleaning performance',
      '10-year limited parts warranty on some motor and drum components',
      'Commercial-grade motor in top-load washers',
      'Quieter operation than many mid-range competitors',
    ],
    weaknesses: [
      {
        issue: 'Centennial washer electronic control failure',
        detail:
          "The electronic control board on Maytag's Centennial-era top-load washers is a known failure point. The board is responsible for the wash cycle and when it fails, the washer won't start or complete a cycle.",
      },
      {
        issue: 'Bravos XL bearing failure',
        detail:
          "The Bravos XL's large-capacity drum places more stress on the rear bearing assembly. Bearing failure typically develops gradually — starting as a faint rumble and progressing to a loud roar during agitation.",
      },
      {
        issue: 'Refrigerator ice maker saddle valve issues',
        detail:
          'Maytag refrigerators installed with saddle-type water supply valves (common in older Charlotte homes) are prone to valve corrosion and eventual water supply failure to the ice maker. We recommend switching to a compression fitting if the saddle valve fails.',
      },
    ],
    commonAppliances: [
      'Commercial-style top-load washing machines (Bravos, Centennial)',
      'Gas and electric dryers',
      'Dishwashers (quiet operation)',
      'Bottom-freezer and side-by-side refrigerators',
      'Gas and electric freestanding ranges',
    ],
    faq: [
      {
        q: "How durable are Maytag washers compared to other brands?",
        a: "Maytag top-load washers consistently score among the highest in durability surveys. The commercial-grade motor in the Bravos and Centennial lines is designed for higher cycle counts than standard residential motors. With proper care, a Maytag washer can easily last 12–15 years.",
      },
      {
        q: 'What does the Maytag 10-year parts warranty cover?',
        a: 'The 10-year limited parts warranty on select Maytag washers covers the motor and stainless steel wash basket. It does not cover labor. We can verify whether your specific model and failure type fall within the warranty period.',
      },
      {
        q: 'My Maytag Bravos makes a loud noise during agitation — what is it?',
        a: 'A loud rumbling or grinding noise during agitation on a Bravos XL is almost always the rear drum bearing. This worsens over time and eventually the drum can become unstable. Bearing replacement is a significant repair — we will assess the economics for you.',
      },
      {
        q: 'Is Maytag the same as Whirlpool?',
        a: 'Maytag is owned by Whirlpool Corporation. Many components are shared across Maytag and Whirlpool, which is great for parts availability and repair cost. The brands have different design philosophies — Maytag leans heavier and more commercial-grade.',
      },
      {
        q: 'How much does Maytag appliance repair cost?',
        a: 'Maytag repairs in Charlotte typically run $100–$280, similar to Whirlpool repairs given the shared parts. Control board replacement is on the higher end; belt, lid switch, and thermostat repairs are on the lower end.',
      },
    ],
    relatedServices: [
      'washer-repair',
      'dryer-repair',
      'refrigerator-repair',
      'dishwasher-repair',
      'oven-repair',
    ],
  },

  {
    slug: 'frigidaire-appliance-repair',
    name: 'Frigidaire',
    priceRange: 'Budget',
    seoTitle: 'Frigidaire Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Frigidaire appliance repair in Charlotte, NC. Service on refrigerators, washers, dryers, ranges & freezers. Affordable, fast repair. Call (704) 512-0111.',
    h1: 'Frigidaire Appliance Repair in Charlotte, NC',
    intro:
      'Frigidaire (an Electrolux brand) offers solid value across the price spectrum and is one of the most common brands in Charlotte rental properties, starter homes, and apartment buildings. As a result, we service Frigidaire appliances daily. Parts compatibility with Electrolux keeps repair costs competitive.',
    strengths: [
      'Affordable upfront purchase price makes ownership accessible',
      'Wide retail availability at Home Depot, Lowe\'s, and Best Buy',
      'Compatible parts shared with Electrolux (broader parts network)',
      'Reliable basic functionality across refrigerators, washers, and ranges',
      'Broad product line covering every major appliance category',
    ],
    weaknesses: [
      {
        issue: 'Ice maker module failures on side-by-sides',
        detail:
          "Frigidaire's ice maker module is a frequent failure point in side-by-side refrigerators — the module stops cycling and ice production halts entirely. It's an affordable repair and we carry the replacement module for common models.",
      },
      {
        issue: 'Plastic component quality',
        detail:
          'Some internal plastic components in Frigidaire appliances are thinner and more prone to cracking or breaking than equivalent parts in higher-priced brands. Door handles, dispenser levers, and shelf supports are common breakage points.',
      },
      {
        issue: 'Control board longevity on Gallery series',
        detail:
          'Electronic control boards on the Frigidaire Gallery series can fail before major mechanical components — particularly on ranges and dishwashers. Board replacement costs can approach the economic threshold for repair vs. replace on budget units.',
      },
    ],
    commonAppliances: [
      'Side-by-side refrigerators',
      'Top-load washing machines',
      'Electric and gas dryers',
      'Electric and gas freestanding ranges',
      'Chest and upright freezers',
      'Dishwashers',
    ],
    faq: [
      {
        q: 'Is it worth repairing a Frigidaire appliance?',
        a: "It depends on the unit's age and the repair cost. For newer Frigidaire appliances (under 8 years), repair is often the better value. For budget-line Frigidaire units over 10 years old with a major failure, replacement may be more economical — we'll give you an honest comparison.",
      },
      {
        q: "What is the relationship between Frigidaire and Electrolux?",
        a: "Frigidaire is a brand owned by Electrolux, the Swedish appliance company. Many Frigidaire and Electrolux models share components and platforms. This is good news for repair — a wider parts ecosystem means better availability and competitive pricing.",
      },
      {
        q: 'Do you carry Frigidaire parts on your truck?',
        a: 'Yes — for the most common Frigidaire failures (ice maker modules, water inlet valves, lid switches, door gaskets), we carry the parts on the truck. Less common parts may require a follow-up visit, though we source them quickly.',
      },
      {
        q: 'How much does Frigidaire appliance repair cost?',
        a: "Frigidaire repairs in Charlotte typically run $80–$220 — among the more affordable ranges because parts costs are lower. The economics of repair vs. replace are worth discussing for older budget-line units with expensive failures.",
      },
      {
        q: 'Does HomeHeroes service Frigidaire Gallery and Professional series?',
        a: 'Yes — we service the full Frigidaire lineup including the entry-level Frigidaire brand, Frigidaire Gallery, and Frigidaire Professional. Professional series repairs may involve more expensive components.',
      },
    ],
    relatedServices: [
      'refrigerator-repair',
      'freezer-repair',
      'washer-repair',
      'dryer-repair',
      'ice-maker-repair',
    ],
  },

  {
    slug: 'kitchenaid-appliance-repair',
    name: 'KitchenAid',
    priceRange: 'Premium',
    seoTitle: 'KitchenAid Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'KitchenAid appliance repair in Charlotte, NC. Expert service on KitchenAid dishwashers, refrigerators, ovens & ranges. Same-day available. Call (704) 512-0111.',
    h1: 'KitchenAid Appliance Repair in Charlotte, NC',
    intro:
      "KitchenAid started with the iconic stand mixer but has grown into a full premium appliance brand built by Whirlpool's premium division. KitchenAid appliances combine professional kitchen aesthetics with serious cooking performance. As premium appliances built on a robust parts platform, they are excellent candidates for long-term maintenance and repair.",
    strengths: [
      'Premium build quality with professional kitchen aesthetics',
      'Strong parts ecosystem shared with Whirlpool (excellent availability)',
      'Dishwashers consistently rated among the quietest available (44–46 dBa)',
      'Chef-oriented range and oven designs with high BTU output',
      '5-year warranty on select models and components',
    ],
    weaknesses: [
      {
        issue: 'Dishwasher control panel failures',
        detail:
          "The touch control interface on certain KitchenAid dishwasher models (especially KDTE series) fails from repeated heat and moisture exposure near the door. Panel replacement restores full function.",
      },
      {
        issue: 'Ice maker failures in refrigerators',
        detail:
          'KitchenAid refrigerators use the same OEM ice maker assembly as other Whirlpool brand refrigerators — which means the same known failure patterns apply. The fix is the same and parts are readily available.',
      },
      {
        issue: 'Premium parts cost',
        detail:
          "While parts are available and the repair is straightforward, KitchenAid-specific components cost more than standard Whirlpool equivalents. Factor this into the repair vs. replace decision for older units.",
      },
    ],
    commonAppliances: [
      'Built-in dishwashers (the flagship KitchenAid product)',
      'French door and side-by-side refrigerators',
      'Wall ovens (single and double)',
      'Gas and electric freestanding and slide-in ranges',
      'Built-in and undercounter ice makers',
      'Cooktops (gas, electric, and induction)',
    ],
    faq: [
      {
        q: 'Do you repair KitchenAid stand mixers?',
        a: "We do not — stand mixer repair is a specialty service. HomeHeroes focuses on major kitchen and laundry appliances: refrigerators, dishwashers, ranges, ovens, washers, and dryers. For stand mixer repair, contact a KitchenAid authorized service center.",
      },
      {
        q: 'Why are KitchenAid dishwashers so quiet?',
        a: "KitchenAid's dishwashers use insulated tubs, special pump motor mounts, and multi-layer door insulation to achieve low decibel ratings (44–46 dBa). When they're running loudly, it usually indicates a worn pump impeller or loose spray arm — both repairable.",
      },
      {
        q: 'How long does a KitchenAid dishwasher last?',
        a: 'KitchenAid dishwashers typically last 12–15 years with proper maintenance. As a premium appliance, the cost of repair throughout its life is well justified by its performance and build quality.',
      },
      {
        q: "Is KitchenAid worth repairing vs. replacing?",
        a: "Almost always yes for units under 12 years old. The build quality justifies maintenance, and parts availability through the Whirlpool ecosystem keeps costs reasonable. We'll give you a clear cost comparison if it's a close call.",
      },
      {
        q: 'How much does KitchenAid appliance repair cost in Charlotte?',
        a: 'KitchenAid repairs in Charlotte typically run $150–$400. Premium parts cost slightly more than standard Whirlpool, but the repair process is the same. Dishwasher control panel and pump replacement is $150–$280.',
      },
    ],
    relatedServices: [
      'dishwasher-repair',
      'refrigerator-repair',
      'oven-repair',
      'ice-maker-repair',
      'stove-repair',
    ],
  },

  {
    slug: 'bosch-appliance-repair',
    name: 'Bosch',
    priceRange: 'Premium',
    seoTitle: 'Bosch Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Bosch appliance repair in Charlotte, NC. Expert service on Bosch dishwashers, washers, dryers & ovens. Quiet European quality maintained. Call (704) 512-0111.',
    h1: 'Bosch Appliance Repair in Charlotte, NC',
    intro:
      "Bosch appliances set the standard for quiet operation and European engineering quality. Their dishwashers are consistently rated the quietest available in the US, and their washing machines are known for exceptional energy efficiency. Bosch appliances are built to last and worth maintaining — HomeHeroes technicians service all Bosch series including the 500, 800, and Benchmark lines.",
    strengths: [
      'Quietest dishwashers available — as low as 38 dBa on Benchmark series',
      'Excellent energy efficiency (many dishwashers and washers are Energy Star rated)',
      'European-grade build quality with premium materials throughout',
      'Condensation drying system (no heating element, gentler on plastics)',
      'Strong brand reputation and high resale value',
    ],
    weaknesses: [
      {
        issue: 'Pump and drain assembly complexity',
        detail:
          "Bosch's multi-component pump housing is more complex to access and service than American brand equivalents. It requires specific tools and knowledge of the platform — not a job for an untrained technician.",
      },
      {
        issue: 'Parts lead time',
        detail:
          'Some Bosch-specific components — particularly for the Benchmark and 800 series — may require 3–5 business day shipping from the distributor. We source parts quickly and will communicate lead times upfront.',
      },
      {
        issue: 'Water quality sensitivity',
        detail:
          "Bosch dishwashers are sensitive to water hardness and mineral scale. Hard water can trigger error codes and reduce wash performance. Charlotte's moderately hard water makes periodic descaling important for Bosch owners.",
      },
    ],
    commonAppliances: [
      'Built-in dishwashers (300, 500, 800, and Benchmark series)',
      'Front-load washing machines and condensation dryers',
      'Counter-depth and French door refrigerators (500 series)',
      'Wall ovens with European convection',
      'Induction and gas cooktops',
    ],
    faq: [
      {
        q: "Why does my Bosch dishwasher show an error code?",
        a: "Bosch dishwasher error codes (E15, E24, E25 etc.) indicate specific failures: E15 means water in the base pan (float switch triggered — often from a slow drain leak); E24 means drain blocked; E25 means the drain pump is blocked. We diagnose and fix the root cause, not just clear the code.",
      },
      {
        q: "My dishes come out wet from the Bosch dishwasher — is it broken?",
        a: "Not necessarily. Bosch uses condensation drying rather than a heating element — dishes dry through residual heat absorbed during the hot wash. Plastics in particular come out less dry. Using rinse aid and running hot cycles helps. If it's significantly worse than before, the rinse aid dispenser may have failed.",
      },
      {
        q: "How much does Bosch dishwasher repair cost?",
        a: 'Bosch dishwasher repairs in Charlotte typically run $120–$300. Drain pump and circulation pump repairs are the most common and run $150–$250. Control board replacement is $200–$300. Parts may add 3–5 days if not in stock.',
      },
      {
        q: "Does HomeHeroes service Bosch Benchmark appliances?",
        a: 'Yes — we service all Bosch tiers including Benchmark. Benchmark-specific parts may have longer lead times and higher costs, but the repair process is the same as the 800 series.',
      },
      {
        q: "What is the quietest Bosch dishwasher and is it worth maintaining?",
        a: 'The Bosch Benchmark and 800 series models can run as low as 38–42 dBa. Yes — a premium Bosch dishwasher is absolutely worth maintaining. These units represent a significant investment and are built to last 15+ years with proper service.',
      },
    ],
    relatedServices: [
      'dishwasher-repair',
      'washer-repair',
      'dryer-repair',
      'oven-repair',
      'electric-cooktop-repair',
    ],
  },

  {
    slug: 'sub-zero-appliance-repair',
    name: 'Sub-Zero',
    priceRange: 'Luxury',
    seoTitle: 'Sub-Zero Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Sub-Zero appliance repair in Charlotte, NC. Expert service on Sub-Zero refrigerators, freezers & wine storage. Luxury appliance specialists. Call (704) 512-0111.',
    h1: 'Sub-Zero Appliance Repair in Charlotte, NC',
    intro:
      'Sub-Zero refrigerators are the gold standard in food preservation technology — built to last 20+ years with dual compressor systems and built-in air purification. When your Sub-Zero needs service, you want a technician who understands the platform depth. HomeHeroes services Sub-Zero refrigerators, freezer columns, undercounter units, and integrated wine storage in Charlotte.',
    strengths: [
      'Dual compressor system — separate compressors for refrigerator and freezer compartments',
      'Built and engineered to last 20–25 years with proper maintenance',
      'Industry-leading food preservation with NASA-developed technology',
      'Vacuum-sealed door handles and gaskets for superior sealing',
      'Built-in air purification (activated carbon + antimicrobial filter)',
      'Exceptional resale value — Sub-Zero adds value to the home',
    ],
    weaknesses: [
      {
        issue: 'High repair costs',
        detail:
          "Sub-Zero parts and labor cost significantly more than mass-market brands. This is expected and justified by the unit's longevity and performance — a $400 repair on a $8,000 refrigerator built to last 25 years is excellent value.",
      },
      {
        issue: 'Compressor and sealed system complexity',
        detail:
          "Sub-Zero's dual compressor system requires advanced diagnostic skills. Misdiagnosis can lead to unnecessary sealed system work. We verify each compressor's function independently before recommending sealed system repair.",
      },
      {
        issue: 'Older R-12 refrigerant in pre-1995 units',
        detail:
          "Sub-Zero units manufactured before approximately 1995 may use R-12 refrigerant (no longer manufactured). If a sealed system leak is found, refrigerant upgrade is required and adds cost. We can advise on the economics.",
      },
    ],
    commonAppliances: [
      'Built-in and integrated refrigerators (BI and IC series)',
      'Undercounter refrigerators and refrigerator drawers',
      'Built-in freezer columns',
      'Undercounter wine storage units',
      'Classic and PRO series refrigerators',
    ],
    faq: [
      {
        q: "How does Sub-Zero's dual compressor system work?",
        a: "Sub-Zero uses two separate compressors — one dedicated to the refrigerator and one dedicated to the freezer. This means each zone maintains its optimal humidity and temperature independently. If one compressor fails, the other continues working. It also means the refrigerator section is never exposed to freezer-cold air that can dry out food.",
      },
      {
        q: "Is it worth repairing a Sub-Zero refrigerator?",
        a: "Almost always yes. A Sub-Zero built in the last 20 years has significant remaining life. Even a $600–$800 compressor repair on a unit that cost $8,000–$12,000 and is built to last another 10 years is excellent economics. We will give you a transparent repair assessment.",
      },
      {
        q: "How often should a Sub-Zero refrigerator be serviced?",
        a: "Sub-Zero recommends annual condenser cleaning — this is the single most important maintenance task. The condenser is typically accessible from the bottom front grill. We offer maintenance visits specifically for Sub-Zero owners.",
      },
      {
        q: "My Sub-Zero is making an unusual noise — what could it be?",
        a: "Sub-Zero compressors and fans operate at very low noise levels, so any unusual sound is worth investigating. A buzzing compressor may indicate a failing start relay; a rattling condenser fan may need cleaning or bearing replacement. Call us for a diagnostic — catching it early is important.",
      },
      {
        q: "How much does Sub-Zero appliance repair cost?",
        a: 'Sub-Zero repairs in Charlotte typically run $200–$700 depending on the component. Condenser cleaning and minor repairs are lower; compressor or sealed system work is higher. Parts are OEM Sub-Zero and priced accordingly — we source them from authorized distributors.',
      },
    ],
    relatedServices: [
      'refrigerator-repair',
      'freezer-repair',
      'wine-cooler-repair',
      'ice-maker-repair',
    ],
  },

  {
    slug: 'viking-appliance-repair',
    name: 'Viking',
    priceRange: 'Luxury',
    seoTitle: 'Viking Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Viking appliance repair in Charlotte, NC. Expert service on Viking ranges, ovens, refrigerators & dishwashers. Licensed luxury appliance techs. Call (704) 512-0111.',
    h1: 'Viking Appliance Repair in Charlotte, NC',
    intro:
      'Viking brought professional-grade cooking equipment into the home kitchen. Their ranges and ovens are built to commercial standards — powerful, durable, and capable of delivering restaurant-quality cooking performance. When a Viking needs attention, HomeHeroes technicians provide the expert service that these premium appliances deserve.',
    strengths: [
      'Commercial-grade burner output up to 23,000 BTU per burner',
      'Heavy-duty cast iron grates and full stainless steel construction',
      'Large-capacity ovens with even heat distribution (VariSimmer)',
      'Strong brand prestige and contribution to home resale value',
      'Extensive product lineup including outdoor cooking and refrigeration',
    ],
    weaknesses: [
      {
        issue: 'Igniter failure on high-BTU burners',
        detail:
          "Commercial-strength igniters on Viking's sealed burners wear faster under the thermal stress of frequent heavy cooking at high output. Igniter replacement is a regular maintenance item for active Viking range owners.",
      },
      {
        issue: 'Quantum Control electronic board failures',
        detail:
          "Viking's proprietary Quantum Control technology in newer ranges is more complex and less field-serviceable than mechanical controls. Board failures require OEM replacement and can have parts lead times.",
      },
      {
        issue: 'Sealed burner system complexity',
        detail:
          'Viking sealed burner assemblies require specific tools and a thorough understanding of the gas delivery system to service properly. Improper repair of a gas appliance is dangerous — always use a qualified technician.',
      },
    ],
    commonAppliances: [
      'Professional gas ranges (30", 36", 48", and 60" wide)',
      'Built-in refrigerators and freezers',
      'Built-in dishwashers',
      'Wall ovens (single and double)',
      'Range hoods and ventilation',
      'Outdoor grills and refrigeration (Viking Outdoor)',
    ],
    faq: [
      {
        q: "How do I know if my Viking range igniter is failing?",
        a: "A failing Viking igniter will click repeatedly without lighting, require multiple attempts to ignite, or produce a weak spark that does not reliably light the burner. On a gas appliance with burners this powerful, reliable ignition is important for safety.",
      },
      {
        q: "Is Viking worth the investment and worth repairing?",
        a: "Viking ranges are a significant investment ($3,000–$15,000+) and are built to last decades with proper maintenance. Repairing a Viking range is almost always the right economic and practical decision — the alternative is a very expensive replacement.",
      },
      {
        q: "Can HomeHeroes service Viking outdoor grills?",
        a: "We focus on indoor appliances — refrigerators, ranges, ovens, dishwashers, and ventilation. Viking outdoor grill service requires specialized outdoor gas appliance certification. We can refer you to a qualified outdoor appliance technician.",
      },
      {
        q: "How much does Viking appliance repair cost?",
        a: "Viking repairs in Charlotte typically run $200–$600+ depending on the component. Igniter replacement is on the lower end; control board and gas valve work is higher. Parts are premium OEM Viking components priced accordingly.",
      },
      {
        q: "How often should a Viking range be serviced?",
        a: "We recommend an annual inspection of all gas connections, igniter function, and burner cap alignment. Heavy users (cooking daily on all burners) may benefit from igniter inspection every 6 months. The sealed burner system should be thoroughly cleaned annually.",
      },
    ],
    relatedServices: [
      'stove-repair',
      'oven-repair',
      'range-hood-repair',
      'refrigerator-repair',
      'dishwasher-repair',
    ],
  },

  {
    slug: 'thermador-appliance-repair',
    name: 'Thermador',
    priceRange: 'Luxury',
    seoTitle: 'Thermador Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Thermador appliance repair in Charlotte, NC. Expert service on Thermador ranges, cooktops, ovens & dishwashers. German-engineered luxury appliances. Call (704) 512-0111.',
    h1: 'Thermador Appliance Repair in Charlotte, NC',
    intro:
      'Thermador (a Bosch Group company) is known for the Star Burner and the Freedom Induction Cooktop — innovations that set the standard for high-end cooking appliances. As a premium German-engineered brand with Bosch Group quality standards behind it, Thermador appliances are built for decades of use and fully worth professional repair.',
    strengths: [
      'Patented Star Burner design with superior simmer capability (100-degree simmer)',
      'Freedom Induction system allows cooking vessels to be placed anywhere on the surface',
      'German Bosch Group engineering standards and quality control',
      'Quiet operation across the product line',
      'Excellent integration with kitchen cabinetry for seamless built-in look',
    ],
    weaknesses: [
      {
        issue: 'Freedom Induction control board sensitivity',
        detail:
          "Thermador's Freedom Induction system has complex electronics that manage the full-surface induction field. The control board requires specialist diagnosis and OEM replacement — non-OEM boards will not function correctly.",
      },
      {
        issue: 'Oven door gasket seal failure',
        detail:
          "Thermador's precision door seals maintain the oven cavity temperature but wear faster in high-heat applications like frequent high-temperature roasting or broiling. Gasket replacement restores heat retention.",
      },
      {
        issue: 'Parts premiums and availability',
        detail:
          'Thermador-specific components are priced at a premium compared to standard Bosch equivalents, and some parts may require ordering from specialized distributors. We will advise on lead times upfront.',
      },
    ],
    commonAppliances: [
      'Gas ranges and rangetops (Pro Harmony and Pro Grand series)',
      'Induction and gas cooktops (Freedom and Masterpiece)',
      'Wall ovens and steam ovens',
      'Built-in refrigerators and column refrigerators',
      'Dishwashers (Star Sapphire series)',
      'Range hoods and ventilation',
    ],
    faq: [
      {
        q: "What is Thermador's Star Burner and how does it affect repair?",
        a: "Thermador's Star Burner has a unique 5-point star shape that distributes flame more evenly and allows a lower minimum simmer setting than round burners. The star design means the burner cap and igniter assembly are Thermador-specific parts — we stock the most common ones.",
      },
      {
        q: "What is the Freedom Induction cooktop and why is it complex to repair?",
        a: "Thermador's Freedom Induction cooktop uses a full-surface induction grid that can sense and power any vessel placed anywhere on the surface. The electronics are significantly more complex than zone-based induction. Board-level repair requires specialist knowledge.",
      },
      {
        q: "How much does Thermador appliance repair cost?",
        a: "Thermador repairs in Charlotte typically run $200–$700+ depending on the component. Standard repairs like gaskets, igniters, and oven elements are on the lower end. Control board and induction system repairs are significantly higher.",
      },
      {
        q: "Is Thermador worth repairing?",
        a: "Yes — Thermador appliances represent a $3,000–$15,000 investment and are built to last 20+ years. Repair costs, even at premium levels, are justified by the longevity and performance of the appliance.",
      },
      {
        q: "Does HomeHeroes service Thermador steam ovens?",
        a: "Yes — we service Thermador steam ovens including the water tank, steam generator, and heating elements. Steam oven service requires familiarity with the water delivery and steam generation system, which our technicians have.",
      },
    ],
    relatedServices: [
      'stove-repair',
      'oven-repair',
      'electric-cooktop-repair',
      'range-hood-repair',
      'dishwasher-repair',
      'refrigerator-repair',
    ],
  },

  {
    slug: 'wolf-appliance-repair',
    name: 'Wolf',
    priceRange: 'Luxury',
    seoTitle: 'Wolf Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Wolf appliance repair in Charlotte, NC. Expert service on Wolf ranges, ovens & cooktops. Sub-Zero Wolf Group luxury appliances. Call (704) 512-0111.',
    h1: 'Wolf Appliance Repair in Charlotte, NC',
    intro:
      'Wolf (part of the Sub-Zero Group) manufactures the preferred range of professional chefs and serious home cooks. Built to the same standards as commercial restaurant equipment, Wolf appliances reward investment and maintenance with decades of reliable, high-performance cooking. HomeHeroes provides expert Wolf appliance repair in Charlotte for ranges, ovens, and cooktops.',
    strengths: [
      'Dual-stacked sealed burner system with up to 20,000 BTU output',
      'M Series convection ovens with precise, consistent heat distribution',
      'Commercial-grade stainless steel construction throughout',
      'Sealed burners for easy surface cleaning',
      'Strong brand prestige and positive impact on home resale value',
    ],
    weaknesses: [
      {
        issue: 'Electronic ignition complexity',
        detail:
          "Wolf's dual-stacked sealed burners have a more complex ignition pathway than single-stack designs. The dual-flame igniter system requires careful diagnosis to identify which igniter, valve, or spark module has failed.",
      },
      {
        issue: 'M Series oven control board',
        detail:
          "The proprietary control board in Wolf M Series ovens requires OEM replacement — third-party boards will not function with Wolf's dual-convection system. OEM boards are expensive but available through the Sub-Zero Wolf parts network.",
      },
      {
        issue: 'Parts lead time on specialty components',
        detail:
          "Less common Wolf-specific parts may take 5–7 business days to source. Wolf's service network has excellent documentation and we can often order parts before the second visit to minimize downtime.",
      },
    ],
    commonAppliances: [
      'Gas ranges (30", 36", 48", and 60" wide, dual-fuel available)',
      'Wall ovens (M Series single and double)',
      'E Series built-in ovens',
      'Gas and induction cooktops',
      'Outdoor grills (Wolf Outdoor Cooking)',
      'Built-in warming drawers',
    ],
    faq: [
      {
        q: "What is Wolf's dual-stacked burner system?",
        a: "Wolf's dual-stacked burner features two rings of flame — an outer ring for high-heat cooking up to 20,000 BTU, and an inner ring for precision simmering. This design allows both powerful searing and gentle sauce work from the same burner. The complexity means igniter and valve diagnosis is more involved than single-ring systems.",
      },
      {
        q: "Is Wolf worth repairing?",
        a: "Absolutely. A Wolf range costs $4,000–$20,000+ and is built to last 20+ years. Maintaining it with professional repair is a sound investment. The Sub-Zero Wolf parts network ensures OEM parts are available for current and past models.",
      },
      {
        q: "How much does Wolf appliance repair cost in Charlotte?",
        a: "Wolf repairs in Charlotte typically run $200–$700+ depending on the component. Igniter assembly and surface burner valve work is in the $200–$400 range. M Series oven control board replacement is $400–$700 including the OEM board and labor.",
      },
      {
        q: "What is the difference between Wolf and Sub-Zero — are they the same company?",
        a: "Wolf and Sub-Zero are both part of the Sub-Zero Group, a privately held company. Wolf focuses on cooking appliances; Sub-Zero focuses on refrigeration and preservation. They are complementary brands often specified together for high-end kitchen builds.",
      },
      {
        q: "My Wolf oven shows an F1 error — what does it mean?",
        a: "An F1 error on a Wolf oven typically indicates a control board or temperature sensor fault. We test the temperature sensor first (inexpensive fix) before diagnosing the control board. Do not continue using the oven until we diagnose the error.",
      },
    ],
    relatedServices: [
      'stove-repair',
      'oven-repair',
      'electric-cooktop-repair',
      'range-hood-repair',
    ],
  },

  {
    slug: 'miele-appliance-repair',
    name: 'Miele',
    priceRange: 'Luxury',
    seoTitle: 'Miele Appliance Repair Charlotte, NC | HomeHeroes',
    metaDescription:
      'Miele appliance repair in Charlotte, NC. Expert service on Miele dishwashers, washers, dryers & ovens. German precision maintained. Call (704) 512-0111.',
    h1: 'Miele Appliance Repair in Charlotte, NC',
    intro:
      "Miele is Germany's most premium appliance brand, engineered and tested to a 20-year lifespan standard (10,000 wash cycles for washing machines). Their dishwashers, washers, and dryers are among the most sophisticated domestic appliances available anywhere in the world. When a Miele needs service, it deserves a technician who understands the platform's precision.",
    strengths: [
      'Engineered and tested to a 20-year lifespan (10,000 wash cycles)',
      'Quietest washer/dryer pair available on the market',
      'AutoDos automatic detergent dispensing (TwinDos system)',
      'WiFiConn@ct smart monitoring and remote diagnostics',
      'Exceptional build quality on every component, including plastic parts',
    ],
    weaknesses: [
      {
        issue: 'Very high parts cost',
        detail:
          "Miele-specific components are significantly more expensive than parts for any other brand. The high cost is a function of the precision manufacturing tolerances and proprietary design — budget accordingly, and factor it into your repair vs. replace decision.",
      },
      {
        issue: 'Complexity requiring specialist knowledge',
        detail:
          "Miele's proprietary systems — TwinDos, EcoTech, CapDosing, HoneyComb drum — require trained technicians who understand the platform. An unfamiliar technician risks misdiagnosis and expensive unnecessary part replacement.",
      },
      {
        issue: 'Limited parts distributor availability',
        detail:
          'Not all parts distributors stock Miele parts. We source from authorized Miele distributors, but some specialty components may have 5–7 business day lead times. We will advise you before scheduling.',
      },
    ],
    commonAppliances: [
      'Front-load washing machines (W1 series)',
      'Condensation and heat pump dryers (T1 series)',
      'Built-in dishwashers (G 7000 series)',
      'Steam ovens and combi steam ovens',
      'Built-in coffee systems (CM series — not serviced by HomeHeroes)',
      'Built-in refrigerators and freezers',
    ],
    faq: [
      {
        q: "What does Miele's 20-year lifespan standard mean?",
        a: "Miele tests its washing machines to 10,000 wash cycles before release — equivalent to 20 years of average use at 5 loads per week. This is significantly more rigorous than the industry standard of 500–800 hours. The result is a machine that genuinely holds up to decades of use.",
      },
      {
        q: "Is Miele worth repairing?",
        a: "Yes — Miele appliances represent a $1,500–$3,000+ investment and are built to last 20 years. Even with premium parts costs, repair is almost always the right economic decision for units under 15 years old. We will be transparent about the cost.",
      },
      {
        q: "My Miele dishwasher shows a water inlet light — what is it?",
        a: "The water inlet fault light (Intake/Drain) usually indicates a blocked filter, a kinked drain hose, or a water supply issue. Less commonly it indicates a failed inlet valve or drain pump. We trace the cause systematically — it is often something simple.",
      },
      {
        q: "How much does Miele appliance repair cost?",
        a: "Miele repairs in Charlotte typically run $200–$600+ depending on the component. Labor rates are the same as other brands, but Miele-specific parts cost more. We provide a complete quote before starting any work.",
      },
      {
        q: "Does HomeHeroes service Miele built-in coffee systems?",
        a: "We do not — Miele built-in coffee systems require specialized coffee machine repair expertise that is outside our appliance service scope. We recommend contacting a dedicated Miele authorized service center for coffee system issues.",
      },
    ],
    relatedServices: [
      'washer-repair',
      'dryer-repair',
      'dishwasher-repair',
      'oven-repair',
      'refrigerator-repair',
    ],
  },
];

export function getBrand(slug: string): BrandPage | undefined {
  return brands.find(b => b.slug === slug);
}
