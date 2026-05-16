export interface Problem {
  title: string;
  detail: string;
}

export interface AgeRange {
  range: string;
  label: string;
  issues: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  imagePath: string;
  imageAlt: string;
  commonProblems: Problem[];
  ageTimeline: AgeRange[];
  repairVsReplace: {
    repairWhen: string[];
    replaceWhen: string[];
  };
  faq: FAQ[];
  relatedServices: string[];
  relatedBrands: string[];
}

export const services: ServicePage[] = [
  {
    slug: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    seoTitle: 'Refrigerator Repair Charlotte, NC | Same-Day Service | HomeHeroes',
    metaDescription:
      'Same-day refrigerator repair in Charlotte, NC. Expert techs fix cooling issues, ice makers, water dispensers & compressors. Licensed & insured. Call (704) 512-0111.',
    h1: 'Refrigerator Repair in Charlotte, NC',
    intro:
      'Your refrigerator runs 24 hours a day, 365 days a year — so when it stops working, you need fast, reliable repair. HomeHeroes technicians are dispatched same-day across Charlotte with the most common parts already on the truck. We diagnose and fix cooling failures, ice maker malfunctions, water dispenser leaks, and compressor issues on all major brands.',
    imagePath: '/images/hero/hero-technician.webp',
    imageAlt: 'HomeHeroes technician repairing a refrigerator in Charlotte NC',
    commonProblems: [
      {
        title: 'Refrigerator Not Cooling',
        detail:
          'A warm refrigerator is the most urgent failure we see. Causes range from a dirty condenser coil blocking airflow to a failing compressor or low refrigerant — we diagnose the exact cause on the first visit.',
      },
      {
        title: 'Ice Maker Not Working',
        detail:
          'Ice maker failures are common across Samsung, Whirlpool, and GE French door units. We test the water inlet valve, ice maker module, and temperature sensor to pinpoint the failure quickly.',
      },
      {
        title: 'Water Dispenser Leaking',
        detail:
          'Leaks from the door dispenser usually trace back to a cracked water line, failed inlet valve, or loose fitting behind the door panel. We carry replacement lines and valves on every truck.',
      },
      {
        title: 'Loud Compressor or Rattling',
        detail:
          'A knocking or rattling noise often means the condenser fan is hitting debris or a compressor mount has loosened. We identify whether the sound is a minor fix or an early sign of compressor failure.',
      },
      {
        title: 'Door Seal / Gasket Failure',
        detail:
          'A worn door gasket lets warm air in constantly, causing the compressor to work overtime and raising energy bills. Gasket replacement is a fast, affordable repair that extends fridge life significantly.',
      },
      {
        title: 'Temperature Too Cold — Freezing Food',
        detail:
          'When the thermostat or temperature sensor drifts, the fridge runs too cold and freezes produce and drinks. We recalibrate or replace the sensor and verify temperature stability before we leave.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Thermostat or temperature sensor out of calibration',
          'Evaporator or condenser fan motor failure',
          'Door gasket tearing or losing seal',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Evaporator coil freeze-up (defrost system failure)',
          'Water inlet valve failure',
          'Ice maker module replacement needed',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Compressor failure or hard starting',
          'Sealed system refrigerant leak',
          'Control board or main PCB failure',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Repair cost is under 50% of a comparable new unit',
        'Unit is under 10 years old and compressor is functioning',
        'Failure is an isolated part (fan, valve, gasket, sensor)',
        'The unit is a premium or built-in model worth preserving',
      ],
      replaceWhen: [
        'Compressor has failed on a unit over 12 years old',
        'Sealed system refrigerant leak detected (repair cost very high)',
        'Multiple simultaneous failures across different systems',
        'Unit uses R-12 refrigerant (pre-1995) — upgrade cost is high',
      ],
    },
    faq: [
      {
        q: 'How much does refrigerator repair cost in Charlotte?',
        a: 'Most refrigerator repairs in Charlotte range from $150 to $400 depending on the part and labor involved. A simple thermostat or fan motor replacement is on the lower end; compressor or sealed system work is higher. We provide a firm quote before any work begins.',
      },
      {
        q: 'How long does a refrigerator last?',
        a: 'Most refrigerators last 10–15 years with proper maintenance. Side-by-side models tend to have slightly shorter lifespans; French door units vary by brand. Premium built-in units (Sub-Zero, etc.) are engineered to last 20+ years.',
      },
      {
        q: 'My fridge stopped cooling overnight — what happened?',
        a: 'A sudden overnight failure is most often caused by compressor failure, a refrigerant leak, or a failed start relay. Less severe causes include a dead condenser fan motor. Call us immediately — food safety is at risk and we prioritize same-day visits for this type of failure.',
      },
      {
        q: 'Do you carry refrigerator parts on your truck?',
        a: 'Yes. Our technicians stock the most commonly replaced parts — water inlet valves, thermostats, evaporator fans, door gaskets, and ice maker modules — for the top brands. Most repairs are completed on the first visit.',
      },
      {
        q: 'Is it worth fixing a 10-year-old refrigerator?',
        a: "It depends heavily on the failure type. A 10-year-old fridge with a blown door gasket or bad fan motor is absolutely worth repairing. The same unit with a failed compressor is borderline — we'll give you an honest assessment and let you decide.",
      },
    ],
    relatedServices: ['freezer-repair', 'ice-maker-repair', 'dishwasher-repair'],
    relatedBrands: [
      'samsung-appliance-repair',
      'lg-appliance-repair',
      'whirlpool-appliance-repair',
      'ge-appliance-repair',
      'sub-zero-appliance-repair',
    ],
  },

  {
    slug: 'freezer-repair',
    name: 'Freezer Repair',
    seoTitle: 'Freezer Repair Charlotte, NC | Chest & Upright Freezer | HomeHeroes',
    metaDescription:
      'Expert freezer repair in Charlotte, NC. We fix chest freezers, upright freezers, and built-in freezer units. Same-day service. Call (704) 512-0111.',
    h1: 'Freezer Repair in Charlotte, NC',
    intro:
      'A failed freezer means hundreds of dollars of food at risk within hours. HomeHeroes provides same-day freezer repair in Charlotte for chest freezers, upright freezers, and built-in freezer columns. Our technicians diagnose and fix temperature failures, frost buildup, and compressor issues before your food thaws.',
    imagePath: '/images/hero/hero-technician.webp',
    imageAlt: 'HomeHeroes technician repairing an upright freezer in Charlotte NC',
    commonProblems: [
      {
        title: 'Freezer Not Freezing',
        detail:
          'When your freezer stops maintaining 0°F, the cause is typically a failing thermostat, dirty condenser coils, or a compressor on its way out. We diagnose the root cause and fix it the same day.',
      },
      {
        title: 'Excessive Frost or Ice Buildup',
        detail:
          'Auto-defrost freezers should never accumulate heavy frost. When they do, the defrost heater, defrost timer, or defrost thermostat has failed. We test all three components and replace the faulty one.',
      },
      {
        title: 'Temperature Fluctuating',
        detail:
          'A freezer that cycles between too warm and too cold may have a failing thermostat, intermittent compressor, or a door seal that is not holding. Temperature swings cause freezer burn and food degradation.',
      },
      {
        title: 'Loud Motor Humming or Clicking',
        detail:
          'A constant loud hum often means the compressor is struggling to start or the condenser fan motor is failing. A clicking sound after startup usually indicates a bad start relay — a quick and inexpensive fix.',
      },
      {
        title: 'Freezer Burn on Food',
        detail:
          'Freezer burn is a symptom, not the problem. It indicates the freezer has been running above 0°F or experiencing temperature swings. We identify the underlying cause — usually a door seal or thermostat issue.',
      },
      {
        title: 'Door Seal Not Sealing',
        detail:
          'A compromised door gasket allows warm, humid air to enter constantly, causing rapid frost buildup and a struggling compressor. Gasket replacement is one of the most cost-effective freezer repairs available.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Defrost timer failure (auto-defrost models)',
          'Door gasket tearing or warping',
          'Temperature control calibration issues',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Evaporator fan motor bearing wear',
          'Thermostat drift causing inconsistent temperature',
          'Defrost heater element failure',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Compressor failure or hard starting',
          'Sealed system refrigerant loss',
          'Control board failure on electronic models',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Unit is under 10 years old with an isolated component failure',
        'Defrost system failure — a straightforward, affordable repair',
        'Door gasket or seal replacement needed',
        'Compressor start relay failure — inexpensive and quick to fix',
      ],
      replaceWhen: [
        'Compressor failure on a unit over 12 years old',
        'Sealed system refrigerant leak — repair often exceeds unit value',
        'Chest freezer under $300 replacement value with major repair needed',
        'Multiple component failures at the same time',
      ],
    },
    faq: [
      {
        q: 'Why is my chest freezer not freezing?',
        a: 'The most common causes are a failed thermostat, dirty condenser coils preventing heat dissipation, or a compressor that has stopped running. We diagnose all three on the first visit and carry replacement thermostats and relays on the truck.',
      },
      {
        q: 'How do I know if my freezer compressor is bad?',
        a: 'Signs of a bad compressor include: the freezer feels warm to the touch, you hear clicking but the unit never cools down, or the unit is completely silent when it should be running. We can test compressor output with our diagnostic equipment.',
      },
      {
        q: 'Is frost buildup normal?',
        a: 'For manual-defrost chest freezers, some frost accumulation is normal and expected — you defrost it periodically. For auto-defrost upright freezers, visible frost buildup is not normal and signals a failed defrost component that needs attention.',
      },
      {
        q: 'Can a freezer that stopped working suddenly be fixed?',
        a: 'Usually yes, especially if the failure is recent. A start relay failure, for example, causes sudden complete shutdown and is a $30–$60 part. The sooner you call, the better — prolonged non-operation with refrigerant issues can lead to more damage.',
      },
      {
        q: 'How much does freezer repair cost in Charlotte?',
        a: 'Most freezer repairs in Charlotte range from $100 to $350. Simple fixes like a start relay or door gasket are on the low end. Defrost system repairs typically run $120–$200. Compressor work is higher and we will assess whether it makes economic sense for your unit.',
      },
    ],
    relatedServices: ['refrigerator-repair', 'ice-maker-repair', 'wine-cooler-repair'],
    relatedBrands: [
      'whirlpool-appliance-repair',
      'ge-appliance-repair',
      'frigidaire-appliance-repair',
      'maytag-appliance-repair',
      'sub-zero-appliance-repair',
    ],
  },

  {
    slug: 'washer-repair',
    name: 'Washer Repair',
    seoTitle: 'Washer Repair Charlotte, NC | Top Load & Front Load | HomeHeroes',
    metaDescription:
      'Same-day washing machine repair in Charlotte, NC. Top load and front load experts. Fix leaks, spin issues, error codes & more. Call (704) 512-0111.',
    h1: 'Washer Repair in Charlotte, NC',
    intro:
      'A broken washing machine throws your entire household routine off track. HomeHeroes offers same-day washer repair across Charlotte for both top-load and front-load machines. Whether you are dealing with standing water in the drum, a machine that will not spin, error codes you cannot decode, or a leak soaking your laundry room floor — we fix it fast.',
    imagePath: '/images/services/washer-dryer-repair.webp',
    imageAlt: 'HomeHeroes technician servicing a front-load washer in Charlotte NC',
    commonProblems: [
      {
        title: 'Washer Not Draining',
        detail:
          'Standing water in the drum after a cycle is almost always a drain pump clog or pump motor failure. We clear blockages and replace failed pump assemblies, usually completing the repair in one visit.',
      },
      {
        title: 'Excessive Vibration or Banging',
        detail:
          'Violent shaking during the spin cycle often means worn shock absorbers or suspension rods — especially in front-loaders. We also check for uneven loads and confirm the unit is properly leveled.',
      },
      {
        title: "Won't Spin or Agitate",
        detail:
          'A washer that fills but refuses to agitate or spin likely has a faulty lid switch (top-loaders), failed door latch (front-loaders), worn drive belt, or a motor control board issue.',
      },
      {
        title: 'Water Leaking from Door or Hose',
        detail:
          'Front-load door boot seals are a common failure point — they develop tears and mold buildup over time. We also check hose connections, pump housing, and the door latch gasket for any leak source.',
      },
      {
        title: "Won't Start or Showing Error Codes",
        detail:
          'F-codes and E-codes on the display are the washer pointing to a specific system failure. We interpret the codes, run diagnostics, and repair the root cause — not just clear the error.',
      },
      {
        title: 'Water Not Heating Properly',
        detail:
          'Many modern washers have internal heating elements for hot-water cycles. A failed thermistor or heating element leaves clothes less clean. We test water temperature and component function.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Drain pump clog from foreign objects (coins, socks)',
          'Kinked or pinched inlet/drain hose',
          'Door boot seal tear on front-loaders',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Drum bearing wear causing rumbling during spin',
          'Drive belt wear or breakage',
          'Lid switch or door latch failure',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Transmission failure on top-loaders',
          'Drum bearing and spider arm failure',
          'Main control board or motor controller failure',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Unit is under 10 years old with a single component failure',
        'Repair cost is under 50% of the new unit price',
        'Drum bearings, belts, or pump — all cost-effective repairs',
        'High-efficiency front-loader worth preserving for its energy savings',
      ],
      replaceWhen: [
        'Transmission failure on a top-loader over 10 years old',
        'Spider arm fracture on a front-loader drum',
        'Control board failure combined with other worn components',
        'Unit is a budget model under $400 with a major mechanical failure',
      ],
    },
    faq: [
      {
        q: 'Why is my washer not draining?',
        a: 'The most common cause is a drain pump clog from a small item (coin, sock, lint buildup) blocking the impeller. The second most common cause is a failed drain pump motor. We clear clogs and replace pumps, typically on the first visit.',
      },
      {
        q: 'What do washer error codes mean?',
        a: 'Error codes like F21, E3, or LE are manufacturer-specific codes pointing to particular system failures. F21 on Whirlpool means drain issue; LE on LG means motor or stator problem. We read, interpret, and repair to the root cause.',
      },
      {
        q: 'Top load vs. front load — which is harder to repair?',
        a: 'Front-load washers are more mechanically complex and generally more expensive to repair — especially drum bearing replacements, which require significant disassembly. Top-loaders are simpler and typically less expensive to service.',
      },
      {
        q: 'Why does my washer shake violently during spin?',
        a: 'Violent shaking is most often worn shock absorbers (front-loaders) or suspension springs (top-loaders). It can also be an unbalanced load or the machine being unlevel. We inspect all four causes and correct the problem.',
      },
      {
        q: 'How much does washer repair cost in Charlotte?',
        a: 'Most washer repairs in Charlotte run $100 to $300. Drain pump replacement, belt replacement, and door boot seal repairs are in the middle of that range. Drum bearing replacement is typically on the higher end. We quote before starting.',
      },
    ],
    relatedServices: ['dryer-repair', 'dishwasher-repair', 'refrigerator-repair'],
    relatedBrands: [
      'whirlpool-appliance-repair',
      'lg-appliance-repair',
      'samsung-appliance-repair',
      'maytag-appliance-repair',
      'ge-appliance-repair',
    ],
  },

  {
    slug: 'dryer-repair',
    name: 'Dryer Repair',
    seoTitle: 'Dryer Repair Charlotte, NC | Gas & Electric Dryers | HomeHeroes',
    metaDescription:
      'Fast dryer repair in Charlotte, NC. Gas and electric dryer experts. Fix no heat, slow drying, squealing drums & more. Licensed & insured. Call (704) 512-0111.',
    h1: 'Dryer Repair in Charlotte, NC',
    intro:
      'A dryer that takes two cycles to dry a load is costing you time, energy, and money. HomeHeroes technicians service gas and electric dryers across Charlotte, same-day. We fix everything from blown thermal fuses and burned heating elements to seized drums and motor failures — and we always check your vent for dangerous lint buildup while we are there.',
    imagePath: '/images/services/washer-dryer-repair.webp',
    imageAlt: 'HomeHeroes technician servicing a gas dryer in Charlotte NC',
    commonProblems: [
      {
        title: 'Dryer Not Producing Heat',
        detail:
          'No heat is the most common dryer complaint. For electric dryers, the heating element or thermal fuse is usually the culprit. For gas dryers, we check the igniter, gas valve coils, and flame sensor. We carry heating elements and fuses for all major brands.',
      },
      {
        title: 'Takes 2+ Cycles to Dry Clothes',
        detail:
          'Slow drying is almost always a restricted airflow problem — a clogged lint trap, blocked exhaust duct, or a weak blower motor. This is also a fire hazard and should be addressed immediately.',
      },
      {
        title: 'Loud Squealing or Thumping',
        detail:
          'Squealing points to a worn drum bearing, felt seal, or idler pulley. Thumping usually means the drum support rollers have flat-spotted. Both are straightforward mechanical repairs.',
      },
      {
        title: 'Drum Not Turning',
        detail:
          'A drum that will not rotate but the motor runs typically has a broken or stretched drive belt. If the motor is not running at all, we check the motor start switch and thermal fuse first.',
      },
      {
        title: "Dryer Won't Start At All",
        detail:
          'Complete failure to start often comes down to a blown thermal fuse, a faulty door switch, or a failed start switch. These are quick diagnostic checks and usually fast, affordable fixes.',
      },
      {
        title: 'Thermal Fuse Keeps Blowing',
        detail:
          'A thermal fuse that blows repeatedly is a warning sign of restricted airflow or a cycling thermostat failure. Simply replacing the fuse without fixing the root cause is a fire hazard — we always find and fix the underlying problem.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Thermal fuse blowing (often from vent restriction)',
          'Thermostat calibration drift',
          'Drive belt stretch or premature wear',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Heating element burnout (electric dryers)',
          'Idler pulley and drum roller wear',
          'Drum seal and felt wear causing noise',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Motor failure or seizure',
          'Drum bearing failure',
          'Main control board or timer failure',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Heating element replaced — one of the most cost-effective appliance repairs',
        'Thermal fuse blown once — affordable repair with vent cleaning included',
        'Belt, pulley, or drum roller wear — mechanical repair under $150',
        'Unit is under 10 years old with a single system failure',
      ],
      replaceWhen: [
        'Motor seized on a unit over 12 years old',
        'Drum cracked or structurally damaged',
        'Cost of repair exceeds 60% of comparable new dryer',
        'Thermal fuse blowing repeatedly despite vent cleaning (overheating root cause)',
      ],
    },
    faq: [
      {
        q: 'Why is my dryer not heating?',
        a: 'For electric dryers, the most common causes are a blown thermal fuse or a burned-out heating element. For gas dryers, we look at the igniter, gas valve coils, and flame sensor. All of these are diagnosable and repairable on the first visit.',
      },
      {
        q: 'Gas vs. electric dryer — which is cheaper to repair?',
        a: 'Electric dryers are typically less expensive to repair. Heating element replacement on an electric dryer is straightforward and the part is inexpensive. Gas dryer igniter and valve work involves more components and requires a gas-certified technician.',
      },
      {
        q: 'Is a dryer that takes 2 cycles to dry clothes normal?',
        a: "No — a properly functioning dryer should fully dry a standard load in one cycle. Double-cycling almost always means clogged lint buildup in the duct, a weak blower, or a heating element running at reduced capacity. It's also a lint fire risk.",
      },
      {
        q: 'How often should I clean the dryer vent?',
        a: 'At minimum once every 12 months, or more frequently if you do many loads per week. A clogged vent is the single leading cause of dryer fires and also the top reason thermal fuses blow. We offer vent cleaning with every repair.',
      },
      {
        q: 'How much does dryer repair cost in Charlotte?',
        a: 'Dryer repairs in Charlotte typically run $80 to $250. Thermal fuse replacement is on the lower end; heating element replacement typically runs $120–$180 including labor. Drum bearing and motor work is on the higher end.',
      },
    ],
    relatedServices: ['washer-repair', 'range-hood-repair', 'oven-repair'],
    relatedBrands: [
      'whirlpool-appliance-repair',
      'maytag-appliance-repair',
      'lg-appliance-repair',
      'samsung-appliance-repair',
      'ge-appliance-repair',
    ],
  },

  {
    slug: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    seoTitle: 'Dishwasher Repair Charlotte, NC | Same-Day Service | HomeHeroes',
    metaDescription:
      'Expert dishwasher repair in Charlotte, NC. Fix leaks, draining issues, cleaning problems & error codes. Same-day available. Call (704) 512-0111.',
    h1: 'Dishwasher Repair in Charlotte, NC',
    intro:
      'When your dishwasher leaves dishes dirty, pools water in the bottom, or starts leaking onto your kitchen floor, you need a technician who can fix it today. HomeHeroes provides same-day dishwasher repair across Charlotte, servicing all major brands including Bosch, Whirlpool, GE, KitchenAid, and Miele. We fix drain issues, cleaning failures, door latches, and error codes.',
    imagePath: '/images/services/dishwasher-repair.webp',
    imageAlt: 'HomeHeroes technician repairing a built-in dishwasher in Charlotte NC',
    commonProblems: [
      {
        title: 'Dishes Not Getting Clean',
        detail:
          'Consistently dirty dishes — especially on the top rack — usually mean a clogged or broken spray arm, a failed circulation pump, or water that is not reaching the right temperature. We inspect the entire wash system.',
      },
      {
        title: 'Water Pooling in the Bottom',
        detail:
          'Standing water after a cycle means the drain pump is not working or the drain filter is completely blocked. We clear the filter, test pump function, and replace the pump motor if needed.',
      },
      {
        title: 'Door Latch Broken',
        detail:
          'A dishwasher with a broken latch will not start — it is a safety interlock. We carry replacement door latch assemblies for the most common brands and can usually complete the repair in under an hour.',
      },
      {
        title: 'Error Codes (E1, E2, F1, etc.)',
        detail:
          'Dishwasher error codes point to specific failures — E1 on Bosch means water not heating; F8 on Whirlpool often indicates a drain issue. We diagnose to the root cause, not just clear the code.',
      },
      {
        title: 'Cloudy Spots on Glassware',
        detail:
          'Cloudy or etched glassware is most commonly caused by mineral deposits from Charlotte\'s moderately hard water, not a mechanical failure. We check the rinse aid dispenser and recommend water softener solutions if needed.',
      },
      {
        title: 'Water Leaking onto Floor',
        detail:
          'Leaks can originate from the door seal, spray arm housing, pump seal, or a cracked tub. We perform a full leak diagnosis with the unit running to trace the exact source before recommending a repair.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Spray arm clog from mineral buildup or food debris',
          'Drain filter becoming impacted',
          'Door latch wear or misalignment',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Drain pump motor failure',
          'Door seal and gasket degradation',
          'Circulation pump impeller wear',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Control board or electronic panel failure',
          'Wash motor replacement needed',
          'Inner door panel and latch assembly wear',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Unit is under 7 years old and part cost is under $200',
        'Single component failure — pump, latch, or spray arm',
        'Premium brand (Bosch, Miele, KitchenAid) worth preserving',
        'Repair is a simple door latch, filter, or spray arm fix',
      ],
      replaceWhen: [
        'Control board failure on a low-end unit over 8 years old',
        'Tub cracked or structurally compromised',
        'Multiple simultaneous failures — pump, board, and door seal',
        'Budget unit under $350 replacement value with motor failure',
      ],
    },
    faq: [
      {
        q: 'Why are my dishes still dirty after the cycle?',
        a: 'The most common causes are clogged spray arms (top rack not rotating), a failing circulation pump that is not creating sufficient water pressure, or water that is not reaching the correct temperature. We test all three during our diagnostic.',
      },
      {
        q: 'Why is water pooling in the bottom of my dishwasher?',
        a: 'Standing water means the drain pump is not evacuating water — either the pump motor has failed or the drain filter is completely blocked. We clear the filter, test the pump, and replace the motor assembly if needed.',
      },
      {
        q: "How hard is Charlotte's water and does it affect dishwashers?",
        a: "Charlotte's water is moderately hard — enough to cause mineral scale buildup inside spray arms and on heating elements over time. We recommend monthly rinse aid use and periodic citric acid cleaning cycles to prevent buildup.",
      },
      {
        q: 'Is it worth fixing a dishwasher vs. buying new?',
        a: "If your dishwasher is under 7 years old and the repair cost is under $200, repair almost always makes financial sense. If it's over 10 years old and needs a control board or pump motor, replacing may be more economical — we'll give you an honest comparison.",
      },
      {
        q: 'How much does dishwasher repair cost in Charlotte?',
        a: 'Most dishwasher repairs in Charlotte run $100 to $280. Door latch replacement and spray arm repair are on the lower end. Drain pump replacement typically runs $150–$220 including labor.',
      },
    ],
    relatedServices: ['refrigerator-repair', 'washer-repair', 'oven-repair'],
    relatedBrands: [
      'bosch-appliance-repair',
      'kitchenaid-appliance-repair',
      'whirlpool-appliance-repair',
      'ge-appliance-repair',
      'miele-appliance-repair',
    ],
  },

  {
    slug: 'stove-repair',
    name: 'Stove Repair',
    seoTitle: 'Stove Repair Charlotte, NC | Gas & Electric Stoves | HomeHeroes',
    metaDescription:
      'Stove repair in Charlotte, NC. Gas and electric stoves fixed same-day. Burners, igniters, control knobs & surfaces. Licensed technicians. Call (704) 512-0111.',
    h1: 'Stove Repair in Charlotte, NC',
    intro:
      'A stove with broken burners or a clicking igniter that will not light disrupts every meal. HomeHeroes provides same-day stove repair in Charlotte for gas and electric models. We fix igniter failures, surface burner problems, broken control knobs, and gas-related issues — all with licensed, insured technicians who arrive ready to work.',
    imagePath: '/images/services/oven-range-repair.webp',
    imageAlt: 'HomeHeroes technician repairing a gas stove range in Charlotte NC',
    commonProblems: [
      {
        title: "Burner Won't Light or Ignite",
        detail:
          'Gas burners that will not light often have a clogged burner cap, misaligned electrode, or a failed spark module. We clean ports, test spark output, and replace the igniter or module if needed.',
      },
      {
        title: 'Igniter Clicks Continuously Without Lighting',
        detail:
          'A constantly clicking igniter is usually caused by moisture in the igniter well after a spill or boilover, or by a failing spark module sending constant current. We dry, clean, and test — or replace the module.',
      },
      {
        title: 'Surface Burner Will Not Heat (Electric)',
        detail:
          'On electric stoves, a cold surface element is usually a burned-out coil element or a failed infinite switch controlling that burner. We test the element with a meter and replace the specific failed part.',
      },
      {
        title: 'Control Knob Broken or Melted',
        detail:
          'Cracked or melted control knobs are a safety concern — a knob that will not fully turn to OFF is dangerous. We carry replacement knob sets for most major brands and can replace them in minutes.',
      },
      {
        title: 'Gas Smell Near Stove',
        detail:
          'A gas odor near the stove — especially when burners are off — requires immediate attention. Do not use the appliance. Turn off the gas supply and call us. We test valves, connections, and orifices for leaks.',
      },
      {
        title: 'Cooktop Surface Cracked',
        detail:
          'A cracked glass-ceramic cooktop surface (on smooth-top electric stoves) is a safety hazard and must be replaced. We source and install OEM glass tops for all major brands.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Igniter failure from spill contamination',
          'Spark module malfunction',
          'Burner cap misalignment causing poor combustion',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Surface burner switch (infinite switch) failure on electric models',
          'Control board or spark module degradation',
          'Igniter wire harness insulation wear',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Gas valve body wear or seal failure',
          'Complete wiring harness replacement needed',
          'Surface element burnout on electric (multiple burners)',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Single burner igniter or element failure — fast, affordable fix',
        'Control knob replacement — straightforward repair',
        'Gas spark module replacement — typically under $100 in parts',
        'Unit is under 10 years old with isolated burner issue',
      ],
      replaceWhen: [
        'Multiple burner failures simultaneously on older unit',
        'Gas valve body failure — parts cost approaches unit value',
        'Cooktop surface cracked on a budget unit near end of life',
        'Internal wiring harness failure with additional component wear',
      ],
    },
    faq: [
      {
        q: 'Why does my gas stove igniter keep clicking?',
        a: 'Continuous clicking is almost always caused by moisture inside the igniter well after a boilover or spill — or by a failing spark module that cannot stop sending current. Remove the burner cap, dry thoroughly, and if it persists, call us for a module replacement.',
      },
      {
        q: 'Is it safe to cook on a stove with one broken burner?',
        a: "For electric stoves, using the working burners while one is dead is generally safe. For gas stoves, it depends on the failure type. If you smell gas or suspect a gas leak, stop using the appliance immediately and call us — gas leaks are never safe.",
      },
      {
        q: 'Can cracked glass on an electric stove be repaired?',
        a: 'A cracked glass-ceramic cooktop surface cannot be patched — it must be fully replaced. We source OEM replacement glass tops for all major brands and install them correctly, including resealing around the trim.',
      },
      {
        q: 'Gas vs. electric stove — which is cheaper to fix?',
        a: 'The repair cost is typically similar for most common failures. Gas igniter and module work runs $80–$200; electric infinite switch or element replacement is in the same range. More complex gas valve work is higher.',
      },
      {
        q: 'How much does stove repair cost in Charlotte?',
        a: 'Most stove repairs in Charlotte run $100 to $350 depending on the failure. Single burner igniter or infinite switch repair is on the lower end. Glass cooktop surface replacement and gas valve work are on the higher end.',
      },
    ],
    relatedServices: [
      'oven-repair',
      'electric-cooktop-repair',
      'range-hood-repair',
      'microwave-repair',
    ],
    relatedBrands: [
      'ge-appliance-repair',
      'whirlpool-appliance-repair',
      'samsung-appliance-repair',
      'kitchenaid-appliance-repair',
      'viking-appliance-repair',
      'wolf-appliance-repair',
    ],
  },

  {
    slug: 'oven-repair',
    name: 'Oven Repair',
    seoTitle: 'Oven Repair Charlotte, NC | Gas & Electric Ovens | HomeHeroes',
    metaDescription:
      'Same-day oven repair in Charlotte, NC. Fix oven not heating, temperature issues, broken elements, door problems & error codes. Call (704) 512-0111.',
    h1: 'Oven Repair in Charlotte, NC',
    intro:
      'An oven that will not reach temperature, has a broken bake element, or is stuck in self-clean mode can bring your kitchen to a halt. HomeHeroes provides same-day oven repair in Charlotte for gas and electric ovens, wall ovens, and double ovens. We bring the parts, run the diagnostics, and complete most repairs on the first visit.',
    imagePath: '/images/services/oven-repair-technicians-charlotte.webp',
    imageAlt: 'Oven repair technicians diagnosing luxury range appliance in Charlotte NC',
    commonProblems: [
      {
        title: 'Oven Not Reaching Set Temperature',
        detail:
          'An oven that runs 25–75°F below the set temperature typically has a failed temperature sensor or a miscalibrated thermostat. We verify with a calibrated probe thermometer and replace the sensor or recalibrate the control.',
      },
      {
        title: 'Bottom Bake Element Burned Out',
        detail:
          'A visibly broken or blistered bake element will not heat food from the bottom, causing undercooked or unevenly cooked meals. Element replacement is one of the quickest oven repairs — usually completed in 30 minutes.',
      },
      {
        title: 'Door Will Not Seal or Close Properly',
        detail:
          'A poorly sealing oven door causes massive heat loss and uneven cooking. We inspect the door hinges (often bent or snapped) and the oven door gasket, replacing whichever has failed.',
      },
      {
        title: 'Self-Clean Cycle Locks and Will Not Unlock',
        detail:
          "A door that won't unlock after a self-clean cycle is usually a failed door latch motor or a control board that didn't receive the 'cool' signal. This is frustrating but fixable — we carry latch assemblies for common models.",
      },
      {
        title: 'Digital Display Dead or Showing Error Codes',
        detail:
          'A blank display or persistent error code usually points to a control board (ERC) failure. We test the board, confirm the failure, and source a replacement — often available as a remanufactured unit at lower cost.',
      },
      {
        title: 'Broil Element Not Glowing',
        detail:
          'A broil element that will not heat visibly has either burned out entirely or its circuit has an open. We test continuity and replace the element if failed — typically a 20-minute repair.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Bake element failure from manufacturing defect',
          'Door gasket tearing or losing heat seal',
          'Temperature sensor drifting out of calibration',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Control board (ERC) failure from heat and voltage spikes',
          'Thermostat wear causing temperature instability',
          'Igniter degradation on gas ovens (slow to light)',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Multiple element failures (bake and broil)',
          'Control board failure with display issues',
          'Wiring harness insulation breakdown',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Single element failure — bake or broil — one of the best repair values',
        'Temperature sensor replacement — fast and inexpensive',
        'Door hinge or gasket repair — extends oven life significantly',
        'Unit is under 12 years old and structurally sound',
      ],
      replaceWhen: [
        'Control board failure on a budget oven over 10 years old',
        'Multiple simultaneous failures across different systems',
        'Gas oven with valve and igniter failures on an aging unit',
        'Wall oven where cabinet cutout limits replacement options',
      ],
    },
    faq: [
      {
        q: 'How do I know if my oven temperature is off?',
        a: 'The simplest test is an oven thermometer — place it in the center of the oven, set to 350°F, and wait 20 minutes. If it reads more than 25°F off, you have a sensor or thermostat issue. We verify with calibrated equipment and recalibrate or replace.',
      },
      {
        q: 'Can an oven door that will not close be repaired?',
        a: 'Yes — door closure issues are almost always either worn or bent door hinges or a torn door gasket. Both are parts-replaceable repairs. We check both on every door complaint.',
      },
      {
        q: 'My oven is stuck in self-clean mode — what do I do?',
        a: "Don't try to force the door open. The lock is a safety mechanism that's engaged electrically. Let it cool completely (2–3 hours), then try cycling power at the breaker. If the door still won't release, it's a door latch motor or control board issue — call us.",
      },
      {
        q: 'How long do ovens last?',
        a: 'Electric ovens typically last 15–20 years; gas ovens similarly. The most failure-prone components are the bake element and control board — both of which are repairable well into the life of the unit.',
      },
      {
        q: 'How much does oven repair cost in Charlotte?',
        a: 'Oven repairs in Charlotte typically run $120 to $400. Bake or broil element replacement is on the lower end at $120–$180. Control board replacement is $200–$350. Temperature sensor replacement is usually $100–$150.',
      },
    ],
    relatedServices: [
      'stove-repair',
      'electric-cooktop-repair',
      'range-hood-repair',
      'microwave-repair',
    ],
    relatedBrands: [
      'ge-appliance-repair',
      'kitchenaid-appliance-repair',
      'whirlpool-appliance-repair',
      'wolf-appliance-repair',
      'thermador-appliance-repair',
      'viking-appliance-repair',
    ],
  },

  {
    slug: 'microwave-repair',
    name: 'Microwave Repair',
    seoTitle: 'Microwave Repair Charlotte, NC | Built-In & Countertop | HomeHeroes',
    metaDescription:
      'Microwave repair in Charlotte, NC. Fix not heating, sparking, turntable issues & door switches. Built-in and countertop microwaves. Call (704) 512-0111.',
    h1: 'Microwave Repair in Charlotte, NC',
    intro:
      'A microwave that runs but will not heat, sparks inside, or will not start at all needs professional attention — not a YouTube workaround. HomeHeroes technicians service built-in over-the-range microwaves and countertop units in Charlotte. We diagnose magnetron failures, door switch faults, and control board issues safely, because microwave high-voltage components are genuinely dangerous to handle without training.',
    imagePath: '/images/services/microwave-repair.webp',
    imageAlt: 'HomeHeroes technician repairing an over-the-range microwave in Charlotte NC',
    commonProblems: [
      {
        title: 'Microwave Runs But Will Not Heat',
        detail:
          "A microwave that spins and lights up but doesn't heat food has lost magnetron function or has a failed high-voltage diode or capacitor. All three components require careful high-voltage discharge procedures before diagnosis.",
      },
      {
        title: 'Sparking or Arcing Inside Cavity',
        detail:
          'Sparking inside the microwave cavity is a safety emergency — stop using it immediately. Common causes include a damaged waveguide cover, metallic contamination, or a failing magnetron. We inspect and replace the waveguide cover as a first step.',
      },
      {
        title: 'Turntable Not Spinning',
        detail:
          'A non-spinning turntable is usually a failed turntable motor or a broken drive coupling. This is one of the simpler microwave repairs and does not involve high-voltage components.',
      },
      {
        title: 'Door Switch Failure (Will Not Start)',
        detail:
          'Microwaves have 2–3 door interlock switches that must all close to allow operation. A failed switch prevents the unit from starting at all. Replacing door switches is the most common microwave repair we perform.',
      },
      {
        title: 'Control Panel Buttons Not Responding',
        detail:
          'Unresponsive touchpad buttons usually indicate a failed membrane switch or control board. Sometimes it is just a stuck key — we diagnose which and repair or replace the appropriate component.',
      },
      {
        title: 'Loud Buzzing or Humming',
        detail:
          'Unusual buzzing during operation often points to a failing magnetron, a failing cooling fan, or a high-voltage diode that is arcing. These are high-voltage symptoms and should not be ignored.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Door interlock switch failure from heavy use',
          'Turntable motor failure',
          'Interior light bulb burnout',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'High-voltage diode failure',
          'Capacitor degradation',
          'Control board or touchpad failure',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Magnetron failure (primary heating component)',
          'High-voltage transformer failure',
          'Complete control board replacement needed',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Built-in over-the-range model worth preserving to match kitchen trim',
        'Door switch or turntable repair — inexpensive and quick',
        'Premium countertop unit over $300 replacement value',
        'Unit is under 7 years old with a single component failure',
      ],
      replaceWhen: [
        'Budget countertop unit under $150 with magnetron failure',
        'Magnetron replacement cost exceeds 70% of new unit cost',
        'Cavity damage (arcing burn marks on walls)',
        'Transformer failure on an older countertop model',
      ],
    },
    faq: [
      {
        q: 'Why is my microwave not heating?',
        a: "A running microwave that produces no heat has lost its magnetron function, or a supporting high-voltage component (diode or capacitor) has failed. All of these are inside the high-voltage circuit and must be diagnosed by a trained technician — the capacitor can store a lethal charge even when unplugged.",
      },
      {
        q: 'Is a sparking microwave dangerous?',
        a: 'Yes — stop using it immediately. Sparking can cause a fire if the waveguide cover is burning or the magnetron is arcing. Unplug it and call us. In many cases, a damaged waveguide cover is the cause and is an inexpensive repair.',
      },
      {
        q: 'Is it worth repairing a countertop microwave?',
        a: "Only if the replacement value of the unit exceeds about $300. A $129 countertop microwave with a dead magnetron is not worth repairing — buy a new one. A $500 countertop unit or any built-in over-the-range microwave is usually worth repairing.",
      },
      {
        q: 'What is the magnetron and how much does it cost to replace?',
        a: 'The magnetron is the vacuum tube that generates the microwave radiation that heats your food. It is the most expensive component in the appliance. The part alone runs $100–$200 for common models, plus labor. Built-in unit repairs are more labor-intensive.',
      },
      {
        q: 'How much does built-in microwave repair cost in Charlotte?',
        a: 'Built-in over-the-range microwave repairs typically run $80 to $250 depending on the failure. Door switch replacement is on the lower end. Magnetron or control board replacement is higher and we will give you a quote before proceeding.',
      },
    ],
    relatedServices: ['oven-repair', 'stove-repair', 'range-hood-repair', 'electric-cooktop-repair'],
    relatedBrands: [
      'samsung-appliance-repair',
      'ge-appliance-repair',
      'lg-appliance-repair',
      'whirlpool-appliance-repair',
      'kitchenaid-appliance-repair',
    ],
  },

  {
    slug: 'range-hood-repair',
    name: 'Range Hood Repair',
    seoTitle: 'Range Hood Repair Charlotte, NC | Vent Hood & Exhaust Fan | HomeHeroes',
    metaDescription:
      'Range hood and vent hood repair in Charlotte, NC. Fix fans, lights, motors & controls. Ducted and recirculating hoods. Call (704) 512-0111.',
    h1: 'Range Hood Repair in Charlotte, NC',
    intro:
      'A range hood that is not exhausting smoke and grease is more than an inconvenience — it is a ventilation problem that affects air quality throughout your home. HomeHeroes repairs ducted and recirculating range hoods in Charlotte, fixing fan motor failures, control board issues, lighting, and speed control problems for all major hood brands.',
    imagePath: '/images/services/emergency-repair-tech.webp',
    imageAlt: 'HomeHeroes technician repairing a range hood exhaust fan in Charlotte NC',
    commonProblems: [
      {
        title: 'Exhaust Fan Not Working or Very Weak',
        detail:
          'A fan that will not spin at all usually has a failed motor or a burned-out fan capacitor. A fan that spins weakly may have a clogged grease filter restricting airflow or a motor losing torque due to bearing wear.',
      },
      {
        title: 'Range Hood Lights Not Turning On',
        detail:
          'Light failures are often burned-out bulbs, but can also indicate a failed lighting circuit board or transformer. We check the bulbs first and the circuit if the bulb is not the issue.',
      },
      {
        title: 'Loud Rattling or Vibrating',
        detail:
          'Rattling during operation is commonly caused by a loose or bent fan blade, accumulated grease in the motor housing, or a loose duct connection. We inspect the entire hood assembly including the duct run.',
      },
      {
        title: "Hood Won't Turn On at All",
        detail:
          'A range hood with no response to any control (fan or light) may have a failed power control board, a blown fuse inside the unit, or a wiring issue. We trace the electrical path and find the break.',
      },
      {
        title: 'Grease Filters Clogged Causing Motor Strain',
        detail:
          'Heavily clogged grease filters cause the fan motor to overheat and eventually fail. We clean or replace the filters and inspect the motor for heat damage. Regular filter maintenance prevents motor failure.',
      },
      {
        title: 'Speed Controls Not Functioning',
        detail:
          'Speed control failures — where the fan only runs on one speed or the selector does not respond — typically indicate a failed speed control board or switch assembly. We test and replace the control module.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Light bulb burnout (halogen or LED)',
          'Grease filter becoming impacted from heavy use',
          'Push-button switch wear or sticking',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Fan motor bearing wear causing noise or reduced airflow',
          'Speed control board degradation',
          'Duct connection loosening from vibration',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Complete motor burnout from accumulated grease and heat',
          'Full control board failure',
          'Housing and blower wheel corrosion from grease buildup',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Fan motor failure — cost-effective repair on most hoods',
        'Speed control board replacement — typically under $100 in parts',
        'Built-in or professional hood integrated into kitchen design',
        'Unit is under 8 years old with a single component failure',
      ],
      replaceWhen: [
        'Budget hood under $150 with complete motor failure',
        'Hood body corroded or structurally compromised from grease',
        'Multiple simultaneous failures across motor, controls, and lights',
        'Older recirculating hood where replacement improves ventilation significantly',
      ],
    },
    faq: [
      {
        q: 'Why is my range hood fan so weak?',
        a: "The most common reason for weak airflow is grease-clogged filters reducing the effective opening area. A fan motor losing torque from bearing wear is the second cause. We check the filters first — if clean, we move to motor diagnostics.",
      },
      {
        q: 'Ducted vs. recirculating range hood — which is better to repair?',
        a: 'Ducted hoods are more cost-effective to repair long-term because the fan motor is the main failure point and motors are readily available. Recirculating hoods add charcoal filter maintenance costs. For any kitchen where ducting is possible, we recommend keeping the ducted hood working.',
      },
      {
        q: 'Can I repair a range hood or should I replace it?',
        a: "If the fan motor has failed, repair is almost always more cost-effective than full replacement — especially for built-in or professional hoods. We'll quote both options so you can decide.",
      },
      {
        q: 'How often should range hood filters be cleaned?',
        a: 'Monthly cleaning is recommended for frequent cooks; every 2–3 months for lighter use. Grease-saturated filters are the primary cause of motor strain and eventual burnout. Stainless mesh filters are dishwasher-safe; baffle filters should be soaked in hot water with degreaser.',
      },
      {
        q: 'How much does range hood repair cost in Charlotte?',
        a: 'Range hood repairs typically run $80 to $200 in Charlotte. Simple button switch or light circuit repairs are on the lower end. Fan motor replacement, including labor, usually runs $120–$180.',
      },
    ],
    relatedServices: ['stove-repair', 'oven-repair', 'electric-cooktop-repair', 'microwave-repair'],
    relatedBrands: [
      'ge-appliance-repair',
      'kitchenaid-appliance-repair',
      'whirlpool-appliance-repair',
      'bosch-appliance-repair',
    ],
  },

  {
    slug: 'ice-maker-repair',
    name: 'Ice Maker Repair',
    seoTitle: 'Ice Maker Repair Charlotte, NC | Refrigerator & Standalone | HomeHeroes',
    metaDescription:
      'Ice maker repair in Charlotte, NC. Fix no ice, small cubes, bad-tasting ice & leaks. Refrigerator ice makers and standalone units. Call (704) 512-0111.',
    h1: 'Ice Maker Repair in Charlotte, NC',
    intro:
      'Whether your refrigerator ice maker has stopped producing ice entirely or your standalone unit is making hollow, bad-tasting cubes, HomeHeroes has the parts and expertise to fix it. We service refrigerator-integrated ice makers (including Samsung French door units with known ice maker problems), undercounter ice makers, and freestanding units across Charlotte.',
    imagePath: '/images/hero/hero-technician.webp',
    imageAlt: 'HomeHeroes technician repairing a refrigerator ice maker in Charlotte NC',
    commonProblems: [
      {
        title: 'Ice Maker Not Producing Ice',
        detail:
          'Complete ice production failure typically means the water inlet valve has failed or the ice maker module has stopped cycling. We test water supply pressure, the valve solenoid, and module operation to pinpoint the cause.',
      },
      {
        title: 'Producing Very Small or Hollow Cubes',
        detail:
          'Small or hollow cubes indicate the ice maker is not receiving a full supply of water. Causes include a partially restricted water inlet valve, low water pressure, or a kinked water supply line.',
      },
      {
        title: 'Ice Has Bad Taste or Odor',
        detail:
          'Bad-tasting ice is usually caused by an expired water filter, buildup in the water line, or mold in the ice bin. We recommend replacing the filter (every 6 months) and sanitizing the ice bin and water path.',
      },
      {
        title: 'Overflows — Too Much Ice',
        detail:
          'An ice maker that overproduces and dumps too much ice usually has a failed ice level arm sensor or a stuck ice maker module that cannot sense the bin fill level. We test the sensor and module.',
      },
      {
        title: 'Leaking Water onto Floor',
        detail:
          'Water leaking below the refrigerator or ice maker is often a cracked fill tube, a failed inlet valve seat, or a drain issue in undercounter units. We trace the leak path and repair the specific component.',
      },
      {
        title: 'Ice Clumping Together in the Bin',
        detail:
          'Ice that clumps into large blocks is usually caused by the unit sitting in a warm area, the bin door seal failing, or the ice bin not being used frequently enough. In some Samsung units, it indicates the known freeze-up defect.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Water inlet valve filter clogging from sediment',
          'Ice bin sensor arm stuck or out of position',
          'Fill tube freezing due to temperature miscalibration',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Ice maker module or harvest timer failure',
          'Water inlet valve solenoid failure',
          'Mold and mineral buildup in water path requiring sanitization',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Full ice maker assembly replacement needed',
          'Water line deterioration causing leaks',
          'Control board affecting ice maker cycle timing',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Water inlet valve failure — direct part replacement, affordable',
        'Ice maker module failure — replacement module is usually under $80',
        'Samsung French door freeze-up issue — defrost kit fix is cost-effective',
        'Unit under 8 years old with a single component failure',
      ],
      replaceWhen: [
        'Full sealed system failure in undercounter ice maker',
        'Multiple component failures simultaneously',
        'Older undercounter unit where full replacement improves performance significantly',
        'Water line and module both failed on a very old unit',
      ],
    },
    faq: [
      {
        q: 'Why is my refrigerator ice maker not making ice?',
        a: "Start by checking that the water supply line is connected and the shutoff valve is open. If water supply is good, the issue is typically a failed water inlet valve (most common) or a failed ice maker module. We test both on the first visit.",
      },
      {
        q: 'How do I know if it is the water inlet valve or ice maker module?',
        a: 'If you hear the ice maker cycling but no water fills the tray, the inlet valve is usually the issue. If the module is completely silent and the arm is not moving, the module itself has likely failed. We test both with diagnostic equipment to confirm.',
      },
      {
        q: 'Why does my ice taste bad?',
        a: 'Bad-tasting ice is almost always caused by an old water filter that needs replacing — every 6 months is recommended. If the filter is fresh, we check for mold growth in the ice bin or mineral scale buildup in the water line.',
      },
      {
        q: 'How long do ice maker water filters last?',
        a: 'Most manufacturers recommend replacing refrigerator water filters every 6 months regardless of water quality. In Charlotte, with moderately hard water, sticking to this schedule prevents mineral buildup that can slow water flow and affect ice quality.',
      },
      {
        q: 'How much does ice maker repair cost in Charlotte?',
        a: 'Ice maker repairs typically run $100 to $250 in Charlotte. Water inlet valve replacement is usually $100–$150 including parts and labor. Full ice maker module replacement runs $120–$200. Samsung French door defrost kit repairs are typically $150–$200.',
      },
    ],
    relatedServices: ['refrigerator-repair', 'freezer-repair', 'wine-cooler-repair'],
    relatedBrands: [
      'samsung-appliance-repair',
      'lg-appliance-repair',
      'whirlpool-appliance-repair',
      'ge-appliance-repair',
      'sub-zero-appliance-repair',
    ],
  },

  {
    slug: 'wine-cooler-repair',
    name: 'Wine Cooler Repair',
    seoTitle: 'Wine Cooler Repair Charlotte, NC | Compressor & Thermoelectric | HomeHeroes',
    metaDescription:
      'Wine cooler repair in Charlotte, NC. Fix temperature issues, compressor problems & fan failures on all brands. Compressor and thermoelectric units. Call (704) 512-0111.',
    h1: 'Wine Cooler Repair in Charlotte, NC',
    intro:
      'A wine cooler that runs too warm or swings wildly in temperature can damage your entire collection. HomeHeroes repairs both compressor-based and thermoelectric wine coolers across Charlotte. We service undercounter built-in units, freestanding coolers, and high-end integrated wine storage from Sub-Zero, Liebherr, and other premium brands.',
    imagePath: '/images/hero/hero-technician.webp',
    imageAlt: 'HomeHeroes technician repairing a wine cooler in Charlotte NC',
    commonProblems: [
      {
        title: 'Wine Cooler Not Cooling or Running Too Warm',
        detail:
          'The most critical wine cooler failure — temperatures above 65°F can damage wine quickly. We diagnose whether it is a thermostat failure, a failed cooling fan, a compressor issue, or a thermoelectric module that has burned out.',
      },
      {
        title: 'Temperature Swings Damaging Wine',
        detail:
          'Inconsistent temperature control causes wine to expand and contract, affecting quality over time. Swings often trace to a failing thermostat, a condenser that needs cleaning, or a door seal that is not holding properly.',
      },
      {
        title: 'Excessive Condensation on Door',
        detail:
          'Heavy condensation on the exterior or interior of the door usually signals a compromised door gasket allowing warm, humid air to enter. Gasket replacement resolves this quickly.',
      },
      {
        title: 'Compressor Cycling Rapidly On and Off',
        detail:
          'A compressor that starts and stops every few minutes (short cycling) is struggling — usually caused by dirty condenser coils, a failing start relay, or a refrigerant charge issue.',
      },
      {
        title: 'Fan Motor Noise',
        detail:
          'A buzzing or grinding sound from the cooling fan indicates bearing wear. Fan motor replacement is a straightforward repair that restores quiet operation and proper airflow.',
      },
      {
        title: 'Thermoelectric Unit Barely Cooling',
        detail:
          'Thermoelectric coolers are less powerful than compressor units and more sensitive to ambient temperature. A unit that is no longer reaching temperature often has a failed Peltier module or a clogged heatsink that needs cleaning.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Thermostat calibration drift',
          'Door gasket seal failure',
          'Fan blade obstruction causing noise',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Compressor start relay failure',
          'Evaporator fan motor bearing wear',
          'Condenser coil fouling from dust and lint',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Compressor failure (compressor-type units)',
          'Full thermoelectric Peltier module replacement needed',
          'Control board failure affecting temperature regulation',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Thermostat or fan motor failure — affordable, direct replacement',
        'Door gasket replacement — extends cooler life significantly',
        'Compressor start relay failure — inexpensive fix on compressor units',
        'Unit original cost exceeded $500 and is under 10 years old',
      ],
      replaceWhen: [
        'Thermoelectric module failure on a budget unit under $200',
        'Compressor failure on a thermoelectric-hybrid older unit',
        'Multiple component failures at the same time',
        'Budget countertop unit where replacement cost is under the repair quote',
      ],
    },
    faq: [
      {
        q: 'Thermoelectric vs. compressor wine cooler — which is better to repair?',
        a: 'Compressor-based wine coolers are significantly more cost-effective to repair. They use standard refrigeration components that are widely available and replaceable. Thermoelectric units use Peltier modules that are less powerful, less precise, and harder to source for repair.',
      },
      {
        q: 'Why is my wine cooler not cooling enough?',
        a: 'On compressor units, the cause is usually a dirty condenser coil (clean first), a failed thermostat, or a low refrigerant charge. On thermoelectric units, the Peltier module degrades over time and a failing unit simply cannot keep up with the ambient heat load.',
      },
      {
        q: 'Is it worth repairing a wine cooler?',
        a: "If the unit's original cost was over $300, repair is almost always worthwhile for a single component failure. Built-in undercounter units are especially worth repairing because replacement requires matching the cabinet opening dimensions.",
      },
      {
        q: 'What temperature should a wine cooler run?',
        a: 'Red wines are best stored at 55–65°F; white wines at 45–55°F. Dual-zone coolers maintain separate ranges. Any sustained temperature above 68°F or repeated fluctuations will degrade wine quality over time.',
      },
      {
        q: 'How much does wine cooler repair cost in Charlotte?',
        a: 'Wine cooler repairs in Charlotte typically run $120 to $300. Fan motor and thermostat repairs are on the lower end. Compressor relay replacement is mid-range. Compressor replacement is at the high end and we will assess whether it makes economic sense.',
      },
    ],
    relatedServices: ['refrigerator-repair', 'freezer-repair', 'ice-maker-repair'],
    relatedBrands: [
      'sub-zero-appliance-repair',
      'lg-appliance-repair',
      'samsung-appliance-repair',
      'ge-appliance-repair',
    ],
  },

  {
    slug: 'electric-cooktop-repair',
    name: 'Electric Cooktop Repair',
    seoTitle: 'Electric Cooktop Repair Charlotte, NC | Smooth Top & Coil | HomeHeroes',
    metaDescription:
      'Electric cooktop repair in Charlotte, NC. Fix burners that won\'t heat, cracked glass, control board failures & more. Coil and smooth-top experts. Call (704) 512-0111.',
    h1: 'Electric Cooktop Repair in Charlotte, NC',
    intro:
      'An electric cooktop that will not heat, has a cracked glass surface, or has a burner stuck on high is both a cooking disruption and a safety hazard. HomeHeroes repairs smooth-top glass-ceramic cooktops and traditional coil cooktops across Charlotte — fixing infinite switch failures, replacing elements, and sourcing OEM glass tops for all major brands.',
    imagePath: '/images/services/oven-range-repair.webp',
    imageAlt: 'HomeHeroes technician repairing an electric glass cooktop in Charlotte NC',
    commonProblems: [
      {
        title: 'Burner Element Will Not Heat Up',
        detail:
          'A cold surface element on a coil cooktop usually has a burned-out coil or a failed infinite switch controlling that burner. We test the element with a meter and check the switch to identify which has failed.',
      },
      {
        title: 'Smooth-Top Glass Cracked or Shattered',
        detail:
          'A crack across the cooking surface is a safety hazard — stop using the cooktop immediately. We source and install OEM replacement glass tops for all major brands, including Whirlpool, GE, Samsung, and KitchenAid.',
      },
      {
        title: 'Control Knob or Touch Panel Not Responding',
        detail:
          'Unresponsive controls may indicate a failed infinite switch (knob models) or a control board/membrane switch failure (touch-panel models). We test both and replace the failed component.',
      },
      {
        title: 'Burner Stuck on High — Will Not Turn Off',
        detail:
          'A burner that will not turn off is an infinite switch failure and a fire hazard. Turn off the breaker for the cooktop immediately and call us. Infinite switch replacement resolves this safely.',
      },
      {
        title: 'Infinite Switch Failure',
        detail:
          'The infinite switch regulates the power cycle to each burner. When it fails, the burner either will not heat or heats at only one level. Switch replacement is one of the most common and affordable electric cooktop repairs.',
      },
      {
        title: 'One Cooking Zone Completely Dead',
        detail:
          'A completely dead zone on a smooth-top cooktop usually has a failed radiant element underneath the glass or a failed zone control circuit on the board. We diagnose which is responsible before ordering parts.',
      },
    ],
    ageTimeline: [
      {
        range: '1–3 Years',
        label: 'Early Life',
        issues: [
          'Surface coil element burnout from manufacturing defect',
          'Infinite switch failure from heavy use',
          'Trim ring damage from improper cookware',
        ],
      },
      {
        range: '4–7 Years',
        label: 'Mid Life',
        issues: [
          'Control board degradation from heat cycles',
          'Wiring connector corrosion at element terminals',
          'Glass top thermal stress cracking (smooth-top)',
        ],
      },
      {
        range: '8–12+ Years',
        label: 'Late Life',
        issues: [
          'Full glass cooktop surface replacement needed',
          'Complete control board failure',
          'Multiple infinite switch failures across zones',
        ],
      },
    ],
    repairVsReplace: {
      repairWhen: [
        'Infinite switch replacement — one of the best repair values in appliances',
        'Coil element replacement on a coil cooktop — inexpensive and quick',
        'Single zone failure on a premium cooktop worth preserving',
        'Glass top crack on a high-end unit — OEM glass replacement is cost-effective',
      ],
      replaceWhen: [
        'Glass top crack on a budget cooktop where glass cost exceeds unit value',
        'Multiple zone failures simultaneously on an aging smooth-top',
        'Control board failure on an older budget unit',
        'Cooktop where compatible OEM glass top is no longer manufactured',
      ],
    },
    faq: [
      {
        q: 'Can a cracked glass cooktop be repaired?',
        a: "A crack on the glass-ceramic cooking surface cannot be bonded or patched — it must be fully replaced. A crack spanning the surface will grow and can shatter. We source OEM replacement glass tops for most major brands.",
      },
      {
        q: "Why won't my electric burner turn off?",
        a: 'A burner stuck at high heat is an infinite switch failure — the switch is mechanically stuck in the closed (on) position. This is a fire hazard. Turn off the circuit breaker for the cooktop immediately and call us for same-day service.',
      },
      {
        q: 'Smooth top vs. coil cooktop — which is cheaper to repair?',
        a: 'Coil cooktops are significantly cheaper and simpler to repair. Replacing a coil element is a $20–$40 part and a 10-minute swap. Smooth-top repairs are more expensive — glass replacement especially so — but the cooking performance difference is significant.',
      },
      {
        q: 'Can I use a cracked glass cooktop?',
        a: "No. A cracked cooking surface can shatter under heat, potentially causing burns and electrical hazards. Stop using the cooktop and call us. Continuing to use a cracked surface also risks damage to the underlying heating elements.",
      },
      {
        q: 'How much does electric cooktop repair cost in Charlotte?',
        a: 'Electric cooktop repairs in Charlotte typically run $100 to $300. Infinite switch replacement is $100–$150. Coil element replacement is $80–$120. Glass top surface replacement varies by brand and size — typically $150–$300 for the glass plus labor.',
      },
    ],
    relatedServices: ['stove-repair', 'oven-repair', 'range-hood-repair', 'microwave-repair'],
    relatedBrands: [
      'ge-appliance-repair',
      'whirlpool-appliance-repair',
      'samsung-appliance-repair',
      'kitchenaid-appliance-repair',
      'thermador-appliance-repair',
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return services.find(s => s.slug === slug);
}
