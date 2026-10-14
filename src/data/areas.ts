export interface AreaFAQ {
  q: string;
  a: string;
}

import type { ApplianceGroup } from './cities';

export interface AreaProfile {
  zips: string[];
  landmarks: string[];
  applianceNotes: Record<ApplianceGroup, string>;
  nearby: string[];      // other area slugs
  premium?: boolean;     // neighborhood gets premium-brand pages
  updatedAt: string;
}

export interface Area {
  slug: string;
  name: string;
  shortDesc: string;         // one-liner for hub page cards
  areaType: string;          // e.g. "South Charlotte suburb"
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localContext: string[];    // bullet-style local facts
  customerTypes: string[];   // who we serve there
  faq: AreaFAQ[];
}

const baseAreas: Area[] = [
  {
    slug: 'ballantyne-appliance-repair',
    name: 'Ballantyne',
    shortDesc: 'Upscale south Charlotte suburb with newer homes and high-end appliances.',
    areaType: 'South Charlotte suburb',
    seoTitle: 'Appliance Repair in Ballantyne, Charlotte NC | HomeHeroes',
    metaDescription:
      'Same-day appliance repair in Ballantyne, Charlotte NC. We fix refrigerators, washers, dryers, ovens, and more. Licensed, insured technicians. Call (704) 512-0111.',
    h1: 'Appliance Repair in Ballantyne, Charlotte NC',
    intro:
      'Ballantyne is one of Charlotte\'s most sought-after residential corridors — an expansive south Charlotte community built around planned neighborhoods, corporate campuses, and upscale amenities. The area is home to a large concentration of newer single-family homes, many equipped with premium appliance brands. When a Sub-Zero refrigerator fails or a Wolf range stops lighting, homeowners in Ballantyne need a technician who arrives the same day, stocked with the right parts. That\'s exactly what HomeHeroes delivers.',
    localContext: [
      'Ballantyne spans a fast-growing stretch of south Charlotte anchored by major corporate employers and upscale residential communities.',
      'Neighborhoods like Ballantyne Country Club, Stone Creek Ranch, Berewick, and Palisades draw families who invest in premium kitchen appliances.',
      'The area features a dense mix of single-family homes, townhomes, and upscale rental communities — all generating steady appliance repair demand.',
      'High-end appliance brands including Sub-Zero, Wolf, Thermador, and Bosch are common throughout the area.',
      'We serve residents, property managers, and short-term rental owners throughout the Ballantyne and Piper Glen corridors.',
    ],
    customerTypes: [
      'Homeowners in planned communities and custom-built estates',
      'Residents of luxury apartment communities and townhome neighborhoods',
      'Property managers overseeing rental portfolios in south Charlotte',
      'Short-term rental and Airbnb hosts requiring fast turnaround',
      'Local restaurants and cafes along Johnston Road and Ballantyne Commons Parkway',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Ballantyne?', a: 'Yes. We dispatch technicians to Ballantyne the same day for most appliance failures. Call before noon and we can typically reach you that afternoon.' },
      { q: 'Do you repair high-end appliances like Sub-Zero and Wolf in Ballantyne?', a: 'Absolutely. Our technicians are trained on luxury appliance brands including Sub-Zero, Wolf, Thermador, Viking, and Bosch — common in Ballantyne\'s newer custom homes.' },
      { q: 'Can you work with property managers in Ballantyne?', a: 'Yes. We regularly work with property managers and landlords across south Charlotte, providing fast turnaround and clear documentation for repair records.' },
      { q: 'Do you service apartments and condos in Ballantyne?', a: 'We service all residential property types — single-family homes, townhomes, condos, and apartment communities throughout the Ballantyne area.' },
      { q: 'What appliance brands do you repair in Ballantyne?', a: 'We repair all major brands: Samsung, LG, Whirlpool, GE, Maytag, Frigidaire, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, Wolf, Miele, and more.' },
    ],
  },

  {
    slug: 'south-end-appliance-repair',
    name: 'South End',
    shortDesc: 'Urban transit-corridor neighborhood with condos, breweries, and young professionals.',
    areaType: 'Urban neighborhood',
    seoTitle: 'Appliance Repair in South End, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in South End, Charlotte NC. Fast same-day service for condos, apartments, and local businesses. Refrigerators, washers, dryers & more. Call (704) 512-0111.',
    h1: 'Appliance Repair in South End, Charlotte NC',
    intro:
      'South End has transformed into one of Charlotte\'s most vibrant urban neighborhoods — a light-rail corridor lined with craft breweries, boutique restaurants, converted warehouse lofts, and a steady stream of new condo towers. Dense residential living means appliances work harder, and when they break, residents need a repair crew that can navigate elevator buildings, tight unit layouts, and busy schedules. HomeHeroes offers same-day service throughout South End for both residents and local businesses.',
    localContext: [
      'South End stretches along the Charlotte Blue Line light rail, connecting residents to Uptown in minutes.',
      'The neighborhood features a dense mix of condo towers, apartment communities, converted lofts, and row townhomes.',
      'A thriving food and beverage scene — breweries, restaurants, and cafes — generates commercial appliance repair demand alongside residential.',
      'Young professionals and urban dwellers frequently deal with dishwasher, refrigerator, and washer issues in compact kitchen layouts.',
      'Proximity to Dilworth, Uptown, and the Design Center area means we serve a wide band of central Charlotte from this hub.',
    ],
    customerTypes: [
      'Condo and apartment residents in high-rise and mid-rise buildings',
      'Homeowners in renovated and new-construction townhomes',
      'Local restaurants, craft breweries, and cafes along South Boulevard',
      'Property management companies overseeing multi-unit residential buildings',
      'Short-term rental operators managing units near the light rail corridor',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in South End?', a: 'Yes. We serve South End the same day — typically within hours of your call. The neighborhood\'s central location makes scheduling straightforward.' },
      { q: 'Can you repair appliances in high-rise condos in South End?', a: 'Absolutely. We regularly service appliances in condo towers and elevator buildings throughout South End. Just let us know the building and unit at booking.' },
      { q: 'Do you repair commercial kitchen equipment at South End restaurants?', a: 'We service commercial-grade residential appliances and can assist local restaurants and cafes with refrigerators, ice makers, and commercial dishwashers. Call us to discuss your specific equipment.' },
      { q: 'Can you work with property managers in South End?', a: 'Yes. We work with property managers and HOAs throughout South End, providing fast service and detailed repair invoices for maintenance records.' },
      { q: 'What appliance brands do you repair in South End?', a: 'All major brands — Samsung, LG, Whirlpool, GE, Bosch, KitchenAid, Frigidaire, Maytag, and more. We stock common parts for fast same-day repairs.' },
    ],
  },

  {
    slug: 'uptown-charlotte-appliance-repair',
    name: 'Uptown Charlotte',
    shortDesc: 'Charlotte\'s central business district — luxury condos, hotels, and restaurants.',
    areaType: 'Central business district',
    seoTitle: 'Appliance Repair in Uptown Charlotte, NC | HomeHeroes',
    metaDescription:
      'Same-day appliance repair in Uptown Charlotte, NC. We service condos, apartments, restaurants, and hotel kitchens. Licensed technicians. Call (704) 512-0111.',
    h1: 'Appliance Repair in Uptown Charlotte, NC',
    intro:
      'Uptown Charlotte is the city\'s economic and cultural core — home to Fortune 500 headquarters, luxury high-rise condos, boutique hotels, and some of Charlotte\'s most acclaimed restaurants. Appliance failures in dense urban environments are disruptive in ways that suburban breakdowns are not: a refrigerator down in a busy restaurant kitchen or a washer-dryer stack failing in a luxury condo unit demands an immediate, professional response. HomeHeroes is equipped to handle Uptown\'s fast-paced environment with same-day service and elevator-building experience.',
    localContext: [
      'Uptown encompasses Charlotte\'s four wards: First, Second, Third, and Fourth — each with its own mix of residential towers, hotels, and commercial buildings.',
      'Luxury condo communities like 210 Trade, The Vue, and numerous high-rise residential towers generate consistent appliance repair demand.',
      'A concentration of hotel kitchens, restaurant row, and event venues creates significant commercial appliance repair needs.',
      'Residents in Uptown condos typically own high-end appliance brands and expect professional, discreet service.',
      'We are familiar with elevator-access buildings and coordinate timing with building concierge or management as needed.',
    ],
    customerTypes: [
      'Luxury condo and high-rise apartment residents',
      'Hotel facilities and property management teams',
      'Uptown restaurants, bars, and commercial kitchen operators',
      'Condo associations and HOA property managers',
      'Corporate housing coordinators managing furnished executive units',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Uptown Charlotte?', a: 'Yes. Uptown is a priority service zone for HomeHeroes. We dispatch technicians the same day, coordinating with building management for elevator access as needed.' },
      { q: 'Can you service appliances in Uptown high-rise condos?', a: 'Absolutely. We regularly service luxury condos in Uptown\'s residential towers. We coordinate elevator access and building entry through the concierge or management office.' },
      { q: 'Do you repair commercial kitchen appliances at Uptown restaurants?', a: 'We service commercial-grade refrigerators, ice makers, dishwashers, and other equipment used in Uptown restaurants and hotel kitchens. Call us to confirm your specific equipment.' },
      { q: 'What appliance brands do you service in Uptown Charlotte?', a: 'We repair all major brands, including the high-end brands common in Uptown luxury units: Sub-Zero, Wolf, Miele, Bosch, KitchenAid, Thermador, and more.' },
      { q: 'Do you work with Uptown property managers and HOAs?', a: 'Yes. We are experienced working with condo associations, HOAs, and property management companies throughout Uptown, providing professional service and thorough repair documentation.' },
    ],
  },

  {
    slug: 'myers-park-appliance-repair',
    name: 'Myers Park',
    shortDesc: 'Historic affluent Charlotte neighborhood with large estates and premium appliances.',
    areaType: 'Historic neighborhood',
    seoTitle: 'Appliance Repair in Myers Park, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Myers Park, Charlotte NC. We service large estates, historic homes, and high-end appliances. Same-day service available. Call (704) 512-0111.',
    h1: 'Appliance Repair in Myers Park, Charlotte NC',
    intro:
      'Myers Park is one of Charlotte\'s most storied residential neighborhoods — a tree-canopied enclave of grand homes, historic estates, and manicured streets that has anchored Charlotte\'s upper residential tier for over a century. Many homes in Myers Park feature both vintage appliances in secondary spaces and high-end modern equipment in renovated kitchens. HomeHeroes\'s technicians are experienced with the full spectrum, from aging but reliable workhorses to the latest luxury appliance brands installed during full-kitchen remodels.',
    localContext: [
      'Myers Park features some of Charlotte\'s oldest and most architecturally significant residential properties, many dating from the early 20th century.',
      'The neighborhood sits between Uptown and SouthPark, making it a convenient service zone for our technicians.',
      'Large lot sizes and estate properties often feature multiple kitchens, butler\'s pantries, or basement entertainment areas — each with its own appliances to maintain.',
      'Renovated Myers Park homes frequently include premium brands such as Sub-Zero, Wolf, Thermador, and Bosch in their updated kitchens.',
      'We serve both longtime residents with older appliances needing expert diagnosis and newer residents who have upgraded to modern high-end equipment.',
    ],
    customerTypes: [
      'Homeowners in historic estates and renovated mid-century properties',
      'Residents of luxury townhomes near the SouthPark corridor',
      'Personal chefs and household staff managing estate kitchens',
      'Property managers overseeing rental properties in the Myers Park area',
      'Contractors and home remodelers needing appliance service during kitchen renovations',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Myers Park?', a: 'Yes. We dispatch technicians to Myers Park the same day. The neighborhood\'s proximity to our central dispatch makes scheduling fast and efficient.' },
      { q: 'Do you service luxury appliance brands in Myers Park?', a: 'Yes. Many Myers Park homes feature Sub-Zero, Wolf, Thermador, and Miele appliances. Our technicians are trained on all luxury brands and carry specialized diagnostic tools.' },
      { q: 'Can you work around our household schedule in Myers Park?', a: 'Absolutely. We offer flexible scheduling windows and can coordinate arrival times with household staff, estate managers, or homeowners directly.' },
      { q: 'Do you repair older appliances in Myers Park historic homes?', a: 'Yes. We diagnose and repair older appliances including vintage ranges, older refrigerators, and legacy dishwashers when parts are available and repair is cost-effective.' },
      { q: 'What appliance brands do you repair in Myers Park?', a: 'All brands — from everyday models to luxury lines including Sub-Zero, Wolf, Thermador, Miele, Viking, and KitchenAid, as well as Whirlpool, GE, Samsung, LG, and more.' },
    ],
  },

  {
    slug: 'noda-appliance-repair',
    name: 'NoDa',
    shortDesc: 'Charlotte\'s arts district — eclectic homes, craft breweries, and creative community.',
    areaType: 'Arts district neighborhood',
    seoTitle: 'Appliance Repair in NoDa, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in NoDa (North Davidson), Charlotte NC. Fast same-day service for homes, apartments, restaurants, and breweries. Call (704) 512-0111.',
    h1: 'Appliance Repair in NoDa, Charlotte NC',
    intro:
      'NoDa — North Davidson — is Charlotte\'s creative heartbeat, a neighborhood stitched together from renovated mill houses, new condo developments, muraled warehouses, and one of the city\'s highest concentrations of craft breweries and independent restaurants. The neighborhood\'s mix of older homes and new construction means appliance needs range from diagnosing a decades-old unit in a renovated bungalow to servicing a brand-new French door refrigerator in a recently completed loft. HomeHeroes handles the full spectrum with the same professional, same-day response.',
    localContext: [
      'NoDa sits just northeast of Uptown and is anchored by the North Davidson Street commercial corridor.',
      'The neighborhood is home to independent restaurants, breweries, art galleries, and music venues — all of which rely on commercial-grade appliances.',
      'A growing number of condo buildings and apartment communities have joined NoDa\'s historic housing stock as the neighborhood expands.',
      'The LYNX Blue Line light rail stops at 36th Street, and the neighborhood is a hub for Charlotte\'s creative and food industry community.',
      'We serve both longtime residents in renovated historic homes and newer residents in recently built multi-unit developments.',
    ],
    customerTypes: [
      'Homeowners in renovated mill houses and craftsman bungalows',
      'Residents of new condo and apartment developments along the North Davidson corridor',
      'Restaurant, brewery, and café operators',
      'Gallery and studio spaces with residential-grade refrigerators and beverage coolers',
      'Property managers overseeing NoDa rental properties',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in NoDa?', a: 'Yes. We serve NoDa the same day and can typically dispatch within hours of your call. The neighborhood\'s proximity to central Charlotte makes scheduling fast.' },
      { q: 'Do you repair appliances in older NoDa homes?', a: 'Absolutely. We regularly service appliances in older renovated homes, including units that may be harder to source parts for. We diagnose honestly and advise when repair is or isn\'t cost-effective.' },
      { q: 'Can you service brewery and restaurant equipment in NoDa?', a: 'We can assist with commercial-grade refrigerators, ice makers, and dishwashers used by NoDa\'s food and beverage businesses. Call us to confirm your specific equipment.' },
      { q: 'Do you work with property managers in NoDa?', a: 'Yes. We work with property managers and landlords throughout NoDa, providing prompt service and repair documentation.' },
      { q: 'What appliance brands do you repair in NoDa?', a: 'All major brands: Samsung, LG, Whirlpool, GE, Maytag, Frigidaire, KitchenAid, Bosch, and more — including higher-end brands found in NoDa\'s renovated and new-construction units.' },
    ],
  },

  {
    slug: 'plaza-midwood-appliance-repair',
    name: 'Plaza Midwood',
    shortDesc: 'Eclectic central Charlotte neighborhood with craftsman homes and local dining.',
    areaType: 'Central Charlotte neighborhood',
    seoTitle: 'Appliance Repair in Plaza Midwood, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Plaza Midwood, Charlotte NC. Same-day service for homes, condos, and local businesses along Central Avenue. Call (704) 512-0111.',
    h1: 'Appliance Repair in Plaza Midwood, Charlotte NC',
    intro:
      'Plaza Midwood is one of Charlotte\'s most distinctive neighborhoods — a dense, walkable strip of craftsman bungalows, quirky restaurants, independent bars, and a genuine community culture that predates Charlotte\'s rapid growth. The neighborhood attracts a mix of longtime residents, young families, and renters drawn to its character and central location. Appliance repair needs here range from servicing aging units in historic bungalows to fixing newer appliances in renovated properties. HomeHeroes provides same-day service across all of Plaza Midwood.',
    localContext: [
      'Plaza Midwood centers on Central Avenue and The Plaza, Charlotte\'s original streetcar boulevard.',
      'The neighborhood\'s housing stock includes early 20th-century craftsman bungalows, mid-century ranch homes, and newer infill construction.',
      'A concentration of independent restaurants, bars, and coffee shops along Central Avenue creates commercial appliance service demand.',
      'Plaza Midwood is adjacent to NoDa, Elizabeth, and Villa Heights, making it a central hub in our service coverage.',
      'The neighborhood attracts a diverse mix of homeowners and renters, including long-term residents and newer transplants.',
    ],
    customerTypes: [
      'Homeowners in historic craftsman and mid-century homes',
      'Renters and tenants in multi-family and single-family rental properties',
      'Restaurant and bar operators along Central Avenue',
      'Property managers overseeing Plaza Midwood\'s dense rental stock',
      'Residents of newer apartment and condo buildings in the surrounding area',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Plaza Midwood?', a: 'Yes. Plaza Midwood\'s central location makes same-day dispatch fast. Call us in the morning and we can typically reach you that day.' },
      { q: 'Do you repair older appliances in Plaza Midwood bungalows?', a: 'Yes. We regularly work on older appliances in Plaza Midwood\'s historic homes. We assess honestly whether repair or replacement is the better value.' },
      { q: 'Can you service restaurants and cafes in Plaza Midwood?', a: 'We can assist businesses with commercial-grade refrigerators, ice makers, dishwashers, and related equipment. Call to confirm your specific units.' },
      { q: 'Do you work with landlords and property managers in Plaza Midwood?', a: 'Yes. We work with landlords across Plaza Midwood\'s high-density rental stock, providing fast, documented repairs.' },
      { q: 'What appliance brands do you repair in Plaza Midwood?', a: 'All major brands — Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, Bosch, KitchenAid, and more.' },
    ],
  },

  {
    slug: 'dilworth-appliance-repair',
    name: 'Dilworth',
    shortDesc: 'One of Charlotte\'s oldest neighborhoods — tree-lined streets and classic homes.',
    areaType: 'Historic neighborhood',
    seoTitle: 'Appliance Repair in Dilworth, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Dilworth, Charlotte NC. Same-day service for historic homes, condos, and apartments. Licensed, insured technicians. Call (704) 512-0111.',
    h1: 'Appliance Repair in Dilworth, Charlotte NC',
    intro:
      'Dilworth is one of Charlotte\'s oldest and most beloved residential neighborhoods — a historic streetcar suburb with tree-canopied streets, well-preserved craftsman and colonial revival homes, and a location that places residents within walking distance of South End and minutes from Uptown. The neighborhood\'s age means appliance repair professionals must be comfortable with a wide range of equipment vintages, from updated modern kitchens to older units that have served families for decades. HomeHeroes has the experience and the parts to handle Dilworth\'s full range of repair needs.',
    localContext: [
      'Dilworth was one of Charlotte\'s first streetcar suburbs, developed in the early 1900s, and today retains much of its historic residential character.',
      'The neighborhood features a mix of owner-occupied historic homes, rental conversions, condos, and newer infill townhomes.',
      'East Boulevard is the neighborhood\'s commercial spine, with restaurants, cafes, and boutique retail anchoring the walkable core.',
      'Dilworth sits directly adjacent to South End and is minutes from Uptown, making it one of the most conveniently located neighborhoods in our service area.',
      'We serve a full range of homeowners, renters, and small business operators across Dilworth.',
    ],
    customerTypes: [
      'Homeowners in historic single-family homes',
      'Renters in converted multi-family properties and rental homes',
      'Condo residents in Dilworth\'s newer and converted multi-unit buildings',
      'Restaurant and café operators along East Boulevard',
      'Property managers and landlords overseeing Dilworth\'s rental stock',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Dilworth?', a: 'Yes. Dilworth\'s central location allows us to dispatch technicians the same day, usually within hours of your call.' },
      { q: 'Do you repair older appliances in Dilworth\'s historic homes?', a: 'Yes. We\'re experienced diagnosing and repairing older appliances commonly found in Dilworth\'s historic housing stock. We\'ll tell you honestly when repair is the right call.' },
      { q: 'Do you service apartments and condos in Dilworth?', a: 'Absolutely. We service all residential property types, including condos, apartments, and converted multi-family homes throughout Dilworth.' },
      { q: 'Can you work with Dilworth property managers?', a: 'Yes. We work with landlords and property managers across Dilworth, providing prompt, documented repairs for tenant appliance issues.' },
      { q: 'What appliance brands do you repair in Dilworth?', a: 'All major brands: Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, and more.' },
    ],
  },

  {
    slug: 'university-city-appliance-repair',
    name: 'University City',
    shortDesc: 'Growing northeast Charlotte hub anchored by UNC Charlotte and major employers.',
    areaType: 'Northeast Charlotte hub',
    seoTitle: 'Appliance Repair in University City, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in University City, Charlotte NC. Same-day service for apartments, homes, and businesses near UNCC. Call (704) 512-0111.',
    h1: 'Appliance Repair in University City, Charlotte NC',
    intro:
      'University City is one of Charlotte\'s fastest-growing northeast corridors — anchored by the UNC Charlotte campus, a large concentration of apartment communities, and a growing mix of tech and corporate employers that have made the area a significant employment hub. The dense residential base — much of it student and young professional apartments, alongside established single-family neighborhoods — generates constant appliance demand. HomeHeroes provides same-day service throughout University City and the surrounding northeast Charlotte area.',
    localContext: [
      'University City surrounds the UNC Charlotte campus and extends along the W.T. Harris Boulevard corridor.',
      'The area features some of Charlotte\'s largest concentrations of apartment communities, housing thousands of students and young professionals.',
      'Technology and corporate employers in the University Research Park area bring professional residents to the surrounding neighborhoods.',
      'University City is experiencing significant ongoing commercial and residential development, with new apartment and mixed-use projects regularly coming online.',
      'We serve a broad range of property types — from large apartment complexes and student housing to established single-family neighborhoods.',
    ],
    customerTypes: [
      'Residents of apartment communities and student housing near UNCC',
      'Homeowners in established northeast Charlotte neighborhoods',
      'Property managers overseeing University City\'s large multi-family inventory',
      'Tech and corporate employees in University Research Park area housing',
      'Restaurants and businesses along the W.T. Harris Boulevard commercial corridor',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in University City?', a: 'Yes. We dispatch same-day to University City and the surrounding northeast Charlotte area.' },
      { q: 'Can you repair appliances in University City apartments?', a: 'Absolutely. We regularly service appliances in apartment communities, including high-volume calls from property managers across University City.' },
      { q: 'Do you work with property managers in University City?', a: 'Yes. We work extensively with property managers overseeing University City\'s large apartment stock, providing fast, documented repairs.' },
      { q: 'Do you repair refrigerators in University City?', a: 'Yes. Refrigerator repair is common in University City. We carry parts for all standard brands found in apartment communities and residential homes.' },
      { q: 'What appliance brands do you repair in University City?', a: 'All major brands: Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, and more.' },
    ],
  },

  {
    slug: 'steele-creek-appliance-repair',
    name: 'Steele Creek',
    shortDesc: 'Fast-growing southwest Charlotte community with new residential development.',
    areaType: 'Southwest Charlotte community',
    seoTitle: 'Appliance Repair in Steele Creek, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Steele Creek, Charlotte NC. Same-day service for new and established homes in southwest Charlotte. Call (704) 512-0111.',
    h1: 'Appliance Repair in Steele Creek, Charlotte NC',
    intro:
      'Steele Creek is one of Charlotte\'s most dynamic growth areas — a southwest Charlotte community that has transformed from a largely rural area into a thriving residential corridor in a relatively short time. New subdivisions, apartment communities, and mixed-use developments continue to reshape the landscape, bringing an influx of families and professionals who need dependable local services. HomeHeroes extends its Charlotte-area same-day service into Steele Creek, offering the same quality and professionalism that the broader metro has come to rely on.',
    localContext: [
      'Steele Creek stretches along the Steele Creek Road and South Tryon Street corridors in southwest Charlotte.',
      'The area is home to Carowinds theme park, Lake Wylie access points, and major retail destinations along the southern corridors.',
      'Rapid residential development has brought thousands of new homes and apartments to Steele Creek in recent years.',
      'The community is adjacent to Pineville and the South Carolina border, making it a natural extension of our south and southwest Charlotte coverage.',
      'We serve new-construction homes, established neighborhoods, and multi-family communities across Steele Creek.',
    ],
    customerTypes: [
      'Homeowners in new-construction subdivisions across southwest Charlotte',
      'Residents of apartment communities in the Steele Creek corridor',
      'Families who have relocated to the growing Steele Creek area',
      'Property managers overseeing new and established rental properties',
      'Businesses along the South Tryon Street and Steele Creek Road commercial corridors',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Steele Creek?', a: 'Yes. We dispatch same-day to Steele Creek and the southwest Charlotte area from our Charlotte base.' },
      { q: 'Do you service newer appliances in Steele Creek\'s new construction homes?', a: 'Yes. Steele Creek\'s newer homes often have appliances just past their manufacturer warranty. We service all current-model brands and carry common parts.' },
      { q: 'Can you service apartments and communities in Steele Creek?', a: 'Absolutely. We work with property managers and residents across Steele Creek\'s apartment communities and multi-family developments.' },
      { q: 'Do you work with property managers in Steele Creek?', a: 'Yes. We work with property managers and landlords across Steele Creek, providing fast turnaround and professional repair documentation.' },
      { q: 'What appliance brands do you repair in Steele Creek?', a: 'All major brands: Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, and more.' },
    ],
  },
];

const newAreas: Area[] = [
  {
    slug: 'southpark-appliance-repair',
    name: 'SouthPark',
    shortDesc: 'Upscale central-south Charlotte district around SouthPark Mall with custom homes and condo towers.',
    areaType: 'South Charlotte district',
    seoTitle: 'Appliance Repair in SouthPark, Charlotte NC | HomeHeroes',
    metaDescription:
      'Same-day appliance repair in SouthPark, Charlotte NC — custom homes, condos and premium brands like Sub-Zero, Wolf and Thermador. Call (704) 512-0111.',
    h1: 'Appliance Repair in SouthPark, Charlotte NC',
    intro:
      'SouthPark has grown from a shopping destination into one of Charlotte\'s densest upscale districts. Around SouthPark Mall and Phillips Place, mid-century houses are steadily being replaced by new custom homes, and residential towers and luxury apartments now line Morrison Boulevard and Fairview Road. Kitchens here are some of the best-equipped in the city, which means built-in refrigeration, pro-style ranges and European dishwashers that need technicians who know them. HomeHeroes provides same-day appliance repair throughout SouthPark, from condo towers to the side streets off Sharon Road.',
    localContext: [
      'SouthPark Mall, Phillips Place and Symphony Park anchor the district\'s shopping and outdoor events.',
      'Older 1950s and 1960s homes are frequently torn down and replaced with large custom builds.',
      'Residential towers and luxury apartments near the mall mean building access rules, loading docks and service elevators.',
      'Premium brands such as Sub-Zero, Wolf, Thermador, Miele and Bosch are standard in renovated and new SouthPark kitchens.',
      'SouthPark borders Myers Park, Cotswold and the Sharon Road corridor, all within our daily routes.',
    ],
    customerTypes: [
      'Owners of new custom homes with premium appliance packages',
      'Residents of SouthPark condo towers and luxury apartments',
      'Building managers and concierge teams coordinating unit access',
      'Remodelers and designers needing appliance service during renovations',
      'Restaurants and offices around SouthPark Mall and Phillips Place',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in SouthPark?', a: 'Yes. SouthPark is central to our daily routes, and most calls received in the morning are seen the same day.' },
      { q: 'Can you work in SouthPark condo towers?', a: 'Yes. Tell us the building and management contact when you book, and we will coordinate access, service elevator time and any paperwork the building requires.' },
      { q: 'Do you repair Sub-Zero, Wolf and Thermador in SouthPark?', a: 'Yes. Built-in refrigeration and pro-style ranges are common here, and we confirm part availability for your model before the visit whenever possible.' },
      { q: 'Do you service panel-ready and integrated appliances?', a: 'Yes. We remove and reinstall panel-ready dishwashers and integrated refrigeration carefully so custom cabinet panels are not damaged.' },
      { q: 'What does an appliance repair visit cost in SouthPark?', a: 'The diagnostic visit is $89 and is waived when you approve the repair. We quote every repair before starting work.' },
    ],
  },
  {
    slug: 'elizabeth-appliance-repair',
    name: 'Elizabeth',
    shortDesc: 'Historic streetcar neighborhood east of Uptown with bungalows, apartments and the Gold Line.',
    areaType: 'Historic Charlotte neighborhood',
    seoTitle: 'Appliance Repair in Elizabeth, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Elizabeth, Charlotte NC. Same-day service for historic homes, apartments and condos near Independence Park. Call (704) 512-0111.',
    h1: 'Appliance Repair in Elizabeth, Charlotte NC',
    intro:
      'Elizabeth is one of Charlotte\'s earliest streetcar suburbs, laid out just east of Uptown in the early 1900s. Today its tree-lined streets mix restored bungalows and foursquares with older apartment buildings and new townhomes, and the CityLYNX Gold Line runs along Elizabeth Avenue and Hawthorne Lane. Older houses mean compact kitchens, retrofitted laundry and wiring that was not built for modern appliances, so a repair here starts with checking how the appliance is installed. HomeHeroes serves Elizabeth the same day for homeowners, renters and the neighborhood\'s small businesses.',
    localContext: [
      'Independence Park, one of Charlotte\'s oldest public parks, sits at the heart of the neighborhood.',
      'Novant Health Presbyterian Medical Center and CPCC\'s Central Campus are neighbors, which brings many renters and medical staff.',
      'The CityLYNX Gold Line streetcar runs along Elizabeth Avenue and Hawthorne Lane.',
      'Housing ranges from early-1900s bungalows to mid-century apartments and new infill townhomes.',
      'Elizabeth borders Plaza Midwood, Myers Park and Uptown, all within our daily routes.',
    ],
    customerTypes: [
      'Owners of restored historic homes',
      'Renters in older apartment buildings and converted houses',
      'Medical staff and students living near Presbyterian hospital and CPCC',
      'Landlords and property managers with older rental properties',
      'Cafes and restaurants along Elizabeth Avenue and 7th Street',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Elizabeth?', a: 'Yes. Elizabeth is minutes from Uptown and on our daily routes, so same-day service is routine.' },
      { q: 'Can you repair appliances in older Elizabeth homes?', a: 'Yes. We work in compact historic kitchens and retrofitted laundry spaces, and we check the outlet, circuit and water supply as part of the diagnosis.' },
      { q: 'Do you work with landlords in Elizabeth?', a: 'Yes. We repair appliances in rental homes and apartment buildings and send the owner a clear record of the repair.' },
      { q: 'My breaker trips when the dryer runs. Is that the dryer?', a: 'Sometimes. A shorted heating element can trip a breaker, but so can an undersized or worn circuit in an older house. We test the dryer first and tell you if the problem is electrical.' },
      { q: 'What does an appliance repair visit cost in Elizabeth?', a: 'The diagnostic visit is $89 and is waived when you approve the repair.' },
    ],
  },
  {
    slug: 'cotswold-appliance-repair',
    name: 'Cotswold',
    shortDesc: 'Established east Charlotte neighborhood of mid-century ranches around Cotswold Village.',
    areaType: 'East Charlotte neighborhood',
    seoTitle: 'Appliance Repair in Cotswold, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Cotswold, Charlotte NC. Same-day service for mid-century homes and remodeled kitchens near Cotswold Village. Call (704) 512-0111.',
    h1: 'Appliance Repair in Cotswold, Charlotte NC',
    intro:
      'Cotswold is a settled east Charlotte neighborhood built largely in the 1950s and 1960s around Randolph Road and Sharon Amity Road, with Cotswold Village shopping center at its center. Its brick ranch homes have been remodeled kitchen by kitchen over the decades, so one street can have a 1990s side-by-side refrigerator next door to a brand-new induction range. HomeHeroes provides same-day appliance repair across Cotswold and neighboring Eastover, SouthPark and Oakhurst.',
    localContext: [
      'Cotswold Village shopping center at Randolph Road and Sharon Amity Road is the neighborhood\'s hub.',
      'Most homes are mid-century brick ranches, many expanded or remodeled since.',
      'Families with children and long-time residents live side by side.',
      'Laundry is often in a basement, carport room or converted garage space.',
      'Cotswold is next to SouthPark, Eastover and Oakhurst.',
    ],
    customerTypes: [
      'Owners of remodeled mid-century homes',
      'Long-time residents with older, well-kept appliances',
      'Young families buying into the neighborhood',
      'Landlords with single-family rentals',
      'Shops and restaurants around Cotswold Village',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Cotswold?', a: 'Yes. Cotswold is central to our east and south Charlotte routes, and same-day visits are routine.' },
      { q: 'Is my older refrigerator worth repairing?', a: 'Often it is. Fans, defrost parts, gaskets and water valves are affordable repairs on older units. We tell you plainly when a compressor or sealed-system failure makes replacement the better choice.' },
      { q: 'Can you service a washer and dryer in a basement?', a: 'Yes. We service laundry in basements, carports and converted garages, and we check the dryer vent route while we are there.' },
      { q: 'Do you repair induction ranges?', a: 'Yes. Induction ranges are increasingly common in remodeled Cotswold kitchens, and we diagnose power boards, coils and touch controls.' },
      { q: 'What does a repair visit cost in Cotswold?', a: 'The diagnostic visit is $89 and is waived when you approve the repair.' },
    ],
  },
  {
    slug: 'highland-creek-appliance-repair',
    name: 'Highland Creek',
    shortDesc: 'Large northeast Charlotte master-planned community with golf, pools and 1990s–2000s homes.',
    areaType: 'Northeast Charlotte community',
    seoTitle: 'Appliance Repair in Highland Creek, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Highland Creek, Charlotte NC (28269). Same-day service for refrigerators, washers, dryers and more. Call (704) 512-0111.',
    h1: 'Appliance Repair in Highland Creek, Charlotte NC',
    intro:
      'Highland Creek is one of Charlotte\'s largest master-planned communities, built out from the 1990s through the 2000s around the Highland Creek Golf Club in northeast Charlotte. Thousands of homes went up in the same years with similar builder appliances, and those appliances have now been replaced at least once or are reaching the end of their life. That makes Highland Creek a neighborhood where repair-or-replace advice matters. HomeHeroes reaches Highland Creek from University City and I-485 with same-day service.',
    localContext: [
      'Highland Creek is built around the Highland Creek Golf Club, with multiple amenity centers and pools.',
      'Most homes were built between the 1990s and the 2000s, many by the same builders.',
      'The community sits near I-485 and University City in northeast Charlotte.',
      'Many households are families with busy laundry rooms and second refrigerators in the garage.',
      'Highland Creek borders Huntersville and Concord, which we also serve.',
    ],
    customerTypes: [
      'Families in single-family homes throughout Highland Creek',
      'Owners of original-build homes with aging appliances',
      'Landlords with rental homes in the community',
      'Residents with garage refrigerators and freezers',
      'Businesses near Prosperity Village and Mallard Creek',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Highland Creek?', a: 'Yes. We serve Highland Creek from our northeast Charlotte routes, and same-day visits are available most days.' },
      { q: 'Our appliances are original to the house. Should we repair them?', a: 'It depends on the appliance and the failure. Many 15- to 20-year-old washers, dryers and ranges are worth a simple repair; older refrigerators with sealed-system failures usually are not. We quote first and tell you honestly.' },
      { q: 'Why is my garage refrigerator not keeping the freezer cold in winter?', a: 'In a cold garage the refrigerator\'s thermostat rarely calls for cooling, so the freezer warms up. It is usually a placement issue rather than a failure, and we can confirm that during the visit.' },
      { q: 'Do you work with landlords in Highland Creek?', a: 'Yes. We repair appliances in rental homes and send owners a clear repair record.' },
      { q: 'What does a repair visit cost in Highland Creek?', a: 'The diagnostic visit is $89 and is waived when you approve the repair.' },
    ],
  },
  {
    slug: 'eastover-appliance-repair',
    name: 'Eastover',
    shortDesc: 'Historic estate neighborhood next to Myers Park with large kitchens and premium appliances.',
    areaType: 'Historic Charlotte neighborhood',
    seoTitle: 'Appliance Repair in Eastover, Charlotte NC | HomeHeroes',
    metaDescription:
      'Appliance repair in Eastover, Charlotte NC — Sub-Zero, Wolf, Thermador, Viking and Miele service for estate kitchens. Same-day visits. Call (704) 512-0111.',
    h1: 'Appliance Repair in Eastover, Charlotte NC',
    intro:
      'Eastover is one of Charlotte\'s most established neighborhoods, developed from the late 1920s next to Myers Park and home to the Mint Museum Randolph. Its large lots hold estate homes whose kitchens have been rebuilt around built-in refrigeration, wine storage, pro-style ranges and multiple dishwashers. Repairs here call for model-specific knowledge and careful work around custom cabinetry. HomeHeroes provides same-day appliance repair in Eastover and confirms part availability for premium models before the visit whenever possible.',
    localContext: [
      'Eastover developed from the late 1920s and sits beside Myers Park and Cotswold.',
      'The Mint Museum Randolph, Charlotte\'s original art museum, is in the neighborhood.',
      'Large lots and estate homes often include catering kitchens, butler\'s pantries and outdoor kitchens.',
      'Sub-Zero, Wolf, Thermador, Viking and Miele are common in Eastover kitchens.',
      'Many homes have household managers or staff who coordinate service visits.',
    ],
    customerTypes: [
      'Owners of estate homes with premium kitchens',
      'Household managers and staff coordinating repairs',
      'Families in renovated historic homes',
      'Interior designers and remodelers working on Eastover kitchens',
      'Owners of outdoor kitchens and wine rooms',
    ],
    faq: [
      { q: 'Do you offer same-day appliance repair in Eastover?', a: 'Yes. Eastover is minutes from our central routes, and same-day visits are available most days.' },
      { q: 'Do you repair Sub-Zero and Wolf appliances in Eastover?', a: 'Yes. Built-in refrigeration and pro-style cooking are the most common premium repairs we do in Eastover, and we check part availability for your model before the visit whenever possible.' },
      { q: 'Can you coordinate with our household manager?', a: 'Yes. We can schedule, report findings and send estimates to whoever manages the home.' },
      { q: 'Do you service wine storage and outdoor refrigeration?', a: 'Yes. We repair wine columns, undercounter wine and beverage units and outdoor-rated refrigeration.' },
      { q: 'What does a repair visit cost in Eastover?', a: 'The diagnostic visit is $89 and is waived when you approve the repair. Premium-brand parts are quoted before any work begins.' },
    ],
  },
];

const areaProfiles: Record<string, AreaProfile> = {
  'ballantyne-appliance-repair': {
    zips: ['28277'],
    landmarks: ['Ballantyne Corporate Park', 'Ballantyne Country Club', 'Johnston Road', 'Piper Glen'],
    applianceNotes: {
      cold: 'Ballantyne\'s 1990s and 2000s homes were often built with premium refrigeration, and some of those original Sub-Zero and built-in units are now 20 years old. Whether to repair one is a real decision; newer homes have French-door models with ice and water in the door.',
      laundry: 'Upstairs laundry rooms are standard in Ballantyne two-story homes. Front-load washers with musty door seals and clogged pump filters are frequent, and a leaking supply hose here can damage the ceiling below.',
      cooking: 'Gas cooktops with separate wall ovens are common, and many kitchens have been upgraded to Wolf or Thermador. Oven igniters, convection fans and spark modules are typical repairs.',
      dish: 'Bosch and KitchenAid dishwashers are popular in Ballantyne remodels. Drain errors, leak-protection shutoffs and door latches are the usual calls.',
    },
    nearby: ['southpark-appliance-repair', 'steele-creek-appliance-repair'],
    premium: true,
    updatedAt: '2026-10-14',
  },
  'south-end-appliance-repair': {
    zips: ['28203'],
    landmarks: ['LYNX Blue Line', 'Rail Trail', 'Atherton Mill', 'South Boulevard'],
    applianceNotes: {
      cold: 'South End apartments and condos use counter-depth and apartment-size refrigerators that sit in tight cabinet openings. Poor airflow around them is a common reason they run warm.',
      laundry: 'Stacked and compact washer-dryer pairs in closets are the norm, often with long vent runs to the building exterior. Many dryer complaints here are vent restrictions.',
      cooking: 'Electric and induction ranges dominate new South End buildings. Touch controls and over-the-range microwaves are frequent repairs.',
      dish: 'Compact kitchens mean the dishwasher shares plumbing with a disposal and sink in a small space. Drain clogs and leaking door seals are common.',
    },
    nearby: ['dilworth-appliance-repair', 'uptown-charlotte-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'uptown-charlotte-appliance-repair': {
    zips: ['28202'],
    landmarks: ['Bank of America Stadium', 'Spectrum Center', 'First Ward Park', 'Romare Bearden Park'],
    applianceNotes: {
      cold: 'High-rise condos often have integrated or counter-depth refrigerators built into custom cabinetry. Repairs mean working within building rules, booking the service elevator and protecting finished floors.',
      laundry: 'Uptown units have stacked or ventless washer-dryers in closets. Ventless heat-pump and condenser dryers have their own maintenance needs, including lint traps and condenser filters that owners rarely clean.',
      cooking: 'Induction cooktops and wall ovens are common in Uptown towers where gas is limited. We diagnose induction power boards and touch controls.',
      dish: 'Panel-ready dishwashers in condo kitchens are common. We remove and reinstall them carefully so the panels and countertops are not damaged.',
    },
    nearby: ['south-end-appliance-repair', 'noda-appliance-repair', 'elizabeth-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'myers-park-appliance-repair': {
    zips: ['28207', '28209'],
    landmarks: ['Queens University of Charlotte', 'Freedom Park', 'Queens Road West', 'Selwyn Avenue'],
    applianceNotes: {
      cold: 'Renovated Myers Park kitchens often pair column or built-in refrigeration with separate wine storage. Historic homes also keep older secondary refrigerators in pantries and basements that still deserve a repair.',
      laundry: 'Laundry in Myers Park homes ranges from basement rooms in original houses to second-floor laundries added in renovations. Long vent runs through old walls need checking whenever a dryer underperforms.',
      cooking: 'Pro-style ranges from Wolf, Viking and Thermador are common. Burner ignition, oven calibration and convection fans are typical repairs.',
      dish: 'Many Myers Park kitchens have two dishwashers, often Miele or Bosch, sometimes panel-ready. Drain faults and leak-protection shutoffs are common.',
    },
    nearby: ['eastover-appliance-repair', 'dilworth-appliance-repair', 'southpark-appliance-repair'],
    premium: true,
    updatedAt: '2026-10-14',
  },
  'noda-appliance-repair': {
    zips: ['28205', '28206'],
    landmarks: ['North Davidson Street', '36th Street station', 'Charlotte Art League'],
    applianceNotes: {
      cold: 'Renovated mill houses in NoDa often have refrigerators squeezed into old kitchen footprints. Restricted airflow and older outlets are common contributing factors.',
      laundry: 'Many NoDa homes put laundry in a back porch or closet addition. Vent routes through crawlspaces and crushed foil ducts are frequent finds.',
      cooking: 'Gas has been added to many renovated NoDa kitchens, while apartments are electric. Igniters and burner switches are routine repairs.',
      dish: 'Retrofitted dishwashers in older homes sometimes have improvised drain connections, which we check when a unit will not drain.',
    },
    nearby: ['plaza-midwood-appliance-repair', 'uptown-charlotte-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'plaza-midwood-appliance-repair': {
    zips: ['28205'],
    landmarks: ['Central Avenue', 'The Plaza', 'Commonwealth Park'],
    applianceNotes: {
      cold: 'Craftsman bungalows in Plaza Midwood usually have a single full-size refrigerator in a compact kitchen. Defrost problems and noisy fans are common, and most are affordable repairs.',
      laundry: 'Laundry is often in a converted porch or hall closet. Older circuits and long or crushed dryer vents are common contributing factors.',
      cooking: 'Plaza Midwood kitchens mix older electric ranges with newly added gas lines. Oven igniters and surface element switches are routine.',
      dish: 'Dishwashers retrofitted into older cabinets can leak where they meet the floor. We check leveling and the door seal as well as the pump.',
    },
    nearby: ['noda-appliance-repair', 'elizabeth-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'dilworth-appliance-repair': {
    zips: ['28203'],
    landmarks: ['East Boulevard', 'Latta Park', 'Freedom Park'],
    applianceNotes: {
      cold: 'Historic Dilworth homes often combine a renovated kitchen with a second refrigerator in a basement or back porch. Both get the same careful diagnosis.',
      laundry: 'Basement and back-porch laundry is common in Dilworth\'s older houses. Vent runs and water supply valves are often original and worth checking.',
      cooking: 'Gas ranges are popular in renovated Dilworth kitchens. Weak igniters and burners that click without lighting are typical calls.',
      dish: 'Dishwashers installed during renovations are often Bosch or KitchenAid. Drain errors and door latch problems are the most common repairs.',
    },
    nearby: ['south-end-appliance-repair', 'myers-park-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'university-city-appliance-repair': {
    zips: ['28262', '28213'],
    landmarks: ['UNC Charlotte', 'University Research Park', 'W.T. Harris Boulevard', 'Blue Line extension'],
    applianceNotes: {
      cold: 'Apartment-grade top-freezer refrigerators fill University City rentals, and defrost failures are the most common call. Single-family homes nearby have mid-range French-door models.',
      laundry: 'Student housing laundry runs constantly. Top-load washers with lid-switch failures and dryers with worn belts and rollers are frequent.',
      cooking: 'Electric ranges and over-the-range microwaves dominate apartments, and burner switches, elements and microwave door switches are routine repairs.',
      dish: 'Rental dishwashers here are basic models that suffer from unscraped dishes; filters, drain pumps and door latches are typical.',
    },
    nearby: ['highland-creek-appliance-repair', 'noda-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'steele-creek-appliance-repair': {
    zips: ['28273', '28278'],
    landmarks: ['Charlotte Premium Outlets', 'Rivergate', 'Steele Creek Road', 'Lake Wylie'],
    applianceNotes: {
      cold: 'Steele Creek\'s newer homes have Samsung and LG French-door refrigerators, where ice maker freeze-ups and fan errors are common. Garage refrigerators are everywhere here and struggle in summer heat.',
      laundry: 'Second-floor laundry rooms in new Steele Creek homes make leaks urgent. Drain pump filters and supply hoses are the first things we check.',
      cooking: 'Builder slide-in ranges with touch controls are standard. Control boards and oven igniters are typical repairs.',
      dish: 'Builder-grade dishwashers that are just out of warranty often need pumps or latches. We tell you whether a repair is worth it for the model.',
    },
    nearby: ['ballantyne-appliance-repair', 'south-end-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'southpark-appliance-repair': {
    zips: ['28209', '28210', '28211'],
    landmarks: ['SouthPark Mall', 'Phillips Place', 'Symphony Park', 'Morrison Boulevard'],
    applianceNotes: {
      cold: 'New SouthPark custom homes often have column refrigerators, freezers and wine storage built into cabinetry. Condo towers use integrated and counter-depth units that need careful access.',
      laundry: 'Condo laundry closets with stacked units and long vent runs sit alongside full laundry rooms in new houses. Vent restrictions and drain pump faults are common.',
      cooking: 'Pro-style gas ranges and induction cooktops share the district. Spark modules, igniters and induction power boards are typical repairs.',
      dish: 'Miele, Bosch and panel-ready dishwashers are common. Leak-protection shutoffs and drain faults top the list.',
    },
    nearby: ['myers-park-appliance-repair', 'cotswold-appliance-repair', 'ballantyne-appliance-repair'],
    premium: true,
    updatedAt: '2026-10-14',
  },
  'elizabeth-appliance-repair': {
    zips: ['28204'],
    landmarks: ['Independence Park', 'Novant Health Presbyterian Medical Center', 'CityLYNX Gold Line', 'Elizabeth Avenue'],
    applianceNotes: {
      cold: 'Elizabeth\'s older kitchens and apartments use full-size and apartment-size refrigerators in tight spaces. Defrost failures and worn door gaskets are the usual repairs.',
      laundry: 'Laundry in older Elizabeth homes is often retrofitted into closets or porches, with vents through crawlspaces. Breaker trips and long dry times are common complaints.',
      cooking: 'Electric ranges are the norm in apartments, while restored homes often have gas. Surface element switches and oven igniters are frequent repairs.',
      dish: 'Older apartments may have portable or retrofitted dishwashers. Drain hoses and inlet valves are common failure points.',
    },
    nearby: ['plaza-midwood-appliance-repair', 'myers-park-appliance-repair', 'uptown-charlotte-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'cotswold-appliance-repair': {
    zips: ['28211'],
    landmarks: ['Cotswold Village', 'Randolph Road', 'Sharon Amity Road'],
    applianceNotes: {
      cold: 'Remodeled Cotswold kitchens range from 1990s side-by-sides to new French-door models. Many homes keep an older second refrigerator in the garage or basement.',
      laundry: 'Basement and carport laundry rooms are common in Cotswold ranches, often with long or aging vent ducts.',
      cooking: 'Electric smooth-tops and induction ranges are common in remodels; gas appears where lines were added. Element switches and induction boards are typical repairs.',
      dish: 'Dishwashers replaced during remodels are usually mid-range Bosch, KitchenAid or Whirlpool. Drain pumps and latches are common repairs.',
    },
    nearby: ['southpark-appliance-repair', 'eastover-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'highland-creek-appliance-repair': {
    zips: ['28269'],
    landmarks: ['Highland Creek Golf Club', 'I-485', 'Prosperity Village'],
    applianceNotes: {
      cold: 'Original-build refrigerators in Highland Creek have mostly been replaced once, often with French-door models. Garage refrigerators and freezers are common and suffer in summer heat and winter cold.',
      laundry: 'Family laundry rooms here run daily. Top-load washers with worn actuators and front-loaders with door-seal mold are frequent calls.',
      cooking: 'Electric ranges from the original builds are aging out, and replacements are often slide-in models with touch controls. Elements, igniters and control boards are typical repairs.',
      dish: 'Dishwashers from the 2000s are at the age where pumps and controls fail. We give a straight repair-or-replace answer.',
    },
    nearby: ['university-city-appliance-repair'],
    updatedAt: '2026-10-14',
  },
  'eastover-appliance-repair': {
    zips: ['28207'],
    landmarks: ['Mint Museum Randolph', 'Randolph Road', 'Providence Road'],
    applianceNotes: {
      cold: 'Eastover kitchens commonly have 42- or 48-inch built-in refrigerators, separate freezer and refrigerator columns and wine storage. Condenser cleaning, fans and sealed-system work on these units require model-specific parts.',
      laundry: 'Large homes often have more than one laundry area, sometimes with premium front-loaders from Miele or Electrolux. Drain faults and door locks are typical.',
      cooking: 'Pro-style ranges and rangetops with separate wall ovens are standard. Ignition, oven calibration and convection fan repairs are common.',
      dish: 'Many Eastover homes have two dishwashers, often Miele or Bosch, sometimes panel-ready. Drain faults and leak-protection shutoffs are the usual calls.',
    },
    nearby: ['myers-park-appliance-repair', 'cotswold-appliance-repair', 'southpark-appliance-repair'],
    premium: true,
    updatedAt: '2026-10-14',
  },
};

export type AreaWithProfile = Area & AreaProfile;

export const areas: AreaWithProfile[] = [...baseAreas, ...newAreas].map(a => ({ ...a, ...areaProfiles[a.slug] }));

export function getArea(slug: string): AreaWithProfile | undefined {
  return areas.find(a => a.slug === slug);
}
