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


  // ─── DISHWASHERS ────────────────────────────────────────────

  {
    slug: 'dishwasher-not-cleaning-dishes',
    appliance: 'Dishwasher',
    symptomShort: 'Not Cleaning Dishes',
    seoTitle: 'Dishwasher Not Cleaning Dishes in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Dishwasher leaving food residue on dishes in Charlotte, NC? Learn the common causes and safe fixes. Same-day repair available. Call (704) 512-0111.',
    h1: 'Dishwasher Not Cleaning Dishes in Charlotte, NC?',
    intro: 'Dishes coming out of the dishwasher still dirty or gritty means the wash cycle isn\'t getting water where it needs to go — or the water isn\'t hot enough to do its job. Most cleaning failures trace back to a clogged filter, blocked spray arms, low water temperature, or detergent issues, all of which are diagnosable in a single visit.',
    commonSigns: [
      'Food particles visible on dishes after a full cycle',
      'Glasses look cloudy or have a gritty film',
      'Dishes feel greasy or have a soapy residue',
      'Bottom rack items are clean but top rack items are dirty',
      'Items near the center are clean but corners remain dirty',
      'Cycle runs normally but results have been getting worse over time',
    ],
    diagnosisTable: [
      { symptom: 'All dishes still dirty', quickCheck: 'Pull out the bottom rack and locate the filter — is it visibly clogged with food debris?', possibleCause: 'Clogged dishwasher filter blocking water flow to spray arms — most common cause' },
      { symptom: 'Top rack only stays dirty', quickCheck: 'Remove the upper spray arm and check each hole for blockage; rinse under the tap', possibleCause: 'Upper spray arm clogged or cracked — water can\'t reach the top rack' },
      { symptom: 'Dishes have white film or spots', quickCheck: 'Is the rinse aid dispenser empty? Check the compartment inside the door', possibleCause: 'Empty rinse aid or hard water mineral deposits — a separate issue from cleaning failure' },
      { symptom: 'Dishwasher runs but water seems cold', quickCheck: 'Run the kitchen hot water tap until it\'s fully hot before starting a cycle', possibleCause: 'Heating element failure or water inlet temperature too low — dishes need 120°F+ to clean properly' },
      { symptom: 'Detergent pod not dissolving', quickCheck: 'Is the dispenser door opening freely during the cycle? Check for blockage', possibleCause: 'Dispenser door blocked by a tall item or spring failure — detergent releases too late' },
    ],
    safeTips: [
      { title: 'Clean the filter monthly', detail: 'Locate the cylindrical filter in the center of the dishwasher floor. Twist to unlock, pull out, and rinse under warm water with a soft brush. Visible grease or debris buildup is the single most common cause of poor cleaning. Takes 2 minutes.' },
      { title: 'Clear the spray arm holes', detail: 'Remove each spray arm (they usually unscrew or unclip), hold under the tap, and use a toothpick to clear any blocked holes. Even one blocked hole can leave a dead zone in the wash pattern. Reinstall firmly.' },
      { title: 'Run the hot water tap first', detail: 'Before starting the dishwasher, run the kitchen hot water tap until the water is genuinely hot. Dishwashers fill with whatever temperature water is in the supply line — if it starts with cold water, cleaning suffers significantly.' },
      { title: 'Don\'t nest or block items', detail: 'Bowls facing the same direction, cups stacked inside each other, and pots blocking the spray arms all create dead zones. Load so water can reach every surface — bowls angled down, glasses upside down, nothing blocking the spray arms\' rotation.' },
      { title: 'Check your detergent freshness', detail: 'Powdered dishwasher detergent absorbs moisture and loses effectiveness after about 3 months. Pods have a longer shelf life but can degrade if stored in a humid space. If results have gradually worsened, try a fresh box of detergent.' },
    ],
    whenToCall: [
      'The spray arms are cracked or the plastic is warped — they need replacement',
      'The heating element is not warming the water at all — requires professional replacement',
      'The wash pump is noisy or not circulating water — pump motor failure',
      'The dispenser door spring is broken and the pod isn\'t being released',
      'You\'ve cleaned the filter and arms but cleaning hasn\'t improved after several cycles',
    ],
    repairVsReplace: {
      repairWhen: [
        'Spray arm, filter, or dispenser replacement — all inexpensive parts',
        'Heating element failure on a dishwasher under 8 years old',
        'Wash pump motor repair on a unit under 7 years old',
        'Repair cost under 50% of a comparable new dishwasher',
      ],
      replaceWhen: [
        'Wash pump and heating element both failed simultaneously on a unit 10+ years old',
        'Control board failure combined with pump or heating issues',
        'Repair estimate exceeds $350 on a basic-tier dishwasher',
      ],
    },
    faq: [
      { q: 'Why does my dishwasher clean the bottom rack but not the top?', a: 'This almost always means the upper spray arm is clogged or not spinning freely. The upper arm gets water from a dedicated feed tube — if it\'s blocked or cracked, the top rack gets little to no water pressure. Remove the arm, clear the holes with a toothpick, and check that it spins freely when reinstalled.' },
      { q: 'How often should I clean my dishwasher filter?', a: 'For average household use (one load per day), clean the dishwasher filter every 2–4 weeks. If you frequently wash heavily soiled dishes or cook with a lot of starchy foods, clean it weekly. It takes 2 minutes and is the single most impactful maintenance task for a dishwasher.' },
      { q: 'Does the water temperature matter for cleaning?', a: 'Yes — significantly. Dishwashers need inlet water at 120°F to properly activate detergent and cut through grease. If your water heater is set below 120°F or the supply line is cold, cleaning will be poor. Running the hot tap first and checking your water heater setting are free fixes worth trying.' },
      { q: 'How much does dishwasher repair cost in Charlotte, NC?', a: 'Dishwasher repairs in Charlotte typically range from $100 to $280 depending on the part. Spray arm or filter replacement is on the lower end. Pump motor or control board repair is higher. HomeHeroes provides an upfront quote before any work begins.' },
      { q: 'Should I use pods, powder, or liquid dishwasher detergent?', a: 'Pods are the most consistent because the formula is pre-measured and sealed. Powder is effective but can clump with age. Liquid is the least effective at cutting grease. Regardless of type, always use detergent formulated specifically for automatic dishwashers — dish soap causes excessive suds and will not clean properly.' },
    ],
    relatedServiceSlug: 'dishwasher-repair',
    relatedBrandSlugs: ['bosch-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'kitchenaid-appliance-repair', 'miele-appliance-repair'],
    relatedSymptomSlugs: ['dishwasher-not-draining', 'dishwasher-leaving-white-residue', 'dishwasher-door-wont-latch'],
  },

  {
    slug: 'dishwasher-not-draining',
    appliance: 'Dishwasher',
    symptomShort: 'Not Draining',
    seoTitle: 'Dishwasher Not Draining in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Dishwasher not draining in Charlotte, NC? Standing water at the bottom after a cycle? Find the cause and fix. Same-day service. Call (704) 512-0111.',
    h1: 'Dishwasher Not Draining in Charlotte, NC?',
    intro: 'Standing water in the bottom of the dishwasher after a completed cycle is a clear sign the drain pump isn\'t finishing the job. The cause is usually a clogged filter or drain hose, a blocked garbage disposal knockout plug, or a failed drain pump motor. Most drainage failures are fixable in a single visit.',
    commonSigns: [
      'Visible water pooling in the bottom of the dishwasher after the cycle ends',
      'Gurgling or slow-draining sounds at the end of a cycle',
      'Error code displayed (E24, E25, OE, or similar)',
      'Water backing up into the sink when the dishwasher drains',
      'Musty or sour smell inside the dishwasher between uses',
    ],
    diagnosisTable: [
      { symptom: 'Water in bottom after every cycle', quickCheck: 'Remove and clean the filter assembly — is it packed with debris?', possibleCause: 'Clogged filter restricting flow to the drain pump — the most common cause' },
      { symptom: 'New installation not draining', quickCheck: 'Was the garbage disposal recently installed? Is the knockout plug removed from the dishwasher inlet?', possibleCause: 'Garbage disposal knockout plug still in place — a very common installation oversight' },
      { symptom: 'Water drains slowly or partially', quickCheck: 'Inspect the drain hose under the sink — is it kinked, pinched, or positioned too low?', possibleCause: 'Kinked or improperly looped drain hose causing partial backflow' },
      { symptom: 'Pump sounds but water stays', quickCheck: 'Listen to the pump — does it hum loudly without moving water?', possibleCause: 'Drain pump impeller jammed by debris (glass, seed, pit) or pump motor failure' },
      { symptom: 'Water backs up into sink', quickCheck: 'Is the shared drain under the sink slow or partially blocked?', possibleCause: 'Shared drain clog — may not be a dishwasher problem at all' },
    ],
    safeTips: [
      { title: 'Clean the filter and sump area', detail: 'Remove the lower rack and the filter assembly at the bottom of the tub. Rinse the filter under warm running water and use a soft brush to clear debris. While it\'s out, inspect the sump area below for glass shards, seeds, or debris that may be jamming the pump impeller.' },
      { title: 'Check the drain hose high loop', detail: 'The dishwasher drain hose must loop up to near the underside of the counter before connecting to the drain or disposal — this prevents backflow from the sink. Under the sink, confirm the hose forms a high loop secured with a clamp, or connects to the air gap fitting on the sink.' },
      { title: 'Check the garbage disposal connection', detail: 'If your dishwasher drains into the disposal, run the disposal for 20 seconds before starting a wash cycle. If the disposal is clogged, water has nowhere to go. Also confirm the disposal\'s dishwasher inlet knockout plug was removed at installation.' },
      { title: 'Run a hot water cycle with baking soda', detail: 'If the dishwasher drains but slowly, pour one cup of baking soda in the bottom of the tub and run a short hot cycle. This can dissolve mild grease and detergent buildup in the drain path without chemicals.' },
    ],
    whenToCall: [
      'The pump runs but makes a loud grinding or buzzing noise — impeller is jammed or motor is failing',
      'The filter is clean but water still won\'t drain after multiple cycles',
      'The drain hose has a crack, split, or broken fitting at either end',
      'There is a burning smell when the pump runs — motor failure',
      'The drain check valve is stuck closed — requires disassembly to access',
    ],
    repairVsReplace: {
      repairWhen: [
        'Drain pump motor failure on a dishwasher under 8 years old — common, straightforward repair',
        'Drain hose replacement or rerouting',
        'Check valve replacement',
        'Repair cost under 50% of a comparable new unit',
      ],
      replaceWhen: [
        'Drain pump failure combined with a failing control board on a unit 10+ years old',
        'Pump housing cracked or corroded — indicates water damage to other components',
      ],
    },
    faq: [
      { q: 'Why is there always a little water in the bottom of my dishwasher?', a: 'A small amount of water — about 1–2 cups — sitting in the very bottom of the tub below the filter is normal. This is by design; it keeps the door seals from drying out. Water visible above the filter level, or water filling the entire bottom, is a drainage problem.' },
      { q: 'My dishwasher just started not draining after I had the garbage disposal replaced — why?', a: 'New garbage disposals ship with a knockout plug sealing the dishwasher drain inlet. If the plumber didn\'t remove it, the dishwasher has nowhere to drain. It\'s a very common oversight. The plug is knocked out by inserting a screwdriver through the inlet and tapping — it takes about 30 seconds.' },
      { q: 'Can a clogged filter cause the dishwasher not to drain?', a: 'Yes — a severely clogged filter can block water from reaching the drain pump entirely, leaving the tub full. Clean the filter first before assuming the pump has failed. In many cases, this is the entire fix.' },
      { q: 'How much does dishwasher drain pump replacement cost in Charlotte?', a: 'A drain pump motor replacement in Charlotte typically costs $130–$220 including parts and labor, depending on the brand. Premium brands like Bosch and Miele have higher parts costs than entry-level models. HomeHeroes carries common pump assemblies on our service trucks.' },
    ],
    relatedServiceSlug: 'dishwasher-repair',
    relatedBrandSlugs: ['bosch-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'kitchenaid-appliance-repair'],
    relatedSymptomSlugs: ['dishwasher-not-cleaning-dishes', 'dishwasher-door-wont-latch', 'washer-not-draining'],
  },

  {
    slug: 'dishwasher-leaving-white-residue',
    appliance: 'Dishwasher',
    symptomShort: 'Leaving White Residue',
    seoTitle: 'Dishwasher Leaving White Residue on Dishes in Charlotte, NC | HomeHeroes',
    metaDescription: 'Dishwasher leaving white spots or film on dishes in Charlotte, NC? Learn whether it\'s hard water, rinse aid, or a failing component. Call (704) 512-0111.',
    h1: 'Dishwasher Leaving White Residue on Dishes in Charlotte, NC?',
    intro: 'White film, spots, or chalky residue on dishes after a dishwasher cycle is almost always caused by hard water mineral deposits, an empty rinse aid dispenser, or detergent that isn\'t rinsing away fully. Charlotte\'s water supply runs moderately hard, making this a common complaint. Most cases can be resolved without any repair at all — but a few causes do require a technician.',
    commonSigns: [
      'White chalky film covering glassware and plates after drying',
      'Water spots visible on glasses even when dry',
      'Dishes feel gritty or rough to the touch after the cycle',
      'Interior of the dishwasher has white scale buildup on walls and door',
      'Residue is worse on items on the top rack',
      'Problem has gradually worsened over several months',
    ],
    diagnosisTable: [
      { symptom: 'White film on all dishes, gradual onset', quickCheck: 'Is the rinse aid dispenser empty? (Check the indicator on the door panel)', possibleCause: 'Empty rinse aid — the most common cause; rinse aid prevents minerals from bonding to surfaces during drying' },
      { symptom: 'Chalky residue that rubs off dry', quickCheck: 'Run a rinse-and-hold cycle with a cup of white vinegar on the top rack — does it dissolve?', possibleCause: 'Hard water mineral deposits (calcium and magnesium) — Charlotte\'s water is moderately hard' },
      { symptom: 'Cloudy film that smears when rubbed wet', quickCheck: 'Try a different brand of detergent — is it happening with pods, powder, or liquid?', possibleCause: 'Detergent residue — often from using too much detergent or the wrong type' },
      { symptom: 'Permanent etching on glassware', quickCheck: 'Does the clouding wash off with vinegar or stay regardless?', possibleCause: 'Permanent etching from over-washing delicate glass — not a repair issue, glass is permanently damaged' },
      { symptom: 'White scale inside tub walls, clogged spray arms', quickCheck: 'Look at interior spray arm holes and tub walls for thick mineral buildup', possibleCause: 'Severe hard water scale requiring descaling treatment and possibly spray arm replacement' },
    ],
    safeTips: [
      { title: 'Refill the rinse aid dispenser', detail: 'Open the door and locate the rinse aid cap (usually next to the detergent dispenser). Fill to the max line with liquid rinse aid. The indicator window should show full. Rinse aid is the single most effective defense against water spots and white film — refill every 2–4 weeks depending on use.' },
      { title: 'Run a vinegar descale cycle', detail: 'Place a dishwasher-safe cup filled with 2 cups of white vinegar on the bottom rack. Run a full hot cycle with no detergent. The vinegar dissolves mineral deposits from the tub walls, spray arms, and dishes. Do this once a month if you have hard water.' },
      { title: 'Adjust your detergent amount', detail: 'Using more detergent than necessary — especially with soft water — causes residue. Start with the minimum recommended amount and adjust upward only if needed. Pods are pre-measured and less prone to this issue than powder or liquid.' },
      { title: 'Use a dishwasher cleaner tablet monthly', detail: 'Commercial dishwasher cleaner tablets (Affresh, Finish, etc.) are designed to dissolve mineral scale and detergent buildup throughout the machine\'s interior. Run one monthly, especially in Charlotte where water hardness is moderate.' },
    ],
    whenToCall: [
      'The water inlet valve screen is clogged with mineral scale — restricts flow and worsens residue',
      'The heating element is coated with thick scale and no longer heating water adequately',
      'Spray arm holes are so scaled they cannot be cleared by soaking — arms need replacement',
      'The detergent dispenser door isn\'t opening properly — detergent isn\'t being released at the right time',
      'Residue persists after full descaling treatment and rinse aid refill',
    ],
    repairVsReplace: {
      repairWhen: [
        'Water inlet valve screen cleaning or valve replacement — straightforward fix',
        'Spray arm replacement due to scaling or cracking',
        'Detergent dispenser repair on a unit under 8 years old',
      ],
      replaceWhen: [
        'Severe internal scaling has caused multiple component failures simultaneously',
        'Unit is 12+ years old and has accumulated significant hard water damage to heating element and pump',
      ],
    },
    faq: [
      { q: 'Is the white residue on my dishes harmful?', a: 'Calcium and magnesium mineral deposits are not harmful — they\'re the same minerals found in drinking water. Detergent residue is also not dangerous in the small amounts left on dishes. However, neither is acceptable for clean dishes, and both are solvable.' },
      { q: 'How hard is Charlotte\'s water?', a: 'Charlotte\'s municipal water supply runs approximately 4–7 grains per gallon — classified as moderately hard. This is enough to cause visible water spots without rinse aid and gradual scale buildup inside the dishwasher over time. A monthly vinegar cycle and consistent rinse aid use are sufficient for most households.' },
      { q: 'Will a water softener solve my dishwasher residue problem?', a: 'A whole-house water softener will dramatically reduce mineral deposits on dishes and inside the dishwasher. Some premium dishwasher brands (Bosch, Miele) have built-in water softeners. If you\'re already using rinse aid and still fighting heavy deposits, a softener is worth investigating.' },
      { q: 'Why are my glasses getting permanently cloudy?', a: 'Permanent cloudiness on glassware is usually etching — microscopic surface damage to the glass, not a deposit. It\'s caused by detergent that is too alkaline for delicate glass, water that\'s too hot, or over-washing items that aren\'t dishwasher-safe. Unlike mineral deposits, etching cannot be removed.' },
    ],
    relatedServiceSlug: 'dishwasher-repair',
    relatedBrandSlugs: ['bosch-appliance-repair', 'miele-appliance-repair', 'kitchenaid-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair'],
    relatedSymptomSlugs: ['dishwasher-not-cleaning-dishes', 'dishwasher-not-draining', 'dishwasher-door-wont-latch'],
  },

  {
    slug: 'dishwasher-door-wont-latch',
    appliance: 'Dishwasher',
    symptomShort: "Door Won't Latch",
    seoTitle: "Dishwasher Door Won't Latch or Close in Charlotte, NC | HomeHeroes",
    metaDescription: "Dishwasher door won't latch or stay closed in Charlotte, NC? Learn the causes — latch, strike, or hinge — and when to call. Same-day repair. Call (704) 512-0111.",
    h1: "Dishwasher Door Won't Latch in Charlotte, NC?",
    intro: 'A dishwasher that won\'t latch won\'t run — the door latch is a safety interlock that must be engaged for the cycle to start. The fix is usually a worn latch assembly, a misaligned door strike, or a broken latch spring. Occasionally a warped tub or sagging door is involved. Most door latch repairs are quick and inexpensive.',
    commonSigns: [
      'Dishwasher door doesn\'t click shut or springs back open',
      'Cycle won\'t start even though the door appears closed',
      'Door latch handle feels loose, sloppy, or broken',
      'Door requires significant force to close all the way',
      'Door stays closed but the control board shows a door error',
      'Visible gap at the top of the door when "closed"',
    ],
    diagnosisTable: [
      { symptom: 'Door won\'t click shut', quickCheck: 'Inspect the latch hook and door strike — is either visibly broken, bent, or worn smooth?', possibleCause: 'Door latch assembly worn or broken — the plastic hook that engages the strike degrades over time' },
      { symptom: 'Door closes but cycle won\'t start', quickCheck: 'Is the latch microswitch triggering? Try pressing firmly on the latch area while pressing Start', possibleCause: 'Latch microswitch failure — the mechanical switch that signals the control board isn\'t firing' },
      { symptom: 'Door closes at bottom but gaps at top', quickCheck: 'Check the door hinges at the bottom — are they bent, loose, or worn?', possibleCause: 'Worn or bent door hinges causing door to hang crooked, preventing full latch engagement' },
      { symptom: 'Latch handle snapped or broken off', quickCheck: 'Inspect handle and latch for cracked plastic or broken spring', possibleCause: 'Latch handle or spring failure — handle is under mechanical stress with every open/close cycle' },
      { symptom: 'Door seals properly but leaks at start', quickCheck: 'Inspect the door gasket around the tub opening for tears or compression damage', possibleCause: 'Door gasket worn — technically a separate issue from latching but presents similarly' },
    ],
    safeTips: [
      { title: 'Check for items obstructing the door', detail: 'Tall items in the front of the lower rack — large pots, cutting boards, cookie sheets — can prevent the door from closing fully. Rearrange the rack so nothing protrudes above the tub opening or sticks out the front. This is the first thing to check before assuming a mechanical failure.' },
      { title: 'Inspect the door strike plate', detail: 'The strike plate is the small piece the latch hook catches on. Open the door and examine it closely — is it bent, cracked, or have worn grooves? On some models the strike is adjustable. If it\'s moved out of position, the latch hook can\'t engage.' },
      { title: 'Test the latch handle movement', detail: 'With the door open, manually operate the latch handle several times. It should move smoothly with a firm spring return. A handle that feels mushy, doesn\'t spring back, or has obvious play indicates the latch mechanism needs replacement.' },
    ],
    whenToCall: [
      'The latch assembly is visibly broken and the door won\'t stay closed at all',
      'The latch microswitch has failed — the door closes but the control board gets no signal',
      'Door hinges are bent or worn causing a misaligned door — hinge replacement requires door removal',
      'The door gasket is torn and water is leaking around the door frame',
      'The tub opening has warped — uncommon but requires professional assessment',
    ],
    repairVsReplace: {
      repairWhen: [
        'Latch assembly, strike, or microswitch replacement — inexpensive and quick',
        'Door hinge replacement on a unit under 8 years old',
        'Door gasket replacement',
        'Repair cost under 40% of a comparable new dishwasher',
      ],
      replaceWhen: [
        'Tub warping has caused permanent door misalignment — not cost-effective to repair',
        'Latch failure is combined with pump or heating failures on a 10+ year old unit',
      ],
    },
    faq: [
      { q: 'Why won\'t my dishwasher start even though the door seems closed?', a: 'The door latch has two jobs: physically holding the door shut, and triggering a microswitch that tells the control board it\'s safe to run. If the microswitch fails, the door can be fully latched but the machine still won\'t start. A technician can test the microswitch with a multimeter in minutes.' },
      { q: 'Can I run the dishwasher by holding the door closed?', a: 'No — the latch microswitch must be engaged for the cycle to run. Even if you could hold the door shut physically, the control board won\'t start a cycle without the switch signal. And a door held by hand during a wash cycle would leak hot water — don\'t attempt it.' },
      { q: 'How long does a dishwasher door latch last?', a: 'Most dishwasher door latches last 7–12 years depending on usage frequency and how firmly the door is closed. Households that close the door forcefully or frequently will wear out latches faster. It\'s a wear part, not a defect, and one of the more common dishwasher repairs.' },
      { q: 'How much does dishwasher door latch repair cost in Charlotte?', a: 'A door latch assembly replacement in Charlotte typically runs $80–$150 including parts and labor, making it one of the more affordable dishwasher repairs. The part itself is usually $20–$60 depending on brand. HomeHeroes can complete this repair in under an hour on most models.' },
    ],
    relatedServiceSlug: 'dishwasher-repair',
    relatedBrandSlugs: ['bosch-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair', 'kitchenaid-appliance-repair', 'samsung-appliance-repair'],
    relatedSymptomSlugs: ['dishwasher-not-cleaning-dishes', 'dishwasher-not-draining', 'dishwasher-leaving-white-residue'],
  },


  // ─── OVENS / RANGES ─────────────────────────────────────────

  {
    slug: 'oven-not-heating-properly',
    appliance: 'Oven',
    symptomShort: 'Not Heating Properly',
    seoTitle: 'Oven Not Heating Properly in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Oven not reaching temperature or heating unevenly in Charlotte, NC? Learn what\'s causing it and when to call. Same-day repair available. Call (704) 512-0111.',
    h1: 'Oven Not Heating Properly in Charlotte, NC?',
    intro: 'An oven that runs but can\'t reach the right temperature — or heats unevenly — is frustrating and can ruin meals. Most heating problems on electric ovens come down to a failed bake element, broil element, or temperature sensor. On gas ovens, the igniter or gas valve is usually responsible. Both are diagnosable in a single visit.',
    commonSigns: [
      'Food takes much longer to cook than the recipe specifies',
      'Oven temperature reads correctly but food undercooks or burns on one side',
      'Oven preheats slowly or never reaches the set temperature',
      'Bake element visible through bottom of oven is dark in spots (not glowing evenly)',
      'Oven cycles off and on more frequently than normal during cooking',
      'Oven thermometer reads significantly different from the set temperature',
    ],
    diagnosisTable: [
      { symptom: 'Electric oven — not heating at all', quickCheck: 'Visually inspect the bake element at the bottom of the oven — does it have any dark, blistered, or broken spots?', possibleCause: 'Bake element failure — the most common electric oven repair; element burns out and stops producing heat' },
      { symptom: 'Electric oven — runs but wrong temperature', quickCheck: 'Place an oven thermometer inside and compare the actual temperature to the set temp after 20 minutes', possibleCause: 'Temperature sensor failure — a faulty sensor reports incorrect temp to the control board, causing under or over-heating' },
      { symptom: 'Gas oven — slow to heat, not reaching temp', quickCheck: 'Watch the bottom of the oven when it first tries to ignite — do you see a glow from the igniter?', possibleCause: 'Weak igniter — igniter glows but draws insufficient current to open the gas valve fully, resulting in partial heat' },
      { symptom: 'Uneven cooking — burns one side', quickCheck: 'Is the oven level? Check with a level across the oven racks', possibleCause: 'Oven out of level, or one section of the bake element burned out while the other half still works' },
      { symptom: 'Oven cycles off during cooking', quickCheck: 'Is the thermal overload tripping? Is the oven ventilation clear?', possibleCause: 'High-limit thermostat tripping due to blocked ventilation or a failing thermostat' },
    ],
    safeTips: [
      { title: 'Calibrate the oven temperature', detail: 'Most ovens allow a temperature calibration adjustment in the settings menu. Place a reliable oven thermometer inside, set the oven to 350°F, and wait 20 minutes. If the thermometer reads significantly different, consult your user manual for the calibration adjustment procedure — many ovens allow ±35°F offset without any repair needed.' },
      { title: 'Visually inspect the bake element', detail: 'On electric ovens, the bake element runs along the bottom of the oven interior. Look for dark spots, blistering, holes, or a visible break in the element. If the element glows uniformly red during preheat, it\'s functioning. Dark or unlit sections indicate a failed element.' },
      { title: 'Check that oven racks are positioned correctly', detail: 'For most baking, the center rack position gives the most even heat. Placing items too close to the bake element causes burning on the bottom while the top stays undercooked. Use the center or upper-center position and rotate pans halfway through cooking for even results.' },
      { title: 'Avoid lining the oven floor with foil', detail: 'Aluminum foil on the oven floor blocks heat circulation from the bake element and can cause the element to overheat and fail prematurely. Remove any foil liners — use a foil sheet on a lower rack to catch drips instead.' },
    ],
    whenToCall: [
      'The bake element has a visible hole, crack, or burn spot — requires replacement',
      'The temperature sensor resistance tests outside the normal range — sensor failure',
      'The igniter glows orange but does not ignite the gas after 90 seconds — weak igniter',
      'The oven fails to reach temperature even after a calibration adjustment',
      'You smell burning plastic or detect unusual odors — possible wiring or control board issue',
    ],
    repairVsReplace: {
      repairWhen: [
        'Bake or broil element failure — one of the most affordable and common oven repairs',
        'Temperature sensor replacement',
        'Igniter replacement on a gas oven under 12 years old',
        'Repair cost under 50% of a comparable new range',
      ],
      replaceWhen: [
        'Control board failure on an oven 12+ years old combined with element damage',
        'Gas valve failure — parts cost often approaches value of older range',
        'Multiple simultaneous failures indicating end-of-life condition',
      ],
    },
    faq: [
      { q: 'How do I know if my oven\'s bake element has failed?', a: 'Remove the lower oven rack and look at the element at the bottom of the oven interior. Turn the oven to Bake and watch the element during preheat — it should glow evenly red-orange across its full length within a few minutes. Dark spots, blistering, or sections that don\'t glow indicate the element has failed and needs replacement.' },
      { q: 'My oven is 50°F off — does it need repair?', a: 'Not necessarily. Most ovens can be calibrated ±35°F through the settings menu without any parts replacement. Check your user manual for the calibration procedure. If the offset is greater than 50°F or the temperature is inconsistent (swings up and down rather than being consistently offset), the temperature sensor likely needs replacement.' },
      { q: 'Is a weak igniter on a gas oven dangerous?', a: 'A weak igniter is a service issue but not an immediate safety emergency. The igniter glows but doesn\'t draw enough current to fully open the gas valve, so the oven heats partially or ignites slowly. Gas is not accumulating in dangerous amounts. However, a fully failed igniter means no ignition at all, so schedule service before it fails completely.' },
      { q: 'How much does oven repair cost in Charlotte, NC?', a: 'Electric oven bake element replacement in Charlotte runs $100–$200 including parts and labor. Temperature sensor replacement is typically $80–$160. Gas oven igniter replacement is $100–$200. Control board repair is $200–$380. HomeHeroes provides upfront pricing before any work begins.' },
    ],
    relatedServiceSlug: 'oven-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair', 'kitchenaid-appliance-repair', 'frigidaire-appliance-repair'],
    relatedSymptomSlugs: ['gas-oven-not-lighting', 'oven-door-wont-close', 'burner-not-working'],
  },

  {
    slug: 'gas-oven-not-lighting',
    appliance: 'Oven',
    symptomShort: 'Gas Oven Not Lighting',
    seoTitle: 'Gas Oven Not Lighting in Charlotte, NC | HomeHeroes Appliance Repair',
    metaDescription: 'Gas oven not lighting or igniting in Charlotte, NC? Learn the safe checks and when to call a tech. Never ignore a gas smell. Same-day repair. Call (704) 512-0111.',
    h1: 'Gas Oven Not Lighting in Charlotte, NC?',
    intro: 'A gas oven that won\'t light means one of a few things: the igniter has failed, the gas valve isn\'t opening, a burner tube is clogged, or the gas supply itself is interrupted. Diagnosing this requires understanding the difference between a weak igniter (glows but doesn\'t light) and a completely dead igniter. Gas odors change everything — treat any gas smell as an emergency.',
    commonSigns: [
      'Oven does not heat at all when set to Bake or Broil',
      'You can smell unburned gas briefly when oven tries to light (normal for first few seconds — not if persistent)',
      'Igniter glows faintly orange but flame never appears',
      'Clicking sound from the igniter but no ignition',
      'Oven worked intermittently before stopping completely',
      'Oven broiler lights but bake function does not (or vice versa)',
    ],
    diagnosisTable: [
      { symptom: 'Igniter glows but no flame', quickCheck: 'Time how long the igniter glows before the gas valve opens — should be under 90 seconds', possibleCause: 'Weak igniter drawing insufficient current to open the gas valve — the most common gas oven failure' },
      { symptom: 'No glow from igniter at all', quickCheck: 'Confirm oven is getting power — does the clock work? Is the circuit breaker on?', possibleCause: 'Igniter has failed completely, or control board is not sending voltage to the igniter circuit' },
      { symptom: 'Clicking but no ignition (surface burner)', quickCheck: 'Are the burner cap and grate clean and properly seated? Remove and reseat them', possibleCause: 'Misaligned burner cap or moisture in the igniter from a boilover — surface burner igniters are separate from oven igniter' },
      { symptom: 'No gas smell and no ignition', quickCheck: 'Is the gas supply valve behind the range fully open? Was any gas work done recently?', possibleCause: 'Gas supply interrupted — valve partially closed, or main shutoff affected' },
      { symptom: 'Broiler works but bake doesn\'t (or vice versa)', quickCheck: 'Each function has its own igniter — which one is failing to glow?', possibleCause: 'One igniter has failed while the other is still functional — each requires its own replacement' },
    ],
    safeTips: [
      { title: 'SAFETY FIRST: What to do if you smell gas', detail: 'If you smell gas strongly near your oven — do not operate any switches, do not use your phone near the appliance, do not light anything. Leave the house, leave the door open as you exit, and call your gas company from outside. A gas leak is an emergency. Call HomeHeroes only after the gas company has cleared the situation.' },
      { title: 'Check the gas supply valve', detail: 'Behind or beneath the range is a gas shutoff valve. The handle should run parallel to the pipe to be open. If it\'s perpendicular (across the pipe), it\'s closed. This is the only gas component a homeowner should interact with — and only turn it if you\'re confident it was accidentally closed.' },
      { title: 'Clean the burner ports and cap', detail: 'On gas ranges, the small holes in the burner ring can clog with food debris. If a surface burner ignites inconsistently, remove the grate and burner cap, clean the burner head with a toothpick and dry cloth, and confirm the cap is seated fully flat. Never use water to clean a burner — let it dry completely before relighting.' },
      { title: 'Test the igniter visually', detail: 'Set the oven to Bake at 350°F and open the broiler drawer (or remove the bottom oven panel) to observe the oven igniter. It should begin glowing within 30 seconds and the burner should light within 90 seconds. A weak glow that stays orange without igniting confirms a weak igniter.' },
    ],
    whenToCall: [
      'You smell gas and it doesn\'t dissipate quickly — gas leak emergency, call gas company immediately',
      'The igniter is confirmed weak or failed — gas system components require a licensed technician',
      'The gas valve has failed — do not attempt to replace gas valves without certification',
      'The igniter glows but gas doesn\'t ignite after 2+ minutes — gas valve not opening fully',
      'You had water damage or flooding near the range — water in gas components requires professional inspection',
    ],
    repairVsReplace: {
      repairWhen: [
        'Igniter replacement — the most common gas oven repair, typically $100–$200',
        'Gas valve solenoid coil replacement on a range under 12 years old',
        'Burner tube cleaning or replacement',
        'Range is under 10 years old and in otherwise good condition',
      ],
      replaceWhen: [
        'Gas valve body failure on a 15+ year old range — parts cost often exceeds value',
        'Multiple gas components failing simultaneously on an older unit',
        'Range uses an obsolete gas system design with limited parts availability',
      ],
    },
    faq: [
      { q: 'Is it normal to smell a little gas when the oven first tries to light?', a: 'A brief, faint smell of gas during the first 1–2 seconds of an ignition attempt is normal — that\'s the gas flowing before the igniter lights it. The smell should disappear immediately when the burner ignites. If the gas smell persists for more than a few seconds, or you can smell it continuously near the oven, stop using it and call for service.' },
      { q: 'What does a weak oven igniter look like?', a: 'A functioning igniter should glow bright orange-white and ignite the burner within 30–90 seconds. A weak igniter glows a dimmer, redder orange — it\'s producing heat but not enough electrical current to pull open the gas valve bimetal. The flame never appears. Timed from glow to ignition, anything over 90 seconds typically means a weak igniter.' },
      { q: 'Can I replace the gas oven igniter myself?', a: 'Technically, replacing the igniter itself doesn\'t involve gas lines — the igniter is an electrical component that simply heats the gas valve. However, in North Carolina, working on gas appliances is regulated and doing it incorrectly can void your homeowner\'s insurance. We recommend having a licensed technician replace gas oven igniters.' },
      { q: 'Why does my oven broiler work but bake function doesn\'t?', a: 'Gas ovens have two separate igniters — one for bake (bottom burner) and one for broil (top burner). When the bake igniter fails and the broil igniter is still good, you\'ll have exactly this symptom: broil works, bake doesn\'t. The two are independent components and are replaced separately.' },
    ],
    relatedServiceSlug: 'oven-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'kitchenaid-appliance-repair', 'frigidaire-appliance-repair', 'wolf-appliance-repair'],
    relatedSymptomSlugs: ['oven-not-heating-properly', 'burner-not-working', 'oven-door-wont-close'],
  },

  {
    slug: 'oven-door-wont-close',
    appliance: 'Oven',
    symptomShort: "Oven Door Won't Close",
    seoTitle: "Oven Door Won't Close or Seal in Charlotte, NC | HomeHeroes Repair",
    metaDescription: "Oven door won't close fully or hangs open in Charlotte, NC? Learn the causes — hinges, gasket, springs — and safe repair options. Call (704) 512-0111.",
    h1: "Oven Door Won't Close Properly in Charlotte, NC?",
    intro: 'An oven door that won\'t close fully wastes energy, extends cooking times, and creates a burn hazard. The most common causes are worn or damaged door hinges, a stretched or torn door gasket, a broken door spring, or a door that was accidentally bent during the self-clean cycle. Most are repairable without replacing the oven.',
    commonSigns: [
      'Oven door hangs open or doesn\'t sit flush against the oven frame',
      'Visible gap at the top or sides of the door when "closed"',
      'Heat escaping from around the door frame during cooking',
      'Door feels very stiff, hard to open, or squeaks on hinges',
      'Door drops suddenly when opened — hinge spring failure',
      'Door glass is cracked or shattered (often from thermal shock during self-clean)',
    ],
    diagnosisTable: [
      { symptom: 'Door hangs lower than it should, gap at top', quickCheck: 'Open the door fully and inspect both hinges for bending, cracking, or spring coil damage', possibleCause: 'Worn or bent door hinges — hinges weaken over time especially if the door was ever pulled down or sat on' },
      { symptom: 'Door springs back open from closed position', quickCheck: 'Check if the door hinge arms are seating fully in the hinge slots on the oven frame', possibleCause: 'Hinge not fully engaged or hinge spring has lost tension — door won\'t stay in the closed position' },
      { symptom: 'Heat leaking around all four sides', quickCheck: 'Run a hand slowly around the door frame with the oven on — feel for heat escaping', possibleCause: 'Door gasket worn, compressed, or torn — the seal around the door interior has failed' },
      { symptom: 'Door won\'t close after self-clean cycle', quickCheck: 'Did the lock engage during self-clean? Is it now stuck in the locked or warped position?', possibleCause: 'Self-clean warped the door or frame from extreme heat; or the door lock mechanism didn\'t release properly after the cycle' },
      { symptom: 'Door drops open suddenly', quickCheck: 'With the door open, look at the hinge springs on both sides — are any visibly broken?', possibleCause: 'Door spring failure — the spring that controls closing speed has snapped' },
    ],
    safeTips: [
      { title: 'Inspect the door gasket', detail: 'Open the oven door and examine the rubber or fiberglass gasket that runs around the inside perimeter of the door frame. It should be intact, supple, and form a complete seal. Compressed flat sections, tears, or missing segments allow heat to escape. Gaskets are a serviceable part on most ovens.' },
      { title: 'Reseat the door hinges', detail: 'On most ovens, the door can be lifted straight up and off the hinge arms when the door is at approximately a 45-degree angle. With the door removed, inspect each hinge arm for straightness and the spring tension. Reseat the hinges in their slots and confirm both click in at the same depth.' },
      { title: 'Do not use the door as a step or shelf', detail: 'Oven doors are not designed to bear significant weight. Standing on the door, placing heavy pans on it while open, or letting children hang on it bends the hinges and stretches the springs. Even moderate loading causes the gradual sag that leads to poor door closure.' },
      { title: 'Let the oven cool after self-clean before inspecting', detail: 'The self-clean cycle runs at 900°F+. Never try to open the door while the lock light is on or the oven is still hot. After a full cool-down (2–4 hours), the lock should release automatically. If it doesn\'t, wait longer — forcing it can break the latch mechanism.' },
    ],
    whenToCall: [
      'Both door hinges are bent or broken — hinge replacement requires door removal and reassembly',
      'The door spring has snapped — springs are under high tension and dangerous to replace without proper tools',
      'The door frame or oven cavity is warped from the self-clean cycle',
      'The door glass is cracked or shattered — glass replacement requires proper safety handling',
      'The door lock mechanism is jammed after self-clean and won\'t release',
    ],
    repairVsReplace: {
      repairWhen: [
        'Door hinge replacement — straightforward repair, common part',
        'Door gasket replacement — inexpensive, extends oven life significantly',
        'Door spring replacement on a range under 12 years old',
        'Door glass replacement if the range is otherwise in good condition',
      ],
      replaceWhen: [
        'The oven cavity frame is warped — structural damage that can\'t be economically repaired',
        'Door failure is combined with a failed heating element or control board on a 15+ year old oven',
      ],
    },
    faq: [
      { q: 'Why won\'t my oven door close after the self-clean cycle?', a: 'The self-clean cycle runs at extreme temperatures (900°F+) that can warp the door or the oven frame slightly, preventing a complete seal. The door lock can also get stuck in the locked position if the oven didn\'t cool enough before the lock tried to release. Wait for a full cool-down first — usually 2–3 hours. If it still won\'t open or close after full cooling, call for service.' },
      { q: 'Is it safe to cook with an oven door that doesn\'t close completely?', a: 'Using an oven with a significant door gap is not recommended. Heat escaping from the gap creates a burn hazard, the oven will struggle to reach temperature, cooking times become unpredictable, and the extended run time causes extra wear on the heating element and thermostat. Address it before regular use.' },
      { q: 'How do I know if my oven door gasket needs replacing?', a: 'Close the oven door and hold a piece of paper at several points around the door frame. When you pull the paper, you should feel resistance. If it slides out easily at any spot, the gasket has failed there. Also inspect visually — a healthy gasket is full and resilient, not flat, cracked, or brittle.' },
      { q: 'How much does oven door hinge replacement cost in Charlotte?', a: 'Oven door hinge replacement in Charlotte typically runs $100–$200 for both hinges, including parts and labor. Door gasket replacement is usually $80–$140. Door spring replacement is $90–$160. HomeHeroes brings common hinge and gasket parts on the truck for same-day repair.' },
    ],
    relatedServiceSlug: 'oven-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'kitchenaid-appliance-repair', 'samsung-appliance-repair', 'frigidaire-appliance-repair'],
    relatedSymptomSlugs: ['oven-not-heating-properly', 'gas-oven-not-lighting', 'burner-not-working'],
  },

  {
    slug: 'burner-not-working',
    appliance: 'Oven',
    symptomShort: 'Burner Not Working',
    seoTitle: 'Stove Burner Not Working in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Stove burner not working, won\'t light, or heating unevenly in Charlotte, NC? Find the cause and fix. Same-day service. Call (704) 512-0111.',
    h1: 'Stove Burner Not Working in Charlotte, NC?',
    intro: 'A burner that won\'t light, won\'t heat, or cycles on and off irregularly is one of the most common stovetop problems — and one of the most disruptive. The fix depends on whether you have a gas or electric range. Gas burner failures usually trace to the igniter, burner cap, or gas valve. Electric coil and smooth-top issues each have their own set of causes.',
    commonSigns: [
      'One or more burners produce no heat when switched on',
      'Burner clicks repeatedly but doesn\'t ignite (gas)',
      'Electric burner coil glows unevenly or has dark spots',
      'Smooth cooktop burner heats but not to full power',
      'Burner sparks continuously even after lighting (gas)',
      'Burner only works on certain heat settings',
    ],
    diagnosisTable: [
      { symptom: 'Gas burner clicks but won\'t light', quickCheck: 'Remove the burner grate and cap — are the burner ports clogged? Is the cap seated flat?', possibleCause: 'Clogged burner ports or misaligned cap — the most common gas burner failure and easiest to fix' },
      { symptom: 'Gas burner sparks continuously after lighting', quickCheck: 'Is the burner area wet? Did anything boil over recently?', possibleCause: 'Moisture in the igniter — a boilover got into the igniter housing. Let it dry completely (48 hours) or use a hair dryer on low.' },
      { symptom: 'Electric coil burner doesn\'t heat', quickCheck: 'Remove the coil and plug it into a different burner receptacle on the stove — does it work there?', possibleCause: 'Faulty burner receptacle block rather than the coil itself — receptacle contacts burn out from heat cycling' },
      { symptom: 'Smooth-top burner not heating', quickCheck: 'Does the surface element indicator light turn on? Is the display showing an error code?', possibleCause: 'Radiant element failure beneath the glass, or a surface element switch failure' },
      { symptom: 'Burner heats on low only, won\'t go higher', quickCheck: 'Is this an infinite switch (knob with continuous settings) or a multi-position switch?', possibleCause: 'Infinite switch failure — the control that regulates electric burner power has partially failed' },
    ],
    safeTips: [
      { title: 'Clean gas burner ports thoroughly', detail: 'Remove the grate and burner cap. Use a toothpick or straightened paper clip to clear each small hole in the burner ring — never use a toothbrush with metal bristles or anything that can push debris further in. Rinse under warm water and let dry completely before replacing. Even partial blockage causes uneven flame or failure to light.' },
      { title: 'Reseat the burner cap correctly', detail: 'The burner cap must sit absolutely flat and centered on the burner head. After cleaning or any spill, it\'s easy to set it back crooked. A misaligned cap blocks the gas ports and prevents consistent ignition. Press it down firmly until it seats flat — it should not rock or tilt.' },
      { title: 'Dry out a wet igniter', detail: 'If continuous clicking started immediately after a boilover, the igniter is wet. Turn the burner knobs off, then use a hair dryer on the lowest heat setting to dry the igniter area for 2–3 minutes. Wait an hour before trying again. If clicking continues after full drying, the igniter module may need replacement.' },
      { title: 'Test electric coil in another position', detail: 'If you have a coil-type electric range, lift the suspect burner coil out of its receptacle and plug it into a working burner\'s receptacle. If it heats normally there, the receptacle on the original burner is bad. If it still doesn\'t heat, the coil itself is the problem.' },
    ],
    whenToCall: [
      'Gas continues to flow without igniting — you can smell gas but the burner won\'t light (turn off knob, ventilate, call for service)',
      'The igniter module is sparking on all burners simultaneously and won\'t stop — control board or wiring issue',
      'The infinite switch is melted, cracked, or visibly burned — replace immediately',
      'Smooth-top glass is cracked — do not use until the glass is replaced to prevent electric shock hazard',
      'A burner igniter replacement is needed — gas components require licensed technician work in NC',
    ],
    repairVsReplace: {
      repairWhen: [
        'Electric burner coil or receptacle block replacement — inexpensive and very common',
        'Infinite switch replacement on a range under 10 years old',
        'Gas igniter or igniter module replacement',
        'Repair cost under 50% of a comparable new range',
      ],
      replaceWhen: [
        'Multiple burners and the control board have failed on a 12+ year old range',
        'The smooth-top glass has cracked and the surface element beneath also needs replacement — combined cost often approaches a new cooktop',
        'Gas valve body failure on an older range where parts are discontinued',
      ],
    },
    faq: [
      { q: 'Why does my gas burner keep clicking even after it lights?', a: 'Continuous clicking after a gas burner has lit is almost always caused by moisture in the igniter housing — usually from a boilover that ran into the burner area. The spark module senses the moisture as a gap to bridge and keeps sparking. Turn the burner off, dry the area thoroughly with a hair dryer on low, and wait an hour before using it again.' },
      { q: 'My electric burner coil has a dark spot — is it broken?', a: 'A single dark spot or discoloration on a coil burner doesn\'t necessarily mean it\'s failed, but it indicates a hot spot or internal failure developing. Test it — if it heats unevenly, heats only on part of the coil, or makes crackling sounds, replace it. Coil burners are inexpensive and simple to swap.' },
      { q: 'What is an infinite switch on an electric range?', a: 'The infinite switch is the knob-operated control that regulates heat to an electric burner. Unlike a simple on/off switch, it cycles power on and off rapidly at varying rates to produce different heat levels. When it fails, the burner may only work on one heat level, not respond to the knob, or stay at full power. Replacement is a standard repair.' },
      { q: 'How much does burner repair cost in Charlotte?', a: 'Electric coil burner and receptacle replacement runs $60–$130. Infinite switch replacement is typically $100–$180. Gas burner igniter replacement is $100–$200. Smooth-top radiant element replacement is $150–$280. HomeHeroes provides a firm quote before any work starts.' },
    ],
    relatedServiceSlug: 'stove-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair', 'kitchenaid-appliance-repair', 'frigidaire-appliance-repair'],
    relatedSymptomSlugs: ['oven-not-heating-properly', 'gas-oven-not-lighting', 'oven-door-wont-close'],
  },


  // ─── DRYERS (additional) ────────────────────────────────────

  {
    slug: 'dryer-not-spinning',
    appliance: 'Dryer',
    symptomShort: 'Not Spinning',
    seoTitle: 'Dryer Not Spinning in Charlotte, NC | HomeHeroes Appliance Repair',
    metaDescription: 'Dryer drum not spinning in Charlotte, NC? Learn whether it\'s the belt, idler pulley, or motor — and when to call. Same-day repair. Call (704) 512-0111.',
    h1: 'Dryer Drum Not Spinning in Charlotte, NC?',
    intro: 'A dryer that runs but doesn\'t spin — or won\'t start at all — leaves wet clothes sitting in a stationary drum going nowhere. The drum must tumble to expose clothes to heat and airflow. The most common causes are a broken drive belt, a seized idler pulley, or a failed drive motor. All three are repairable in a single visit.',
    commonSigns: [
      'Dryer turns on and you can hear the motor, but the drum doesn\'t rotate',
      'Dryer starts then immediately stops — drum turns briefly then seizes',
      'Loud thump or snap sound followed by no more tumbling',
      'Drum rotates freely by hand when the dryer is off, but won\'t spin when running',
      'Clothes are still soaking wet after a full cycle',
      'Burning rubber smell when the dryer is on (belt slipping before it broke)',
    ],
    diagnosisTable: [
      { symptom: 'Motor runs, drum doesn\'t spin', quickCheck: 'Carefully open the dryer door mid-cycle — can you spin the drum by hand while it\'s "running"?', possibleCause: 'Broken drive belt — the most common dryer repair; belt snaps after years of heat cycling' },
      { symptom: 'Squealing then sudden no-spin', quickCheck: 'Was there a high-pitched squeal before the drum stopped? Belt is usually the cause.', possibleCause: 'Drive belt wore through — often preceded by squealing as the belt frayed before breaking' },
      { symptom: 'Dryer won\'t start at all', quickCheck: 'Is the door closing fully? Is the door latch clicking? Check the start button for response.', possibleCause: 'Door switch failure — the dryer motor won\'t start without a confirmed door-closed signal' },
      { symptom: 'Drum turns but very slowly', quickCheck: 'Check for items caught between the drum and the dryer cabinet — socks, small items can jam', possibleCause: 'Idler pulley seized or worn — provides belt tension; if it seizes, the belt can\'t move the drum at full speed' },
      { symptom: 'Grinding noise when attempting to spin', quickCheck: 'Are the drum bearing or drum slides worn? Open the door and try spinning the drum by hand.', possibleCause: 'Drum bearing or drum slide failure — drum loses its glide surface and grinds against the cabinet' },
    ],
    safeTips: [
      { title: 'Check the door latch first', detail: 'The dryer door switch is a safety interlock — the motor will not run without it confirming the door is closed. Open and close the door firmly until you hear a click. If the latch is broken or the switch doesn\'t click, the dryer may appear dead or start briefly then cut off. This is one of the first things a tech will check.' },
      { title: 'Check the circuit breaker', detail: 'Electric dryers use a 240V circuit with two 120V legs. If one leg trips, the motor may run (on 120V) but the drum drive and heating element won\'t function. Check your panel for a tripped dryer breaker — look for breakers in the "middle" position, not fully on or off.' },
      { title: 'Listen before calling', detail: 'Turn the dryer on and listen carefully for 10 seconds. If you hear a motor hum with no drum movement, it\'s likely a belt or idler pulley. If there\'s no sound at all, it\'s likely a door switch, thermal fuse, or control board issue. The sound (or silence) tells a tech a lot before they even open the machine.' },
    ],
    whenToCall: [
      'Drive belt has snapped — requires disassembly to access and replace',
      'Idler pulley is seized — belt tension component that must be replaced with belt',
      'Drive motor has failed — motor replacement is a significant repair but often worth it on newer units',
      'Door switch is confirmed failed by the door clicking but no motor response',
      'Drum bearing or slides are worn — drum must be removed to access',
    ],
    repairVsReplace: {
      repairWhen: [
        'Drive belt replacement — one of the most common and affordable dryer repairs ($100–$180)',
        'Idler pulley and belt replacement together — usually done as a set',
        'Door switch replacement — inexpensive part, quick fix',
        'Dryer is under 10 years old and otherwise in good condition',
      ],
      replaceWhen: [
        'Drive motor failure on a dryer 12+ years old — motor cost + labor often approaches a new unit',
        'Multiple simultaneous failures (belt + motor + drum bearing) indicating end of life',
      ],
    },
    faq: [
      { q: 'How do I know if my dryer belt is broken?', a: 'The clearest sign is a dryer that hums or sounds like it\'s running, but the drum doesn\'t rotate. You can also open the door and try to spin the drum by hand — if it spins with zero resistance (like it\'s floating), the belt is broken. A properly tensioned belt makes the drum slightly resistant when you push it by hand.' },
      { q: 'Can a dryer run with a broken belt?', a: 'The motor will run, but the drum won\'t spin — making it completely useless for drying clothes. Leaving the dryer running with a broken belt isn\'t dangerous in itself, but the motor runs with no load which can cause it to overheat over time. Turn it off and schedule repair.' },
      { q: 'How long does a dryer belt last?', a: 'Dryer drive belts typically last 8–12 years depending on use frequency, load sizes, and heat levels. Higher heat settings and large loads put more strain on the belt. If your dryer is in that age range and the belt snaps, it\'s a good time to have the idler pulley and drum slides inspected as well — they wear on the same timeline.' },
      { q: 'How much does dryer belt replacement cost in Charlotte?', a: 'Dryer drive belt replacement in Charlotte typically runs $100–$190 including parts and labor. If the idler pulley is replaced at the same time (recommended), add $30–$60. HomeHeroes stocks common dryer belts on the truck for same-day repair.' },
    ],
    relatedServiceSlug: 'dryer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'maytag-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair'],
    relatedSymptomSlugs: ['dryer-not-heating', 'dryer-making-loud-noise', 'dryer-taking-too-long-to-dry'],
  },

  {
    slug: 'dryer-making-loud-noise',
    appliance: 'Dryer',
    symptomShort: 'Making Loud Noise',
    seoTitle: 'Dryer Making Loud Noise in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Dryer making loud banging, squealing, or rumbling noise in Charlotte, NC? Learn what each sound means and when to call. Same-day repair. Call (704) 512-0111.',
    h1: 'Dryer Making Loud Noise in Charlotte, NC?',
    intro: 'Dryers make noise — but a new or worsening sound is always a signal worth investigating. Banging usually means an item in the drum. Squealing points to drum slides or a worn belt. Rumbling or grinding indicates a failing drum bearing or idler pulley. Each noise pattern has a specific cause, and most are repairable before they cause secondary damage.',
    commonSigns: [
      'Thumping or banging sound repeating with every drum rotation',
      'High-pitched squealing or chirping throughout the cycle',
      'Deep rumbling or grinding as the drum turns',
      'Rattling from inside the drum during tumbling',
      'Metal-on-metal scraping sound',
      'Sound started suddenly after a recent load',
    ],
    diagnosisTable: [
      { symptom: 'Rhythmic thumping once per rotation', quickCheck: 'Check the drum for shoes, sneakers, bra underwires, or items with hard fasteners', possibleCause: 'Hard items (shoes, buckles, buttons) hitting the drum wall — not a mechanical failure' },
      { symptom: 'High-pitched squeal throughout cycle', quickCheck: 'Is the squeal constant or only when the drum is turning? Constant = belt area; only on spin = drum slide', possibleCause: 'Worn drum slides or glides — the plastic strips the drum rests on have worn through, allowing metal-on-metal contact' },
      { symptom: 'Deep rumbling or grinding', quickCheck: 'Does the sound change when you press up on the open drum door to lift the drum slightly?', possibleCause: 'Worn drum bearing (rear bearing or bearing ring) — the drum\'s rear support is deteriorating' },
      { symptom: 'Squealing then sudden silence', quickCheck: 'Does the drum still spin after the noise stopped? Belt may have snapped.', possibleCause: 'Drive belt fraying before failure — belt squeals as it deteriorates, then breaks completely' },
      { symptom: 'Rattling near bottom of dryer cabinet', quickCheck: 'Check the vent connection — is the flexible duct loose or rattling against the cabinet?', possibleCause: 'Loose dryer vent connection or coin/item that fell below the drum into the base area' },
    ],
    safeTips: [
      { title: 'Check the drum before anything else', detail: 'Open the dryer and check for items that shouldn\'t be there. Bra underwires, coins, and small hard objects fall between clothes and cause metallic banging. Check the drum seal area (the rubber gasket around the door opening) for wires or debris caught in it.' },
      { title: 'Use a mesh laundry bag for delicates', detail: 'Shoes, bras, and items with metal hardware make significant noise when tumbling freely. Use mesh bags for these items or place a couple of tennis balls in with shoes to cushion the impact. This doesn\'t fix a mechanical noise, but immediately quiets hard-item banging.' },
      { title: 'Note when the noise happens', detail: 'Pay attention to whether the noise happens throughout the cycle, only when the drum is turning, only at certain temperatures, or only at the start. A squeal only during spin points to drum slides; constant noise regardless of drum spin points to the motor or blower wheel. Knowing this tells a technician a lot.' },
    ],
    whenToCall: [
      'Drum slides or glides are worn — requires drum removal to replace',
      'Rear drum bearing is failing — grinding will worsen rapidly and can seize the drum entirely',
      'Idler pulley is worn or seized — the belt-tensioning component makes a distinctive squealing',
      'Blower wheel has debris caught in it or has cracked — grinding or rattling from the motor area',
      'Drive belt is fraying — replace before it snaps and leaves clothes wet in a cold drum',
    ],
    repairVsReplace: {
      repairWhen: [
        'Drum slide/glide replacement — inexpensive set of parts, done during belt replacement',
        'Idler pulley replacement — often replaced with belt as a set',
        'Drum bearing replacement on a dryer under 10 years old',
        'Blower wheel cleaning or replacement — straightforward access on most models',
      ],
      replaceWhen: [
        'Drum bearing AND drive motor both failed on a 12+ year old dryer',
        'Cabinet or drum is structurally damaged — repair cost exceeds replacement value',
      ],
    },
    faq: [
      { q: 'What does it mean when a dryer squeals?', a: 'Squealing in a dryer almost always points to a friction problem: worn drum slides (the plastic glides the drum sits on), a dry or worn idler pulley, or a fraying drive belt. These are all wear items that have a normal lifespan of 8–12 years. The squeal will worsen until the part fully fails — schedule service before it causes secondary damage.' },
      { q: 'Is a noisy dryer dangerous to keep using?', a: 'It depends on the noise. A rhythmic thump from shoes in the drum — fine to run. A deep grinding noise from a failing drum bearing — stop using it. A bearing that seizes can prevent the drum from spinning at all, and the motor will keep running against the load until it fails too. Grinding noises warrant prompt service.' },
      { q: 'Why does my dryer squeal only when it first starts?', a: 'A squeal only at startup that stops after a minute or two usually indicates a worn idler pulley or drum bearing that needs a moment to warm up and seat. The squeal goes away as friction surfaces warm slightly. This is an early warning — the noise will eventually become constant as the wear progresses.' },
      { q: 'How much does dryer noise repair cost in Charlotte?', a: 'Dryer drum slide/glide replacement runs $100–$180. Idler pulley replacement is $90–$160. Drum bearing replacement is $120–$220. Blower wheel cleaning or replacement is $100–$170. HomeHeroes diagnoses the noise source and provides an upfront quote before any work begins.' },
    ],
    relatedServiceSlug: 'dryer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'maytag-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair'],
    relatedSymptomSlugs: ['dryer-not-spinning', 'dryer-not-heating', 'dryer-squeaking'],
  },


  // ─── REFRIGERATORS (additional) ─────────────────────────────

  {
    slug: 'refrigerator-compressor-noise',
    appliance: 'Refrigerator',
    symptomShort: 'Compressor Noise',
    seoTitle: 'Refrigerator Compressor Noise in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Refrigerator making loud clicking, buzzing, or knocking from the compressor in Charlotte, NC? Learn what each noise means. Same-day repair. Call (704) 512-0111.',
    h1: 'Refrigerator Compressor Noise in Charlotte, NC?',
    intro: 'The compressor is the heart of your refrigerator — it runs multiple times per hour, every day. A new or worsening noise from the compressor area is worth understanding immediately. Clicking on startup is often a relay issue. Buzzing or humming can be normal or signal a struggling compressor. A loud knocking or banging is more serious. Knowing which noise you have determines urgency.',
    commonSigns: [
      'Loud clicking sound when the refrigerator tries to start',
      'Compressor cycles on then clicks off almost immediately',
      'Loud buzzing or humming from the back or bottom of the refrigerator',
      'Knocking or banging sound when the compressor starts or stops',
      'Refrigerator is louder than it used to be during normal operation',
      'Compressor runs continuously without cycling off',
    ],
    diagnosisTable: [
      { symptom: 'Click-hum-click pattern — fails to start', quickCheck: 'The compressor is trying to start but immediately stopping — is there a hot smell from the back?', possibleCause: 'Start relay failure — a small component that helps the compressor start; when it fails, the compressor can\'t sustain a start' },
      { symptom: 'Constant loud buzzing', quickCheck: 'Is the refrigerator cooling normally? Is the buzzing constant or only during certain times?', possibleCause: 'Compressor struggling against high refrigerant pressure, or condenser fan failure causing the compressor to work harder' },
      { symptom: 'Loud knocking when compressor starts', quickCheck: 'Is the unit level? Are all four leveling feet contacting the floor?', possibleCause: 'Compressor mounting hardware loose or failed — the compressor is vibrating against the cabinet' },
      { symptom: 'Compressor won\'t stop running', quickCheck: 'Is the refrigerator maintaining proper temperature? Is the condenser coil dirty?', possibleCause: 'Dirty condenser coils or a failing compressor causing continuous running to maintain temperature' },
      { symptom: 'Clicking from the back, no cooling', quickCheck: 'Refrigerator temperature rising while clicking is happening', possibleCause: 'Start relay failure combined with no cooling — compressor can\'t start, refrigerant not circulating' },
    ],
    safeTips: [
      { title: 'Shake the start relay', detail: 'The start relay is a small component plugged into the compressor body (at the back of the fridge). With the refrigerator unplugged, pull it off and shake it next to your ear. If it rattles, the relay has failed. A working relay doesn\'t rattle — it has nothing loose inside. This is a $15–$30 part that stops the click-and-fail startup cycle.' },
      { title: 'Clean the condenser coils', detail: 'Dirty condenser coils make the compressor work much harder, causing it to run louder and longer. Pull the refrigerator forward and vacuum the coils on the back or bottom. If coils are packed with dust and pet hair, cleaning them can reduce compressor noise and extend its life significantly.' },
      { title: 'Check unit levelness', detail: 'A refrigerator that isn\'t level transmits compressor vibration directly to the floor and cabinet, amplifying noise. Adjust the leveling feet so the unit is stable — it should not rock. The front should be slightly higher than the rear (1/4 inch) to help the doors self-close.' },
    ],
    whenToCall: [
      'Start relay replacement — while the part is cheap, confirming this is the issue requires some diagnosis',
      'Compressor is confirmed failing — continuous running with poor cooling despite clean coils',
      'Condenser fan motor failure — fan must circulate air over coils for the compressor to run at normal temperature',
      'Refrigerant leak suspected — cooling failure combined with unusual compressor behavior',
      'Compressor is running but making a loud mechanical grinding — internal compressor failure',
    ],
    repairVsReplace: {
      repairWhen: [
        'Start relay replacement — inexpensive and a very common fix for click-fail noise ($60–$120)',
        'Condenser fan motor replacement on a refrigerator under 10 years old',
        'Compressor mounting hardware replacement if unit is under 8 years old',
      ],
      replaceWhen: [
        'Compressor internal failure on a refrigerator 10+ years old — compressor replacement cost often exceeds $500 and approaches a new unit',
        'Refrigerant leak combined with compressor wear — multiple system failures indicate end of life',
      ],
    },
    faq: [
      { q: 'Is it normal for my refrigerator compressor to click?', a: 'A single soft click when the compressor starts and stops is normal — that\'s the relay engaging. A repetitive click-hum-click pattern where the compressor tries to start, hums briefly, then clicks off and tries again is not normal — that\'s a failed start relay or an overloaded compressor. The difference is clear once you listen for a full cycle.' },
      { q: 'My refrigerator is louder than it used to be — is that a problem?', a: 'Gradual increase in compressor noise over months or years is a sign that coils need cleaning or the compressor is working harder than it should. A sudden increase in noise is more concerning — it indicates a component change (failed fan, loose mounting, relay problem). Clean the coils first; if noise persists, schedule service.' },
      { q: 'How long do refrigerator compressors last?', a: 'Most refrigerator compressors last 10–15 years with proper maintenance. Dirty coils are the leading cause of premature compressor failure — they force the compressor to run hotter and longer than designed. Annual coil cleaning is the single most effective maintenance task for extending compressor life.' },
      { q: 'How much does refrigerator compressor repair cost in Charlotte?', a: 'Start relay replacement runs $60–$120 including parts and labor. Condenser fan motor replacement is $120–$200. Full compressor replacement ranges from $400–$700 — at which point replacement of the refrigerator is often more economical, especially on units over 10 years old.' },
    ],
    relatedServiceSlug: 'refrigerator-repair',
    relatedBrandSlugs: ['samsung-appliance-repair', 'lg-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair', 'maytag-appliance-repair'],
    relatedSymptomSlugs: ['refrigerator-not-cooling', 'refrigerator-door-not-sealing', 'freezer-not-freezing'],
  },

  {
    slug: 'refrigerator-door-not-sealing',
    appliance: 'Refrigerator',
    symptomShort: 'Door Not Sealing',
    seoTitle: 'Refrigerator Door Not Sealing in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Refrigerator door not sealing properly in Charlotte, NC? Learn how to check the gasket and when to replace it. Same-day repair available. Call (704) 512-0111.',
    h1: 'Refrigerator Door Not Sealing Properly in Charlotte, NC?',
    intro: 'A refrigerator door that doesn\'t seal wastes energy constantly — the compressor runs more than it should to compensate for cold air escaping. It also allows humidity to enter, causing frost buildup in the freezer and condensation on food. The fix is usually a new door gasket, though a warped door or misadjusted hinges can also prevent proper sealing.',
    commonSigns: [
      'Refrigerator or freezer running more than usual or almost constantly',
      'Condensation on the exterior of the refrigerator near the door edge',
      'Items near the door are warmer than items deeper in the refrigerator',
      'You can feel cold air escaping when you run your hand along the door edge',
      'Visible gap or light visible at one section of the door when it\'s "closed"',
      'The door gasket feels brittle, cracked, or doesn\'t compress when you press on it',
    ],
    diagnosisTable: [
      { symptom: 'Warm air felt along door edge', quickCheck: 'Run a flashlight inside the closed refrigerator in a dark room — can you see light escaping at the door edge?', possibleCause: 'Door gasket failure — the magnetic seal has lost compression and is no longer creating an airtight contact' },
      { symptom: 'Gasket visibly torn, cracked, or stiff', quickCheck: 'Inspect the full perimeter of the gasket for cracks, tears, compression damage, or missing sections', possibleCause: 'Aged door gasket — gaskets dry out and crack after 8–15 years; heat, cleaning chemicals, and freezer frost cycling accelerate wear' },
      { symptom: 'Door swings open on its own or hangs crooked', quickCheck: 'Is the refrigerator level? Adjust the front leveling feet — front should be slightly higher', possibleCause: 'Refrigerator out of level, or door hinge worn causing door to hang at an angle that prevents full seal' },
      { symptom: 'Only one corner doesn\'t seal', quickCheck: 'Press the gasket firmly against the magnetic strip along the problem corner — does it improve?', possibleCause: 'Gasket pulled away from the door frame at one corner — the gasket retainer groove may have loosened or the gasket shrunk' },
      { symptom: 'Door seals but refrigerator still runs constantly', quickCheck: 'Check condenser coil cleanliness and confirm the thermostat setting hasn\'t changed', possibleCause: 'Door seal is fine — constant running is from another cause (dirty coils, thermostat, low refrigerant)' },
    ],
    safeTips: [
      { title: 'The dollar bill test', detail: 'Close the refrigerator door on a dollar bill so the bill is half in, half out. Pull the bill — you should feel resistance. Repeat at multiple points around the full door perimeter. Where the bill slides out easily with no resistance, the gasket is not sealing. This quickly identifies whether you have a gasket problem and where it\'s failing.' },
      { title: 'Try warming a stiff gasket', detail: 'A gasket that has gone stiff from cold temperatures can sometimes reseal if warmed. Use a hair dryer on low heat to warm the gasket for 1–2 minutes, then close the door and let it set for a few hours. This works for mild stiffness but not for cracked or torn gaskets.' },
      { title: 'Keep the door hinges clean', detail: 'Refrigerator door hinges have plastic bushings that wear over time. A door that sags on its hinges will never seal properly regardless of gasket condition. Check whether the top of the door aligns with the top of the refrigerator cabinet — if it\'s visibly lower on one side, the hinge or bushing has worn.' },
    ],
    whenToCall: [
      'Gasket is torn, cracked, or has visible sections that no longer contact the door frame',
      'The dollar bill test fails at multiple points around the door perimeter',
      'Door hinge is worn — door sags and won\'t align properly with the frame',
      'Gasket warming and repositioning didn\'t improve sealing',
      'New gasket was installed but still not sealing — door frame may be warped',
    ],
    repairVsReplace: {
      repairWhen: [
        'Door gasket replacement — one of the most cost-effective refrigerator repairs ($80–$160)',
        'Door hinge or bushing replacement on a refrigerator under 10 years old',
        'Gasket retainer repair if the groove has separated from the door liner',
      ],
      replaceWhen: [
        'Door liner is cracked or warped — gasket can\'t seal against a deformed surface',
        'Multiple simultaneous failures (gasket + hinge + compressor strain) on a 15+ year old unit',
      ],
    },
    faq: [
      { q: 'How do I know if my refrigerator door gasket needs replacing?', a: 'Use the dollar bill test: close the door on a folded dollar bill and try to pull it out. You should feel clear resistance. If it slides out easily at any point around the perimeter, the gasket is failing there. You can also look for visible cracks, flat sections that no longer have a ridge, or areas where the gasket has pulled away from the door frame.' },
      { q: 'Can a bad door gasket cause the refrigerator to run constantly?', a: 'Yes — even a small gap in the door seal allows warm room air to continuously enter the refrigerator. The compressor runs extra cycles to compensate, increasing energy use and wear. In humid Charlotte summers, the warm moist air also causes frost buildup in the freezer and condensation on refrigerator walls.' },
      { q: 'How long do refrigerator door gaskets last?', a: 'Most refrigerator door gaskets last 8–15 years. Freezer gaskets tend to wear faster because the extreme cold makes the rubber brittle over time. Gaskets on frequently opened doors (like a French door bottom freezer) also wear faster. Cleaning gaskets with mild soap (not harsh cleaners) extends their life.' },
      { q: 'How much does refrigerator door gasket replacement cost in Charlotte?', a: 'Refrigerator door gasket replacement in Charlotte typically runs $80–$160 for a single door, including parts and labor. French door refrigerators with two fresh food doors may need both replaced at the same time. HomeHeroes stocks gaskets for the most common refrigerator brands.' },
    ],
    relatedServiceSlug: 'refrigerator-repair',
    relatedBrandSlugs: ['samsung-appliance-repair', 'lg-appliance-repair', 'whirlpool-appliance-repair', 'ge-appliance-repair', 'maytag-appliance-repair', 'bosch-appliance-repair'],
    relatedSymptomSlugs: ['refrigerator-not-cooling', 'refrigerator-compressor-noise', 'freezer-frost-buildup'],
  },


  // ─── FREEZERS ───────────────────────────────────────────────

  {
    slug: 'freezer-not-freezing',
    appliance: 'Freezer',
    symptomShort: 'Not Freezing',
    seoTitle: 'Freezer Not Freezing in Charlotte, NC | HomeHeroes Appliance Repair',
    metaDescription: 'Freezer not freezing or not cold enough in Charlotte, NC? Learn the common causes and when to call for repair. Same-day service. Call (704) 512-0111.',
    h1: 'Freezer Not Freezing in Charlotte, NC?',
    intro: 'A freezer that can\'t maintain 0°F puts hundreds of dollars of food at risk and signals a refrigerant or mechanical failure that will only worsen. The most common causes are a failed evaporator fan (freezer-side), a defrost system failure allowing frost to block airflow, a dirty condenser coil, or refrigerant loss. Most are diagnosable without moving the unit.',
    commonSigns: [
      'Ice cream is soft or melted even when "frozen"',
      'Frost buildup on freezer walls but the interior temperature isn\'t cold enough',
      'Freezer temperature reading is above 10°F on a consistent basis',
      'Refrigerator section is fine but the freezer compartment isn\'t freezing',
      'Motor running constantly but the freezer never gets cold enough',
      'Food that was previously frozen is starting to thaw',
    ],
    diagnosisTable: [
      { symptom: 'Freezer warm, fridge also warm', quickCheck: 'Is the compressor running? Feel the back of the unit — is it warm from heat rejection?', possibleCause: 'Compressor or refrigerant failure — both sections share the refrigerant loop; failure affects both' },
      { symptom: 'Freezer warm, fridge OK', quickCheck: 'Listen for the evaporator fan inside the freezer — do you hear it running when the door is open?', possibleCause: 'Evaporator fan motor failure — fan moves cold air from evaporator coils into the freezer; if it stops, the freezer loses cooling' },
      { symptom: 'Freezer has heavy frost but not cold enough', quickCheck: 'Is the evaporator fan blocked by a thick ice wall at the back of the freezer?', possibleCause: 'Defrost system failure — heater, thermostat, or timer failed; frost accumulates until it completely blocks the evaporator coil' },
      { symptom: 'Freezer runs fine in winter, fails in summer', quickCheck: 'Is the freezer in a garage? Ambient temperature above 110°F can overwhelm some freezer compressors', possibleCause: 'Operating environment too hot — garage freezers in Charlotte summers frequently fail to maintain temperature during heat waves' },
      { symptom: 'Freezer cools partially but not to 0°F', quickCheck: 'Are the condenser coils dusty? When did you last clean them?', possibleCause: 'Dirty condenser coils — reduces heat rejection efficiency and prevents the freezer from reaching target temperature' },
    ],
    safeTips: [
      { title: 'Check the evaporator fan', detail: 'Open the freezer door and press the door switch (the small button or plunger the door presses when it closes). This simulates the door being closed. Listen for the evaporator fan inside the freezer. If you don\'t hear a fan running, it has either stopped or the defrost system has blocked it with ice. A non-running fan means your freezer is circulating no cold air.' },
      { title: 'Perform a manual defrost', detail: 'If you see a thick wall of frost at the back of the freezer, the defrost system has failed and frost is blocking the evaporator coil. Unplug the freezer and leave both doors open for 24–48 hours to melt all frost. If the freezer returns to proper temperature after this, the defrost heater, thermostat, or timer needs replacement.' },
      { title: 'Clean the condenser coils', detail: 'Condenser coils on upright freezers are usually at the back of the unit or underneath. Unplug the freezer, pull it forward, and vacuum the coils thoroughly. Heavily coated coils can prevent the freezer from reaching target temperature even with a perfectly functional compressor.' },
    ],
    whenToCall: [
      'Evaporator fan motor has failed — motor replacement requires accessing the evaporator panel',
      'Defrost heater or defrost thermostat failed — manual defrost confirmed the fix, parts need replacement',
      'Compressor is not running or is running constantly without achieving temperature',
      'Refrigerant leak suspected — hissing sound, oily residue near coils, or zero cooling despite running compressor',
      'Temperature sensor or control board failure',
    ],
    repairVsReplace: {
      repairWhen: [
        'Evaporator fan motor replacement — very common and cost-effective repair',
        'Defrost heater or thermostat replacement — straightforward fix for defrost system failure',
        'Condenser coil cleaning — sometimes all that\'s needed',
        'Freezer is under 10 years old and repair cost is under 50% of replacement',
      ],
      replaceWhen: [
        'Compressor failure on a chest or upright freezer 12+ years old',
        'Refrigerant leak — recharging cost plus the underlying leak repair often exceeds freezer value on older units',
      ],
    },
    faq: [
      { q: 'My freezer has lots of frost but isn\'t cold — what\'s happening?', a: 'This is a classic defrost system failure. When the automatic defrost heater, thermostat, or timer fails, frost accumulates on the evaporator coils without being melted back. Eventually the frost wall is so thick it blocks airflow entirely — you get frost everywhere except actual freezing temperature. A manual defrost (24–48 hours unplugged) followed by normal operation confirms the diagnosis.' },
      { q: 'Why is my freezer not freezing but my refrigerator is fine?', a: 'If the freezer isn\'t freezing but the refrigerator section works, the most likely cause is the evaporator fan motor inside the freezer compartment. The refrigerator uses a separate airflow path. A failed freezer fan stops air circulation in the freezer but doesn\'t immediately affect the refrigerator section.' },
      { q: 'How cold should a freezer be?', a: 'A properly functioning freezer should maintain 0°F (-18°C). At this temperature, most pathogens are inhibited and food quality is preserved. Ice cream should be firmly frozen. If your freezer is consistently above 10°F, food safety is compromised and repair is urgent.' },
      { q: 'How much does freezer repair cost in Charlotte?', a: 'Evaporator fan motor replacement runs $120–$220. Defrost heater and thermostat replacement is typically $100–$200. These are the most common freezer repairs. Compressor replacement, if needed, ranges from $350–$600 — at that price point, replacement is often more economical on older units.' },
    ],
    relatedServiceSlug: 'freezer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair', 'maytag-appliance-repair'],
    relatedSymptomSlugs: ['freezer-frost-buildup', 'freezer-making-noise', 'refrigerator-not-cooling'],
  },

  {
    slug: 'freezer-frost-buildup',
    appliance: 'Freezer',
    symptomShort: 'Frost Buildup',
    seoTitle: 'Freezer Frost Buildup in Charlotte, NC | HomeHeroes Appliance Repair',
    metaDescription: 'Excessive frost buildup in your freezer in Charlotte, NC? Learn what causes it and when the defrost system needs repair. Same-day service. Call (704) 512-0111.',
    h1: 'Excessive Frost Buildup in Freezer in Charlotte, NC?',
    intro: 'Some frost inside a freezer is normal — but excessive frost, thick ice walls on the back panel, or frost forming rapidly over days indicates that the automatic defrost system has failed. Modern frost-free freezers run a defrost cycle every 8–12 hours that melts frost from the evaporator coil. When that cycle stops working, frost accumulates until it blocks airflow entirely.',
    commonSigns: [
      'Thick layer of frost or ice on the back wall of the freezer',
      'Items in the freezer are coated in frost or ice even when sealed',
      'The freezer has reduced storage space because frost has built up',
      'Frost returns quickly within days of manually defrosting',
      'Freezer isn\'t as cold as it should be despite heavy frost',
      'You can hear the freezer motor running but airflow from vents seems reduced',
    ],
    diagnosisTable: [
      { symptom: 'Frost on back wall only (behind the panel)', quickCheck: 'Remove items and press on the back panel — is the frost behind the panel in the evaporator area?', possibleCause: 'Defrost heater failure — heater runs during defrost cycles to melt frost from the evaporator coil; when it fails, frost accumulates and spreads' },
      { symptom: 'Frost on food items and walls', quickCheck: 'Is the freezer door sealing properly? Is humidity getting in?', possibleCause: 'Door gasket failure allowing warm, moist air in — moisture in freezer air freezes on every surface' },
      { symptom: 'Frost returns within 48 hours of manual defrost', quickCheck: 'After defrost, does the freezer return to proper temperature before frosting again?', possibleCause: 'Defrost timer, heater, or thermostat failure — auto-defrost cycle isn\'t running on schedule' },
      { symptom: 'Heavy frost on top shelf near vent', quickCheck: 'Is the evaporator fan running? Is air flowing from the vents?', possibleCause: 'Evaporator fan drawing warm air through a failed damper — moisture-laden air enters and freezes near the vent' },
      { symptom: 'Frost accumulating since a power outage', quickCheck: 'Did the defrost timer reset to an incorrect position during the power interruption?', possibleCause: 'Mechanical defrost timer misalignment after power loss — timer needs to be advanced to the defrost position' },
    ],
    safeTips: [
      { title: 'Perform a manual defrost to confirm the diagnosis', detail: 'Unplug the freezer and leave both doors open until all frost has melted (usually 12–48 hours). Then plug it back in and monitor over the next 3–5 days. If frost returns rapidly (within a week), the automatic defrost system has failed. If it takes 2–3 months to build up again, the issue is mild and may be door-seal related.' },
      { title: 'Never chip ice off the evaporator coil', detail: 'Using a screwdriver, ice pick, or any sharp tool to chip frost off the back panel can puncture the evaporator coil and release refrigerant — turning a $150 repair into a potential total loss. Always defrost by unplugging and letting ice melt naturally. A hair dryer on low can speed up melting away from the coil.' },
      { title: 'Check that the door closes completely', detail: 'A freezer door that\'s not fully sealed allows humid room air to enter with every degree of temperature change. In Charlotte\'s humid summers, this can cause rapid frost accumulation even with a functioning defrost system. Do the dollar bill test around the full door perimeter.' },
    ],
    whenToCall: [
      'Defrost heater is confirmed failed — requires accessing the evaporator panel behind the freezer back wall',
      'Defrost thermostat or temperature limiter needs replacement — small component that signals when to stop the defrost cycle',
      'Defrost timer has failed or needs replacement on older mechanical-timer models',
      'Evaporator coil is damaged from mechanical defrosting attempts',
      'Frost returns within days of a full manual defrost',
    ],
    repairVsReplace: {
      repairWhen: [
        'Defrost heater replacement — the most common freezer repair for frost buildup ($100–$180)',
        'Defrost thermostat replacement — inexpensive component, done at same time as heater',
        'Defrost timer replacement on mechanical timer models',
        'Door gasket replacement if frost is caused by poor seal',
      ],
      replaceWhen: [
        'Evaporator coil is damaged (punctured by manual defrosting) — coil replacement cost often approaches new unit value',
        'Multiple defrost system failures combined with compressor wear on a 15+ year old unit',
      ],
    },
    faq: [
      { q: 'Why does my frost-free freezer have so much frost?', a: '"Frost-free" means the freezer has an automatic defrost system — it doesn\'t mean frost can never form. When the defrost heater, thermostat, or timer fails, the "frost-free" feature stops working and frost accumulates like an old-style manual-defrost freezer. Frost-free freezers still need repair when their defrost system components fail.' },
      { q: 'How often should a freezer need manual defrosting?', a: 'A properly functioning frost-free freezer should never need manual defrosting — the auto-defrost cycle handles it every 8–12 hours. Manual-defrost chest freezers typically need defrosting once or twice a year. If your frost-free freezer needs manual defrosting, the defrost system has failed.' },
      { q: 'Can I speed up freezer defrosting with a hair dryer?', a: 'Yes, carefully — use the lowest heat setting and keep the dryer moving at least 12 inches from any surface. Never aim heat directly at the thin aluminum evaporator coil at the back of the freezer. The coil is fragile and heat damage can release refrigerant. Focus on melting ice from the walls and shelves, not the back panel.' },
      { q: 'How much does defrost system repair cost in Charlotte?', a: 'Defrost heater replacement runs $100–$180. Defrost thermostat replacement is usually $80–$150. If both the heater and thermostat are replaced at the same time (common), the combined cost is typically $140–$220 with labor. HomeHeroes stocks common defrost components for same-day repair.' },
    ],
    relatedServiceSlug: 'freezer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair', 'maytag-appliance-repair'],
    relatedSymptomSlugs: ['freezer-not-freezing', 'freezer-making-noise', 'refrigerator-door-not-sealing'],
  },

  {
    slug: 'freezer-making-noise',
    appliance: 'Freezer',
    symptomShort: 'Making Noise',
    seoTitle: 'Freezer Making Loud Noise in Charlotte, NC | HomeHeroes Repair',
    metaDescription: 'Freezer making loud buzzing, clicking, or rattling noise in Charlotte, NC? Learn what each sound means and when to call. Same-day repair. Call (704) 512-0111.',
    h1: 'Freezer Making Loud Noise in Charlotte, NC?',
    intro: 'Freezers make some noise during normal operation — the compressor cycles on and off, the evaporator fan runs, and ice makers click and fill. But a new noise, a changing noise, or a loud continuous noise indicates something has changed. The type of sound tells you where to look and how urgently to act.',
    commonSigns: [
      'Loud buzzing or humming from the freezer that wasn\'t there before',
      'Clicking sounds from the compressor area that repeat on a cycle',
      'Rattling from inside the freezer cabinet',
      'Gurgling or popping sounds from inside the walls',
      'Constant fan noise louder than usual',
      'Ice maker making loud clunking sounds during a fill cycle',
    ],
    diagnosisTable: [
      { symptom: 'Loud buzzing, freezer cooling normally', quickCheck: 'Is the freezer level? Is anything vibrating against the unit?', possibleCause: 'Compressor vibration transmitted to floor or cabinet — usually a leveling or isolation mount issue, not a compressor failure' },
      { symptom: 'Clicking pattern, then silence, then repeat', quickCheck: 'Is the freezer maintaining temperature? Is the clicking from the back?', possibleCause: 'Start relay failing — compressor tries to start, relay fails, waits, tries again; same click pattern as refrigerators' },
      { symptom: 'High-pitched whine from inside the freezer', quickCheck: 'Is the sound coming from a fan near the top-back inside the compartment?', possibleCause: 'Evaporator fan motor bearing failing — the fan that circulates cold air inside the freezer is wearing out' },
      { symptom: 'Gurgling or popping sounds from walls', quickCheck: 'Is the gurgling constant or only during compressor cycling?', possibleCause: 'Normal refrigerant sounds during cycling — refrigerant flowing through the coils as pressure equalizes after the compressor stops' },
      { symptom: 'Rattling from inside, louder when full', quickCheck: 'Shift items inside — is the noise from something vibrating against the walls or shelves?', possibleCause: 'Items inside the freezer vibrating against the cabinet during compressor operation — not a mechanical failure' },
    ],
    safeTips: [
      { title: 'Identify where the sound is coming from', detail: 'Stand near the freezer with it running and move your ear to different positions: the back (compressor area), the inside near the back wall (evaporator fan), and underneath (condenser fan if present). Narrowing down the source — inside vs. outside, top vs. bottom — tells you which component is involved before any technician arrives.' },
      { title: 'Level the freezer', detail: 'Place a level on top of the freezer. If it\'s not level, the compressor vibrates more than designed, transmitting sound to the cabinet and floor. Adjust the front leveling feet until the unit is stable. For chest freezers, rubber isolation pads under the feet dampen vibration significantly.' },
      { title: 'Check for loose items inside and outside', detail: 'Items stored on top of the freezer, items leaning against the side, and unsecured drain trays underneath can all rattle during compressor operation. Remove everything from the top and sides and listen again — if the noise disappears, it\'s an external vibration source, not a mechanical problem.' },
    ],
    whenToCall: [
      'Evaporator fan motor is whining or grinding — bearing failure will lead to complete fan failure',
      'Start relay click pattern confirms compressor won\'t start — relay replacement needed',
      'Loud grinding or metallic noise from the compressor area — compressor internals may be failing',
      'Ice maker makes loud grinding or banging (not just normal clunks) — auger motor or gear may have failed',
      'Any noise combined with rising freezer temperature — functional failure, not just a noise issue',
    ],
    repairVsReplace: {
      repairWhen: [
        'Evaporator fan motor replacement — common and cost-effective',
        'Start relay replacement — inexpensive fix for click-pattern noise',
        'Ice maker component repair or replacement on a freezer under 10 years old',
        'Compressor isolation mount replacement',
      ],
      replaceWhen: [
        'Compressor internal failure on a 12+ year old freezer',
        'Multiple simultaneous failures indicating end of life',
      ],
    },
    faq: [
      { q: 'Is it normal for a freezer to make popping or cracking sounds?', a: 'Yes — popping, cracking, and gurgling sounds from inside the walls are completely normal. They happen when the refrigerant changes pressure as the compressor cycles on and off, and when the freezer walls expand and contract with temperature changes. These are not cause for concern unless they\'re new, very loud, or accompanied by temperature problems.' },
      { q: 'Why does my chest freezer rattle so much?', a: 'Chest freezers are less damped than upright models — the compressor vibration has fewer internal structures to absorb it before reaching the cabinet. Common causes: the freezer isn\'t level, rubber isolation feet are worn or missing, items are stored on top or against the sides, or the drain tube at the bottom has come loose and is rattling against the cabinet.' },
      { q: 'My freezer fan sounds much louder than usual — is this a problem?', a: 'A sudden increase in evaporator fan noise is usually a bearing beginning to fail. The bearing wears, adds friction, and makes the fan motor work harder and louder. It will progressively worsen until the motor seizes — at which point the freezer loses cold air circulation and the temperature rises. Address it before it reaches that point.' },
      { q: 'How much does freezer noise repair cost in Charlotte?', a: 'Evaporator fan motor replacement runs $120–$220. Start relay replacement is $60–$120. Ice maker motor repair is $120–$200. HomeHeroes diagnoses the noise source and provides an upfront quote before any work begins.' },
    ],
    relatedServiceSlug: 'freezer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair', 'maytag-appliance-repair'],
    relatedSymptomSlugs: ['freezer-not-freezing', 'freezer-frost-buildup', 'freezer-leaking-water'],
  },

  {
    slug: 'freezer-leaking-water',
    appliance: 'Freezer',
    symptomShort: 'Leaking Water',
    seoTitle: 'Freezer Leaking Water in Charlotte, NC | HomeHeroes Appliance Repair',
    metaDescription: 'Freezer leaking or pooling water in Charlotte, NC? Learn the common causes — clogged drain, defrost pan, door seal — and when to call. Call (704) 512-0111.',
    h1: 'Freezer Leaking Water in Charlotte, NC?',
    intro: 'Water under or around a freezer is both a nuisance and a safety hazard. The most common source is a clogged defrost drain — the drain that carries meltwater from defrost cycles gets blocked and overflows instead of draining. Ice maker water supply line leaks, a cracked drain pan, and a failed door seal can also cause leaking. Most are resolvable in a single visit.',
    commonSigns: [
      'Water pooling on the floor directly below or in front of the freezer',
      'Ice or water visible inside the freezer compartment on the floor',
      'Moisture or water underneath the crisper drawers in the refrigerator section',
      'Water dripping from the ice maker area',
      'Defrost drain pan under the unit is overflowing',
      'Water marks or rust stains on the floor under the unit',
    ],
    diagnosisTable: [
      { symptom: 'Water inside the freezer on the floor', quickCheck: 'Is there a thick frost buildup on the back panel? Is the freezer drain hole blocked with ice?', possibleCause: 'Clogged defrost drain — meltwater from defrost cycles can\'t drain and refreezes or overflows into the cabinet' },
      { symptom: 'Water pooling at the back of the unit', quickCheck: 'Is the drain pan visible under the unit? Is it cracked or overflowing?', possibleCause: 'Cracked or overflowing drain pan — the pan that normally evaporates defrost water has cracked or is collecting more water than it can evaporate' },
      { symptom: 'Water near the ice maker', quickCheck: 'Is the water supply line (plastic tubing behind the unit) cracked or loose at the fitting?', possibleCause: 'Water supply line leak — the line feeding the ice maker has a crack, loose fitting, or frozen section that burst' },
      { symptom: 'Water under crisper drawers in the fridge section', quickCheck: 'Look at the back wall of the fresh food section — is there a drain hole that appears clogged?', possibleCause: 'Refrigerator section drain clogged — on combo fridge-freezer units, the refrigerator has its own drain that can clog separately' },
      { symptom: 'Water only when the freezer runs a defrost cycle', quickCheck: 'When does the water appear — during a specific part of the day on a schedule?', possibleCause: 'Defrost drain tube misaligned or cracked — meltwater isn\'t reaching the drain pan properly' },
    ],
    safeTips: [
      { title: 'Clear the defrost drain', detail: 'The defrost drain is a small hole at the bottom of the freezer back panel. It can be found by removing the panel — the hole feeds a drain tube that runs to the drain pan underneath. To clear a clogged drain, flush it with a turkey baster filled with warm water. If the drain is frozen solid, a hair dryer on low aimed at the drain hole will melt the blockage.' },
      { title: 'Check the drain pan', detail: 'The drain pan sits on the floor beneath the freezer, usually accessible by removing a front kick plate. It should have some water in it — this is normal (it evaporates). If it\'s cracked or overflowing, the pan needs replacement or the defrost system is producing more meltwater than normal (indicating a defrost system running too long).' },
      { title: 'Inspect the ice maker water line', detail: 'Behind the freezer, the water supply line connects from the wall valve to the back of the unit. This thin plastic line can crack from being kinked, from age, or from a freeze event. With the unit pulled forward, run your hand along the line while the ice maker is filling to feel for moisture.' },
    ],
    whenToCall: [
      'Defrost drain is clogged and can\'t be cleared with hot water flush — may require drain heater repair',
      'Drain pan is cracked and water is reaching the floor — needs replacement',
      'Water supply line has a crack or the inlet valve is leaking',
      'Water inlet valve is dripping when the ice maker is not calling for water — valve seal failure',
      'Drain tube has detached from the drain pan and is dripping behind the unit',
    ],
    repairVsReplace: {
      repairWhen: [
        'Defrost drain clearing or drain heater replacement — common and inexpensive fix',
        'Drain pan replacement — straightforward part replacement',
        'Water supply line replacement — simple fix, part costs under $30',
        'Water inlet valve replacement on a unit under 10 years old',
      ],
      replaceWhen: [
        'Water damage from a long-running leak has damaged the floor or cabinet interior significantly',
        'Multiple leaking components combined with compressor wear on a 15+ year old unit',
      ],
    },
    faq: [
      { q: 'Why does my freezer have water on the floor inside?', a: 'Water inside the freezer on the floor is almost always from a clogged defrost drain. Every defrost cycle melts frost from the evaporator coil — that meltwater is supposed to flow through a drain hole down to the drain pan underneath. When the drain clogs with food debris or ice, the water has nowhere to go and overflows into the freezer compartment.' },
      { q: 'Is a clogged freezer drain dangerous?', a: 'Not immediately dangerous, but it should be addressed promptly. As the blocked water refreezes, it builds up a layer of ice on the freezer floor that can eventually block the evaporator fan and cause the freezer to lose cooling capacity. Water on the kitchen floor is also a slip hazard.' },
      { q: 'Why does my freezer drain keep clogging?', a: 'Recurring drain clogs usually indicate that the defrost drain heater has failed. Most modern freezers have a small heater element around the drain opening that prevents the drain from freezing during and after each defrost cycle. When this heater fails, the drain refreezes after each flush. Replacing the drain heater is the permanent fix.' },
      { q: 'How much does freezer leak repair cost in Charlotte?', a: 'Defrost drain clearing and inspection runs $80–$130. Drain pan replacement is $80–$150. Water supply line replacement is $60–$120. Water inlet valve replacement is $100–$180. HomeHeroes provides an upfront quote and same-day service for most freezer repairs in the Charlotte area.' },
    ],
    relatedServiceSlug: 'freezer-repair',
    relatedBrandSlugs: ['whirlpool-appliance-repair', 'ge-appliance-repair', 'samsung-appliance-repair', 'lg-appliance-repair', 'maytag-appliance-repair'],
    relatedSymptomSlugs: ['freezer-not-freezing', 'freezer-frost-buildup', 'refrigerator-leaking-water'],
  },

];

export function getSymptom(slug: string): SymptomPage | undefined {
  return symptoms.find(s => s.slug === slug);
}
