export const phone     = '(704) 512-0111';
export const phoneHref = 'tel:+17045120111';
export const year      = new Date().getFullYear();

export interface Service { title: string; desc: string; from: string; photo: string; pos: string; }
export const services: Service[] = [
  { title: 'Refrigerator Repair',   from: 'From $89', photo: '/images/hero/hero-technician.jpg',            pos: '18% 45%', desc: 'Compressor failure, ice maker, water dispenser, cooling issues — OEM parts for every major brand, fixed on the first visit.'     },
  { title: 'Washer & Dryer Repair', from: 'From $79', photo: '/images/services/washer-dryer-repair.jpg', pos: '8% 50%',  desc: "Won't drain, won't spin, won't heat. Same-day laundry room rescue anywhere in the Charlotte metro."                            },
  { title: 'Dishwasher Repair',     from: 'From $79', photo: '/images/services/dishwasher-repair.jpg', pos: '50% 72%', desc: "Leaking, leaving dishes dirty, or won't start. Fast same-day diagnosis with a repair guaranteed to last."                      },
  { title: 'Oven & Range Repair',   from: 'From $89', photo: '/images/services/oven-range-repair.jpg',        pos: '50% 60%', desc: "Burners, igniters, temperature sensors, control boards. Gas or electric — if it cooks, we fix it."                              },
  { title: 'Microwave Repair',      from: 'From $69', photo: '/images/services/microwave-repair.jpg',  pos: '50% 28%', desc: 'Not heating, turntable stuck, or dead display. Built-in or countertop. Most jobs done in under 60 minutes.'                     },
  { title: 'Emergency Service',     from: 'Priority', photo: '/images/services/emergency-repair-tech.jpg',     pos: '50% 18%', desc: "Appliance emergency? Priority dispatch across the Charlotte metro. Day or night, weekday or weekend — we'll be there."          },
];

export interface Review { name: string; location: string; text: string; initial: string; }
export const reviews: Review[] = [
  { name: 'Marcus T.',        location: 'Ballantyne',   initial: 'M', text: 'Called at 8am, tech was at my door by 11. Fixed my refrigerator in under an hour — part was already on the truck. Fair price, zero upselling. These guys are the real deal.'            },
  { name: 'Priya R.',         location: 'South End',    initial: 'P', text: "Dishwasher was flooding the kitchen. Same-day service, tech found the issue in minutes and had the part. Professional, clean, done. I've already referred them to three neighbors."        },
  { name: 'James & Linda W.', location: 'Huntersville', initial: 'J', text: "Three repairs over two years — washer, dryer, oven. Every time: on time, knowledgeable, honest about what actually needed to be done. They've earned our loyalty for life."              },
  { name: 'Deja F.',          location: 'NoDa',         initial: 'D', text: 'Upfront quote before they touched anything. Final bill matched exactly. Tech cleaned up after himself and explained everything he fixed. This is how every service company should operate.' },
];

export const areas = [
  'Charlotte','Ballantyne','South End','NoDa','Plaza Midwood','Dilworth',
  'Myers Park','Huntersville','Cornelius','Davidson','Mooresville','Matthews',
  'Mint Hill','Pineville','Concord','Kannapolis','Belmont','Gastonia',
];
