// The five petals of the Precision Spectrum Arc, left to right, as the brand
// guide defines them. Each stage groups the service pages that belong to it —
// this is the site's services navigation.

export type StageId = '01' | '02' | '03' | '04' | '05';

export interface Stage {
  id: StageId;
  slug: string;
  name: string;
  short: string;
  body: string;
  services: string[]; // service slugs
}

export const STAGES: Stage[] = [
  {
    id: '01',
    slug: 'design',
    name: 'Design and systems architecture',
    short: 'Design',
    body: 'Front-end engineering, load and fault calculations, single-line diagrams, CAD schematics and equipment selection. The drawings that everything downstream is built from.',
    services: ['control-panels', 'power-energy'],
  },
  {
    id: '02',
    slug: 'installation',
    name: 'Installation and integration',
    short: 'Installation',
    body: 'Switchgear, LV distribution, cabling and termination, cable management, earthing and bonding, motor control centres and panel fabrication, from residential wiring to industrial plant.',
    services: ['electrical', 'control-panels', 'power-energy'],
  },
  {
    id: '03',
    slug: 'automation',
    name: 'Intelligent automation and control',
    short: 'Automation',
    body: 'PLC selection and programming, HMI development, variable frequency drives and SCADA integration. Moving plants from manual control to reliable, documented automated control.',
    services: ['automation-control'],
  },
  {
    id: '04',
    slug: 'instrumentation',
    name: 'Instrumentation and commissioning',
    short: 'Instrumentation',
    body: 'Instrument calibration with as-found and as-left records, loop testing, hydrotest and pressure testing, and the quality controls that make the results defensible.',
    services: ['instrumentation-calibration', 'hydrotest-pressure-testing'],
  },
  {
    id: '05',
    slug: 'maintenance',
    name: 'Lifecycle optimisation and maintenance',
    short: 'Maintenance',
    body: 'Preventive, corrective and predictive maintenance, root-cause fault finding and upgrades that extend the life of electrical and control systems already in service.',
    services: ['maintenance'],
  },
];

export const stageById = (id: StageId) => STAGES.find((s) => s.id === id)!;
