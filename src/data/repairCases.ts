export interface EstimateLine {
  label: string;
  amount: string;
}

export interface DiagnosisStep {
  step: string;
  finding: string;
}

export interface RepairCase {
  slug: string;
  date: string;
  dateISO: string;
  applianceType: string;
  brand: string;
  model: string;
  area: string;
  areaSlug: string;
  issueShort: string;
  estimateRange: string;
  repairTotal: string;
  seoTitle: string;
  metaDesc: string;
  heroTitle: string;
  heroSub: string;
  techImage: string;
  applianceImage: string;
  customerProblemSummary: string;
  customerProblemBullets: string[];
  diagnosisSteps: DiagnosisStep[];
  rootCause: string;
  estimateLines: EstimateLine[];
  estimateTotalNote: string;
  techNotes: string[];
  result: string;
  review: { text: string; author: string; location: string };
  maintenanceTip: string;
  relatedService: { label: string; href: string };
  relatedBrand: { label: string; href: string };
  relatedSymptom: { label: string; href: string };
}

export const repairCases: RepairCase[] = [
  {
    slug: 'samsung-refrigerator-frost-buildup-ballantyne',
    date: 'April 28, 2026',
    dateISO: '2026-04-28',
    applianceType: 'French Door Refrigerator',
    brand: 'Samsung',
    model: 'RF28R7551SR',
    area: 'Ballantyne',
    areaSlug: 'ballantyne-appliance-repair',
    issueShort: 'Heavy frost buildup blocking airflow, fresh food section not cooling below 50°F.',
    estimateRange: '$290–$370',
    repairTotal: '$340',
    seoTitle: 'Samsung Refrigerator Frost Buildup Repair in Ballantyne, Charlotte NC | HomeHeroes',
    metaDesc: 'HomeHeroes repaired a Samsung French Door refrigerator with severe frost buildup and cooling failure in Ballantyne, Charlotte NC. See the diagnosis, repair cost breakdown, and outcome.',
    heroTitle: 'Samsung Refrigerator Frost Buildup Repair — Ballantyne, Charlotte NC',
    heroSub: 'Fresh food section reaching 50°F. Freezer caked in ice. Food on the verge of spoiling. Repaired same day.',
    techImage: '/images/hero/hero-technician.webp',
    applianceImage: '/images/hero/hero-technician.webp',
    customerProblemSummary: 'A Ballantyne homeowner called us late Tuesday evening after noticing their Samsung French Door refrigerator had stopped keeping the fresh food section cold. The freezer looked normal at first glance, but the refrigerator compartment was sitting at 51°F — well above the safe 37°F threshold. A bag of spinach had wilted and a gallon of milk felt warm. When they pulled out the bottom drawer, they found a thick wall of ice packed against the back panel.',
    customerProblemBullets: [
      'Fresh food compartment reading 50–52°F for at least two days',
      'Freezer functioning but heavy frost visible on rear wall',
      'Refrigerator fan running but airflow severely restricted',
      'Food beginning to spoil — customer concerned about a full fridge of groceries',
      'Unit approximately 4 years old, purchased from Best Buy',
    ],
    diagnosisSteps: [
      { step: 'Airflow test', finding: 'No cold air reaching fresh food section despite evaporator fan running. Confirmed airflow blockage behind rear freezer panel.' },
      { step: 'Rear panel removal', finding: 'Evaporator coils completely encased in frost — roughly 2–3 inches of ice buildup across the entire coil assembly.' },
      { step: 'Defrost heater test', finding: 'Heater element tested open circuit at 28Ω resistance — confirmed failed. Heater was not cycling, allowing frost to accumulate unchecked.' },
      { step: 'Defrost thermostat check', finding: 'Thermostat tested within spec. Not the primary failure, but flagged for monitoring.' },
      { step: 'Drain line inspection', finding: 'Drain tube fully blocked with ice. Melted water had nowhere to go, contributing to accelerated buildup on lower coils.' },
      { step: 'Control board review', finding: 'No active fault codes beyond a temperature alert. Defrost scheduling logic appeared intact — failure was purely in the heater hardware.' },
    ],
    rootCause: 'Failed defrost heater element combined with a blocked drain line. Without the heater cycling normally, frost accumulated over several weeks until airflow was completely cut off from the fresh food section.',
    estimateLines: [
      { label: 'Samsung defrost heater assembly (OEM)', amount: '$94' },
      { label: 'Manual defrost and ice removal (est. 1.5 hrs)', amount: '$90' },
      { label: 'Drain line flush and clear', amount: '$40' },
      { label: 'Reassembly, temperature verification, and run test', amount: '$60' },
      { label: 'Diagnostic fee (waived on approval)', amount: '$0' },
    ],
    estimateTotalNote: 'Standard defrost heater replacement on this model typically runs $200–$240. However, the severity of the frost buildup required nearly 90 minutes of manual defrost work before any parts could be accessed or installed. Drain line clearing added additional labor. Total came to $340 — still significantly less than a replacement unit.',
    techNotes: [
      'Unit is 4 years old — well within useful service life for this tier of Samsung appliance.',
      'Homeowner had not noticed frost buildup because the rear panel is not visible during normal use.',
      'We discussed a Samsung Care+ extended warranty but it had lapsed. Recommended biannual coil checks going forward.',
      'Drain line was fully blocked — likely a secondary failure from the original defrost issue. No signs of physical damage to the drain itself.',
      'Replacement was discussed. At current pricing, a comparable Samsung French Door unit runs $1,400–$1,800 installed. Repair clearly the better value.',
    ],
    result: 'Defrost heater replaced with OEM Samsung part. Drain line cleared and flushed. After a full manual defrost cycle and reassembly, the unit reached 37°F in the fresh food section within 4 hours. Customer confirmed the following morning that temperatures had stabilized and all remaining food was preserved.',
    review: {
      text: "Called late at night after our Samsung fridge stopped cooling. HomeHeroes came out next morning and had it diagnosed within 20 minutes. Technician explained exactly what failed and why, and had it running again before noon. He even warned us to check on it the next day just in case. Really appreciated the honesty — no pressure to replace it, just a clean fix.",
      author: 'Amanda K.',
      location: 'Ballantyne',
    },
    maintenanceTip: 'Samsung French Door refrigerators with ice makers should have their drain lines inspected every 12–18 months. A partially blocked drain is often the early warning sign before a full frost buildup failure.',
    relatedService: { label: 'Refrigerator Repair in Charlotte', href: '/charlotte-nc/refrigerator-repair' },
    relatedBrand: { label: 'Samsung Appliance Repair Charlotte', href: '/charlotte-nc/samsung-appliance-repair' },
    relatedSymptom: { label: 'Refrigerator Ice Buildup', href: '/charlotte-nc/refrigerator-ice-buildup' },
  },

  {
    slug: 'lg-washer-drain-pump-replacement-south-end',
    date: 'April 14, 2026',
    dateISO: '2026-04-14',
    applianceType: 'Front-Load Washer',
    brand: 'LG',
    model: 'WM3900HBA',
    area: 'South End',
    areaSlug: 'south-end-appliance-repair',
    issueShort: 'Washer displaying OE error, standing water in drum after every cycle.',
    estimateRange: '$175–$230',
    repairTotal: '$210',
    seoTitle: 'LG Washer Drain Pump Repair in South End, Charlotte NC | HomeHeroes',
    metaDesc: 'HomeHeroes replaced a failed drain pump on an LG front-load washer in South End, Charlotte NC. See how we diagnosed the OE error code and restored full function same day.',
    heroTitle: 'LG Front-Load Washer Drain Pump Replacement — South End, Charlotte NC',
    heroSub: 'OE error. Standing water in drum. Every load stuck mid-cycle. Diagnosed and fixed same morning.',
    techImage: '/images/services/washer-dryer-repair.webp',
    applianceImage: '/images/services/washer-dryer-repair.webp',
    customerProblemSummary: 'A South End resident called us on a Monday after their LG front-load washer had thrown an OE error code for the third consecutive cycle. The drum was full of water and wouldn\'t drain regardless of which cycle they ran. They had already tried the drain/spin cycle manually — same result. A load of work clothes had been sitting in standing water since Sunday night.',
    customerProblemBullets: [
      'OE (drain error) code appearing at the end of every wash cycle',
      'Standing water remaining in drum after spin cycle',
      'Tried manual drain cycle — did not resolve',
      'Washer about 3 years old, used heavily (family of four)',
      'Previous repair: none — first service call on this unit',
    ],
    diagnosisSteps: [
      { step: 'Error code pull', finding: 'OE code confirmed — washer is detecting water present after drain phase. No secondary codes stored.' },
      { step: 'Pump filter access', finding: 'Removed and inspected the drain pump filter at the base of the unit. Filter was fully clogged with lint, a sock, and what appeared to be a hair tie. Cleared manually.' },
      { step: 'Drain test post-filter cleaning', finding: 'Washer still failed to drain. Filter was contributing but not the root cause.' },
      { step: 'Pump motor test', finding: 'Tested pump motor amperage draw under load. Motor drawing 0.1A instead of rated 0.9A — pump was spinning but generating almost no pressure. Internal impeller confirmed worn.' },
      { step: 'Drain hose inspection', finding: 'Hose clear, no kinks or obstructions. Standpipe height appropriate at 42 inches.' },
      { step: 'Control board diagnostic', finding: 'Board functioning correctly — OE code was an accurate response to real drainage failure, not a sensor fault.' },
    ],
    rootCause: 'Failed drain pump with a worn impeller. The pump motor was still running but had lost pumping capacity — likely accelerated by operating with a clogged filter for an extended period. Filter should be cleaned every 3–6 months on high-use machines.',
    estimateLines: [
      { label: 'LG drain pump assembly (OEM part 5859EA1004D)', amount: '$78' },
      { label: 'Pump filter cleaning and inspection', amount: '$25' },
      { label: 'Installation and drain line verification', amount: '$65' },
      { label: 'Full cycle test run and leak check', amount: '$30' },
      { label: 'Diagnostic fee (waived on approval)', amount: '$0' },
    ],
    estimateTotalNote: 'Drain pump replacement on LG front-loaders typically runs $180–$240 total. This job fell in the middle of that range at $210 — the extra time came from a thorough filter cleaning and a full post-repair test cycle to confirm no other symptoms. The customer was grateful to avoid a service call for the same issue two weeks later.',
    techNotes: [
      'Unit is 3 years old — early for a drain pump failure, but consistent with high-use households that skip filter maintenance.',
      'Filter had never been cleaned per the homeowner. Recommended cleaning every 3 months going forward.',
      'LG OEM pump used rather than aftermarket — original part has better sealing for this model.',
      'Door gasket inspected at no charge — showed minor mildew. Customer advised on cleaning protocol.',
      'Replacement cost for comparable LG front-loader: $900–$1,200. Repair clearly the right call here.',
    ],
    result: 'Pump replaced with OEM LG part. Filter cleared, drain hose verified. Full test cycle completed — water drained cleanly in under 3 minutes. No OE code. Customer\'s stuck load of laundry was able to complete its cycle within the hour.',
    review: {
      text: "Our washer had been flashing OE for two days and I had a load of work clothes stuck inside. HomeHeroes was out the next morning and fixed it in about an hour. The technician showed me the clogged filter and explained how to clean it myself going forward. Fair price, no upselling, and my laundry was done by noon.",
      author: 'Priya R.',
      location: 'South End',
    },
    maintenanceTip: 'LG front-load washers have a drain pump filter that most homeowners never clean. Check it every 3–6 months — it takes 5 minutes and can prevent a pump failure that costs $200 or more to fix.',
    relatedService: { label: 'Washer Repair in Charlotte', href: '/charlotte-nc/washer-repair' },
    relatedBrand: { label: 'LG Appliance Repair Charlotte', href: '/charlotte-nc/lg-appliance-repair' },
    relatedSymptom: { label: 'Washer Not Draining', href: '/charlotte-nc/washer-not-draining' },
  },

  {
    slug: 'kenmore-dryer-not-heating-myers-park',
    date: 'March 19, 2026',
    dateISO: '2026-03-19',
    applianceType: 'Gas Dryer',
    brand: 'Kenmore',
    model: '796.6902',
    area: 'Myers Park',
    areaSlug: 'myers-park-appliance-repair',
    issueShort: 'Gas dryer tumbling but producing no heat. Clothes requiring 3+ cycles to dry.',
    estimateRange: '$140–$210',
    repairTotal: '$185',
    seoTitle: 'Kenmore Gas Dryer Not Heating Repair in Myers Park, Charlotte NC | HomeHeroes',
    metaDesc: 'HomeHeroes diagnosed and repaired a Kenmore gas dryer that stopped heating in Myers Park, Charlotte NC. Blown thermal fuse and worn igniter replaced same day.',
    heroTitle: 'Kenmore Gas Dryer No Heat Repair — Myers Park, Charlotte NC',
    heroSub: 'Dryer tumbling but stone cold. Three cycles to dry one load. Thermal fuse and igniter replaced same morning.',
    techImage: '/images/hero/hero-technician.webp',
    applianceImage: '/images/services/washer-dryer-repair.webp',
    customerProblemSummary: 'A Myers Park homeowner reached out after their Kenmore gas dryer had been running cold for about a week. The drum was spinning and the unit sounded normal, but clothes came out damp after a full cycle — sometimes still wet enough to need a second or third run. They had already checked that the gas supply valve was open and confirmed the dryer was getting power.',
    customerProblemBullets: [
      'Dryer drum spinning normally but zero heat output',
      'Clothes requiring 3 or more cycles to reach dry',
      'Unit approximately 9 years old, used regularly',
      'Gas shutoff confirmed open, no smell of gas at unit',
      'No error codes or unusual sounds reported',
    ],
    diagnosisSteps: [
      { step: 'Initial heat test', finding: 'Confirmed no heat during cycle. Air inside drum ambient temperature only. Gas burner not igniting.' },
      { step: 'Thermal fuse test', finding: 'Thermal fuse on exhaust duct tested open — confirmed blown. This is the primary safety device that cuts heat when overtemperature occurs.' },
      { step: 'Igniter inspection', finding: 'Igniter element intact but brittle and discolored. Still functional but near end of service life — replaced proactively to avoid a callback.' },
      { step: 'Gas valve coil test', finding: 'All three coils tested within acceptable resistance range. No replacement needed.' },
      { step: 'Vent duct inspection', finding: 'Exhaust duct at rear of machine clear. However, external vent cap at wall had significant lint buildup restricting airflow. Cleaned on-site.' },
      { step: 'Cycling thermostat check', finding: 'Cycling thermostat tested within spec. Thermal fuse blowout likely triggered by restricted airflow from the clogged vent, not a thermostat fault.' },
    ],
    rootCause: 'Blown thermal fuse caused by restricted airflow from a partially clogged exterior vent cap. Over time, lint restriction raised exhaust temperatures until the thermal fuse tripped as designed. Igniter was also near end of life and replaced to prevent a separate no-heat event within months.',
    estimateLines: [
      { label: 'Thermal fuse (Kenmore OEM)', amount: '$18' },
      { label: 'Igniter element (replaced proactively)', amount: '$32' },
      { label: 'Labor — parts replacement and reassembly', amount: '$85' },
      { label: 'Exterior vent cap cleaning and airflow test', amount: '$35' },
      { label: 'Diagnostic fee (waived on approval)', amount: '$0' },
    ],
    estimateTotalNote: 'Thermal fuse replacement alone would have run closer to $130–$145. We recommended also replacing the igniter given its condition — that added $32 in parts but prevents a likely callback within the year. Total came to $185. Customer appreciated the transparency about why we suggested the additional part.',
    techNotes: [
      'Unit is 9 years old — still has reasonable service life for a gas dryer with low/medium usage.',
      'Root cause was airflow restriction, not a random component failure. Without addressing the vent, replacement fuses blow again.',
      'Homeowner had not cleaned the external vent cap in at least 2 years by their estimate.',
      'Strongly recommended annual dryer vent cleaning given the lint accumulation found.',
      'Replacement Kenmore/Whirlpool equivalent: $650–$900 new. Repair was the right call.',
    ],
    result: 'Thermal fuse and igniter replaced. External vent cap cleaned and airflow verified. Dryer reached full operating temperature (135°F) within 5 minutes of restart. Test load dried completely in a single 45-minute cycle.',
    review: {
      text: "My dryer had been taking three cycles to dry anything and I assumed it was just getting old. The tech found the real issue in about 15 minutes — a blown fuse caused by my clogged vent. He replaced the fuse and a worn igniter, cleaned out the vent, and the dryer was working like new. Honest, efficient, and half what I expected to pay.",
      author: 'Claire M.',
      location: 'Myers Park',
    },
    maintenanceTip: 'Gas dryers should have their exterior vent cap cleaned at least once a year — more often if you dry heavy items like towels and jeans regularly. A partially clogged vent is the number one cause of thermal fuse failures and fire risk.',
    relatedService: { label: 'Washer & Dryer Repair in Charlotte', href: '/charlotte-nc/washer-repair' },
    relatedBrand: { label: 'Whirlpool Appliance Repair Charlotte', href: '/charlotte-nc/whirlpool-appliance-repair' },
    relatedSymptom: { label: 'Dryer Not Heating', href: '/charlotte-nc/dryer-not-heating' },
  },

  {
    slug: 'ge-refrigerator-leaking-water-dilworth',
    date: 'May 5, 2026',
    dateISO: '2026-05-05',
    applianceType: 'Side-by-Side Refrigerator',
    brand: 'GE',
    model: 'GSS25IYNFS',
    area: 'Dilworth',
    areaSlug: 'dilworth-appliance-repair',
    issueShort: 'Water pooling on kitchen floor daily. Ice maker dripping into fresh food section.',
    estimateRange: '$160–$220',
    repairTotal: '$195',
    seoTitle: 'GE Refrigerator Leaking Water Repair in Dilworth, Charlotte NC | HomeHeroes',
    metaDesc: 'HomeHeroes fixed a GE side-by-side refrigerator leaking water onto the kitchen floor in Dilworth, Charlotte NC. Clogged drain line and cracked fill tube found and resolved.',
    heroTitle: 'GE Refrigerator Leaking Water Repair — Dilworth, Charlotte NC',
    heroSub: 'Puddles on the kitchen floor every morning. Ice maker dripping into the fridge. Two-part fix, one visit.',
    techImage: '/images/hero/hero-technician.webp',
    applianceImage: '/images/hero/hero-technician.webp',
    customerProblemSummary: 'A Dilworth homeowner noticed water pooling on their hardwood kitchen floor each morning for about two weeks. Initially small, the puddle had grown to nearly a liter of water overnight by the time they called us. They had also noticed ice chips appearing in the fresh food section — unusual since they hadn\'t spilled anything. The refrigerator itself was cooling normally.',
    customerProblemBullets: [
      'Water pooling on kitchen floor, worsening over two weeks',
      'Ice chips appearing inside fresh food compartment unexpectedly',
      'No cooling issues — refrigerator and freezer temperatures normal',
      'Unit approximately 5 years old',
      'Homeowner had placed towels under the unit as a temporary fix',
    ],
    diagnosisSteps: [
      { step: 'Leak source identification', finding: 'Water trail traced to the rear base of the refrigerator. Unit pulled out — pooling water behind and below the freezer section.' },
      { step: 'Drain pan inspection', finding: 'Drain pan partially full but not overflowing. Eliminated as the primary source.' },
      { step: 'Defrost drain inspection', finding: 'Defrost drain line from freezer to drain pan found fully blocked with compacted ice and debris. Water from defrost cycles had been overflowing sideways rather than draining.' },
      { step: 'Ice maker fill tube inspection', finding: 'Ice maker water fill tube found cracked at the inlet connection — small steady drip was landing inside fresh food section, explaining the ice chips observed by homeowner.' },
      { step: 'Water inlet valve check', finding: 'Inlet valve operating normally, correct water pressure. Crack was in the plastic fill tube, not the valve itself.' },
      { step: 'Floor damage assessment', finding: 'Minor surface water staining on hardwood but no warping detected. Customer was fortunate the leak was caught relatively early.' },
    ],
    rootCause: 'Two independent failures: (1) blocked defrost drain line causing overflow to floor, and (2) cracked ice maker fill tube producing a slow internal drip. Both were low-cost fixes — but together they had caused nearly two weeks of daily leaking.',
    estimateLines: [
      { label: 'Defrost drain line flush and clear', amount: '$55' },
      { label: 'Ice maker fill tube (OEM GE replacement)', amount: '$28' },
      { label: 'Fill tube installation and connection seal', amount: '$45' },
      { label: 'Drain pan cleaning and system test', amount: '$35' },
      { label: 'Leak verification — 20 min post-repair observation', amount: '$25' },
      { label: 'Diagnostic fee (waived on approval)', amount: '$0' },
    ],
    estimateTotalNote: 'Either repair on its own would have run $100–$130. Finding both issues in a single visit and addressing them together came to $195 — more efficient than two separate calls. The fill tube part was inexpensive; most of the cost was labor for the drain line access and thorough post-repair verification.',
    techNotes: [
      'Unit is 5 years old — well within expected service life.',
      'Both failures were unrelated to each other — coincidental timing.',
      'Defrost drain blockage is common in Charlotte\'s humidity. Drain line flush recommended every 2 years preventatively.',
      'Fill tube crack was likely caused by repeated freeze/thaw cycles over the tube\'s service life — standard wear.',
      'Hardwood floor showed surface staining but no structural damage. Customer advised to monitor for the next week.',
    ],
    result: 'Defrost drain line cleared and flushed. Cracked fill tube replaced with OEM GE part. Drain pan cleaned. After a 20-minute observation period, no further leaking observed. Customer confirmed the following day that the floor remained dry.',
    review: {
      text: "I had been waking up to a puddle in my kitchen for two weeks. The HomeHeroes tech found two separate issues on the same visit and fixed them both. He even pointed out that I'd caught it early enough to avoid floor damage. Efficient, honest, and the price was less than I feared.",
      author: 'Deja F.',
      location: 'Dilworth',
    },
    maintenanceTip: 'Refrigerator defrost drain lines should be flushed every 18–24 months, especially in humid climates like Charlotte. A blocked drain almost always shows up first as water on the floor — catching it early prevents floor damage.',
    relatedService: { label: 'Refrigerator Repair in Charlotte', href: '/charlotte-nc/refrigerator-repair' },
    relatedBrand: { label: 'GE Appliance Repair Charlotte', href: '/charlotte-nc/ge-appliance-repair' },
    relatedSymptom: { label: 'Refrigerator Leaking Water', href: '/charlotte-nc/refrigerator-leaking-water' },
  },

  {
    slug: 'whirlpool-washer-shaking-violently-noda',
    date: 'March 31, 2026',
    dateISO: '2026-03-31',
    applianceType: 'Top-Load Washer',
    brand: 'Whirlpool',
    model: 'WTW5000DW',
    area: 'NoDa',
    areaSlug: 'noda-appliance-repair',
    issueShort: 'Top-load washer walking across the floor and banging loudly during spin cycle.',
    estimateRange: '$190–$260',
    repairTotal: '$235',
    seoTitle: 'Whirlpool Washer Shaking Violently Repair in NoDa, Charlotte NC | HomeHeroes',
    metaDesc: 'HomeHeroes repaired a Whirlpool top-load washer violently shaking during spin in NoDa, Charlotte NC. Worn suspension rods and out-of-balance drum corrected same day.',
    heroTitle: 'Whirlpool Top-Load Washer Violent Shaking Repair — NoDa, Charlotte NC',
    heroSub: 'Washer banging the wall during spin. Walking across the laundry room floor. Suspension rods replaced, drum rebalanced.',
    techImage: '/images/services/washer-dryer-repair.webp',
    applianceImage: '/images/services/washer-dryer-repair.webp',
    customerProblemSummary: 'A NoDa homeowner contacted us after their Whirlpool top-load washer had started shaking so violently during spin cycles that it was physically moving across the laundry room floor and banging into the dryer beside it. The noise was loud enough to hear from the second floor. They had tried redistributing loads manually but the shaking persisted even with small balanced loads.',
    customerProblemBullets: [
      'Violent shaking and banging beginning at the start of spin cycle',
      'Washer physically moving several inches during operation',
      'Noise audible throughout the house — disruptive in evenings',
      'Manual load redistribution did not help',
      'Unit approximately 6 years old, heavily used',
    ],
    diagnosisSteps: [
      { step: 'Visual inspection during cycle', finding: 'Drum clearly off-axis during spin — oscillating in an elliptical pattern rather than true rotation. Classic suspension failure signature.' },
      { step: 'Suspension rod inspection', finding: 'All four suspension rods inspected. Two had lost their dampening caps and were riding metal-on-metal. One rod was visibly bent from stress. Fourth rod showing early wear.' },
      { step: 'Tub bearing check', finding: 'Bearing tested — smooth with no grinding or play. Not contributing to the issue.' },
      { step: 'Drum spider arm inspection', finding: 'Spider arm intact with no cracks. Eliminated as a failure source.' },
      { step: 'Floor leveling check', finding: 'Unit slightly unlevel — front left leg lower by approximately 3/8 inch. Adjusted as part of repair.' },
      { step: 'Test cycle post-diagnosis', finding: 'Confirmed that with suspension failed, spin RPM above 400 causes the drum to leave its proper axis — explaining the movement and impact noise.' },
    ],
    rootCause: 'Three of four suspension rods degraded — two fully failed (lost dampening caps, one bent), fourth showing early wear. Replaced all four as a matched set. Floor leveling issue corrected simultaneously.',
    estimateLines: [
      { label: 'Whirlpool suspension rod set — 4 rods (OEM)', amount: '$68' },
      { label: 'Labor — suspension rod replacement', amount: '$95' },
      { label: 'Drum balance verification and test spin', amount: '$40' },
      { label: 'Leveling legs adjustment', amount: '$20' },
      { label: 'Diagnostic fee (waived on approval)', amount: '$0' },
    ],
    estimateTotalNote: 'Suspension rod replacement on this model typically runs $200–$250. We replaced all four rods as a set — replacing only the visibly failed ones and leaving worn rods would have meant a second call within a year. Total of $235 includes the full set, labor, and a proper drum balance verification.',
    techNotes: [
      'Unit is 6 years old — suspension rod failure at this age is normal for high-use machines.',
      'Replacing all four rods at once is standard practice — partial replacement leads to uneven dampening.',
      'Level adjustment was minor but worth doing — an unlevel machine accelerates suspension wear.',
      'No tub bearing damage despite the extended period of violent operation — customer was fortunate.',
      'Replacement Whirlpool top-loader: $700–$950. Repair well worth it at this unit age.',
    ],
    result: 'All four suspension rods replaced with OEM Whirlpool parts. Drum recentered and verified. Machine leveled. Test cycle at full spin speed — no movement, no impact noise. Spin cycle now inaudible from adjacent rooms.',
    review: {
      text: "My washer was literally walking across the laundry room and slamming into the dryer. I thought it was done for. HomeHeroes came out next day, replaced the suspension rods, and it runs quieter now than it has in years. Tech was thorough and explained what failed and why. Would recommend to anyone.",
      author: 'Marcus T.',
      location: 'NoDa',
    },
    maintenanceTip: 'Top-load washers should be kept level and loaded evenly to reduce stress on suspension rods. Oversized single items like comforters should be balanced with a second item or washed at a laundromat — they\'re the primary cause of early suspension wear.',
    relatedService: { label: 'Washer Repair in Charlotte', href: '/charlotte-nc/washer-repair' },
    relatedBrand: { label: 'Whirlpool Appliance Repair Charlotte', href: '/charlotte-nc/whirlpool-appliance-repair' },
    relatedSymptom: { label: 'Washer Shaking Violently', href: '/charlotte-nc/washer-shaking-violently' },
  },

  {
    slug: 'subzero-ice-maker-not-working-ballantyne',
    date: 'April 7, 2026',
    dateISO: '2026-04-07',
    applianceType: 'Built-In Refrigerator',
    brand: 'Sub-Zero',
    model: '648PRO',
    area: 'Ballantyne',
    areaSlug: 'ballantyne-appliance-repair',
    issueShort: 'Ice maker completely stopped — no ice production for 10+ days. Water dispenser unaffected.',
    estimateRange: '$340–$480',
    repairTotal: '$420',
    seoTitle: 'Sub-Zero Ice Maker Repair in Ballantyne, Charlotte NC | HomeHeroes',
    metaDesc: 'HomeHeroes repaired a Sub-Zero built-in refrigerator ice maker in Ballantyne, Charlotte NC. Water inlet valve replaced and filter changed — ice production restored same day.',
    heroTitle: 'Sub-Zero Built-In Ice Maker Repair — Ballantyne, Charlotte NC',
    heroSub: 'No ice for 10 days. Water inlet valve failed. Filter overdue. Ice maker fully operational again.',
    techImage: '/images/hero/hero-technician.webp',
    applianceImage: '/images/hero/hero-technician.webp',
    customerProblemSummary: 'A Ballantyne homeowner with a Sub-Zero 648PRO built-in refrigerator called us after their ice maker had stopped producing ice entirely. The water dispenser was still working normally, and the freezer temperature was holding at 0°F. The ice maker arm was in the down position (requesting ice) but the unit hadn\'t produced ice in over 10 days. They had already tried the reset switch with no result.',
    customerProblemBullets: [
      'No ice production for 10+ days on a Sub-Zero 648PRO',
      'Water dispenser functioning normally',
      'Freezer holding correct temperature (0°F)',
      'Ice maker arm in down position — requesting ice but not cycling',
      'Reset attempted — no effect',
      'Water filter last replaced approximately 3 years prior',
    ],
    diagnosisSteps: [
      { step: 'Ice maker module test', finding: 'Ran forced harvest cycle. Module attempted to cycle but stopped before completing water fill phase. Module itself is functioning — issue is upstream in water supply.' },
      { step: 'Water inlet valve test', finding: 'Valve for ice maker solenoid tested at 280Ω — manufacturer spec is 200–250Ω. Valve was outside range and not opening fully under line pressure, restricting fill.' },
      { step: 'Water pressure check', finding: 'Inlet pressure tested at 58 PSI — within spec. Pressure is not the limiting factor.' },
      { step: 'Water filter inspection', finding: 'Filter cartridge dated 2022 — 3 years old vs. the recommended 12-month replacement cycle. Flow test through filter showed severely restricted output. Filter contributing to insufficient fill volume.' },
      { step: 'Ice maker fill tube check', finding: 'Fill tube clear and properly positioned. No ice bridge or blockage.' },
      { step: 'Freezer thermistor verification', finding: 'Thermistor reading accurately. Freezer temperature confirmed at -1°F. Not a factor.' },
    ],
    rootCause: 'Primary cause: failed water inlet valve (ice maker solenoid measuring out of spec). Contributing cause: severely overdue water filter restricting flow and volume. Both addressed in a single visit.',
    estimateLines: [
      { label: 'Sub-Zero water inlet valve (OEM part 7006151)', amount: '$165' },
      { label: 'Sub-Zero replacement water filter', amount: '$58' },
      { label: 'Valve replacement and plumbing reconnection', amount: '$110' },
      { label: 'Filter installation and flow test', amount: '$45' },
      { label: 'Ice maker cycle verification (2 full cycles observed)', amount: '$35' },
      { label: 'Diagnostic fee (waived on approval)', amount: '$0' },
    ],
    estimateTotalNote: 'Sub-Zero OEM parts carry a significant premium over standard appliance parts — the inlet valve alone is $165 vs. $40–$60 for a standard refrigerator equivalent. We always use OEM on Sub-Zero units; aftermarket parts frequently cause pressure and flow issues on these precise systems. Total of $420 is consistent with Sub-Zero service pricing in this market.',
    techNotes: [
      'Sub-Zero units require OEM parts — aftermarket valves are not recommended due to tight flow tolerances on the ice maker system.',
      'Water filter had not been changed in 3 years. On Sub-Zero units, filter replacement every 12 months is critical — the ice maker is particularly sensitive to flow restriction.',
      'Unit is approximately 8 years old — well within expected 20+ year lifespan for Sub-Zero built-ins.',
      'Homeowner enrolled in our annual maintenance reminder program to prevent a repeat filter oversight.',
      'Sub-Zero 648PRO replacement cost: $8,000–$11,000 installed. Service and maintenance is almost always the right call.',
    ],
    result: 'Water inlet valve replaced with OEM Sub-Zero part. Filter replaced. System primed. First ice production observed within 90 minutes of repair completion. Full ice bin refill within 24 hours.',
    review: {
      text: "Our Sub-Zero ice maker had been out for nearly two weeks. The HomeHeroes technician was clearly familiar with Sub-Zero units — knew exactly where to look and had the right part on hand. He also pointed out that our water filter was three years overdue, which I was embarrassed about. Everything back to normal the same day.",
      author: 'Robert & Sarah L.',
      location: 'Ballantyne',
    },
    maintenanceTip: 'Sub-Zero water filters should be replaced every 12 months without exception. An overdue filter doesn\'t just affect water taste — it restricts flow enough to prevent the ice maker from completing its fill cycle, which can eventually cause the inlet valve to fail from repeated strain.',
    relatedService: { label: 'Refrigerator Repair in Charlotte', href: '/charlotte-nc/refrigerator-repair' },
    relatedBrand: { label: 'Sub-Zero Appliance Repair Charlotte', href: '/charlotte-nc/sub-zero-appliance-repair' },
    relatedSymptom: { label: 'Refrigerator Not Cooling', href: '/charlotte-nc/refrigerator-not-cooling' },
  },
];

export function getRepairCase(slug: string): RepairCase | undefined {
  return repairCases.find(c => c.slug === slug);
}
