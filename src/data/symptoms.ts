export interface DiagnosisRow {
  symptom: string;
  quickCheck: string;
  possibleCause: string;
}

export interface SafeTip {
  title: string;
  detail: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface SymptomPage {
  slug: string;
  appliance: string;
  symptomShort: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  commonSigns: string[];
  diagnosisTable: DiagnosisRow[];
  safeTips: SafeTip[];
  whenToCall: string[];
  repairVsReplace: { repairWhen: string[]; replaceWhen: string[] };
  faq: FAQ[];
  relatedServiceSlug: string;
  relatedBrandSlugs: string[];
  relatedSymptomSlugs: string[];
}

export const symptoms: SymptomPage[] = [

  // ─── REFRIGERATORS ──────────────────────────────────────────

  {
    slug: 'refrigerator-not-cooling',
    appliance: 'Refrigerator',
    symptomShort: 'Not Cooling',
    seoTitle: 'Refrigerator Not Cooling in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Refrigerator not cooling in Charlotte, NC? Learn the most common causes, safe troubleshooting steps, and when to call a technician. Same-day repair available. Call (704) 512-0111.',
    h1: 'Refrigerator Not Cooling in Charlotte, NC?',
    intro: 'A warm refrigerator is more than an inconvenience — it puts your food and family at risk. Most cooling failures have a handful of root causes that a trained technician can diagnose and fix in a single visit. Here\'s what to check before you call, and when to stop troubleshooting and pick up the phone.',
    commonSigns: [
      'Food is spoiling faster than normal',
      'Freezer is working but fridge section feels warm',
      'Temperature reading is higher than your set point',
      'Compressor is running constantly without cooling',
      'Condensation or moisture collecting inside',
      'Water pooling on bottom shelf or under crisper drawers',
    ],
    diagnosisTable: [
      { symptom: 'Fridge warm, freezer cold', quickCheck: 'Listen behind the rear panel for the evaporator fan', possibleCause: 'Evaporator fan motor failure — cold air can\'t circulate to fridge section' },
      { symptom: 'Neither section cooling', quickCheck: 'Touch the compressor (black cylinder at back bottom) — is it running or hot?', possibleCause: 'Compressor failure or refrigerant leak — requires professional repair' },
      { symptom: 'Cooling inconsistent, temp drifts', quickCheck: 'Confirm thermostat dial hasn\'t been bumped; test with a thermometer', possibleCause: 'Thermostat drift or failing temperature sensor' },
      { symptom: 'Thick frost on back freezer wall', quickCheck: 'Is auto-defrost running? Check for ice sheet on evaporator coils', possibleCause: 'Defrost heater, thermostat, or timer failure' },
      { symptom: 'Door feels warm, fridge not cooling', quickCheck: 'Run paper-slip test on door seal all the way around', possibleCause: 'Door gasket failure allowing warm air infiltration' },
    ],
    safeTips: [
      { title: 'Verify your temperature settings', detail: 'Refrigerators should be set to 35–38°F and freezers to 0°F. Someone may have accidentally adjusted the dial. Confirm with a standalone thermometer.' },
      { title: 'Test your door seals', detail: 'Close the door on a strip of paper. If it slides out easily, the gasket is worn and warm air is getting in. Check all four sides.' },
      { title: 'Clean the condenser coils', detail: 'Coils on the bottom grille or back of the unit can accumulate dust and restrict airflow. Unplug the refrigerator, vacuum the coils gently with a brush attachment.' },
      { title: 'Clear blocked interior vents', detail: 'Food items pushed against the back panel can block cold air flow from the freezer into the fridge. Rearrange to leave 1–2 inches clearance at the vents.' },
      { title: 'Power-cycle the refrigerator', detail: 'Unplug the unit for 5 minutes, then plug back in. This can reset the control board and resolve temporary electronic glitches.' },
    ],
    whenToCall: [
      'The compressor is completely silent and not warm to the touch — it may have seized',
      'You hear a loud click every few minutes with no cooling — start relay failure',
      'There is a chemical or musty smell — possible refrigerant leak (do not inhale, ventilate the room)',
      'The fridge remains warm for 24 hours after all the above checks',
      'You see visible ice or frost on the sealed system tubing at the back',
    ],
    repairVsReplace: {
      repairWhen: [
        'Appliance is under 10 years old and the compressor is still running',
        'Failure is isolated — a single fan, sensor, or defrost component',
        'Repair cost is under 50% of a comparable new unit',
        'It\'s a premium brand (Sub-Zero, Viking) worth long-term investment',
      ],
      replaceWhen: [
        'Compressor has failed on a unit 12+ years old',
        'There is a refrigerant leak in the sealed system on an older freon unit',
        'Multiple components have failed simultaneously',
        'Unit uses R-12 refrigerant (pre-1994) — refrigerant replacement is very expensive',
      ],
    },
    faq: [
      { q: 'Why would my refrigerator suddenly stop cooling overnight?', a: 'Sudden cooling failure is most often the start relay (a small component that helps the compressor start), the evaporator fan motor, or a compressor that has reached end of life. A power surge can also knock out the control board. These are all diagnosable and typically repairable in one visit.' },
      { q: 'My freezer is cold but my fridge is warm — is that the compressor?', a: 'Not necessarily. If your freezer is maintaining temperature, the compressor is likely working. The most common cause of this exact symptom is a failed evaporator fan motor — the fan that circulates cold air from the freezer into the refrigerator section. It\'s a straightforward repair.' },
      { q: 'Is it safe to eat food from a warm refrigerator?', a: 'The FDA recommends discarding perishable food that has been above 40°F for more than 2 hours. If your fridge has been warm overnight, err on the side of caution with meat, dairy, eggs, and leftovers. Hard cheeses, condiments, and sealed drinks are generally safe.' },
      { q: 'How much does refrigerator repair cost in Charlotte, NC?', a: 'Most refrigerator repairs in Charlotte range from $150 to $400 depending on the faulty part. Evaporator fan motors and start relays are on the lower end; control boards and compressor work are on the higher end. HomeHeroes provides upfront pricing before any work begins.' },
      { q: 'How quickly can HomeHeroes repair a refrigerator in Charlotte?', a: 'We offer same-day service for most refrigerator repairs in Charlotte. Call before noon and we\'ll typically have a technician to you the same day, stocked with the most common repair parts.' },
    ],
    relatedServiceSlug: 'refrigerator-repair',
    relatedBrandSlugs: ['samsung-appliance-repair', 'lg-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair', 'sub-zero-appliance-repair'],
    relatedSymptomSlugs: ['refrigerator-leaking-water', 'refrigerator-making-noise', 'refrigerator-ice-buildup'],
  },

  {
    slug: 'refrigerator-leaking-water',
    appliance: 'Refrigerator',
    symptomShort: 'Leaking Water',
    seoTitle: 'Refrigerator Leaking Water in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Refrigerator leaking water in Charlotte, NC? Find the cause — defrost drain, water line, or door seal — and when to call for professional repair. Same-day service. Call (704) 512-0111.',
    h1: 'Refrigerator Leaking Water in Charlotte, NC?',
    intro: 'Water leaking from a refrigerator can damage your flooring and signal a developing repair problem. The good news is that most refrigerator leaks come from a short list of well-understood causes. Some are simple enough for a homeowner to address; others need a qualified technician before the leak worsens.',
    commonSigns: [
      'Puddle forming on the floor in front of or under the refrigerator',
      'Water collecting inside the crisper drawers or on lower shelves',
      'Dripping sound from inside the unit',
      'Ice forming around the water dispenser or door',
      'Wet patch on the floor that keeps returning after mopping',
    ],
    diagnosisTable: [
      { symptom: 'Puddle forming in front of fridge', quickCheck: 'Check ice maker and water dispenser lines at the back for drips or cracks', possibleCause: 'Water inlet valve weeping or dispenser line loose at connection' },
      { symptom: 'Water inside crisper or on low shelf', quickCheck: 'Look for a small drain hole at the back center of the fridge floor — is it clogged?', possibleCause: 'Defrost drain tube clogged — water from defrost cycle overflows into fridge' },
      { symptom: 'Ice forming at back of fridge section', quickCheck: 'Inspect fresh food area for frost accumulation near vents', possibleCause: 'Defrost drain frozen over, forcing water to freeze before draining' },
      { symptom: 'Large pool under the unit', quickCheck: 'Pull fridge out and look at the drain pan — is it cracked or overflowing?', possibleCause: 'Drain pan cracked or compressor heat evaporation not keeping up with volume' },
      { symptom: 'Leak only when dispensing water or ice', quickCheck: 'Check the water filter is fully seated and O-ring is intact', possibleCause: 'Improperly installed or wrong water filter causing bypass leak' },
    ],
    safeTips: [
      { title: 'Check that the water filter is properly seated', detail: 'An improperly installed or expired water filter is a common and easy-to-miss leak source. Remove and reinstall the filter, confirming it clicks fully into place. Replace it if it\'s been over 6 months.' },
      { title: 'Flush the defrost drain tube with warm water', detail: 'Locate the drain hole at the back center of the fridge floor. Use a turkey baster to gently flush warm (not boiling) water down the drain to clear debris or ice blockages.' },
      { title: 'Confirm supply line connections are hand-tight', detail: 'Pull the refrigerator out from the wall and check both ends of the water supply line — at the wall valve and at the fridge fitting. Tighten gently by hand only; over-tightening plastic fittings causes cracks.' },
      { title: 'Make sure the unit is level', detail: 'A refrigerator that tilts forward can cause the drain pan to overflow. Adjust the leveling feet so the unit tilts very slightly backward (about 1/4 inch) to keep the drain system working correctly.' },
    ],
    whenToCall: [
      'Water is spraying or dripping visibly from the water inlet valve at the back',
      'The supply line is cracked, kinked sharply, or the fitting is broken',
      'Water is near electrical components, wiring, or the compressor area',
      'The leak is large and returns immediately after you mop it up',
      'You have a slow drip that has been going on for more than a week — floor damage accumulates fast',
    ],
    repairVsReplace: {
      repairWhen: [
        'Leak is from a single identifiable component (valve, drain, filter housing)',
        'Unit is under 10 years old with no other issues',
        'Repair cost is under $250 for the isolated leak fix',
      ],
      replaceWhen: [
        'Multiple leaks are present simultaneously indicating widespread seal failure',
        'Unit is 15+ years old and other components are also showing wear',
        'The leak has caused corrosion to internal components, raising total repair cost',
      ],
    },
    faq: [
      { q: 'Why is my refrigerator leaking water on the floor?', a: 'The three most common causes are: a clogged defrost drain tube (water from the defrost cycle has nowhere to go), a failing water inlet valve, or a cracked water supply line. All are repairable, and a technician can pinpoint the exact source on the first visit.' },
      { q: 'Is water inside my crisper drawer normal?', a: 'No — water collecting in crisper drawers almost always means the defrost drain is clogged. The defrost cycle melts frost off the evaporator coils, and that water should flow down through the drain tube into a pan under the unit. When the drain is blocked, it overflows into the fridge.' },
      { q: 'Can I fix a refrigerator water leak myself?', a: 'Clearing a clogged defrost drain with warm water is a safe DIY task. Checking and reseating a water filter is also safe. However, replacing a water inlet valve or supply line involves disconnecting water connections — if you\'re not comfortable, call a technician to avoid making the leak worse.' },
      { q: 'How much floor damage can a refrigerator leak cause?', a: 'Even a slow refrigerator leak can cause significant floor damage over time — warped hardwood, damaged subfloor, and mold growth under the unit. If you\'ve noticed a leak has been going on for more than a few days, address it promptly.' },
    ],
    relatedServiceSlug: 'refrigerator-repair',
    relatedBrandSlugs: ['samsung-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair', 'lg-appliance-repair'],
    relatedSymptomSlugs: ['refrigerator-not-cooling', 'refrigerator-ice-buildup', 'refrigerator-making-noise'],
  },

  {
    slug: 'refrigerator-making-noise',
    appliance: 'Refrigerator',
    symptomShort: 'Making Noise',
    seoTitle: 'Refrigerator Making Noise in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Refrigerator making loud noise in Charlotte, NC? Learn what humming, clicking, rattling, and grinding sounds mean. Same-day diagnostics available. Call (704) 512-0111.',
    h1: 'Refrigerator Making Noise in Charlotte, NC?',
    intro: 'Not all refrigerator sounds signal a problem — but some absolutely do. A refrigerator normally hums, occasionally drips or clicks as it cycles. The sounds that concern technicians are new noises, louder-than-usual humming, grinding, or clicking that accompanies cooling problems. Here\'s how to tell the difference.',
    commonSigns: [
      'Loud constant humming that you never noticed before',
      'Clicking or buzzing sound repeating every few minutes',
      'Rattling or vibrating noise from the back or bottom of the unit',
      'Gurgling or bubbling sounds inside the fridge walls',
      'Grinding or scraping noise when the unit runs',
      'Knocking sound when the ice maker cycles',
    ],
    diagnosisTable: [
      { symptom: 'Loud constant hum, fridge cooling fine', quickCheck: 'Clean condenser coils and make sure there is 2 inches of clearance behind the unit', possibleCause: 'Dirty condenser coils forcing compressor to work harder; condenser fan struggling' },
      { symptom: 'Clicking every 2–5 minutes, not cooling well', quickCheck: 'Is the compressor trying to start but stopping? Note whether cooling has declined', possibleCause: 'Start relay failure — the compressor attempts to start but fails. A common repair.' },
      { symptom: 'Rattling from back or bottom', quickCheck: 'Pull fridge out and check the drain pan underneath — is it loose?', possibleCause: 'Loose drain pan, or the compressor mounting feet have vibrated loose' },
      { symptom: 'Bubbling or gurgling sounds', quickCheck: 'Is this consistent and the fridge is cooling normally?', possibleCause: 'Normal refrigerant flow sound — usually harmless; if combined with cooling loss, inspect for a leak' },
      { symptom: 'Grinding or squealing noise', quickCheck: 'Locate noise — front top (ice maker), rear (evaporator fan), or bottom (condenser fan)', possibleCause: 'Fan motor bearing failure — typically the evaporator or condenser fan motor' },
    ],
    safeTips: [
      { title: 'Level the refrigerator', detail: 'Use a level across the top of the fridge. Adjust the front leveling feet so the unit is level side-to-side and tilts very slightly back. An off-level fridge rattles and its doors may not seal properly.' },
      { title: 'Clean the condenser coils', detail: 'Dirty coils force the compressor and fans to run harder and louder. Unplug the unit, remove the front grille or pull it from the wall, and vacuum the coils with a soft brush attachment.' },
      { title: 'Check objects on top and nearby', detail: 'Items stored on top of or leaning against the refrigerator amplify compressor vibration into rattles and buzzing. Clear the top of the unit and move items stored against the sides.' },
      { title: 'Ensure 2 inches of clearance at the back', detail: 'The condenser releases heat from the back of the unit. If the fridge is pushed hard against the wall, the condenser fan labors and gets louder. Pull it out a couple of inches.' },
    ],
    whenToCall: [
      'Clicking occurs every few minutes AND the fridge is not cooling well — start relay failure',
      'Grinding noise is loud or gets louder over time — fan bearing failure is worsening',
      'Complete silence when there should be a hum — compressor may have seized',
      'Noise began immediately after a power outage or surge',
      'Banging sound from the compressor when it starts',
    ],
    repairVsReplace: {
      repairWhen: [
        'Noise source is identified as a single component (fan motor, relay, drain pan)',
        'Fridge is still cooling properly and is under 12 years old',
        'The repair is a fan motor or start relay — both are affordable, fast repairs',
      ],
      replaceWhen: [
        'Grinding from the compressor itself on a unit over 12 years old',
        'Multiple noise sources combined with cooling decline indicate end of life',
        'Repair estimate exceeds 60% of the cost of a new comparable unit',
      ],
    },
    faq: [
      { q: 'Is a humming refrigerator normal?', a: 'A steady, low-level hum is completely normal — it\'s the compressor and fans doing their job. The hum becomes a concern when it\'s noticeably louder than it used to be, changes pitch, or is accompanied by reduced cooling performance.' },
      { q: 'What does the clicking sound mean on a refrigerator?', a: 'A clicking sound every few minutes almost always points to the start relay — a small, inexpensive component that helps the compressor start. When the relay fails, the compressor tries and fails to start on each cycle. If you hear clicking along with the fridge getting warmer, call for service promptly.' },
      { q: 'Why is my refrigerator making noise after a power outage?', a: 'A power surge or outage can displace the compressor\'s start relay or knock the control board into an error state. The unit may also make more noise as it works to re-cool its contents from scratch. If noise persists after 24 hours, have it evaluated.' },
      { q: 'Can I run a refrigerator that is grinding?', a: 'A grinding sound that gets progressively louder usually means a fan motor bearing is failing. You can run it in the short term, but the fan will eventually fail completely, leading to a warm refrigerator. It\'s best to schedule a repair before that happens.' },
    ],
    relatedServiceSlug: 'refrigerator-repair',
    relatedBrandSlugs: ['samsung-appliance-repair', 'lg-appliance-repair', 'ge-appliance-repair', 'whirlpool-appliance-repair'],
    relatedSymptomSlugs: ['refrigerator-not-cooling', 'refrigerator-leaking-water', 'refrigerator-ice-buildup'],
  },

  {
    slug: 'refrigerator-ice-buildup',
    appliance: 'Refrigerator',
    symptomShort: 'Ice Buildup',
    seoTitle: 'Refrigerator Ice Buildup in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Ice or frost buildup inside your refrigerator or freezer in Charlotte, NC? Discover the most common causes and when to call for professional repair. Call (704) 512-0111.',
    h1: 'Ice Buildup Inside Refrigerator or Freezer in Charlotte, NC?',
    intro: 'Excessive frost or ice inside a refrigerator or freezer almost always means the auto-defrost system has failed, or warm humid air is getting in through a compromised door seal. Both are diagnosable and repairable — but left unaddressed, ice buildup will eventually restrict airflow enough to kill cooling entirely.',
    commonSigns: [
      'Thick layer of frost or ice on freezer walls or back panel',
      'Ice crystals forming on food in the freezer',
      'Frost visible inside the fresh food section',
      'Ice around the ice maker inlet or water line',
      'Door sticking or hard to open due to ice at the seal',
      'Appliance seems to run constantly',
    ],
    diagnosisTable: [
      { symptom: 'Frost on all freezer surfaces', quickCheck: 'Close the door and run the paper-slip test on the door gasket all the way around', possibleCause: 'Door gasket failure — warm humid air enters and freezes on contact with cold surfaces' },
      { symptom: 'Ice sheet only on back panel of freezer', quickCheck: 'Is this one solid sheet? Does the freezer have auto-defrost?', possibleCause: 'Defrost heater, defrost thermostat, or timer failure — the system isn\'t melting frost as designed' },
      { symptom: 'Frost or ice inside fridge section', quickCheck: 'Check that the damper vent between freezer and fridge is opening and closing', possibleCause: 'Stuck damper or clogged vent directing freezing air directly onto fridge contents' },
      { symptom: 'Ice forming around ice maker entry', quickCheck: 'Is the water inlet valve dripping when not dispensing?', possibleCause: 'Dripping water inlet valve causing water to freeze at the ice maker inlet' },
    ],
    safeTips: [
      { title: 'Perform a manual defrost', detail: 'Unplug the refrigerator, remove all food to a cooler, and leave the doors open for 24–48 hours with towels on the floor. This clears the ice completely and lets you observe how quickly it returns after plugging back in.' },
      { title: 'Test every inch of the door gasket', detail: 'Slowly close the door on a dollar bill at each section around the door. You should feel slight resistance pulling it out. Easy removal at any point means the gasket has failed there — warm, moist Charlotte air is getting in and freezing.' },
      { title: 'Don\'t pack the freezer too tightly', detail: 'Overcrowded freezers restrict cold air circulation and create hotspots where humidity collects and freezes. Leave some airflow space between packages, especially near the back.' },
      { title: 'Make sure the door closes completely', detail: 'Check whether the door is sagging on its hinges or being held open by a container sticking out. The door must form a complete seal all the way around every time it closes.' },
    ],
    whenToCall: [
      'Ice returns within a few days of a full manual defrost — the defrost system has failed',
      'Frost is only on the evaporator coil sheet (not general freezer frost) — heater or thermostat failure',
      'You hear clicking or buzzing sounds during what should be the defrost cycle',
      'The freezer section is not maintaining temperature even though it\'s packed with ice',
      'Ice buildup is so severe it is blocking the fan vent or door from closing',
    ],
    repairVsReplace: {
      repairWhen: [
        'The defrost heater, thermostat, or timer has failed — all affordable parts',
        'The door gasket is worn and needs replacement',
        'The unit is under 12 years old with otherwise good performance',
      ],
      replaceWhen: [
        'The sealed refrigerant system is leaking in addition to defrost issues',
        'Unit is 15+ years old and compressor performance has also declined',
        'The defrost system is embedded in a control board that costs more than 50% of a new unit',
      ],
    },
    faq: [
      { q: 'Why does frost keep coming back after I defrost the freezer?', a: 'Recurring frost after manual defrost almost always means the automatic defrost system has a failed component — typically the defrost heater, defrost thermostat, or defrost timer. The system is designed to melt frost several times a day, so when it fails, frost accumulates rapidly.' },
      { q: 'Is frost in a chest freezer normal?', a: 'Yes — manual-defrost chest freezers accumulate frost by design. You should defrost them manually when frost reaches about 1/4 inch thick. If you have a chest freezer that is supposed to have auto-defrost and is developing heavy frost, that\'s a failure.' },
      { q: 'Can ice buildup damage my refrigerator permanently?', a: 'Ice that builds up thick enough to block the evaporator fan will cause total cooling failure. Ice that bridges the door gasket area can warp the liner over time. Addressing ice buildup promptly prevents secondary damage.' },
      { q: 'How much does defrost system repair cost in Charlotte?', a: 'Defrost heater and thermostat replacements typically run $150–$250 in Charlotte. A defrost timer is usually on the lower end of that range. HomeHeroes provides a firm quote before any work begins.' },
    ],
    relatedServiceSlug: 'refrigerator-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'sub-zero-appliance-repair'],
    relatedSymptomSlugs: ['refrigerator-not-cooling', 'refrigerator-making-noise', 'refrigerator-leaking-water'],
  },

  // ─── WASHERS ────────────────────────────────────────────────

  {
    slug: 'washer-not-spinning',
    appliance: 'Washer',
    symptomShort: 'Not Spinning',
    seoTitle: 'Washing Machine Not Spinning in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Washing machine not spinning in Charlotte, NC? Soaking wet clothes after a cycle? Learn the causes, safe checks, and when to call. Same-day repair. Call (704) 512-0111.',
    h1: 'Washing Machine Not Spinning in Charlotte, NC?',
    intro: 'Clothes coming out soaking wet after a full cycle means the spin isn\'t happening — or isn\'t completing. This is one of the most common washer problems, and it usually comes down to a handful of causes: an unbalanced load, a failed lid switch or door latch, a worn belt, or an issue with the motor or control board.',
    commonSigns: [
      'Clothes are soaking wet after the cycle completes',
      'Drum moves slowly or stops mid-spin cycle',
      'Spin cycle starts then abruptly stops before completing',
      'Error code displayed (UL, F7, F5, Sd, E4)',
      'You can hear the motor trying but the drum barely moves',
    ],
    diagnosisTable: [
      { symptom: 'Won\'t spin at all — top loader', quickCheck: 'Fully close and firmly press down the lid. Does a click confirm the lid switch engaged?', possibleCause: 'Lid switch failure — a safety device that stops the spin if the lid isn\'t fully closed' },
      { symptom: 'Won\'t spin — front loader', quickCheck: 'Confirm the door is fully latched. Try pressing the door firmly shut, then starting again', possibleCause: 'Door latch or door lock mechanism failure' },
      { symptom: 'Spins very slowly, clothes still wet', quickCheck: 'Is the drum balanced? Try redistributing clothes and running spin only', possibleCause: 'Unbalanced load causing the machine to reduce spin speed as a safety measure' },
      { symptom: 'UL error code', quickCheck: 'Open machine, rearrange load evenly around the drum, restart spin', possibleCause: 'Out-of-balance load — machine stops spin to protect itself' },
      { symptom: 'Spin starts then stops with noise', quickCheck: 'Listen — is there a burning smell or belt-related squeal?', possibleCause: 'Worn drive belt or coupling, motor thermal overload, or failing control board' },
    ],
    safeTips: [
      { title: 'Redistribute the load and try again', detail: 'A single heavy item (a towel, jeans) on one side of the drum will trigger the washer\'s out-of-balance protection and stop or slow the spin. Open the machine, rearrange the items evenly around the drum, and run a spin-only cycle.' },
      { title: 'Reduce the load size', detail: 'Overloading prevents the drum from reaching spin speed and can trick the control board into stopping the cycle. Try washing half the load at a time if it\'s consistently failing to spin on large loads.' },
      { title: 'Confirm the lid or door is completely latched', detail: 'On top-loaders, firmly press the lid until you hear the switch click. On front-loaders, make sure nothing is caught in the door seal and the door clicks shut completely.' },
      { title: 'Check for small items caught in the drum seal', detail: 'Small garments, socks, or underwear can get wedged between the drum and the door seal on front-loaders, preventing the drum from spinning freely. Inspect the seal and remove any trapped items.' },
    ],
    whenToCall: [
      'There is a burning rubber smell when the spin is attempted — belt or motor overheating',
      'The drum makes a loud grinding or clunking sound during spin',
      'Error code persists after redistributing the load multiple times',
      'The drum wobbles visibly or makes contact with the cabinet',
      'The spin has been getting progressively weaker over several washes',
    ],
    repairVsReplace: {
      repairWhen: [
        'Lid switch, door latch, or drive belt failure — all affordable and common repairs',
        'Machine is under 8 years old with no history of major repairs',
        'Repair cost under 50% of a comparable new washer',
      ],
      replaceWhen: [
        'Drum bearing has failed (loud grinding during spin) — expensive repair on older units',
        'Motor has seized on a machine over 10 years old',
        'Control board failure combined with other mechanical wear',
      ],
    },
    faq: [
      { q: 'Why does my washer not spin on large or heavy loads?', a: 'Washers have out-of-balance sensors that slow or stop the spin when the load is unevenly distributed. Heavy items like comforters or towels bunch to one side during the spin cycle. Try redistributing and running a dedicated spin cycle.' },
      { q: 'What is the lid switch on a top-load washer?', a: 'The lid switch is a safety device that prevents the drum from spinning while the lid is open. When it fails, the machine thinks the lid is always open and won\'t spin. It\'s a very common, inexpensive repair — usually under $100 including labor.' },
      { q: 'Can I run a washer that won\'t spin?', a: 'You can run wash cycles, but without spin, clothes will be soaking wet and impossible to dry efficiently. Running the machine in this state repeatedly puts strain on the motor and pump. It\'s best to have it repaired before it causes secondary failures.' },
      { q: 'Top loader vs front loader — which is harder to fix when not spinning?', a: 'Top-loaders are generally simpler and less expensive to repair for spin issues. Front-loaders have more complex door lock systems and drum bearings. However, both types are routinely serviced by HomeHeroes technicians in Charlotte.' },
    ],
    relatedServiceSlug: 'washer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'lg-appliance-repair', 'samsung-appliance-repair', 'maytag-appliance-repair', 'ge-appliance-repair'],
    relatedSymptomSlugs: ['washer-not-draining', 'washer-leaking', 'washer-shaking-violently'],
  },

  {
    slug: 'washer-not-draining',
    appliance: 'Washer',
    symptomShort: 'Not Draining',
    seoTitle: 'Washing Machine Not Draining in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Washing machine not draining in Charlotte, NC? Standing water in the drum after a cycle? Learn the common causes and fix options. Same-day repair. Call (704) 512-0111.',
    h1: 'Washing Machine Not Draining in Charlotte, NC?',
    intro: 'Standing water left in the drum after a completed cycle is a clear sign the drain pump isn\'t finishing its job. This can be caused by a clog in the pump filter, a kinked drain hose, a failed drain pump motor, or the hose being positioned incorrectly. Most drainage failures are fixable, often in a single service call.',
    commonSigns: [
      'Visible standing water in the drum after the cycle ends',
      'Clothes are soaking wet — much wetter than normal even after spin',
      'Machine stops mid-cycle with water inside',
      'Error code displayed (F21, E3, 5d, OE, Sud)',
      'Pump makes running noise but water level doesn\'t drop',
      'Water backing up into the sink if it shares a drain',
    ],
    diagnosisTable: [
      { symptom: 'Water sits in drum after cycle', quickCheck: 'Inspect drain hose at back of machine — is it kinked, crushed, or pinched?', possibleCause: 'Kinked drain hose restricting water flow' },
      { symptom: 'Pump sound but slow drainage', quickCheck: 'Locate and clean the pump access filter (usually bottom-front on front-loaders)', possibleCause: 'Pump filter clogged with lint, coins, or debris' },
      { symptom: 'F21 or OE error code', quickCheck: 'Check drain hose standpipe height — should be 36–96 inches from floor', possibleCause: 'Drain hose too high causes siphoning; too low causes backflow — both prevent proper draining' },
      { symptom: 'No pump sound at all', quickCheck: 'Listen carefully during drain portion of cycle — any noise from pump?', possibleCause: 'Pump motor has failed — no sound means no attempt to drain' },
      { symptom: 'Sud or 5d error code', quickCheck: 'Are you using HE detergent? High-suds detergent in HE machines causes the control to pause', possibleCause: 'Too many suds — machine waits for suds to dissipate before draining' },
    ],
    safeTips: [
      { title: 'Clean the pump filter', detail: 'Most front-load washers have a small access panel on the lower front. Place a towel and shallow pan under it, open the panel, unscrew the filter cap slowly (water will pour out), remove lint and debris, then reinstall firmly. Do this every few months.' },
      { title: 'Check the drain hose for kinks', detail: 'Pull the machine out and inspect the drain hose running from the back of the washer to the standpipe or sink. A sharp bend or kink stops water flow. Straighten the hose and ensure it has gentle curves only.' },
      { title: 'Verify drain hose height', detail: 'The end of the drain hose should enter the standpipe or sink at 36–96 inches off the floor. Too low and the machine siphons itself mid-cycle; too high and it can\'t pump water up. Check your washer\'s manual for the exact recommended height.' },
      { title: 'Use HE-approved detergent in the correct amount', detail: 'Using regular detergent — or too much HE detergent — creates excessive suds that confuse the machine\'s drain logic. Always use HE-labeled detergent and fill only to the recommended line.' },
    ],
    whenToCall: [
      'The pump filter is clear but the machine still won\'t drain — pump motor failure',
      'There is a grinding sound from the pump area — debris has damaged the pump impeller',
      'Water is backing up into adjacent sink or multiple fixtures — a shared drain clog',
      'Error code appears immediately even after you\'ve addressed the obvious causes',
      'The drain hose is cracked, split, or has a broken end fitting',
    ],
    repairVsReplace: {
      repairWhen: [
        'Drain pump motor has failed — a common, straightforward part replacement',
        'Pump filter repair or hose repositioning',
        'Machine is under 8 years old in otherwise good condition',
      ],
      replaceWhen: [
        'Drain pump failure accompanies other simultaneous failures on an older machine',
        'Machine is 10+ years old and the repair cost approaches a new unit\'s value',
      ],
    },
    faq: [
      { q: 'Why does my washer have standing water after the cycle?', a: 'The three most common causes are: a clogged pump filter (very common and easy to fix), a kinked or incorrectly positioned drain hose, or a failed drain pump motor. A technician can identify which one is at fault quickly.' },
      { q: 'Where is the pump filter on my front-load washer?', a: 'On most front-load washers, the pump filter access panel is at the bottom front of the machine — a small door that opens with a flathead screwdriver or by pressing a release. Put towels down before opening, as residual water will drain out.' },
      { q: 'Why does my washer stop mid-cycle with water inside?', a: 'A mid-cycle stop with water present is often a drain issue — the machine tried to drain, failed, and stopped to protect itself. It can also be triggered by out-of-balance loads or control board issues, but drainage failure is the first thing to rule out.' },
      { q: 'How much does washer drain pump replacement cost in Charlotte?', a: 'A drain pump replacement in Charlotte typically runs $100–$200 including parts and labor. HomeHeroes carries common pump assemblies on our trucks for same-day repair on most washer brands.' },
    ],
    relatedServiceSlug: 'washer-repair',
    relatedBrandSlugs: ['lg-appliance-repair', 'samsung-appliance-repair', 'whirlpool-appliance-repair', 'bosch-appliance-repair'],
    relatedSymptomSlugs: ['washer-not-spinning', 'washer-leaking', 'washer-shaking-violently'],
  },

  {
    slug: 'washer-leaking',
    appliance: 'Washer',
    symptomShort: 'Leaking Water',
    seoTitle: 'Washing Machine Leaking Water in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Washing machine leaking in Charlotte, NC? Water on the floor during or after a cycle? Find the cause and fix. Licensed technicians, same-day service. Call (704) 512-0111.',
    h1: 'Washing Machine Leaking Water in Charlotte, NC?',
    intro: 'A washing machine leak can soak into your flooring quickly, especially during the spin cycle when water pressure is highest. Most washer leaks come from a predictable set of failure points — the door boot seal on front-loaders, fill hoses at the back, the drain pump, or the tub seal. Identifying where the water is coming from is the first step.',
    commonSigns: [
      'Water pooling on the floor in front of or under the washer',
      'Suds or soapy water leaking from the door during a cycle',
      'Dripping sound during the fill or spin portions of a wash',
      'Water visible behind the machine near hose connections',
      'Wet floor that you keep mopping and it returns every wash',
    ],
    diagnosisTable: [
      { symptom: 'Leak from door during spin or wash', quickCheck: 'Inspect door boot seal for visible cracks, tears, or debris buildup in the folds', possibleCause: 'Door boot gasket torn or contaminated — very common on front-loaders after 5+ years' },
      { symptom: 'Water from back of machine', quickCheck: 'Pull machine out and check both inlet hoses where they connect to the machine and wall', possibleCause: 'Loose or cracked fill hose fitting — a common cause that\'s easy to confirm visually' },
      { symptom: 'Water underneath machine mid-cycle', quickCheck: 'Watch the bottom during fill — is it coming from the pump area?', possibleCause: 'Drain pump seal failure or cracked pump body' },
      { symptom: 'Overflowing from top during fill', quickCheck: 'Is the machine overfilling before the cycle starts? Note water level at overflow', possibleCause: 'Water level sensor (pressure switch) failure or stuck water inlet valve' },
      { symptom: 'Suds overflowing from detergent drawer', quickCheck: 'Are you using HE detergent? Are you measuring it correctly?', possibleCause: 'Too many suds — switch to HE detergent and use recommended amount only' },
    ],
    safeTips: [
      { title: 'Check inlet hose connections', detail: 'Turn off the water supply valves at the wall. Pull the washer out and check both hot and cold inlet hoses at the back of the machine and at the wall. They should be hand-tight with rubber washers in good condition. Replace hoses every 5 years as preventive maintenance.' },
      { title: 'Inspect the door boot seal', detail: 'On front-loaders, open the door and carefully inspect the rubber seal that surrounds the drum opening. Look for cracks, holes, or tears. Also check the folds of the seal for accumulated debris — this can prevent a proper seal without the gasket itself being torn.' },
      { title: 'Switch to HE detergent if you haven\'t', detail: 'Regular detergent in HE washers creates far too many suds, which can overflow from the detergent drawer and look like a leak. Use HE-labeled detergent only, at the recommended dose or slightly less.' },
      { title: 'Level the machine', detail: 'An off-level washer can cause water to pool and slosh toward one side during agitation, sometimes spilling over the tub opening at the top. Level all four feet and confirm the machine doesn\'t rock.' },
    ],
    whenToCall: [
      'The door boot seal has a visible tear — water will continue leaking and may worsen',
      'Leak is from the tub area (bottom of machine) rather than hoses — tub seal failure',
      'Water is running near electrical connections, the motor, or control board',
      'The water inlet valve is leaking when not filling — valve is stuck open',
      'You\'ve already replaced hoses and the leak continues from the back',
    ],
    repairVsReplace: {
      repairWhen: [
        'Door boot seal replacement — cost-effective repair, $100–$200 typically',
        'Inlet hose replacement — inexpensive preventive maintenance',
        'Pump seal or drain pump replacement on a machine under 8 years old',
      ],
      replaceWhen: [
        'Tub seal failure on a front-loader with worn bearings — combined repair cost often approaches new unit cost',
        'Machine is 10+ years old and the leak has caused corrosion to internal components',
      ],
    },
    faq: [
      { q: 'Why is my front-load washer leaking from the door?', a: 'The rubber door boot gasket that creates the seal between the drum and the door is the most common source of front-loader door leaks. It can tear from sharp objects in pockets, degrade over time, or build up mold and debris in its folds that prevent sealing. A torn door boot needs professional replacement.' },
      { q: 'Is a washing machine leak dangerous?', a: 'A washer leak near electrical components — the motor, control board, or wiring harness — can create a shock or fire hazard. If you see water near these areas, stop using the machine and call for service. A leak from a hose fitting or door seal is less immediately dangerous but should still be addressed promptly to protect flooring.' },
      { q: 'How long do washing machine inlet hoses last?', a: 'Rubber washing machine hoses typically last 5–7 years before the rubber begins to crack and swell. Industry best practice is to replace them every 5 years regardless of visible condition. Braided stainless steel hoses last longer and are worth the upgrade.' },
      { q: 'My washer leaks only during spin — what causes that?', a: 'Leaks that occur specifically during spin are almost always related to the drum or pump — the tub seal, pump body, or a hose that is only under pressure at high spin speeds. This requires professional diagnosis, as tub-related leaks are harder to locate and repair than hose or door seal leaks.' },
    ],
    relatedServiceSlug: 'washer-repair',
    relatedBrandSlugs: ['lg-appliance-repair', 'samsung-appliance-repair', 'whirlpool-appliance-repair', 'miele-appliance-repair'],
    relatedSymptomSlugs: ['washer-not-draining', 'washer-not-spinning', 'washer-shaking-violently'],
  },

  {
    slug: 'washer-shaking-violently',
    appliance: 'Washer',
    symptomShort: 'Shaking Violently',
    seoTitle: 'Washing Machine Shaking Violently in Charlotte, NC | HomeHeroes',
    metaDescription: 'Washing machine shaking violently in Charlotte, NC? Banging during spin? Learn safe fixes and when worn suspension needs professional repair. Call (704) 512-0111.',
    h1: 'Washing Machine Shaking Violently in Charlotte, NC?',
    intro: 'A washing machine that shakes hard enough to walk across the floor or bang against walls is more than annoying — it can cause real damage to the machine and your flooring. The cause is usually straightforward: an unbalanced load, an unlevel machine, or worn suspension components. Here\'s how to work through it.',
    commonSigns: [
      'Machine moves across the floor during spin cycle',
      'Loud banging or thudding during spin',
      'Vibration felt through the floor throughout the house',
      'Machine makes contact with surrounding cabinetry during spin',
      'Shaking is worse on larger or heavier loads',
    ],
    diagnosisTable: [
      { symptom: 'Violent shaking on most loads', quickCheck: 'Place a level on top of the machine and check all four feet are touching the floor', possibleCause: 'Machine is not level — the most common and easily fixed cause' },
      { symptom: 'Banging during spin on heavy loads only', quickCheck: 'Redistribute load so weight is even around the drum; reduce load size', possibleCause: 'Out-of-balance load — heavy items bunch to one side during spin' },
      { symptom: 'Violent shaking on ALL balanced loads', quickCheck: 'Press down on corners of machine — does it rock or feel springy?', possibleCause: 'Worn shock absorbers (front-loaders) or suspension rods (top-loaders)' },
      { symptom: 'Shaking began immediately after delivery', quickCheck: 'Are the shipping bolts still installed? (Check rear of machine for 3–4 large bolts)', possibleCause: 'Shipping bolts not removed — these must be taken out before first use' },
      { symptom: 'New shaking after moving or repair', quickCheck: 'Were all four feet adjusted after moving? Is it back on a level surface?', possibleCause: 'Leveling feet disturbed during move or repair — adjust all four feet and lock them' },
    ],
    safeTips: [
      { title: 'Level all four feet', detail: 'Place a level on top of the machine in two directions. Adjust the leveling feet (they screw in/out at each corner) until the bubble is centered. Lock the jam nut on each foot against the washer body so it can\'t vibrate out of position.' },
      { title: 'Use anti-vibration pads', detail: 'Rubber anti-vibration pads under each foot significantly reduce both walking and noise transfer to the floor. They are inexpensive and available at any hardware store. They work best when the machine is already level.' },
      { title: 'Balance your loads before spin', detail: 'Avoid washing single heavy items (one comforter, one large towel). When washing heavy items, mix them with lighter items to distribute mass. On top-loaders, arrange items around the agitator post rather than piling them in the center.' },
      { title: 'Verify shipping bolts were removed', detail: 'New washing machines ship with large bolts securing the drum to prevent damage in transit. If these are not removed before first use, the machine will shake violently. Check the rear of the machine for 3–4 bolts with plastic spacers. Remove all of them.' },
    ],
    whenToCall: [
      'Shaking persists on properly balanced loads even after leveling — suspension failure',
      'You can hear a suspension spring or rod snap or break during a cycle',
      'The drum is visibly wobbling or tilted inside the machine',
      'Violent shaking has caused water hose connections to loosen and leak',
      'Machine has damaged surrounding cabinetry or flooring from repeated impact',
    ],
    repairVsReplace: {
      repairWhen: [
        'Shock absorbers or suspension rods have worn — common repair on front or top-loaders',
        'Machine is under 8 years old and in otherwise good condition',
        'The cause is confirmed as a mechanical suspension component',
      ],
      replaceWhen: [
        'Drum bearing failure accompanies the shaking — combined repair often exceeds new unit cost',
        'Machine is 10+ years old and multiple suspension components are worn',
      ],
    },
    faq: [
      { q: 'Is it safe to run a washing machine that is shaking violently?', a: 'Running a machine with extreme vibration is not recommended. Violent shaking can loosen hose connections and cause a water leak, damage the drum bearings, damage cabinetry, and — in extreme cases — tip the machine. Address the root cause before running further cycles.' },
      { q: 'How do I level a washing machine?', a: 'Adjust the leveling feet — all four corners have feet that screw up and down. Use a level on top of the machine to guide you. Once level, tighten the lock nut on each foot against the machine body so it doesn\'t vibrate out of position during use.' },
      { q: 'What are shipping bolts and why do they matter?', a: 'Shipping bolts (also called transit bolts) are large bolts installed at the factory to lock the drum in place during shipping. If not removed before first use, the drum has no freedom to move and the whole machine vibrates violently. Check your user manual for location — they must all be removed and saved in case you move the machine.' },
      { q: 'Why does my washer shake only on heavy loads?', a: 'Heavy items like towels, jeans, and comforters tend to collect on one side of the drum during the spin cycle, creating an out-of-balance situation. The machine tries to correct it by slowing down and redistributing, but if the imbalance is severe, it will vibrate heavily. Try mixing heavy items with lighter ones, and reduce total load size.' },
    ],
    relatedServiceSlug: 'washer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'lg-appliance-repair', 'samsung-appliance-repair', 'maytag-appliance-repair'],
    relatedSymptomSlugs: ['washer-not-spinning', 'washer-not-draining', 'washer-leaking'],
  },

  // ─── DRYERS ─────────────────────────────────────────────────

  {
    slug: 'dryer-not-heating',
    appliance: 'Dryer',
    symptomShort: 'Not Heating',
    seoTitle: 'Dryer Not Heating in Charlotte, NC | HomeHeroes Appliance Repair',
    metaDescription: 'Dryer not heating in Charlotte, NC? Clothes still damp after a full cycle? Learn the safe checks and when to call a technician. Same-day repair. Call (704) 512-0111.',
    h1: 'Dryer Not Heating in Charlotte, NC?',
    intro: 'A dryer that tumbles but produces no heat is almost always down to one of a few specific parts: the thermal fuse, heating element (electric), gas valve (gas), or a tripped circuit breaker. Understanding which type of dryer you have — electric or gas — matters here, because the failure points and the safe steps differ.',
    commonSigns: [
      'Clothes remain damp after a complete, full-length drying cycle',
      'Air inside the drum is cold or room-temperature during the cycle',
      'Cycle runs for the normal time but clothes are still wet',
      'No warmth felt at the vent exhaust outside the house',
      'The drum spins normally but no heat is produced',
    ],
    diagnosisTable: [
      { symptom: 'Electric dryer — no heat at all', quickCheck: 'Check your electrical panel — electric dryers use a double (240V) breaker. Is one side of the breaker tripped?', possibleCause: 'Tripped circuit breaker on one leg of the 240V supply — dryer runs but half the voltage means no heat' },
      { symptom: 'Electric dryer — intermittent heat', quickCheck: 'Is the thermal fuse accessible? (Usually on the exhaust duct inside the back panel)', possibleCause: 'Thermal fuse failure — a one-time safety fuse that blows when the dryer overheats' },
      { symptom: 'Gas dryer — no heat, drum spins', quickCheck: 'Confirm the gas supply valve behind the dryer is fully open (handle parallel to pipe)', possibleCause: 'Gas supply valve closed, or gas igniter or gas valve solenoid failure' },
      { symptom: 'Electric dryer — heat then stops', quickCheck: 'Is the vent duct clean and unrestricted? Overheating causes the thermostat to cut heat', possibleCause: 'High-limit thermostat tripping due to restricted vent airflow' },
    ],
    safeTips: [
      { title: 'Check the circuit breaker (electric dryers)', detail: 'Electric dryers use a 240V double-pole breaker. If one side trips, the dryer drum runs but produces no heat. Go to your electrical panel and look for the dryer breaker. If it\'s tripped to the middle position, reset it by pushing it fully off then back on. If it trips again immediately, call an electrician — do not force it.' },
      { title: 'Confirm the gas valve is open (gas dryers)', detail: 'The shutoff valve on the gas supply line behind a gas dryer should have its handle running parallel to the pipe (open). If it\'s perpendicular (across the pipe), it\'s closed. This is the only gas-related check a homeowner should perform — leave everything else to a qualified technician.' },
      { title: 'Clean the lint trap and vent duct', detail: 'A blocked vent causes the dryer to overheat, which blows the thermal fuse (a safety device). If your thermal fuse has blown, it almost certainly means the vent is partially blocked. Clean the full vent duct before any repair — otherwise the new thermal fuse will blow again quickly.' },
      { title: 'Make sure the outdoor vent flap opens freely', detail: 'Go outside and look at the dryer vent exhaust while the dryer runs. The flap should open and you should feel warm air flow. If it doesn\'t open, clean it from the outside. Birds\' nests are a common obstruction in Charlotte.' },
    ],
    whenToCall: [
      'You smell gas near the dryer — leave the house, do not operate any switches, call the gas company immediately, then call us',
      'The circuit breaker trips again immediately after resetting — electrical fault requiring an electrician',
      'The thermal fuse has blown — this needs professional diagnosis to find and fix the underlying cause',
      'There is a burning smell without a gas odor — component failure inside the dryer',
      'The heating element is visually broken or scorched — requires replacement',
    ],
    repairVsReplace: {
      repairWhen: [
        'Thermal fuse or heating element failure on an electric dryer under 10 years old',
        'Gas igniter or valve solenoid replacement — common, affordable parts',
        'High-limit thermostat replacement',
        'Repair cost under 50% of a comparable new dryer',
      ],
      replaceWhen: [
        'Motor has failed in addition to heating components on a unit 10+ years old',
        'Repair cost approaches or exceeds the price of a new comparable dryer',
        'Dryer has had repeated thermal fuse failures indicating design-level issues',
      ],
    },
    faq: [
      { q: 'Why is my electric dryer running but not heating?', a: 'The two most common causes are: (1) a tripped circuit breaker on one leg of the 240V supply — easy to check and reset yourself, and (2) a blown thermal fuse — a one-time safety device that prevents fires by cutting heat when the dryer overheats, usually from a blocked vent.' },
      { q: 'Is it safe to replace a thermal fuse myself?', a: 'A thermal fuse is one of the simpler DIY appliance repairs, but there\'s a critical caveat: if the thermal fuse blew, your vent is almost certainly restricted. Replacing the fuse without clearing the vent will just blow the new fuse. We recommend having a technician diagnose the full situation to prevent fire risk.' },
      { q: 'Why would my gas dryer not heat?', a: 'Gas dryer no-heat failures are usually the igniter, the gas valve coils (solenoids), or the thermal fuse. Confirm your gas valve is open first. If it is and there\'s still no heat, a technician needs to check the igniter and coils — these involve the gas system and shouldn\'t be serviced without proper training.' },
      { q: 'How much does dryer heating element replacement cost in Charlotte?', a: 'A heating element replacement for an electric dryer in Charlotte typically runs $100–$180 including parts and labor. Thermal fuse replacement is usually $80–$130. Gas valve coil replacement is typically $100–$200. HomeHeroes provides upfront pricing before any work begins.' },
    ],
    relatedServiceSlug: 'dryer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'maytag-appliance-repair', 'lg-appliance-repair', 'samsung-appliance-repair', 'ge-appliance-repair'],
    relatedSymptomSlugs: ['dryer-squeaking', 'dryer-taking-too-long-to-dry', 'washer-not-spinning'],
  },

  {
    slug: 'dryer-squeaking',
    appliance: 'Dryer',
    symptomShort: 'Squeaking',
    seoTitle: 'Dryer Squeaking or Squealing in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Dryer squeaking, squealing, or making loud noise in Charlotte, NC? Find out if it\'s the belt, drum rollers, or idler pulley. Same-day repair. Call (704) 512-0111.',
    h1: 'Dryer Squeaking or Squealing in Charlotte, NC?',
    intro: 'A squeaking dryer is almost always a mechanical problem — a worn part that\'s developing friction where there shouldn\'t be any. The most common culprits are the drum support rollers, the idler pulley, drum glides or slides, and occasionally the drive belt. These are all standard, affordable repairs for a qualified technician.',
    commonSigns: [
      'High-pitched squeal or squeak on startup that continues while running',
      'Squeaking sound that worsens as the dryer gets warm',
      'Rhythmic thumping or knocking each time the drum rotates',
      'Grinding or scraping noise rather than a clean squeak',
      'Burning smell accompanying the squeak — belt or glide friction',
    ],
    diagnosisTable: [
      { symptom: 'Squeak from front during tumble', quickCheck: 'Is the sound rhythmic or continuous? Where does it come from — top or bottom of door area?', possibleCause: 'Worn drum glides or front bearing — the felt or plastic slides the front of the drum rests on' },
      { symptom: 'Squeal from rear of dryer', quickCheck: 'Listen at the back panel — is the sound coming from the middle-back area?', possibleCause: 'Rear drum bearing or drum support rollers — rollers dry out and develop flat spots' },
      { symptom: 'Continuous squeal throughout cycle', quickCheck: 'Is the squeal constant or does it pulse with drum rotation?', possibleCause: 'Idler pulley bearing failure — the pulley keeps the belt tensioned and develops noise when its bearing wears' },
      { symptom: 'Rhythmic thumping every drum rotation', quickCheck: 'Check for items that might have fallen behind the drum (buttons, coins); listen for location', possibleCause: 'Drum roller with a flat spot — develops after sitting unused for extended period' },
      { symptom: 'Burning rubber smell with squeak', quickCheck: 'Is the belt visibly worn, cracked, or fraying? Open the dryer door and look inside', possibleCause: 'Worn drive belt causing friction against the drum or idler pulley' },
    ],
    safeTips: [
      { title: 'Check for items behind or under the drum', detail: 'Coins, buttons, bra underwires, and small objects can fall behind the drum or into the drum seal area and create noise. Empty the drum, open the dryer door, and inspect the drum seal and gap around the drum edge carefully.' },
      { title: 'Note where the sound comes from', detail: 'Put your ear near the front bottom, rear, and top of the dryer while it\'s running to determine where the squeak originates. Front squeaks typically indicate drum glides; rear squeaks point to drum rollers or bearings. This information helps your technician prepare the right parts.' },
      { title: 'Let it cool and try again', detail: 'Some squeaks are louder when the dryer is cold and the lubricant on bearings hasn\'t warmed up. If the squeak diminishes as the dryer warms up, it\'s likely a bearing that\'s wearing but still functional short-term. If it gets louder with heat, it\'s more serious.' },
    ],
    whenToCall: [
      'The squeaking is accompanied by a burning smell — belt or motor is overheating',
      'The drum has stopped turning or turns with great difficulty',
      'The grinding is getting progressively louder over multiple cycles',
      'There\'s smoke or visible scorch marks inside the drum area',
      'The squeak has been present for several weeks and is intensifying',
    ],
    repairVsReplace: {
      repairWhen: [
        'Drum rollers, idler pulley, or drum glides — all inexpensive parts, straightforward labor',
        'Drive belt replacement — very common repair, typically under $150',
        'Dryer is under 10 years old and otherwise functioning normally',
      ],
      replaceWhen: [
        'Drum bearing has seized and the drum is hard to turn by hand — repair cost may approach new unit cost on older machines',
        'Multiple internal components have worn simultaneously (rollers + belt + glides)',
        'Machine is 12+ years old and the motor is also showing signs of wear',
      ],
    },
    faq: [
      { q: 'What does a dryer idler pulley sound like when it fails?', a: 'A failing idler pulley typically produces a continuous squeal or chirping sound that\'s present throughout the whole cycle, not just at startup. It\'s a thin, high-pitched sound rather than a deep thump. The idler pulley is a very common dryer repair — it keeps the drive belt tensioned and its bearing wears over time.' },
      { q: 'How long can I run a squeaking dryer?', a: 'A mild squeak from worn drum glides or a developing idler pulley can sometimes last several months before it becomes serious. However, if the squeak is accompanied by burning smell, is getting louder, or involves the drum having trouble turning, stop using the machine and schedule a repair to avoid more serious damage.' },
      { q: 'What does drum roller replacement cost?', a: 'Replacing drum support rollers in Charlotte typically runs $100–$180 including parts and labor. If the idler pulley is replaced at the same time (often recommended since they wear together), the total is usually $130–$220. Belt replacement is typically $100–$160 on its own.' },
      { q: 'Can I lubricate the squeaking myself?', a: 'We don\'t recommend it without knowing the exact part that\'s squeaking. Lubricating the wrong area (especially near the drive belt or drum surface) can cause belt slippage or create a fire hazard. A technician can identify and lubricate or replace the exact component causing noise safely.' },
    ],
    relatedServiceSlug: 'dryer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'maytag-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair'],
    relatedSymptomSlugs: ['dryer-not-heating', 'dryer-taking-too-long-to-dry', 'washer-not-spinning'],
  },

  {
    slug: 'dryer-taking-too-long-to-dry',
    appliance: 'Dryer',
    symptomShort: 'Taking Too Long to Dry',
    seoTitle: 'Dryer Taking Too Long to Dry Clothes in Charlotte, NC | HomeHeroes',
    metaDescription: 'Dryer taking too long to dry clothes in Charlotte, NC? Clothes need 2+ cycles? Learn the causes — from clogged vents to weak heating elements. Call (704) 512-0111.',
    h1: 'Dryer Taking Too Long to Dry Clothes in Charlotte, NC?',
    intro: 'A dryer that needs two or more cycles to fully dry a normal load is wasting energy, wearing out your clothes, and very often creating a fire risk from restricted airflow. The number-one cause in Charlotte homes is a clogged lint or vent system — but there are other culprits if cleaning the vent doesn\'t resolve it.',
    commonSigns: [
      'Normal loads require 60–90+ minutes or multiple cycles to dry completely',
      'Clothes feel warm and slightly damp after a full cycle',
      'The outside of the dryer feels very hot to the touch',
      'Laundry room feels humid or steamy after a dryer cycle',
      'You can\'t feel strong airflow at the outdoor vent exit',
    ],
    diagnosisTable: [
      { symptom: 'All loads take 2+ cycles', quickCheck: 'Go outside during a dryer cycle and place your hand at the vent exit — is there strong warm airflow?', possibleCause: 'Restricted vent duct — lint buildup in the duct, a crushed section, or outdoor flap not opening' },
      { symptom: 'Heat present but weak — drying is slow', quickCheck: 'Is the lint trap clean? When did you last clean the full duct?', possibleCause: 'Partial lint blockage in duct reducing airflow enough to make heat less effective' },
      { symptom: 'Still slow after vent cleaning', quickCheck: 'Is the dryer very hot? Or just barely warm during the cycle?', possibleCause: 'Heating element partially failed (electric) or weak gas ignition — not enough heat output' },
      { symptom: 'Only heavy items stay damp', quickCheck: 'Are these mixed with lighter items? Is the sensor working? (run a heat-setting cycle)', possibleCause: 'Moisture sensor dirty or failed — dryer ends cycle based on faulty dry signal' },
    ],
    safeTips: [
      { title: 'Clean the lint trap before every single load', detail: 'The lint trap should be cleared before every load, not once a week. A partially clogged lint trap reduces airflow by 20–40%. Pull the screen, remove all lint, and if buildup is on the screen mesh, rinse it with water and let it dry fully before replacing.' },
      { title: 'Clean the full vent duct annually', detail: 'Disconnect the dryer from the vent, use a dryer vent brush kit (available at hardware stores) to clean the duct from both the dryer end and the exterior, and confirm the outdoor flap moves freely. This is one of the most impactful home maintenance tasks you can do — it also prevents dryer fires.' },
      { title: 'Confirm the outdoor vent flap opens', detail: 'During a cycle, go outside and check the vent exhaust cover. The flap should swing fully open with strong warm air flow. A flap stuck shut (frozen, warped, or obstructed by a bird nest) blocks almost all airflow. Clean or replace it.' },
      { title: 'Switch from flexible foil duct to rigid metal', detail: 'Flexible foil or plastic dryer duct collapses, kinks easily, and accumulates lint much faster than rigid metal duct. If your dryer uses flexible duct, replacing it with rigid aluminum significantly improves airflow and reduces fire risk.' },
    ],
    whenToCall: [
      'The dryer takes over 60 minutes for a normal load AND the vent is confirmed clean',
      'The heating element is barely warm — partial element failure requires replacement',
      'Moisture sensor bar in the drum is black or coated — needs cleaning or replacement',
      'Dryer is very hot on the outside — dangerous restriction, fire risk',
      'The duct runs longer than 25 feet or has more than two 90° bends — may need a booster fan or rerouting',
    ],
    repairVsReplace: {
      repairWhen: [
        'Vent is cleaned and drying improves — problem solved for free',
        'Heating element partially failed — affordable repair on a machine under 10 years old',
        'Moisture sensor cleaned or replaced — minor repair',
      ],
      replaceWhen: [
        'Multiple repairs needed simultaneously (motor, element, drum rollers) on a 12+ year old dryer',
        'Total repair estimate exceeds 60% of a new comparable dryer',
      ],
    },
    faq: [
      { q: 'What is the #1 cause of a dryer taking too long to dry?', a: 'Vent restriction is the single most common cause by far. Lint accumulates in the vent duct, outdoor flaps get stuck, or flexible ducts collapse. When air can\'t flow through, the dryer has to run much longer to evaporate moisture from clothes. Clean the lint trap before every load and clean the full duct at least once a year.' },
      { q: 'How often should dryer vents be professionally cleaned in Charlotte?', a: 'For average households doing 5–6 loads per week, annual professional dryer vent cleaning is recommended. If you have a long duct run, multiple bends, or pets that shed a lot, consider cleaning every 6 months. A clogged dryer vent is the leading cause of house fires from appliances in the US.' },
      { q: 'How much energy does a slow dryer waste?', a: 'Running a dryer twice as long as necessary essentially doubles your energy cost for laundry. In Charlotte, a typical electric dryer costs about $0.40–$0.60 per cycle. If you\'re running two cycles where one should suffice, you\'re spending an extra $200–$300 per year just on laundry electricity.' },
      { q: 'What is a moisture sensor and how does it affect drying time?', a: 'The moisture sensor consists of two small metal bars inside the drum. Clothes pass over them during tumbling and the sensor detects electrical conductivity (wet clothes conduct, dry clothes don\'t). When the sensor is coated with dryer sheet residue, it reads clothes as dry before they actually are, ending the cycle early. Clean the bars with rubbing alcohol.' },
    ],
    relatedServiceSlug: 'dryer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'maytag-appliance-repair', 'lg-appliance-repair', 'ge-appliance-repair'],
    relatedSymptomSlugs: ['dryer-not-heating', 'dryer-squeaking', 'washer-not-draining'],
  },

];

export function getSymptom(slug: string): SymptomPage | undefined {
  return symptoms.find(s => s.slug === slug);
}
