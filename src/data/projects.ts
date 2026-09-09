// TEMPORARY DRAFT COPY — written to a house style so every project reads the same
// way; the facts (sites, dates, scope details beyond the profile captions) are
// placeholders for the client to correct. Nothing here should ship unverified.
//
// House style
//   summary   one sentence: what, for whom, where.
//   asFound   two sentences: the situation on arrival, and the constraint that shaped the job.
//   workDone  two or three sentences, active voice, past tense: what we did, in order.
//   asLeft    one or two sentences: the verified state, and the handover.
//   location  site, state — Nigeria unless stated.
//   discipline the lead discipline.
//   sector    the client's sector; the projects index filters on it.

export interface Project {
  slug: string;
  title: string;
  location: string;
  discipline: string;
  sector: string;           // one of SECTORS in site.ts; drives the projects filter
  service: string;          // related service slug
  summary: string;
  asFound: string;
  workDone: string;
  asLeft: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'cat-g3516-gas-engine-overhaul',
    sector: 'Oil and gas',
    title: 'CAT G3516 gas engine overhaul',
    location: 'Offshore platform, Niger Delta',
    discipline: 'Mechanical',
    service: 'maintenance',
    summary: 'General overhaul of a CAT G3516 gas engine driving platform power generation at an offshore location.',
    asFound: 'The engine had reached its major-overhaul interval and was showing rising exhaust temperatures and falling output on load. Work had to be completed on the platform, within a fixed shutdown window, with parts and tooling brought out by boat.',
    workDone: 'We stripped the engine on site, inspected and measured the cylinder heads, valve train, pistons and bearings against the manufacturer\'s limits, and replaced the wear items. We rebuilt the cooling and lubrication circuits, reassembled to torque specification and re-timed the engine.',
    asLeft: 'The engine was test-run through its load steps with temperatures and pressures logged at each, then handed back to the operator within the shutdown window.',
    featured: true,
  },
  {
    slug: 'cat-generator-total-overhaul',
    sector: 'Oil and gas',
    title: 'Total overhaul of a CAT generator set',
    location: 'Production facility, Warri, Delta State',
    discipline: 'Mechanical and electrical',
    service: 'maintenance',
    summary: 'Complete mechanical and electrical overhaul of a CAT generator set serving a production facility.',
    asFound: 'The set was the facility\'s primary supply and had accumulated hours well past its overhaul point, with the alternator windings and the engine both due for attention. The client needed the set back on line without a second outage.',
    workDone: 'We overhauled the engine and the alternator in one campaign: engine strip, inspection and rebuild; alternator cleaning, insulation testing and bearing replacement; and a full check of the control panel, protection settings and changeover.',
    asLeft: 'The set was load-tested, its protection settings recorded, and returned to service as the primary supply.',
  },
  {
    slug: 'instrument-tubing-installation',
    sector: 'Oil and gas',
    title: 'Instrument tubing installation',
    location: 'Oil field, Delta State',
    discipline: 'Instrumentation',
    service: 'instrumentation-calibration',
    summary: 'Completion of instrument tubing runs, supports and terminations for field instrumentation at an oil field.',
    asFound: 'Instrument tubing to a number of transmitters and gauges was incomplete, leaving loops that could not be commissioned. Routing had to work around existing pipework and keep to the client\'s installation standard.',
    workDone: 'We surveyed the outstanding runs, then installed stainless tubing, supports and fittings to each instrument, pressure-tested every run and terminated the loops ready for testing.',
    asLeft: 'All runs were pressure-tested and tagged, and the loops were handed over ready for loop checks and commissioning.',
    featured: true,
  },
  {
    slug: 'electrical-motor-installation',
    sector: 'Manufacturing',
    title: 'Electrical motor installation and test run',
    location: 'Process plant, Port Harcourt, Rivers State',
    discipline: 'Electrical',
    service: 'electrical',
    summary: 'Installation, protection and test running of a replacement electrical motor on a process drive.',
    asFound: 'A drive motor had failed and its replacement had to be installed, protected and proven before the process could restart. The existing starter and cabling needed checking against the new motor\'s ratings.',
    workDone: 'We installed and aligned the motor, checked the starter, cabling and earthing against the motor\'s ratings, set the overload and protection devices, and carried out insulation and rotation checks before energising.',
    asLeft: 'The motor was run under supervision through a full test cycle with currents and temperatures recorded, then handed over in service.',
  },
  {
    slug: 'offshore-flow-line-maintenance',
    sector: 'Oil and gas',
    title: 'Offshore platform flow line maintenance',
    location: 'Offshore platform, Niger Delta',
    discipline: 'Mechanical',
    service: 'hydrotest-pressure-testing',
    summary: 'Scheduled maintenance of production flow lines on an offshore platform.',
    asFound: 'The platform\'s flow lines were due for scheduled maintenance, including inspection of joints, supports and valves. Work had to fit the platform\'s permit system and keep production interruptions to a minimum.',
    workDone: 'We inspected the lines and supports, replaced worn gaskets, bolting and supports, serviced the line valves and pressure-tested each section before returning it to service.',
    asLeft: 'All sections were pressure-tested and recorded, and the lines were returned to service with the test records handed to the platform.',
  },
  {
    slug: '100kw-solar-installation-lekki',
    sector: 'Commercial building',
    title: '100 kW solar installation, Lekki',
    location: 'Commercial building, Lekki, Lagos',
    discipline: 'Power and energy',
    service: 'power-energy',
    summary: 'Design and installation of a 100 kW solar photovoltaic system on a commercial building in Lekki, Lagos.',
    asFound: 'The building relied on grid supply backed by diesel generation, with high running costs during daytime hours. The roof had the area for a substantial array, subject to structural checks and a clean tie-in to the existing distribution.',
    workDone: 'We designed the array and its inverter arrangement, installed the mounting system and panels, ran the DC and AC cabling with the required protection, and integrated the system with the building\'s distribution and changeover.',
    asLeft: 'The system was commissioned, its output verified against design, and handed over with monitoring in place.',
    featured: true,
  },
  {
    slug: 'process-power-panel-maintenance',
    sector: 'Oil and gas',
    title: 'Preventive maintenance on a process power panel',
    location: 'Processing plant, Onne, Rivers State',
    discipline: 'Electrical',
    service: 'maintenance',
    summary: 'Scheduled preventive maintenance of a process power panel by our technician on site.',
    asFound: 'The panel was due for its scheduled inspection, with no reported faults but a history of high ambient temperatures in the switchroom. The plant could release the panel only for a short planned window.',
    workDone: 'We isolated the panel, cleaned and inspected busbars, terminations and breakers, checked torque on connections, tested protection devices and recorded thermographic readings before and after.',
    asLeft: 'The panel was re-energised and returned to normal operation, with the inspection record and readings handed to the plant.',
  },
  {
    slug: 'industrial-domestic-electrical-installations',
    sector: 'Residential',
    title: 'Industrial and domestic electrical installations',
    location: 'Various sites, Delta and Lagos States',
    discipline: 'Electrical',
    service: 'electrical',
    summary: 'New electrical installations ranging from HV distribution and motor control to single-phase domestic wiring.',
    asFound: 'Sites ranged from an industrial facility needing HV distribution and three-phase motor control to residential buildings needing new wiring and distribution boards. Each was designed to the applicable standard and the client\'s specification.',
    workDone: 'We designed and installed HV power distribution and integration, three-phase LV control for motor starters, and single-phase domestic wiring with distribution boards, earthing and protection.',
    asLeft: 'Each installation was tested, commissioned and handed over with its test results.',
  },
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
