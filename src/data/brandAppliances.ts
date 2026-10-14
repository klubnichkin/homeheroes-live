// "Brand + appliance" pages: /charlotte-nc/{brand}-{appliance}-repair
// These target the most specific, highest-intent searches ("samsung refrigerator repair charlotte").
// Error codes listed here are limited to well-documented ones; when in doubt a code is left out.

export interface ErrorCode {
  code: string;
  meaning: string;
  fix: string;
}

export interface BrandAppliancePage {
  slug: string;
  brandSlug: string;      // existing /charlotte-nc/{brand}-appliance-repair page
  brand: string;
  appliance: string;      // "Refrigerator"
  serviceSlug: string;    // existing /charlotte-nc/{service} page
  tier: 'mainstream' | 'premium';
  seoTitle: string;
  metaDescription: string;
  intro: string;
  lines: string[];
  codes: ErrorCode[];
  failures: { title: string; detail: string }[];
  costs: { repair: string; range: string }[];
  warranty: string;
  repairOrReplace: string;
  faq: { q: string; a: string }[];
  symptomSlugs: string[];
  updatedAt: string;
}

const UPDATED = '2026-10-14';
const QUOTED = 'Quoted per model before work';

export const brandAppliances: BrandAppliancePage[] = [
  // ─── REFRIGERATORS ─────────────────────────────────────────────
  {
    slug: 'samsung-refrigerator-repair',
    brandSlug: 'samsung-appliance-repair',
    brand: 'Samsung',
    appliance: 'Refrigerator',
    serviceSlug: 'refrigerator-repair',
    tier: 'mainstream',
    seoTitle: 'Samsung Refrigerator Repair Charlotte, NC | Same-Day',
    metaDescription:
      'Samsung refrigerator repair in Charlotte: ice maker freeze-ups, 22E/21E fan errors, defrost and cooling problems. Same-day service, $89 diagnostic waived with repair.',
    intro:
      'Samsung French-door and side-by-side refrigerators are everywhere in Charlotte kitchens, and they fail in recognizable ways: the ice maker freezes solid, a fan ices over and throws an error code, or the fresh-food section slowly warms while the freezer stays cold. We diagnose Samsung refrigerators by symptom and code, carry the common parts, and fix most of them in one visit.',
    lines: [
      'French-door models (RF28, RF23 counter-depth, RF22 and similar)',
      '4-door Flex models (RF29, RF23 4-door)',
      'Family Hub refrigerators with the door screen',
      'Bespoke refrigerators and column units',
      'Side-by-side models (RS series)',
      'Top- and bottom-freezer models',
    ],
    codes: [
      { code: '22E / 22C', meaning: 'Refrigerator (fresh-food) fan error', fix: 'Usually ice built up around the fan or a failed fan motor. Needs a defrost and, if the fan is bad, a new motor.' },
      { code: '21E / 21C', meaning: 'Freezer fan error', fix: 'Same cause on the freezer side: ice on the evaporator or a failed fan. A recurring 21E points to a defrost problem.' },
      { code: '5E / 5C', meaning: 'Refrigerator defrost sensor error', fix: 'A failed defrost sensor or wiring fault. Left alone it leads to frost build-up and warm temperatures.' },
      { code: '39E / 39C', meaning: 'Ice maker function error', fix: 'The ice maker did not complete its cycle — often ice jammed in the mechanism or a failed ice maker assembly.' },
      { code: '8E', meaning: 'Ice maker sensor error', fix: 'The ice maker temperature sensor or its connection has failed.' },
      { code: 'OF OF', meaning: 'Cooling off (showroom/demo) mode', fix: 'Lights and display work but nothing cools. It can be switched off from the control panel; we can show you how.' },
    ],
    failures: [
      { title: 'Ice maker freezing up', detail: 'The in-door ice maker on many Samsung French-door models ices over, slowing or stopping ice production and sometimes leaking water onto the floor. Fixing it properly means clearing the ice and addressing the cause, not just thawing it.' },
      { title: 'Evaporator fan icing', detail: 'Frost builds up around the evaporator and blocks the fan, which shows up as a 21E or 22E code and a warm section. The root cause is usually a defrost heater, sensor or drain problem.' },
      { title: 'Refrigerator warm, freezer cold', detail: 'When the fresh-food side warms but the freezer is fine, the usual suspects are the refrigerator fan, defrost system or a damper. We test each before replacing anything.' },
      { title: 'Water dispenser and water valve', detail: 'Slow dispensing, no water or a frozen water line in the door are common, as is a failing water inlet valve that leaks behind the unit.' },
      { title: 'Control and display boards', detail: 'Power surges from Charlotte summer storms can damage the main board or display. Symptoms include a dead display, odd beeping or communication errors.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Evaporator or fan motor replacement', range: '$89–$150' },
      { repair: 'Ice maker, defrost and water valve repairs', range: '$89–$250' },
      { repair: 'Sealed system / compressor work', range: '$300–$600' },
    ],
    warranty:
      'Samsung refrigerators carry a one-year manufacturer warranty, with longer parts coverage on the compressor on many models. If your refrigerator may still be covered, check the registration before paying for a repair; we will tell you when a problem looks like a warranty item.',
    repairOrReplace:
      'Most Samsung refrigerator problems — fans, defrost parts, ice makers, valves and boards — are worth repairing on units under about ten years old. A sealed-system leak or compressor failure on an older unit is usually where replacement makes more sense.',
    faq: [
      { q: 'Why does my Samsung refrigerator say 22E?', a: '22E (or 22C) is a refrigerator fan error. Most often the fan is blocked by ice from a defrost problem; sometimes the fan motor itself has failed. A manual defrost can clear it temporarily, but the code returns unless the cause is fixed.' },
      { q: 'Why does my Samsung ice maker keep freezing?', a: 'Ice building up around the ice maker and its fan is a known pattern on many Samsung French-door models. We clear the ice, check the ice room fan, heater and seals, and replace the parts responsible.' },
      { q: 'How much does Samsung refrigerator repair cost in Charlotte?', a: 'Most repairs fall between $89 and $250 including the visit. Sealed-system work such as a compressor is $300–$600. We quote before starting.' },
      { q: 'Can you repair a Family Hub refrigerator?', a: 'Yes. Family Hub refrigerators use the same cooling system as other Samsung models; we repair the refrigeration and can diagnose screen and board problems.' },
    ],
    symptomSlugs: ['refrigerator-not-cooling', 'refrigerator-ice-buildup', 'refrigerator-leaking-water', 'freezer-frost-buildup'],
    updatedAt: UPDATED,
  },
  {
    slug: 'lg-refrigerator-repair',
    brandSlug: 'lg-appliance-repair',
    brand: 'LG',
    appliance: 'Refrigerator',
    serviceSlug: 'refrigerator-repair',
    tier: 'mainstream',
    seoTitle: 'LG Refrigerator Repair Charlotte, NC | Same-Day',
    metaDescription:
      'LG refrigerator repair in Charlotte: not cooling, Er FF / Er rF fan codes, ice maker and linear compressor problems. Same-day visits, $89 diagnostic waived with repair.',
    intro:
      'LG refrigerators — InstaView, French-door, Craft Ice and side-by-side models — are common across Charlotte, from South End condos to new homes in Huntersville and Concord. The problems we see most are fans throwing error codes, ice makers that stop, and units that slowly lose cooling. We read the LG error code, test the system and fix most problems in one visit.',
    lines: [
      'French-door models (LFXS, LRFXC, LRMVS and similar)',
      'InstaView door-in-door models',
      'Craft Ice models',
      'Side-by-side models (LRSXS, LSXS)',
      'Counter-depth and 4-door models',
      'Top- and bottom-freezer models',
    ],
    codes: [
      { code: 'Er FF', meaning: 'Freezer fan error', fix: 'The freezer fan is blocked by ice or has failed. Recurring ice points to a defrost problem.' },
      { code: 'Er rF', meaning: 'Refrigerator fan error', fix: 'The fresh-food fan is not running at the expected speed — ice, a failed motor or wiring.' },
      { code: 'Er CF', meaning: 'Condenser fan error', fix: 'The condenser fan near the compressor is not running. Dust, debris or a failed motor are typical; the unit will run hot and lose cooling.' },
      { code: 'Er dH', meaning: 'Defrost heater error', fix: 'The defrost circuit is not working, so frost builds up on the evaporator and cooling falls off.' },
      { code: 'Er IS', meaning: 'Ice maker sensor error', fix: 'The ice maker sensor or its connection has failed; ice production stops or becomes erratic.' },
      { code: 'Er CO', meaning: 'Communication error', fix: 'The main and display boards are not communicating — a connection, wiring or board fault.' },
    ],
    failures: [
      { title: 'Losing cooling over weeks', detail: 'A slow loss of cooling on an LG refrigerator can be airflow, defrost or the compressor. We measure temperatures and test the fans and defrost circuit before considering the sealed system.' },
      { title: 'Linear and inverter compressors', detail: 'LG\'s linear and inverter compressors are covered by a long manufacturer parts warranty on many models. When the compressor is the cause, we help you check whether the part is still covered.' },
      { title: 'Ice maker stops making ice', detail: 'Door ice makers and Craft Ice makers fail through frozen fill tubes, sensors and ice maker assemblies. We check water supply and the ice compartment fan as part of the diagnosis.' },
      { title: 'Fan errors and frost', detail: 'Er FF and Er rF codes usually come with frost on the back wall of the compartment — a sign the defrost system is the real problem.' },
      { title: 'Water leaking inside or under the unit', detail: 'Clogged defrost drains, cracked water lines and failed inlet valves cause most LG leaks.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Fan motor replacement', range: '$89–$150' },
      { repair: 'Ice maker, defrost and valve repairs', range: '$89–$250' },
      { repair: 'Sealed system / compressor labor', range: '$300–$600' },
    ],
    warranty:
      'Many LG refrigerators carry an extended manufacturer parts warranty on the linear or inverter compressor, while labor is typically covered only in the first year. Have your model and serial number handy; we will tell you if a failure looks like a covered part.',
    repairOrReplace:
      'Fans, defrost parts, ice makers and boards are worth repairing on most LG refrigerators. If the compressor has failed and the part is under LG\'s compressor warranty, repair is usually far cheaper than replacing the refrigerator.',
    faq: [
      { q: 'What does Er FF mean on an LG refrigerator?', a: 'Er FF is a freezer fan error. The fan is usually blocked by ice or has failed. If ice keeps returning, the defrost system needs repair.' },
      { q: 'Is the LG compressor covered by warranty?', a: 'On many models LG offers extended parts coverage on the linear or inverter compressor. Labor is usually not covered after the first year. We can help you check using the model and serial number.' },
      { q: 'Why is my LG refrigerator not cooling but the freezer is cold?', a: 'Usually the refrigerator fan, a damper or a defrost problem is stopping cold air from reaching the fresh-food section. It is typically an affordable repair.' },
      { q: 'How much does LG refrigerator repair cost in Charlotte?', a: 'Most repairs fall between $89 and $250 including the visit; compressor labor is $300–$600. We quote before starting.' },
    ],
    symptomSlugs: ['refrigerator-not-cooling', 'refrigerator-making-noise', 'refrigerator-compressor-noise', 'refrigerator-leaking-water'],
    updatedAt: UPDATED,
  },
  {
    slug: 'whirlpool-refrigerator-repair',
    brandSlug: 'whirlpool-appliance-repair',
    brand: 'Whirlpool',
    appliance: 'Refrigerator',
    serviceSlug: 'refrigerator-repair',
    tier: 'mainstream',
    seoTitle: 'Whirlpool Refrigerator Repair Charlotte, NC | Same-Day',
    metaDescription:
      'Whirlpool refrigerator repair in Charlotte: not cooling, defrost failures, ice maker and water dispenser problems. Same-day service, $89 diagnostic waived with repair.',
    intro:
      'Whirlpool refrigerators are built on platforms shared with Maytag, KitchenAid, Amana and many Kenmore models, which means parts are widely available and most repairs are straightforward. In Charlotte we see them in everything from Pineville apartments to Matthews family kitchens. Most calls are defrost, fan and ice maker problems that we fix on the first visit.',
    lines: [
      'French-door models (WRF series)',
      '4-door models (WRX)',
      'Side-by-side models (WRS)',
      'Top-freezer models (WRT)',
      'Bottom-freezer models (WRB)',
    ],
    codes: [],
    failures: [
      { title: 'Defrost system failure', detail: 'A failed defrost heater, thermostat or control leaves the evaporator coated in frost. The refrigerator warms up first, then the freezer. This is the single most common Whirlpool refrigerator repair.' },
      { title: 'Evaporator and condenser fans', detail: 'Noisy or stopped fans cause poor cooling and are quick, affordable repairs.' },
      { title: 'Ice maker not making ice', detail: 'Whirlpool\'s modular ice makers fail through the motor, the fill tube freezing or a weak water inlet valve.' },
      { title: 'Water dispenser problems', detail: 'Frozen door water lines, a failed dispenser switch or a clogged filter are typical causes of no water at the door.' },
      { title: 'Water on the floor', detail: 'Clogged defrost drains and leaking water valves or connections account for most leaks.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Fan motor replacement', range: '$89–$150' },
      { repair: 'Defrost, ice maker and water valve repairs', range: '$89–$250' },
      { repair: 'Sealed system / compressor work', range: '$300–$600' },
    ],
    warranty:
      'Whirlpool refrigerators typically include a one-year limited warranty, with longer coverage on sealed-system parts on some models. Check your registration if the unit is only a few years old.',
    repairOrReplace:
      'Because Whirlpool parts are plentiful and reasonably priced, repairing fans, defrost parts, ice makers and valves almost always beats replacement. Compressor failure on an older top-freezer model is the main exception.',
    faq: [
      { q: 'Why is my Whirlpool refrigerator warm but the freezer still cold?', a: 'A defrost failure or a stopped evaporator fan is the usual cause. Frost on the back wall of the freezer is a strong sign of a defrost problem.' },
      { q: 'Are Whirlpool, Maytag and KitchenAid refrigerator parts the same?', a: 'Many are. These brands share platforms, so the same fans, valves and ice makers often fit, which keeps repairs affordable.' },
      { q: 'How much does Whirlpool refrigerator repair cost?', a: 'Most repairs run $89–$250 including the visit. We quote before any work.' },
      { q: 'Can you fix my Whirlpool ice maker the same day?', a: 'Often, yes. Ice makers and water valves are common parts, and many are repaired on the first visit.' },
    ],
    symptomSlugs: ['refrigerator-not-cooling', 'freezer-frost-buildup', 'refrigerator-leaking-water', 'refrigerator-ice-buildup'],
    updatedAt: UPDATED,
  },
  {
    slug: 'ge-refrigerator-repair',
    brandSlug: 'ge-appliance-repair',
    brand: 'GE',
    appliance: 'Refrigerator',
    serviceSlug: 'refrigerator-repair',
    tier: 'mainstream',
    seoTitle: 'GE Refrigerator Repair Charlotte, NC | Profile, Café',
    metaDescription:
      'GE, GE Profile and Café refrigerator repair in Charlotte: not cooling, main board, defrost, ice maker and dispenser problems. Same-day service, $89 diagnostic waived with repair.',
    intro:
      'GE Appliances builds refrigerators under the GE, GE Profile, Café and Monogram names, and all of them are common in Charlotte homes. The repairs we make most often are main control boards, defrost systems, fans and ice makers. We diagnose the whole system before replacing parts, because a cooling problem on a GE refrigerator can look like a compressor failure when it is really a board or a fan.',
    lines: [
      'GE French-door and side-by-side models',
      'GE Profile French-door models',
      'Café refrigerators, including models with a built-in single-serve coffee brewer',
      'Monogram built-in refrigerators',
      'Top- and bottom-freezer models',
    ],
    codes: [],
    failures: [
      { title: 'Main control board', detail: 'On many GE refrigerators the main board controls the fans, defrost and compressor. A failed board can stop cooling entirely even though the compressor is fine.' },
      { title: 'Defrost failures', detail: 'A failed defrost heater or thermostat leads to frost on the evaporator and a warm refrigerator section.' },
      { title: 'Ice maker and fill tube', detail: 'Ice makers stop when the fill tube freezes or the ice maker assembly fails. We check the water valve and supply at the same time.' },
      { title: 'Fans and noise', detail: 'Buzzing, clicking or grinding usually comes from an evaporator or condenser fan and is an affordable repair.' },
      { title: 'Dispenser and water problems', detail: 'Frozen lines in the door, failed dispenser switches and leaking valves are common on side-by-side and French-door models.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Fan motor replacement', range: '$89–$150' },
      { repair: 'Defrost, ice maker and valve repairs', range: '$89–$250' },
      { repair: 'Sealed system / compressor work', range: '$300–$600' },
      { repair: 'Monogram built-in parts', range: QUOTED },
    ],
    warranty:
      'GE refrigerators typically include a one-year limited warranty, with additional sealed-system coverage on some models. Café and Monogram models have their own warranty terms — check your registration before paying for a covered repair.',
    repairOrReplace:
      'A failed board, fan or defrost part is almost always worth repairing on a GE refrigerator. A compressor failure on an older standard GE model is where replacement starts to make sense; on Monogram built-ins, repair is usually the better value.',
    faq: [
      { q: 'My GE refrigerator stopped cooling but the light is on. What is wrong?', a: 'Common causes are a failed main control board, a stopped condenser or evaporator fan, or a defrost failure. We test each before suggesting a part.' },
      { q: 'Do you repair Café and Monogram refrigerators?', a: 'Yes. We repair GE, GE Profile, Café and Monogram refrigerators, including built-in Monogram units.' },
      { q: 'How much does GE refrigerator repair cost?', a: 'Most repairs run $89–$250 including the visit; sealed-system work is $300–$600. Monogram parts are quoted per model.' },
      { q: 'Why is my GE ice maker not filling?', a: 'A frozen fill tube, a weak water inlet valve or a failed ice maker assembly are the usual causes.' },
    ],
    symptomSlugs: ['refrigerator-not-cooling', 'refrigerator-making-noise', 'refrigerator-ice-buildup', 'freezer-not-freezing'],
    updatedAt: UPDATED,
  },
  {
    slug: 'frigidaire-refrigerator-repair',
    brandSlug: 'frigidaire-appliance-repair',
    brand: 'Frigidaire',
    appliance: 'Refrigerator',
    serviceSlug: 'refrigerator-repair',
    tier: 'mainstream',
    seoTitle: 'Frigidaire Refrigerator Repair Charlotte, NC | Same-Day',
    metaDescription:
      'Frigidaire and Frigidaire Gallery refrigerator repair in Charlotte: SY EF / SY CF codes, defrost, ice maker and cooling problems. Same-day visits, $89 diagnostic waived.',
    intro:
      'Frigidaire refrigerators are standard in Charlotte apartments, rentals and many family homes, and they are generally simple and affordable to repair. We see defrost failures, fan problems and ice maker issues most, along with the SY-series error codes on newer Frigidaire and Frigidaire Gallery models.',
    lines: [
      'Frigidaire top-freezer refrigerators',
      'Frigidaire Gallery French-door and side-by-side models',
      'Frigidaire Professional models',
      'Upright freezers and freezerless refrigerators',
    ],
    codes: [
      { code: 'SY EF', meaning: 'Evaporator fan circuit problem', fix: 'The evaporator fan is not running correctly — ice, a failed fan or a wiring fault.' },
      { code: 'SY CF', meaning: 'Condenser fan circuit problem', fix: 'The condenser fan near the compressor is not running. The unit will run hot and lose cooling.' },
      { code: 'SY CE', meaning: 'Communication error', fix: 'The control boards are not communicating — usually a connection, wiring harness or board fault.' },
    ],
    failures: [
      { title: 'Warm refrigerator section', detail: 'Defrost failures are the most common cause: frost blocks airflow from the freezer and the fresh-food side warms up.' },
      { title: 'Fan problems', detail: 'Evaporator and condenser fans fail with age and show up as noise or SY EF / SY CF codes.' },
      { title: 'Ice maker issues', detail: 'Ice makers stop through a frozen fill tube, failed valve or worn ice maker assembly.' },
      { title: 'Leaks', detail: 'A clogged defrost drain causes water in the bottom of the refrigerator or on the floor.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Fan motor replacement', range: '$89–$150' },
      { repair: 'Defrost, ice maker and valve repairs', range: '$89–$250' },
      { repair: 'Sealed system / compressor work', range: '$300–$600' },
    ],
    warranty:
      'Frigidaire refrigerators typically carry a one-year limited warranty, with longer sealed-system coverage on some models. Check the registration on newer units.',
    repairOrReplace:
      'Defrost parts, fans and ice makers are inexpensive and worth repairing. For an older budget top-freezer refrigerator with a failed compressor, replacement is usually the better value.',
    faq: [
      { q: 'What does SY EF mean on a Frigidaire refrigerator?', a: 'SY EF indicates a problem with the evaporator fan circuit. Ice around the fan or a failed fan motor are the usual causes.' },
      { q: 'Why is there water in the bottom of my Frigidaire refrigerator?', a: 'A clogged defrost drain is the most common cause. Clearing it, and fixing what caused the ice, stops the leak.' },
      { q: 'How much does Frigidaire refrigerator repair cost?', a: 'Most repairs run $89–$250 including the visit. We quote before any work.' },
      { q: 'Do you work on rental-property refrigerators?', a: 'Yes. Frigidaire refrigerators are common in rentals and we provide clear repair records for landlords and property managers.' },
    ],
    symptomSlugs: ['refrigerator-not-cooling', 'refrigerator-leaking-water', 'freezer-frost-buildup', 'refrigerator-making-noise'],
    updatedAt: UPDATED,
  },
  {
    slug: 'kitchenaid-refrigerator-repair',
    brandSlug: 'kitchenaid-appliance-repair',
    brand: 'KitchenAid',
    appliance: 'Refrigerator',
    serviceSlug: 'refrigerator-repair',
    tier: 'mainstream',
    seoTitle: 'KitchenAid Refrigerator Repair Charlotte, NC | Same-Day',
    metaDescription:
      'KitchenAid refrigerator repair in Charlotte: French-door, counter-depth and built-in models. Ice makers, defrost, fans and cooling problems. $89 diagnostic waived with repair.',
    intro:
      'KitchenAid refrigerators share much of their engineering with Whirlpool but are often installed as counter-depth or built-in units in remodeled Charlotte kitchens. That makes access and careful removal part of the job. We repair KitchenAid French-door, side-by-side, counter-depth and built-in refrigerators across Charlotte and the surrounding towns.',
    lines: [
      'French-door models (KRFF, KRFC and similar)',
      '4-door French-door models (KRMF)',
      'Counter-depth side-by-side models',
      'Built-in side-by-side and bottom-freezer models',
    ],
    codes: [],
    failures: [
      { title: 'Ice maker and dispenser', detail: 'In-door ice makers and dispensers are the most frequent KitchenAid refrigerator calls, from frozen fill tubes to failed ice maker assemblies.' },
      { title: 'Defrost problems', detail: 'A failed defrost heater or sensor causes frost build-up and a warm fresh-food section.' },
      { title: 'Built-in condenser airflow', detail: 'Built-in models move air through a grille at the top or bottom. Dust and blocked airflow make them run hot, especially in summer.' },
      { title: 'Fans and controls', detail: 'Evaporator and condenser fans and the control board round out the common repairs.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Fan motor replacement', range: '$89–$150' },
      { repair: 'Ice maker, defrost and valve repairs', range: '$89–$250' },
      { repair: 'Built-in model parts', range: QUOTED },
    ],
    warranty:
      'KitchenAid refrigerators typically include a one-year limited warranty, with extended sealed-system coverage on many models. Built-in models may have additional coverage; check your registration.',
    repairOrReplace:
      'KitchenAid refrigerators are worth repairing for most failures. Built-in models in particular cost far more to replace than to fix, and replacement often means cabinet work too.',
    faq: [
      { q: 'Can you service a built-in KitchenAid refrigerator without damaging cabinets?', a: 'Yes. Most repairs are done from the front through the grille or interior panels; when the unit must come out, we protect the floor and surrounding cabinetry.' },
      { q: 'Why does my KitchenAid ice maker keep stopping?', a: 'A frozen fill tube, a weak water valve, a clogged filter or a worn ice maker assembly are the usual causes.' },
      { q: 'Are KitchenAid parts the same as Whirlpool?', a: 'Many components are shared, which keeps parts available. Trim and built-in specific parts are quoted per model.' },
      { q: 'How much does KitchenAid refrigerator repair cost?', a: 'Most repairs run $89–$250 including the visit; built-in specific parts are quoted per model.' },
    ],
    symptomSlugs: ['refrigerator-not-cooling', 'refrigerator-ice-buildup', 'refrigerator-door-not-sealing', 'refrigerator-leaking-water'],
    updatedAt: UPDATED,
  },
  {
    slug: 'sub-zero-refrigerator-repair',
    brandSlug: 'sub-zero-appliance-repair',
    brand: 'Sub-Zero',
    appliance: 'Refrigerator',
    serviceSlug: 'refrigerator-repair',
    tier: 'premium',
    seoTitle: 'Sub-Zero Refrigerator Repair Charlotte, NC | Built-In',
    metaDescription:
      'Sub-Zero refrigerator repair in Charlotte: Classic, Designer and PRO built-ins, legacy 500/600 series, wine storage. Condenser, fans, defrost and sealed system.',
    intro:
      'Sub-Zero built-in refrigeration is common in Myers Park, Eastover, SouthPark, Ballantyne and Lake Norman kitchens, and many of those units have been running for fifteen or twenty years. A Sub-Zero is built to be repaired: parts are available for long-discontinued models and the sealed system can be serviced. We repair current and legacy Sub-Zero refrigerators, freezers, columns and wine storage.',
    lines: [
      'Classic built-in side-by-side and over-and-under models',
      'Designer integrated columns and drawers',
      'PRO 48 refrigerators',
      'Legacy 500 and 600 series built-ins (532, 550, 561, 650, 690 and similar)',
      'Undercounter refrigerators, freezer drawers and wine storage',
    ],
    codes: [],
    failures: [
      { title: 'Dirty or blocked condenser', detail: 'Sub-Zero condensers are typically behind the top grille. Dust and pet hair reduce airflow, the unit runs warm and the compressor works harder. Some models display a reminder to clean the condenser. Cleaning it is the first step in any warm-temperature call.' },
      { title: 'Evaporator and condenser fans', detail: 'Failed fans cause rising temperatures and noise, and are a common repair on units of every age.' },
      { title: 'Defrost system', detail: 'A failed defrost heater or control causes frost build-up and gradual warming.' },
      { title: 'Sealed system', detail: 'Refrigerant leaks and compressor failures on Sub-Zero units can be repaired, often with factory sealed-system parts coverage on newer models.' },
      { title: 'Doors, hinges and gaskets', detail: 'Heavy panel-ready doors wear hinges and closers. A door that does not close fully lets in humid Charlotte air and causes frost.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Condenser cleaning and airflow service', range: QUOTED },
      { repair: 'Fans, defrost and gaskets', range: QUOTED },
      { repair: 'Sealed system repair', range: QUOTED },
    ],
    warranty:
      'Sub-Zero offers longer coverage on sealed-system parts than most brands, so even a unit several years old may have covered compressor or sealed-system parts. Check your model and serial registration before authorizing sealed-system work.',
    repairOrReplace:
      'Repair almost always makes sense on a Sub-Zero. Replacement costs are high and usually involve cabinetry changes. Legacy 500 and 600 series units are often still worth repairing; we tell you honestly when parts or the sealed system make that unwise.',
    faq: [
      { q: 'Is it worth repairing an older Sub-Zero?', a: 'Usually, yes. Sub-Zero units are designed to be serviced, and parts remain available for many legacy models. We give you a clear quote and a straight recommendation.' },
      { q: 'Why is my Sub-Zero running warm?', a: 'A dirty condenser is the most common reason, followed by fan and defrost failures. We clean the condenser and test the system before quoting further work.' },
      { q: 'Do you repair Sub-Zero wine storage and undercounter units?', a: 'Yes. We repair wine columns, undercounter wine and beverage units, refrigerator drawers and freezer drawers.' },
      { q: 'Do you work in Lake Norman and Myers Park homes?', a: 'Yes. Built-in Sub-Zero repairs are common in Lake Norman, Myers Park, Eastover, SouthPark and Ballantyne homes, and we cover all of them.' },
    ],
    symptomSlugs: ['refrigerator-not-cooling', 'refrigerator-door-not-sealing', 'freezer-frost-buildup', 'refrigerator-compressor-noise'],
    updatedAt: UPDATED,
  },

  // ─── WASHERS ───────────────────────────────────────────────────
  {
    slug: 'samsung-washer-repair',
    brandSlug: 'samsung-appliance-repair',
    brand: 'Samsung',
    appliance: 'Washer',
    serviceSlug: 'washer-repair',
    tier: 'mainstream',
    seoTitle: 'Samsung Washer Repair Charlotte, NC | 4C, 5C, UE Codes',
    metaDescription:
      'Samsung washer repair in Charlotte: 4C, 5C, UE, dC and LC error codes, drain pumps, door locks, suspension and bearings. Same-day service, $89 diagnostic waived.',
    intro:
      'Samsung front-load and top-load washers are among the most common machines in Charlotte laundry rooms. They tell you a lot through their error codes, and most codes point to a short list of causes: a clogged drain pump filter, a water supply problem, an unbalanced load or a door lock. We diagnose by code and symptom and carry the common Samsung washer parts.',
    lines: [
      'Front-load washers (WF45 and similar)',
      'Top-load washers (WA series)',
      'FlexWash and FlexDry pairs',
      'Bespoke AI washers and washer-dryer combos',
    ],
    codes: [
      { code: '4C / 4E', meaning: 'Water supply error', fix: 'The washer is not filling — closed valves, kinked hoses, clogged inlet screens or a failed water inlet valve.' },
      { code: '5C / 5E / nd', meaning: 'Drain error', fix: 'Usually a clogged drain pump filter or kinked drain hose; sometimes a failed drain pump.' },
      { code: 'UE / UB', meaning: 'Unbalanced load', fix: 'Redistribute the load. If it happens with normal loads, the suspension, shocks or leveling are worn.' },
      { code: 'dC / dE / dL / LO', meaning: 'Door or lid lock error', fix: 'The door or lid lock is not engaging — a worn lock, a broken latch or a wiring fault.' },
      { code: 'LC / LE', meaning: 'Water leak or water level error', fix: 'Water detected in the base or a level sensing problem; we look for the leak source first.' },
      { code: 'OE / OC', meaning: 'Overflow (too much water)', fix: 'A water level sensor or inlet valve problem.' },
      { code: '3C / 3E', meaning: 'Motor error', fix: 'The motor, its sensor or the motor control is not working correctly.' },
      { code: 'Sud / SD', meaning: 'Excess suds detected', fix: 'Usually too much or the wrong detergent; use HE detergent and run a rinse.' },
    ],
    failures: [
      { title: 'Drain pump filter clogs', detail: 'Coins, hair ties and lint clog the filter behind the small access panel on front-load models, causing 5C/nd codes and wet clothes.' },
      { title: 'Suspension and shaking', detail: 'Top-load Samsung washers rely on suspension rods; when they wear, the machine bangs on spin and throws UE codes.' },
      { title: 'Front-load drum support', detail: 'On some older front-load models the drum support (spider) corrodes and breaks, causing loud noise and a wobbling drum.' },
      { title: 'Door locks and boots', detail: 'Door locks fail and door boot seals tear or mildew, which shows up as door codes, leaks and odor.' },
      { title: 'Bearings', detail: 'A roar during spin on a front-loader usually means worn tub bearings — the most expensive common washer repair.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Drain pump replacement', range: '$89–$175' },
      { repair: 'Control board replacement', range: '$150–$300' },
      { repair: 'Front-load bearing replacement', range: '$200–$400' },
    ],
    warranty:
      'Samsung washers include a one-year manufacturer warranty, with longer parts coverage on the motor on many models.',
    repairOrReplace:
      'Drain pumps, locks, valves, suspension and boards are worth repairing on most Samsung washers. A broken drum support or bad bearings on an older front-loader may cost enough to make replacement worth considering — we will quote both ways.',
    faq: [
      { q: 'What does 5C mean on a Samsung washer?', a: '5C (or 5E, nd on some models) is a drain error. Clean the drain pump filter first; if it still will not drain, the pump or hose likely needs repair.' },
      { q: 'Why does my Samsung top-loader bang on spin?', a: 'Worn suspension rods are the most common cause, especially with UE codes. Replacing the rods is a routine repair.' },
      { q: 'How much does Samsung washer repair cost in Charlotte?', a: 'Most repairs run $89–$250; bearing work is $200–$400. We quote before starting.' },
      { q: 'My Samsung washer smells musty. Can you help?', a: 'Yes. We clean or replace the door boot and drain pump filter and check the drain path. Leaving the door open between loads helps prevent it.' },
    ],
    symptomSlugs: ['washer-not-draining', 'washer-error-codes', 'washer-shaking-violently', 'washer-leaking-from-bottom'],
    updatedAt: UPDATED,
  },
  {
    slug: 'lg-washer-repair',
    brandSlug: 'lg-appliance-repair',
    brand: 'LG',
    appliance: 'Washer',
    serviceSlug: 'washer-repair',
    tier: 'mainstream',
    seoTitle: 'LG Washer Repair Charlotte, NC | OE, IE, UE, LE Codes',
    metaDescription:
      'LG washer repair in Charlotte: OE, IE, UE, dE, LE and PE error codes, drain pumps, door locks, bearings and WashTower units. Same-day service, $89 diagnostic waived.',
    intro:
      'LG front-load washers, top-loaders and WashTower units are common across Charlotte, from Uptown condos to Lake Norman homes. LG\'s direct-drive design is reliable, and most service calls come down to a handful of error codes: OE for draining, IE for filling, UE for balance and dE for the door. We diagnose by code, test the part responsible and fix most LG washers in one visit.',
    lines: [
      'Front-load washers (WM series)',
      'Top-load washers (WT series)',
      'WashTower single-unit washer-dryers',
      'Washer-dryer combos and compact models',
    ],
    codes: [
      { code: 'OE', meaning: 'Drain error', fix: 'Clogged drain pump filter, kinked drain hose or failed drain pump.' },
      { code: 'IE', meaning: 'Water inlet error', fix: 'The washer is not filling in time — closed valves, kinked hoses, clogged screens or a failed inlet valve.' },
      { code: 'UE', meaning: 'Unbalanced load', fix: 'Redistribute the load; if it repeats on normal loads, check leveling, shock absorbers and springs.' },
      { code: 'dE / dE1 / dE2', meaning: 'Door error', fix: 'The door is not closed or the lock is not engaging — a latch, lock assembly or wiring problem.' },
      { code: 'LE', meaning: 'Motor locked or overloaded', fix: 'The direct-drive motor is not turning as expected — an overloaded drum, a rotor or stator fault or a sensor problem.' },
      { code: 'PE', meaning: 'Water level (pressure) sensor error', fix: 'The pressure sensor or its hose has failed or is blocked.' },
      { code: 'FE', meaning: 'Overfill error', fix: 'Too much water — usually an inlet valve that is not shutting off.' },
      { code: 'tE', meaning: 'Temperature or heating error', fix: 'A thermistor or heater problem on models that heat water.' },
    ],
    failures: [
      { title: 'Drain pump filter', detail: 'The coin trap and drain pump filter behind the lower front panel are the number-one cause of OE codes.' },
      { title: 'Door gasket mildew and leaks', detail: 'Front-load door gaskets trap moisture in Charlotte\'s humid climate. Mildew, odor and small tears that leak are common.' },
      { title: 'Bearings and tub', detail: 'A loud roar on spin signals worn tub bearings. On many LG front-loaders this means replacing the tub assembly.' },
      { title: 'Door locks', detail: 'Worn or broken door locks cause dE codes and washers that will not start.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Drain pump replacement', range: '$89–$175' },
      { repair: 'Control board replacement', range: '$150–$300' },
      { repair: 'Front-load bearing / tub work', range: '$200–$400' },
    ],
    warranty:
      'LG backs the direct-drive motor on many washers with a long parts warranty, while other parts are typically covered for one year. If the motor is the problem, check whether the part is still covered.',
    repairOrReplace:
      'Drain pumps, door locks, valves and boards are worth repairing on almost any LG washer. Bearing and tub work on an older front-loader is a closer call — we quote it and tell you honestly how it compares with a new machine.',
    faq: [
      { q: 'What does OE mean on an LG washer?', a: 'OE is a drain error. Clean the drain pump filter behind the lower front panel first. If the code returns, the pump or drain hose needs repair.' },
      { q: 'What does UE mean on an LG washer?', a: 'UE means the load is unbalanced. Redistribute it and run spin again. If it happens on normal loads, the shock absorbers or leveling need attention.' },
      { q: 'Do you repair LG WashTower units?', a: 'Yes. We repair both the washer and dryer sections of LG WashTower units.' },
      { q: 'How much does LG washer repair cost in Charlotte?', a: 'Most repairs run $89–$250; bearing work is $200–$400. We quote before any work.' },
    ],
    symptomSlugs: ['washer-not-draining', 'washer-error-codes', 'washer-leaking', 'washer-vibrating-during-spin'],
    updatedAt: UPDATED,
  },
  {
    slug: 'whirlpool-washer-repair',
    brandSlug: 'whirlpool-appliance-repair',
    brand: 'Whirlpool',
    appliance: 'Washer',
    serviceSlug: 'washer-repair',
    tier: 'mainstream',
    seoTitle: 'Whirlpool Washer Repair Charlotte, NC | F9 E1, F8 E1, F21',
    metaDescription:
      'Whirlpool washer repair in Charlotte: F9 E1, F8 E1, F7 E1, F5 E2, F21 and LF codes, lid locks, drain pumps and shifters. Same-day service, $89 diagnostic waived.',
    intro:
      'Whirlpool top-load and front-load washers — including the Cabrio and Duet lines and the platforms shared with Maytag and Amana — are some of the most repaired machines in Charlotte. Parts are plentiful and most problems are fixed in one visit. Whirlpool error codes point us straight to the drain, fill, motor or lid lock.',
    lines: [
      'Top-load washers with agitator or impeller (WTW series)',
      'Cabrio top-load washers',
      'Front-load washers (WFW series, older Duet)',
      'Stacked laundry centers',
    ],
    codes: [
      { code: 'F9 E1', meaning: 'Long drain', fix: 'The washer took too long to drain — clogged pump or filter, kinked hose or a drain standpipe that is too high or blocked.' },
      { code: 'F21', meaning: 'Long drain (older models)', fix: 'Same as F9 E1 on older Cabrio and Duet machines.' },
      { code: 'F8 E1 / LF', meaning: 'Long fill or no water', fix: 'Water valves off, kinked hoses, clogged inlet screens or a failed inlet valve.' },
      { code: 'F7 E1', meaning: 'Motor speed or drive problem', fix: 'The motor is not reaching the expected speed — the motor, motor control or a jammed drive.' },
      { code: 'F5 E2', meaning: 'Lid or door lock fault', fix: 'The lock is not engaging; the lock assembly or its wiring needs repair.' },
      { code: 'Sd', meaning: 'Excess suds', fix: 'Too much or non-HE detergent. Run a rinse and use less HE detergent.' },
    ],
    failures: [
      { title: 'Lid lock failures', detail: 'On top-load models the lid lock assembly is a frequent failure that stops the washer from spinning or starting.' },
      { title: 'Shifter / actuator', detail: 'Top-loaders that agitate but will not spin (or the reverse) often have a failed shifter actuator.' },
      { title: 'Drain pumps', detail: 'Long-drain codes and standing water usually trace to a clogged or failed drain pump.' },
      { title: 'Front-load door seals', detail: 'Front-load Whirlpool washers develop mildew and tears in the door boot, especially in humid laundry rooms.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Drain pump replacement', range: '$89–$175' },
      { repair: 'Lid lock or shifter repair', range: '$89–$250' },
      { repair: 'Control board replacement', range: '$150–$300' },
    ],
    warranty:
      'Whirlpool washers typically include a one-year limited warranty, with some models carrying longer coverage on specific parts such as the motor or wash basket.',
    repairOrReplace:
      'Whirlpool washers are among the best candidates for repair: parts are inexpensive and widely stocked. Unless the tub or transmission has failed on an old machine, repairing is almost always cheaper.',
    faq: [
      { q: 'What does F9 E1 mean on a Whirlpool washer?', a: 'F9 E1 means a long drain. Check the drain hose for kinks and clean any filter; if it continues, the drain pump usually needs replacing.' },
      { q: 'My Whirlpool washer agitates but will not spin. Why?', a: 'A failed lid lock or shifter actuator is the usual cause on top-load models. Both are common, same-visit repairs.' },
      { q: 'Are Maytag and Whirlpool washer parts the same?', a: 'Many are, because the brands share platforms. That keeps parts available and repairs affordable.' },
      { q: 'How much does Whirlpool washer repair cost?', a: 'Most repairs run $89–$250 including the visit. We quote before starting.' },
    ],
    symptomSlugs: ['washer-not-spinning', 'washer-not-draining', 'washer-error-codes', 'washer-not-filling-with-water'],
    updatedAt: UPDATED,
  },
  {
    slug: 'maytag-washer-repair',
    brandSlug: 'maytag-appliance-repair',
    brand: 'Maytag',
    appliance: 'Washer',
    serviceSlug: 'washer-repair',
    tier: 'mainstream',
    seoTitle: 'Maytag Washer Repair Charlotte, NC | Same-Day Service',
    metaDescription:
      'Maytag washer repair in Charlotte: Bravos, Centennial and front-load models. F9 E1, F8 E1, F5 E2 codes, lid locks, drain pumps and suspension. $89 diagnostic waived.',
    intro:
      'Maytag washers — Bravos, Centennial, commercial-technology top-loaders and front-load models — are built on the same platforms as Whirlpool, so the error codes and many parts are shared. They are common in Charlotte family homes and rentals. Most Maytag washer repairs are lid locks, drain pumps, suspension and controls, and we fix most of them on the first visit.',
    lines: [
      'Top-load washers (MVW series, Bravos, Centennial)',
      'Commercial-technology top-load washers',
      'Front-load washers (MHW series)',
      'Stacked laundry centers',
    ],
    codes: [
      { code: 'F9 E1', meaning: 'Long drain', fix: 'Clogged pump or drain path, kinked hose or failed pump.' },
      { code: 'F8 E1 / LF', meaning: 'Long fill or no water', fix: 'Supply valves, hoses, inlet screens or the water inlet valve.' },
      { code: 'F7 E1', meaning: 'Motor speed or drive problem', fix: 'Motor, motor control or a jammed drive.' },
      { code: 'F5 E2', meaning: 'Lid or door lock fault', fix: 'Lock assembly or wiring.' },
    ],
    failures: [
      { title: 'Lid locks', detail: 'A worn or broken lid lock is the most common reason a Maytag top-loader will not spin or start.' },
      { title: 'Suspension rods', detail: 'Worn suspension rods let the tub bang against the cabinet on spin.' },
      { title: 'Drain pumps', detail: 'Clogged or failed pumps cause long-drain codes and wet clothes.' },
      { title: 'Control boards', detail: 'Boards fail with age or after power surges, causing dead controls or erratic behavior.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Drain pump replacement', range: '$89–$175' },
      { repair: 'Lid lock or suspension repair', range: '$89–$250' },
      { repair: 'Control board replacement', range: '$150–$300' },
    ],
    warranty:
      'Many current Maytag washers include a long limited parts warranty on the drive motor and wash basket in addition to the standard first-year coverage. Check your model before paying for a motor or basket repair.',
    repairOrReplace:
      'Maytag washers are built to be repaired and parts are plentiful. Repair is the right call for nearly every failure except a broken tub or transmission on a very old machine.',
    faq: [
      { q: 'Why does my Maytag washer bang during spin?', a: 'Worn suspension rods or an overloaded or unbalanced tub are the usual causes. Replacing the rods is a routine repair.' },
      { q: 'Is the Maytag motor covered by warranty?', a: 'Many current Maytag washers include a long limited parts warranty on the drive motor and basket. Labor may not be covered after the first year.' },
      { q: 'What does F5 E2 mean on a Maytag washer?', a: 'It means the lid or door lock is not working correctly. The lock assembly or its wiring needs repair.' },
      { q: 'How much does Maytag washer repair cost?', a: 'Most repairs run $89–$250 including the visit.' },
    ],
    symptomSlugs: ['washer-shaking-violently', 'washer-not-spinning', 'washer-not-draining', 'washer-error-codes'],
    updatedAt: UPDATED,
  },

  // ─── DRYERS ────────────────────────────────────────────────────
  {
    slug: 'samsung-dryer-repair',
    brandSlug: 'samsung-appliance-repair',
    brand: 'Samsung',
    appliance: 'Dryer',
    serviceSlug: 'dryer-repair',
    tier: 'mainstream',
    seoTitle: 'Samsung Dryer Repair Charlotte, NC | No Heat, HE, tE Codes',
    metaDescription:
      'Samsung dryer repair in Charlotte: no heat, HE and tE codes, thermal fuses, heating elements, gas igniters, rollers and vent problems. Same-day, $89 diagnostic waived.',
    intro:
      'When a Samsung dryer runs but does not heat, the cause is usually a blown thermal fuse, a failed heating element or igniter, or a restricted vent. Samsung electric and gas dryers are common in Charlotte homes, and we fix most of them on the first visit — while checking the vent so the same part does not fail again.',
    lines: [
      'Electric dryers (DVE series)',
      'Gas dryers (DVG series)',
      'FlexDry and Bespoke dryers',
      'Stacked dryers paired with Samsung washers',
    ],
    codes: [
      { code: 'HE / HC', meaning: 'Heating error', fix: 'The dryer is not heating as expected — heating element, igniter, thermal fuse or a vent restriction.' },
      { code: 'tE / tS / tO', meaning: 'Temperature sensor (thermistor) error', fix: 'A failed thermistor or wiring fault.' },
      { code: 'dE / dC', meaning: 'Door error', fix: 'The door switch is not detecting the door as closed.' },
      { code: 'Filter Check', meaning: 'Lint filter or airflow reminder', fix: 'Clean the lint filter; if it persists, check the vent for blockage.' },
    ],
    failures: [
      { title: 'No heat — thermal fuse', detail: 'A restricted vent makes the dryer overheat and blow its thermal fuse. Replacing the fuse without clearing the vent means it will blow again.' },
      { title: 'Heating element or gas igniter', detail: 'Electric models lose heating elements; gas models lose igniters and gas valve coils.' },
      { title: 'Squealing and thumping', detail: 'Worn drum rollers, idler pulleys and belts cause noise and are routine repairs.' },
      { title: 'Long dry times', detail: 'Long vent runs and lint build-up are the most common reason a Samsung dryer takes two cycles.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Thermal fuse replacement', range: '$89–$130' },
      { repair: 'Heating element replacement', range: '$89–$175' },
      { repair: 'Gas igniter replacement', range: '$89–$160' },
      { repair: 'Belt or rollers', range: '$89–$150' },
    ],
    warranty: 'Samsung dryers typically carry a one-year manufacturer warranty.',
    repairOrReplace:
      'Nearly every common Samsung dryer failure is inexpensive to repair. Replacement only makes sense if the drum or cabinet is damaged or the control board fails on a very old unit.',
    faq: [
      { q: 'My Samsung dryer runs but does not heat. What is wrong?', a: 'The thermal fuse, heating element (electric) or igniter (gas) is the usual cause. A restricted vent often caused the failure, so we check it too.' },
      { q: 'What does HE mean on a Samsung dryer?', a: 'HE is a heating error. The dryer detected that it is not heating correctly — check the vent and lint filter, then have the heating circuit tested.' },
      { q: 'Why is my Samsung dryer squealing?', a: 'Worn rollers, an idler pulley or a belt are the usual causes. These are routine, same-visit repairs.' },
      { q: 'How much does Samsung dryer repair cost?', a: 'Most repairs run $89–$200 including the visit.' },
    ],
    symptomSlugs: ['dryer-not-heating', 'dryer-taking-too-long-to-dry', 'dryer-squeaking', 'dryer-making-loud-noise'],
    updatedAt: UPDATED,
  },
  {
    slug: 'lg-dryer-repair',
    brandSlug: 'lg-appliance-repair',
    brand: 'LG',
    appliance: 'Dryer',
    serviceSlug: 'dryer-repair',
    tier: 'mainstream',
    seoTitle: 'LG Dryer Repair Charlotte, NC | d80, d90, d95, tE Codes',
    metaDescription:
      'LG dryer repair in Charlotte: d80/d90/d95 vent codes, no heat, tE thermistor and gAS codes, rollers and WashTower dryers. Same-day service, $89 diagnostic waived.',
    intro:
      'LG dryers measure airflow and will tell you when the vent is restricted with d80, d90 and d95 codes. In Charlotte townhomes and condos with long vent runs, those codes are common. We clear the airflow problem, repair heating and sensor faults, and service LG WashTower and stacked dryers.',
    lines: [
      'Electric dryers (DLE, DLEX series)',
      'Gas dryers (DLG, DLGX series)',
      'WashTower dryers',
      'Heat-pump and ventless models',
    ],
    codes: [
      { code: 'd80 / d90 / d95', meaning: 'Exhaust restricted (80, 90 or 95 percent)', fix: 'The vent is partly blocked. Clean the vent run and hood; crushed or overly long ducts may need replacing.' },
      { code: 'tE1 / tE2', meaning: 'Thermistor error', fix: 'A failed temperature sensor or wiring.' },
      { code: 'HS', meaning: 'Humidity sensor error', fix: 'The moisture sensor bars or their wiring need cleaning or repair.' },
      { code: 'gAS', meaning: 'Gas supply problem (gas models)', fix: 'Gas valve off, low supply or an ignition problem.' },
      { code: 'PS', meaning: 'Power supply error', fix: 'Incorrect voltage or power cord wiring — usually at the terminal block.' },
      { code: 'dE', meaning: 'Door open', fix: 'Door switch or latch problem.' },
    ],
    failures: [
      { title: 'Vent restriction', detail: 'Restricted vents cause long dry times, d-codes and overheating. We measure airflow and clear the run.' },
      { title: 'No heat', detail: 'A failed heater, thermal fuse, high-limit thermostat or gas igniter stops heat. We test the whole circuit.' },
      { title: 'Rollers and noise', detail: 'Worn drum rollers and idler pulleys cause squealing and thumping.' },
      { title: 'Moisture sensor', detail: 'Coated sensor bars end cycles early or run them too long.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Heating element replacement', range: '$89–$175' },
      { repair: 'Gas igniter replacement', range: '$89–$160' },
      { repair: 'Belt or rollers', range: '$89–$150' },
      { repair: 'Thermal fuse', range: '$89–$130' },
    ],
    warranty: 'LG dryers typically carry a one-year manufacturer warranty, with longer coverage on some motor parts depending on model.',
    repairOrReplace:
      'LG dryer repairs are usually inexpensive and well worth doing. A vent problem is often the root cause, so fixing it protects the new part.',
    faq: [
      { q: 'What does d90 mean on an LG dryer?', a: 'd90 means the exhaust is about 90 percent restricted. Clean the vent run and outside hood; the dryer will dry faster and run cooler.' },
      { q: 'Why is my LG dryer not heating?', a: 'Common causes are a failed heating element, thermal fuse or high-limit thermostat on electric models and an igniter or gas valve problem on gas models.' },
      { q: 'Do you repair LG WashTower dryers?', a: 'Yes. We repair both sections of LG WashTower units.' },
      { q: 'How much does LG dryer repair cost?', a: 'Most repairs run $89–$200 including the visit.' },
    ],
    symptomSlugs: ['dryer-not-heating', 'dryer-taking-too-long-to-dry', 'dryer-not-spinning', 'dryer-squeaking'],
    updatedAt: UPDATED,
  },
  {
    slug: 'whirlpool-dryer-repair',
    brandSlug: 'whirlpool-appliance-repair',
    brand: 'Whirlpool',
    appliance: 'Dryer',
    serviceSlug: 'dryer-repair',
    tier: 'mainstream',
    seoTitle: 'Whirlpool Dryer Repair Charlotte, NC | No Heat, F01, PF',
    metaDescription:
      'Whirlpool dryer repair in Charlotte: no heat, thermal fuses, heating elements, igniters, belts, rollers, F01 and PF codes. Same-day service, $89 diagnostic waived.',
    intro:
      'Whirlpool dryers and the Maytag, Amana and Kenmore models built on the same platform are some of the most common dryers in Charlotte. The usual problems are no heat, a broken belt or squealing rollers, and almost all of them are inexpensive same-visit repairs.',
    lines: [
      'Electric dryers (WED series)',
      'Gas dryers (WGD series)',
      'Cabrio and Duet dryers',
      'Stacked laundry centers',
    ],
    codes: [
      { code: 'PF', meaning: 'Power failure', fix: 'Power was interrupted during a cycle. Press Start to resume; frequent PF codes point to a loose cord or outlet.' },
      { code: 'F01', meaning: 'Main control fault', fix: 'The control board failed its self-check and may need replacing.' },
      { code: 'Check Vent', meaning: 'Airflow restriction', fix: 'Clean the vent run and outside hood.' },
    ],
    failures: [
      { title: 'No heat', detail: 'Thermal fuses, heating elements, cycling thermostats and gas igniters cause most no-heat calls.' },
      { title: 'Drum will not turn', detail: 'A broken drive belt is the usual cause; the motor keeps running but the drum does not.' },
      { title: 'Squealing or thumping', detail: 'Worn drum rollers, idler pulleys and glides.' },
      { title: 'Long dry times', detail: 'Lint-clogged vents and crushed transition ducts slow drying and overheat the dryer.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Thermal fuse', range: '$89–$130' },
      { repair: 'Heating element', range: '$89–$175' },
      { repair: 'Gas igniter', range: '$89–$160' },
      { repair: 'Belt or rollers', range: '$89–$150' },
    ],
    warranty: 'Whirlpool dryers typically include a one-year limited warranty.',
    repairOrReplace:
      'Whirlpool dryers are simple, durable and cheap to repair. Repair is the right choice in almost every case.',
    faq: [
      { q: 'Why does my Whirlpool dryer run but not heat?', a: 'A blown thermal fuse (often caused by a restricted vent), a failed heating element or a gas igniter are the usual causes.' },
      { q: 'What does PF mean on a Whirlpool dryer?', a: 'PF means the power was interrupted. Press Start to continue. If it happens often, the cord or outlet connection should be checked.' },
      { q: 'My Whirlpool dryer runs but the drum does not turn.', a: 'That is almost always a broken drive belt — a routine, same-visit repair.' },
      { q: 'How much does Whirlpool dryer repair cost?', a: 'Most repairs run $89–$200 including the visit.' },
    ],
    symptomSlugs: ['dryer-not-heating', 'dryer-not-spinning', 'dryer-squeaking', 'dryer-taking-too-long-to-dry'],
    updatedAt: UPDATED,
  },

  // ─── DISHWASHERS ───────────────────────────────────────────────
  {
    slug: 'bosch-dishwasher-repair',
    brandSlug: 'bosch-appliance-repair',
    brand: 'Bosch',
    appliance: 'Dishwasher',
    serviceSlug: 'dishwasher-repair',
    tier: 'mainstream',
    seoTitle: 'Bosch Dishwasher Repair Charlotte, NC | E15, E24, E25',
    metaDescription:
      'Bosch dishwasher repair in Charlotte: E15 leak, E24/E25 drain, E09 heating codes, pumps, latches and panel-ready models. Same-day service, $89 diagnostic waived.',
    intro:
      'Bosch is one of the most popular dishwasher brands in remodeled Charlotte kitchens, from Dilworth bungalows to Ballantyne two-stories. Bosch dishwashers are quiet and efficient, and their error codes are specific: E15 for water in the base, E24 and E25 for drain problems. We repair 100 through 800 Series and Benchmark models, including panel-ready units.',
    lines: ['100, 300 and 500 Series', '800 Series with CrystalDry', 'Benchmark Series', 'Panel-ready and ADA models'],
    codes: [
      { code: 'E15', meaning: 'Water in the base (leak protection)', fix: 'Water reached the base pan and tripped the float switch. The leak source has to be found and fixed, and the base dried.' },
      { code: 'E24', meaning: 'Drain restricted', fix: 'Kinked drain hose, clogged filter, a disposal knockout plug or a blocked air gap.' },
      { code: 'E25', meaning: 'Drain pump blocked', fix: 'Debris (glass, seeds, labels) caught under the drain pump cover.' },
      { code: 'E22', meaning: 'Filters clogged', fix: 'Clean the filter assembly in the bottom of the tub.' },
      { code: 'E09', meaning: 'Heating fault', fix: 'The heater (on many models, part of the heat pump) or its circuit has failed.' },
    ],
    failures: [
      { title: 'E15 and base-pan leaks', detail: 'Bosch\'s leak protection stops the cycle when water reaches the base. The cause can be a door seal, a pump, a hose or over-sudsing — we find the source, not just dry the pan.' },
      { title: 'Drain problems', detail: 'E24 and E25 codes usually come from the drain hose, filter or pump cover and are often resolved in the diagnostic visit.' },
      { title: 'Heating and drying', detail: 'Failed heaters cause cold washes and wet dishes. On CrystalDry models, poor drying has its own causes.' },
      { title: 'Door latch and hinges', detail: 'Panel-ready doors are heavy; worn hinge springs and latches are common.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Drain clearing, filter or spray arm', range: '$89–$120' },
      { repair: 'Door latch', range: '$89–$140' },
      { repair: 'Circulation / heat pump', range: '$150–$250' },
      { repair: 'Control board', range: '$150–$280' },
    ],
    warranty: 'Bosch dishwashers typically include a one-year warranty on parts and labor, with longer coverage on certain parts depending on the series.',
    repairOrReplace:
      'Bosch dishwashers are worth repairing for drain, latch, pump and board failures, especially panel-ready models where replacement means new panels or cabinet work.',
    faq: [
      { q: 'What does E15 mean on a Bosch dishwasher?', a: 'E15 means water has collected in the base and the leak-protection switch stopped the cycle. The leak has to be found and fixed and the base dried before it will run normally.' },
      { q: 'What does E24 mean on a Bosch dishwasher?', a: 'E24 means water is not draining well. Check the drain hose for kinks, clean the filter, and make sure a newly installed disposal had its knockout plug removed.' },
      { q: 'Do you repair panel-ready Bosch dishwashers?', a: 'Yes. We remove and reinstall panel-ready units carefully so the custom panel and countertop are not damaged.' },
      { q: 'How much does Bosch dishwasher repair cost?', a: 'Most repairs run $89–$280 including the visit.' },
    ],
    symptomSlugs: ['dishwasher-not-draining', 'dishwasher-not-cleaning-dishes', 'dishwasher-door-wont-latch', 'dishwasher-leaving-white-residue'],
    updatedAt: UPDATED,
  },
  {
    slug: 'ge-dishwasher-repair',
    brandSlug: 'ge-appliance-repair',
    brand: 'GE',
    appliance: 'Dishwasher',
    serviceSlug: 'dishwasher-repair',
    tier: 'mainstream',
    seoTitle: 'GE Dishwasher Repair Charlotte, NC | Profile, Café',
    metaDescription:
      'GE, GE Profile and Café dishwasher repair in Charlotte: not draining, not cleaning, leaks, latches, pumps and controls. Same-day service, $89 diagnostic waived with repair.',
    intro:
      'GE dishwashers are standard in many Charlotte builder homes and rentals, and GE Profile and Café models appear in remodeled kitchens. The repairs we make most are drain problems, wash and drain pumps, door latches and control boards. Many drain issues turn out to be the installation — a clogged air gap or disposal connection — which we check first.',
    lines: ['GE dishwashers', 'GE Profile dishwashers', 'Café dishwashers', 'Monogram dishwashers'],
    codes: [],
    failures: [
      { title: 'Not draining', detail: 'A clogged filter, drain pump or check valve, or a blocked air gap or disposal connection, leaves water in the tub.' },
      { title: 'Not cleaning', detail: 'Clogged spray arms and filters, low water temperature and failing wash pumps cause dirty dishes.' },
      { title: 'Door latch and controls', detail: 'Worn latches stop cycles from starting; blinking lights and dead touchpads point to the control board or keypad.' },
      { title: 'Leaks', detail: 'Door gaskets, worn tub seals and loose connections underneath cause most leaks.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Drain clearing, filter or spray arm', range: '$89–$120' },
      { repair: 'Door latch', range: '$89–$140' },
      { repair: 'Wash or drain pump', range: '$150–$250' },
      { repair: 'Control board', range: '$150–$280' },
    ],
    warranty: 'GE dishwashers typically include a one-year limited warranty; some models offer longer coverage on specific parts such as the tub or racks.',
    repairOrReplace:
      'Latches, pumps and boards are worth repairing on most GE dishwashers under about ten years old. On an inexpensive older model, a board plus pump repair may approach the cost of a new unit — we will say so.',
    faq: [
      { q: 'Why will my GE dishwasher not drain?', a: 'Check and clean the filter first. If it still holds water, the drain pump, check valve, air gap or disposal connection is likely blocked or failed.' },
      { q: 'The lights on my GE dishwasher are blinking. What does that mean?', a: 'Blinking lights usually mean the control detected a fault or the cycle was interrupted. We read the fault and test the latch, sensors and board.' },
      { q: 'Do you repair Café and Monogram dishwashers?', a: 'Yes. We repair GE, GE Profile, Café and Monogram dishwashers.' },
      { q: 'How much does GE dishwasher repair cost?', a: 'Most repairs run $89–$280 including the visit.' },
    ],
    symptomSlugs: ['dishwasher-not-draining', 'dishwasher-not-cleaning-dishes', 'dishwasher-door-wont-latch', 'dishwasher-leaving-white-residue'],
    updatedAt: UPDATED,
  },
  {
    slug: 'kitchenaid-dishwasher-repair',
    brandSlug: 'kitchenaid-appliance-repair',
    brand: 'KitchenAid',
    appliance: 'Dishwasher',
    serviceSlug: 'dishwasher-repair',
    tier: 'mainstream',
    seoTitle: 'KitchenAid Dishwasher Repair Charlotte, NC | Same-Day',
    metaDescription:
      'KitchenAid dishwasher repair in Charlotte: blinking lights, not cleaning, not draining, latches, pumps and heaters. Same-day service, $89 diagnostic waived with repair.',
    intro:
      'KitchenAid dishwashers are a favorite in Charlotte kitchen remodels. Many models use a manual-clean filter at the bottom of the tub, and when it is not cleaned regularly dishes come out gritty and the dishwasher drains slowly. Beyond filters, we repair drain and wash pumps, heaters, door latches and control boards, and we read blinking-light fault patterns as part of the diagnosis.',
    lines: ['Third-rack models with ProWash', 'Stainless-tub models (KDTE, KDTM, KDPM and similar)', 'Panel-ready models', 'Older models with self-cleaning filters'],
    codes: [],
    failures: [
      { title: 'Clogged manual-clean filter', detail: 'Many KitchenAid dishwashers rely on a removable filter that needs regular cleaning. A clogged one causes poor cleaning, odors and slow draining.' },
      { title: 'Drain and wash pumps', detail: 'Failed pumps leave water in the tub or produce weak washing.' },
      { title: 'Heater and drying', detail: 'A failed heater or thermistor means cold washes and wet dishes.' },
      { title: 'Blinking lights and latches', detail: 'Blinking light patterns indicate stored faults; worn door latches stop cycles from starting.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Filter, spray arm or drain clearing', range: '$89–$120' },
      { repair: 'Door latch', range: '$89–$140' },
      { repair: 'Drain or wash pump', range: '$150–$250' },
      { repair: 'Control board', range: '$150–$280' },
    ],
    warranty: 'KitchenAid dishwashers typically include a one-year limited warranty, with some models covering certain parts such as racks or the tub for longer.',
    repairOrReplace:
      'KitchenAid dishwashers are well built and parts are shared with Whirlpool, so most repairs are worth doing, especially on panel-ready models.',
    faq: [
      { q: 'Why is my KitchenAid dishwasher not cleaning well?', a: 'A clogged filter is the most common cause on models with a manual-clean filter. Spray arms, water temperature and the wash pump come next.' },
      { q: 'My KitchenAid dishwasher lights are blinking. What does it mean?', a: 'Blinking lights indicate a stored fault. We read the pattern in diagnostic mode and test the related part.' },
      { q: 'How often should I clean the KitchenAid filter?', a: 'On models with a manual-clean filter, about once a month for most households, more often with heavy use.' },
      { q: 'How much does KitchenAid dishwasher repair cost?', a: 'Most repairs run $89–$280 including the visit.' },
    ],
    symptomSlugs: ['dishwasher-not-cleaning-dishes', 'dishwasher-not-draining', 'dishwasher-leaving-white-residue', 'dishwasher-door-wont-latch'],
    updatedAt: UPDATED,
  },
  {
    slug: 'samsung-dishwasher-repair',
    brandSlug: 'samsung-appliance-repair',
    brand: 'Samsung',
    appliance: 'Dishwasher',
    serviceSlug: 'dishwasher-repair',
    tier: 'mainstream',
    seoTitle: 'Samsung Dishwasher Repair Charlotte, NC | LC, 5C, 4C Codes',
    metaDescription:
      'Samsung dishwasher repair in Charlotte: LC leak, 5C drain, 4C water supply, HE heater and OC codes. Pumps, latches and boards. Same-day service, $89 diagnostic waived.',
    intro:
      'Samsung dishwashers are common in newer Charlotte homes and apartments, and they report problems through clear error codes. LC (leak) and 5C (drain) are the codes we see most. We find the cause behind the code — a leaking door seal, a clogged filter, a failed pump — and fix most Samsung dishwashers in one visit.',
    lines: ['DW80 series dishwashers', 'StormWash and WaterWall models', 'Bespoke dishwashers', 'Top-control and front-control models'],
    codes: [
      { code: 'LC / LE', meaning: 'Leak detected', fix: 'Water reached the base and tripped the leak sensor. We find the leak and dry the base.' },
      { code: '5C / 5E', meaning: 'Drain error', fix: 'Clogged filter, kinked drain hose, blocked disposal connection or failed drain pump.' },
      { code: '4C / 4E', meaning: 'Water supply error', fix: 'Closed supply valve, kinked line or failed inlet valve.' },
      { code: 'HE / HC', meaning: 'Heater error', fix: 'The heater or its circuit has failed; washes run cold and dishes stay wet.' },
      { code: 'OC / OE', meaning: 'Overfill', fix: 'Water level sensing or inlet valve problem.' },
      { code: '3C / 3E', meaning: 'Wash motor error', fix: 'The circulation (wash) motor is not running correctly.' },
      { code: 'tE / tC', meaning: 'Thermistor error', fix: 'The temperature sensor has failed.' },
    ],
    failures: [
      { title: 'Leak codes', detail: 'LC codes usually trace to the door seal, a sump connection or over-sudsing from the wrong detergent.' },
      { title: 'Drain problems', detail: 'Clogged filters and disposal connections are the most common causes of 5C codes.' },
      { title: 'Heater failures', detail: 'HE codes and wet dishes point to the heater or its relay.' },
      { title: 'Door latches', detail: 'Worn latches stop the dishwasher from starting.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Filter or drain clearing', range: '$89–$120' },
      { repair: 'Door latch', range: '$89–$140' },
      { repair: 'Pump replacement', range: '$150–$250' },
      { repair: 'Control board', range: '$150–$280' },
    ],
    warranty: 'Samsung dishwashers typically include a one-year manufacturer warranty.',
    repairOrReplace:
      'Leak, drain, latch and heater repairs are worth doing on most Samsung dishwashers. A board and pump failure together on an older budget model may tip the math toward replacement.',
    faq: [
      { q: 'What does LC mean on a Samsung dishwasher?', a: 'LC means a leak was detected — water reached the base. The leak source has to be fixed and the base dried before the dishwasher will run normally.' },
      { q: 'What does 5C mean on a Samsung dishwasher?', a: '5C is a drain error. Clean the filter, check the drain hose and the disposal connection; if it persists, the drain pump may need replacing.' },
      { q: 'Why are my dishes wet after a Samsung cycle?', a: 'A failed heater (often with an HE code), missing rinse aid or a cycle without heated dry are the usual causes.' },
      { q: 'How much does Samsung dishwasher repair cost?', a: 'Most repairs run $89–$280 including the visit.' },
    ],
    symptomSlugs: ['dishwasher-not-draining', 'dishwasher-not-cleaning-dishes', 'dishwasher-door-wont-latch', 'dishwasher-leaving-white-residue'],
    updatedAt: UPDATED,
  },
  {
    slug: 'miele-dishwasher-repair',
    brandSlug: 'miele-appliance-repair',
    brand: 'Miele',
    appliance: 'Dishwasher',
    serviceSlug: 'dishwasher-repair',
    tier: 'premium',
    seoTitle: 'Miele Dishwasher Repair Charlotte, NC | Drain & Inlet Faults',
    metaDescription:
      'Miele dishwasher repair in Charlotte: drain faults (F11), inlet faults, Waterproof system, pumps and heaters on G 5000 and G 7000 series. $89 diagnostic waived.',
    intro:
      'Miele dishwashers are common in Myers Park, Eastover, SouthPark and Lake Norman kitchens, often fully integrated behind a custom panel. They are built to last a long time and are worth repairing. Most Miele calls are drain and water-inlet faults, the Waterproof leak-protection system and heating problems, and panel-ready units need careful removal.',
    lines: ['G 5000 series', 'G 7000 series with AutoDos', 'Fully integrated and panel-ready models', 'Older Miele models still in service'],
    codes: [
      { code: 'F11', meaning: 'Drain fault', fix: 'Water is not draining — clogged filters, a blocked drain pump or a kinked drain hose.' },
      { code: 'Check inlet / Check drain', meaning: 'Water inlet or drain problem (newer display models)', fix: 'Supply valve, inlet hose and filters, or the drain path.' },
    ],
    failures: [
      { title: 'Drain faults', detail: 'Clogged filter combinations and debris in the drain pump are the most common Miele service calls.' },
      { title: 'Water inlet and Waterproof system', detail: 'Miele\'s Waterproof system shuts off water when it detects a problem; the cause can be a hose, valve or leak in the base.' },
      { title: 'Heating', detail: 'Heating faults lead to cold washes and poor drying.' },
      { title: 'Panel-ready doors', detail: 'Heavy custom panels wear door springs and hinges over time.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Drain clearing and filters', range: '$89–$120' },
      { repair: 'Pumps, heater and inlet parts', range: QUOTED },
      { repair: 'Control electronics', range: QUOTED },
    ],
    warranty: 'Miele dishwashers carry Miele\'s manufacturer warranty, and many owners purchase extended coverage. Check your registration before paying for a repair on a newer unit.',
    repairOrReplace:
      'Miele dishwashers are designed for a long service life. Repair is almost always the better value, particularly for integrated units with custom panels.',
    faq: [
      { q: 'What does F11 mean on a Miele dishwasher?', a: 'F11 is a drain fault. Clean the filters and check the drain pump for debris; if the fault continues, the pump or drain path needs service.' },
      { q: 'Is it worth repairing a Miele dishwasher?', a: 'Yes in most cases. Miele dishwashers are built for a long life and replacement often means new panels and installation work.' },
      { q: 'Do you repair panel-ready Miele dishwashers?', a: 'Yes. We remove and reinstall integrated units carefully to protect the panel and countertop.' },
      { q: 'How much does Miele dishwasher repair cost?', a: 'The diagnostic visit is $89 and is waived with the repair. Miele parts are quoted per model before work.' },
    ],
    symptomSlugs: ['dishwasher-not-draining', 'dishwasher-not-cleaning-dishes', 'dishwasher-door-wont-latch'],
    updatedAt: UPDATED,
  },

  // ─── RANGES & OVENS ────────────────────────────────────────────
  {
    slug: 'ge-range-repair',
    brandSlug: 'ge-appliance-repair',
    brand: 'GE',
    appliance: 'Range',
    serviceSlug: 'oven-repair',
    tier: 'mainstream',
    seoTitle: 'GE Range & Oven Repair Charlotte, NC | F2, F3, F7 Codes',
    metaDescription:
      'GE, GE Profile and Café range and oven repair in Charlotte: F1, F2, F3/F4, F7 and F9 codes, bake elements, igniters and burners. Same-day, $89 diagnostic waived.',
    intro:
      'GE ranges and wall ovens — including GE Profile and Café — are among the most common in Charlotte kitchens. GE oven controls display F-codes that point us to the sensor, control or door lock, and the most common repairs are bake elements, igniters, temperature sensors and surface burner controls.',
    lines: ['GE freestanding and slide-in ranges (electric and gas)', 'GE Profile ranges and wall ovens', 'Café ranges and wall ovens', 'Monogram ranges and wall ovens'],
    codes: [
      { code: 'F1', meaning: 'Control fault / runaway temperature', fix: 'The oven control detected a fault; often the control board needs replacing.' },
      { code: 'F2', meaning: 'Oven temperature too high', fix: 'The oven overheated — a temperature sensor, relay or control problem.' },
      { code: 'F3 / F4', meaning: 'Oven temperature sensor open or shorted', fix: 'A failed oven sensor or wiring.' },
      { code: 'F7', meaning: 'Function key error', fix: 'A stuck or failed key on the touchpad.' },
      { code: 'F9', meaning: 'Door lock fault', fix: 'The self-clean door lock is not working correctly.' },
    ],
    failures: [
      { title: 'Oven not heating', detail: 'Bake elements on electric models and igniters on gas models are the most common causes.' },
      { title: 'Temperature problems', detail: 'An oven that runs hot or cold usually has a failing sensor or needs calibration.' },
      { title: 'Surface burners', detail: 'Failed infinite switches, elements and igniters stop individual burners from working.' },
      { title: 'Touchpads and controls', detail: 'Touchpads and control boards fail with age, heat and power surges.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Igniter replacement', range: '$89–$170' },
      { repair: 'Bake or broil element', range: '$89–$175' },
      { repair: 'Temperature sensor', range: '$89–$160' },
      { repair: 'Control board', range: '$200–$350' },
    ],
    warranty: 'GE ranges typically include a one-year limited warranty. Café and Monogram have their own terms.',
    repairOrReplace:
      'Elements, igniters, sensors and switches are inexpensive repairs on any GE range. Control boards on older basic models are the main case where replacement deserves a look.',
    faq: [
      { q: 'What does F2 mean on a GE oven?', a: 'F2 means the oven detected a temperature that is too high. A temperature sensor, relay or control fault is usually responsible.' },
      { q: 'My GE gas oven will not heat but the burners work.', a: 'A weak or failed oven igniter is the most common cause. It glows but does not open the gas valve.' },
      { q: 'Do you repair Café and Monogram ranges?', a: 'Yes. We repair GE, GE Profile, Café and Monogram ranges and wall ovens.' },
      { q: 'How much does GE range repair cost?', a: 'Most repairs run $89–$300 including the visit; control boards are $200–$350.' },
    ],
    symptomSlugs: ['oven-not-heating-properly', 'gas-oven-not-lighting', 'burner-not-working', 'oven-door-wont-close'],
    updatedAt: UPDATED,
  },
  {
    slug: 'samsung-range-repair',
    brandSlug: 'samsung-appliance-repair',
    brand: 'Samsung',
    appliance: 'Range',
    serviceSlug: 'oven-repair',
    tier: 'mainstream',
    seoTitle: 'Samsung Range & Oven Repair Charlotte, NC | Same-Day',
    metaDescription:
      'Samsung range and oven repair in Charlotte: oven not heating, SE touch control errors, gas ignition, Flex Duo and induction ranges. Same-day, $89 diagnostic waived.',
    intro:
      'Samsung slide-in and freestanding ranges are common in newer Charlotte homes, especially in builder kitchens in Steele Creek, Huntersville and Concord. Touch controls, gas ignition and oven heating are the repairs we make most. We also service Flex Duo and induction models.',
    lines: ['Gas ranges (NX series)', 'Electric and induction ranges (NE series)', 'Flex Duo ranges', 'Bespoke ranges and wall ovens'],
    codes: [
      { code: 'SE', meaning: 'Touch control (shorted key) error', fix: 'A key on the touch panel is stuck or shorted; the panel or control may need replacing.' },
      { code: '-08 / E-08', meaning: 'Gas oven ignition failure', fix: 'The oven did not light — a weak igniter, gas valve or supply problem.' },
    ],
    failures: [
      { title: 'Oven not heating', detail: 'Igniters on gas models and bake elements on electric models are the usual causes.' },
      { title: 'Touch controls', detail: 'SE errors, unresponsive keys and beeping are common on glass touch panels, sometimes after a power surge.' },
      { title: 'Burners clicking or not lighting', detail: 'Moisture, misaligned burner caps or a failed spark module.' },
      { title: 'Induction power boards', detail: 'Induction cooking zones that do not respond often point to a power board.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Igniter replacement', range: '$89–$170' },
      { repair: 'Bake element', range: '$89–$175' },
      { repair: 'Control or touch panel', range: '$200–$350' },
    ],
    warranty: 'Samsung ranges typically include a one-year manufacturer warranty.',
    repairOrReplace:
      'Igniters, elements and burner parts are worth repairing on any Samsung range. Control boards are worth repairing on most units under about ten years old.',
    faq: [
      { q: 'What does SE mean on a Samsung range?', a: 'SE indicates a shorted or stuck key on the touch control. The touch panel or control usually needs to be replaced.' },
      { q: 'My Samsung gas oven will not light.', a: 'A weak igniter is the most common cause. It is a routine, same-visit repair in most cases.' },
      { q: 'Do you repair Samsung induction ranges?', a: 'Yes. We diagnose induction zones, power boards and touch controls.' },
      { q: 'How much does Samsung range repair cost?', a: 'Most repairs run $89–$300 including the visit.' },
    ],
    symptomSlugs: ['oven-not-heating-properly', 'gas-oven-not-lighting', 'burner-not-working'],
    updatedAt: UPDATED,
  },
  {
    slug: 'wolf-range-repair',
    brandSlug: 'wolf-appliance-repair',
    brand: 'Wolf',
    appliance: 'Range',
    serviceSlug: 'stove-repair',
    tier: 'premium',
    seoTitle: 'Wolf Range Repair Charlotte, NC | Dual Fuel & Gas',
    metaDescription:
      'Wolf range and oven repair in Charlotte: dual-fuel and gas ranges, rangetops, wall ovens. Burners clicking, ignition, oven not heating, convection fans. $89 diagnostic.',
    intro:
      'Wolf ranges, rangetops and wall ovens are the centerpiece of many Myers Park, Eastover, SouthPark and Lake Norman kitchens. They are built for decades of use and are designed to be serviced. We repair Wolf dual-fuel and gas ranges, rangetops and wall ovens, from burners that will not stop clicking to ovens that heat slowly.',
    lines: ['Dual-fuel ranges (DF series)', 'Gas ranges (GR series)', 'Rangetops', 'Built-in wall ovens and steam ovens'],
    codes: [],
    failures: [
      { title: 'Burners clicking or not staying lit', detail: 'Spills and moisture on igniters, misaligned burner caps or a failed spark module cause continuous clicking or burners that go out.' },
      { title: 'Oven slow to heat', detail: 'On gas ovens a weakening igniter is the usual cause; on dual-fuel ovens, bake or convection elements.' },
      { title: 'Convection fan noise', detail: 'Worn convection fan motors become noisy or stop.' },
      { title: 'Temperature accuracy', detail: 'Wolf ovens are precise; if yours runs hot or cold, a sensor or calibration issue is likely.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Igniter or spark module', range: QUOTED },
      { repair: 'Bake / convection element or fan', range: QUOTED },
      { repair: 'Controls and sensors', range: QUOTED },
    ],
    warranty: 'Wolf provides manufacturer warranty coverage on new products, with additional coverage on certain parts. Check your registration before paying for a repair on a newer unit.',
    repairOrReplace:
      'Repair is almost always the better value on a Wolf range. Replacement is costly and often means cabinet and hood adjustments.',
    faq: [
      { q: 'Why do my Wolf burners keep clicking?', a: 'Moisture or spills on the igniter, a misaligned burner cap or a failing spark module are the usual causes. Dry and reseat the caps first; if clicking continues, the module or switch needs service.' },
      { q: 'My Wolf oven takes too long to preheat.', a: 'A weakening igniter on gas models or a failing bake element on dual-fuel models is the common cause.' },
      { q: 'Do you service Wolf steam and wall ovens?', a: 'Yes. We repair Wolf wall ovens and steam ovens along with ranges and rangetops.' },
      { q: 'How much does Wolf repair cost?', a: 'The diagnostic visit is $89 and is waived with the repair. Wolf parts are quoted per model before work.' },
    ],
    symptomSlugs: ['burner-not-working', 'gas-oven-not-lighting', 'oven-not-heating-properly'],
    updatedAt: UPDATED,
  },
  {
    slug: 'thermador-range-repair',
    brandSlug: 'thermador-appliance-repair',
    brand: 'Thermador',
    appliance: 'Range',
    serviceSlug: 'stove-repair',
    tier: 'premium',
    seoTitle: 'Thermador Range Repair Charlotte, NC | Pro Harmony, Pro Grand',
    metaDescription:
      'Thermador range repair in Charlotte: Pro Harmony and Pro Grand ranges, Star burners, ExtraLow simmer, oven igniters and convection. $89 diagnostic waived with repair.',
    intro:
      'Thermador Pro Harmony and Pro Grand ranges are common in Charlotte custom homes and Lake Norman kitchens. Their Star burners and ExtraLow simmer system are distinctive, and so are their service needs. We repair Thermador ranges, rangetops and wall ovens, from burners that will not light to ovens that will not hold temperature.',
    lines: ['Pro Harmony ranges', 'Pro Grand ranges', 'Rangetops', 'Wall ovens'],
    codes: [],
    failures: [
      { title: 'Burner ignition and re-ignition', detail: 'Thermador burners re-light automatically if the flame goes out. Moisture, debris or a failed spark module cause clicking and lighting problems.' },
      { title: 'ExtraLow simmer', detail: 'When the ExtraLow setting stops cycling properly, the burner valve or its control needs attention.' },
      { title: 'Oven igniter and heating', detail: 'Gas oven igniters weaken over time; dual-fuel ovens lose bake or convection elements.' },
      { title: 'Convection fan and door', detail: 'Convection fans and door hinges or gaskets are common wear items.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Igniter or spark module', range: QUOTED },
      { repair: 'Burner valve or ExtraLow parts', range: QUOTED },
      { repair: 'Oven elements, fan or controls', range: QUOTED },
    ],
    warranty: 'Thermador offers manufacturer warranty coverage on new products; check your registration on newer ranges.',
    repairOrReplace:
      'Repairing a Thermador range is almost always the better value. Parts are model-specific, so we confirm availability before the work.',
    faq: [
      { q: 'Why does my Thermador burner keep clicking?', a: 'Thermador burners re-ignite automatically, so moisture, spills or a weak spark module can cause continuous clicking. Clean and dry the burner first; if it continues, the ignition system needs service.' },
      { q: 'My ExtraLow simmer is not working.', a: 'The ExtraLow system cycles the flame on and off. If it stays on or will not light, the valve or its control usually needs service.' },
      { q: 'Do you repair Thermador wall ovens?', a: 'Yes. We repair Thermador wall ovens as well as ranges and rangetops.' },
      { q: 'How much does Thermador range repair cost?', a: 'The diagnostic visit is $89 and is waived with the repair. Parts are quoted per model before work.' },
    ],
    symptomSlugs: ['burner-not-working', 'gas-oven-not-lighting', 'oven-not-heating-properly'],
    updatedAt: UPDATED,
  },
  {
    slug: 'viking-range-repair',
    brandSlug: 'viking-appliance-repair',
    brand: 'Viking',
    appliance: 'Range',
    serviceSlug: 'stove-repair',
    tier: 'premium',
    seoTitle: 'Viking Range Repair Charlotte, NC | Professional Series',
    metaDescription:
      'Viking range repair in Charlotte: Professional and Tuscany ranges, burners, spark modules, oven igniters, door hinges and convection. $89 diagnostic waived with repair.',
    intro:
      'Viking Professional ranges have been a fixture of high-end Charlotte kitchens for decades, and many older units are still cooking in Myers Park, Eastover and Ballantyne homes. They are heavy-duty and repairable. The most common Viking repairs are burner ignition, oven igniters and door hinges.',
    lines: ['Professional gas and dual-fuel ranges', 'Tuscany ranges', 'Rangetops', 'Wall ovens'],
    codes: [],
    failures: [
      { title: 'Burner ignition', detail: 'Spark igniters, spark modules and burner switches wear out, causing burners that click or will not light.' },
      { title: 'Oven igniter', detail: 'A weak bake igniter leads to slow preheating or an oven that will not light.' },
      { title: 'Door hinges and springs', detail: 'Heavy Viking oven doors wear hinges and springs, leading to doors that drop open or will not seal.' },
      { title: 'Convection fan and temperature', detail: 'Convection fans and temperature sensors are common wear parts on older ranges.' },
    ],
    costs: [
      { repair: 'Diagnostic visit (waived with repair)', range: '$89' },
      { repair: 'Igniter or spark module', range: QUOTED },
      { repair: 'Door hinges and springs', range: QUOTED },
      { repair: 'Fan, sensor or controls', range: QUOTED },
    ],
    warranty: 'Viking provides manufacturer warranty coverage on new products. Older Viking ranges are typically out of warranty but remain repairable.',
    repairOrReplace:
      'Viking ranges are worth repairing in nearly every case. Many older units are still running well after decades with routine part replacements.',
    faq: [
      { q: 'Why will my Viking oven door not stay closed?', a: 'Worn hinges or springs are the usual cause on heavy Viking doors. Replacing them restores the seal and protects the oven\'s temperature.' },
      { q: 'My Viking burners click but will not light.', a: 'A worn igniter, a failing spark module or a misaligned burner cap is the common cause.' },
      { q: 'Is my older Viking range worth repairing?', a: 'Usually, yes. Viking ranges are built to be serviced, and most repairs cost far less than a replacement.' },
      { q: 'How much does Viking range repair cost?', a: 'The diagnostic visit is $89 and is waived with the repair. Viking parts are quoted per model before work.' },
    ],
    symptomSlugs: ['burner-not-working', 'oven-door-wont-close', 'gas-oven-not-lighting'],
    updatedAt: UPDATED,
  },
];

export const getBrandAppliance = (slug: string) => brandAppliances.find(b => b.slug === slug);
