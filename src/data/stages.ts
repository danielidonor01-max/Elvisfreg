// The five petals of the Precision Spectrum Arc, left to right, as the brand
// guide defines them. Each stage groups the service pages that belong to it.
//
// headline     campaign line from the brand's segment copy
// body         the method, in engineering terms — standards named here must be
//              confirmed by Elvisfreg's engineers before launch
// deliverables what the client receives; drives the ledger on the home page
// cta          campaign call-to-action line

export type StageId = '01' | '02' | '03' | '04' | '05';

export interface Stage {
  id: StageId;
  slug: string;
  name: string;
  short: string;
  headline: string;
  body: string;
  deliverables: string[];
  cta: string;
  services: string[]; // service slugs
}

export const STAGES: Stage[] = [
  {
    id: '01',
    slug: 'design',
    name: 'Design and systems architecture',
    short: 'Design',
    headline: 'Calculated before it\'s connected.',
    body: 'Every installation starts as a set of calculations. We size supplies and protection from load studies and fault-level analysis, produce single-line diagrams, cable schedules and panel layouts, and select equipment against the duty and the environment — designed to IEC 60364 for LV installations and IEC 61439 for assemblies. The drawings are the contract for everything that follows.',
    deliverables: [
      'Load study and fault-level analysis',
      'Single-line diagram',
      'Cable schedule',
      'Panel layout and equipment schedule',
      'Design compliance statement',
    ],
    cta: 'Request a system design consultation',
    services: ['control-panels', 'power-energy'],
  },
  {
    id: '02',
    slug: 'installation',
    name: 'Installation and integration',
    short: 'Installation',
    headline: 'Built for heavy loads. Wired for safety.',
    body: 'Switchgear, motor control centres, LV distribution and cabling installed to the drawings, then proven before energisation: insulation resistance, continuity, earth-fault loop impedance and polarity, each recorded on a test certificate. Generator and changeover integration is commissioned under load, not assumed.',
    deliverables: [
      'Installation test certificates',
      'As-built drawings',
      'Cable termination schedule',
      'Generator and changeover commissioning record',
    ],
    cta: 'Schedule a switchgear inspection',
    services: ['electrical', 'control-panels', 'power-energy'],
  },
  {
    id: '03',
    slug: 'automation',
    name: 'Intelligent automation and control',
    short: 'Automation',
    headline: 'Intelligence at the point of control.',
    body: 'We move plants from manual and relay logic to PLC-based control with operator interfaces: I/O schedules, control narratives and cause-and-effect matrices before any code; structured programs with alarm management and documented set-points after it. Drives are commissioned for the motor and the process, with ramp, torque and protection parameters recorded. Handover includes backups, as-built drawings and the FAT and SAT record.',
    deliverables: [
      'I/O schedule',
      'Control narrative',
      'Cause-and-effect matrix',
      'PLC program and HMI backups',
      'FAT and SAT record',
    ],
    cta: 'Automate your industrial processes',
    services: ['automation-control'],
  },
  {
    id: '04',
    slug: 'instrumentation',
    name: 'Instrumentation and commissioning',
    short: 'Instrumentation',
    headline: 'Every sensor verified. Every loop confirmed.',
    body: 'Instruments are calibrated against reference standards across the span — 0, 25, 50, 75 and 100 percent — with as-found and as-left readings, expanded uncertainty and a certificate for each tag. Loops are checked end to end, and tanks, lines and valves are hydrotested with recorded holds. Nothing is energised until every parameter is verified.',
    deliverables: [
      'Calibration certificate per tag, as-found and as-left',
      'Loop check sheets',
      'Hydrotest and pressure test record',
      'Commissioning sign-off',
    ],
    cta: 'Book field instrument calibration',
    services: ['instrumentation-calibration', 'hydrotest-pressure-testing'],
  },
  {
    id: '05',
    slug: 'maintenance',
    name: 'Lifecycle optimisation and maintenance',
    short: 'Maintenance',
    headline: 'Root causes, not symptoms.',
    body: 'Preventive maintenance on a schedule, corrective work on demand, and predictive checks — thermography, insulation trending, vibration — that find faults before they trip. Fault-finding follows a documented procedure to the root cause, and ageing control panels are retrofitted without a plant-wide overhaul. Every visit leaves a report the next engineer can act on.',
    deliverables: [
      'Maintenance report per visit',
      'Thermography survey',
      'Fault report with root cause',
      'Retrofit and upgrade proposal',
    ],
    cta: 'Enrol in a predictive maintenance contract',
    services: ['maintenance'],
  },
];

export const stageById = (id: StageId) => STAGES.find((s) => s.id === id)!;
export const DELIVERABLE_COUNT = STAGES.reduce((n, s) => n + s.deliverables.length, 0);
