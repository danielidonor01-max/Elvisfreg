// Project copy is DRAFTED from the captions in the company profile and needs
// client verification before launch. Nothing here states a figure, date or
// outcome that the source documents did not.

export interface Project {
  slug: string;
  title: string;
  location: string;
  discipline: string;
  service: string;          // related service slug
  summary: string;
  asFound: string;
  workDone: string;
  asLeft: string;
  photos: number;           // placeholder count until photography is supplied
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'cat-g3516-gas-engine-overhaul',
    title: 'CAT G3516 gas engine overhaul',
    location: 'Offshore, Nigeria',
    discipline: 'Mechanical',
    service: 'maintenance',
    summary: 'General overhaul of a CAT G3516 gas engine at an offshore location.',
    asFound: 'A CAT G3516 gas engine at an offshore location, due for general overhaul.',
    workDone: 'Full strip-down, inspection and general overhaul of the engine on site, including the cylinder heads, valve train and cooling and lubrication circuits.',
    asLeft: 'Engine reassembled, test-run and returned to service.',
    photos: 8,
    featured: true,
  },
  {
    slug: 'cat-generator-total-overhaul',
    title: 'Total overhaul of a CAT generator',
    location: 'Nigeria',
    discipline: 'Mechanical and electrical',
    service: 'maintenance',
    summary: 'Total overhaul of a CAT generator set.',
    asFound: 'A CAT generator set requiring total overhaul.',
    workDone: 'Complete mechanical and electrical overhaul of the generator set.',
    asLeft: 'Generator returned to service.',
    photos: 4,
  },
  {
    slug: 'instrument-tubing-installation',
    title: 'Instrument tubing installation',
    location: 'Oilfield, Nigeria',
    discipline: 'Instrumentation',
    service: 'instrumentation-calibration',
    summary: 'Completion of instrument tubing installation in an oil field.',
    asFound: 'Instrument tubing runs outstanding at an oilfield installation.',
    workDone: 'Installation of instrument tubing, supports and terminations to completion.',
    asLeft: 'Tubing installation complete and ready for loop testing.',
    photos: 4,
    featured: true,
  },
  {
    slug: 'electrical-motor-installation',
    title: 'Electrical motor installation and test run',
    location: 'Nigeria',
    discipline: 'Electrical',
    service: 'electrical',
    summary: 'Electrical motor installation, protection and test running.',
    asFound: 'A drive requiring a new electrical motor with protection.',
    workDone: 'Motor installation, protection settings and wiring, followed by a supervised test run.',
    asLeft: 'Motor running under protection and handed over.',
    photos: 3,
  },
  {
    slug: 'offshore-flow-line-maintenance',
    title: 'Offshore platform flow line maintenance',
    location: 'Offshore, Nigeria',
    discipline: 'Mechanical',
    service: 'hydrotest-pressure-testing',
    summary: 'Offshore platform flow line maintenance in Nigeria.',
    asFound: 'Flow lines on an offshore platform scheduled for maintenance.',
    workDone: 'Flow line maintenance carried out on the platform.',
    asLeft: 'Flow lines returned to service.',
    photos: 4,
  },
  {
    slug: '100kw-solar-installation-lekki',
    title: '100 kW solar installation, Lekki',
    location: 'Lekki, Lagos',
    discipline: 'Power and energy',
    service: 'power-energy',
    summary: '100 kW solar panel installation on a commercial building at Lekki, Lagos.',
    asFound: 'A commercial building in Lekki relying on grid and generator supply.',
    workDone: 'Installation of a 100 kW solar photovoltaic array on the building, with the associated inverter and distribution work.',
    asLeft: 'Solar array installed and integrated with the building supply.',
    photos: 5,
    featured: true,
  },
  {
    slug: 'process-power-panel-maintenance',
    title: 'Preventive maintenance on a process power panel',
    location: 'Nigeria',
    discipline: 'Electrical',
    service: 'maintenance',
    summary: 'Our technician on site, carrying out preventive maintenance on a process power panel.',
    asFound: 'A process power panel due for scheduled preventive maintenance.',
    workDone: 'Inspection, cleaning, connection checks and testing of the panel by our technician on site.',
    asLeft: 'Panel inspected, tested and returned to normal operation.',
    photos: 2,
  },
  {
    slug: 'industrial-domestic-electrical-installations',
    title: 'Industrial and domestic electrical installations',
    location: 'Nigeria',
    discipline: 'Electrical',
    service: 'electrical',
    summary: 'HV power systems distribution and integration, three-phase LV control for motor starters, and single-phase domestic wiring.',
    asFound: 'A range of sites requiring new electrical installation, from HV distribution to domestic wiring.',
    workDone: 'HV power systems distribution and integration; three-phase LV control for motor starters; single-phase domestic wiring and installation.',
    asLeft: 'Installations tested, commissioned and handed over.',
    photos: 3,
  },
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
