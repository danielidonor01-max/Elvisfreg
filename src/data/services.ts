import type { StageId } from './stages';

export interface ServiceSection {
  heading: string;
  intro?: string;
  items: string[];
}

export type FigureKind =
  | 'test-sequence' | 'control-loop' | 'panel-anatomy' | 'changeover'
  | 'calibration-curve' | 'hold-chart' | 'trend-chart';

export interface Service {
  slug: string;
  title: string;
  short: string;            // used in nav and selects
  stages: StageId[];
  summary: string;          // 2–3 plain sentences, shown under the H1
  sections: ServiceSection[];
  sequence?: { heading: string; steps: { name: string; body: string }[]; note?: string };
  related: string[];
  seo: { title: string; description: string };
  cta: string;
  figure: FigureKind;       // the interactive drawing on the page
  story: { heading: string; paragraphs: string[] }; // DRAFT — engineers to confirm
}

export const SERVICES: Service[] = [
  {
    slug: 'electrical',
    title: 'Electrical services',
    short: 'Electrical',
    stages: ['02'],
    summary:
      'Design, installation, testing and maintenance of electrical systems for residential, commercial and industrial sites. From a single-phase domestic supply to LV distribution and motor control across a production facility.',
    sections: [
      {
        heading: 'Domestic',
        intro: 'Residential buildings, estates, apartments and private properties.',
        items: [
          'New electrical installations and building wiring',
          'Distribution board installation and modification',
          'Lighting and socket-outlet installations',
          'Changeover switch installation',
          'Generator and inverter integration',
          'Solar power systems and battery energy storage',
          'Earthing, bonding, surge and lightning protection',
          'Fault diagnosis, repairs and maintenance',
          'Energy-efficiency improvements and smart-home wiring',
          'Testing and commissioning',
        ],
      },
      {
        heading: 'Commercial',
        intro: 'Offices, hotels, retail, schools, hospitals, warehouses and other commercial facilities.',
        items: [
          'Electrical design and installation',
          'LV distribution, main and sub-distribution boards',
          'Cable installation, termination, trays and cable management',
          'Lighting and emergency lighting systems',
          'Generator integration, automatic and manual changeover',
          'UPS, inverter and battery systems',
          'Power factor correction',
          'Earthing and surge protection',
          'Testing, commissioning and preventive maintenance',
        ],
      },
      {
        heading: 'Industrial',
        intro: 'Factories, processing plants, workshops, power facilities and other industrial environments.',
        items: [
          'Industrial electrical installations and LV power distribution',
          'Motor control systems and motor control centres',
          'Control panels and electrical switchboards',
          'MCCB, MCB, ACB and protection systems',
          'Motor starters: direct-on-line, star-delta, soft starters and VFDs',
          'Generator electrical systems and automatic transfer systems',
          'Industrial cable installation, termination, tray and ladder systems',
          'Earthing and bonding, industrial lighting',
          'Testing, commissioning, maintenance and fault finding',
        ],
      },
    ],
    related: ['power-energy', 'control-panels', 'maintenance'],
    seo: {
      title: 'Electrical installation company in Nigeria',
      description:
        'Domestic, commercial and industrial electrical installation, LV distribution, earthing and testing across Nigeria. Warri and Lagos offices.',
    },
    cta: 'Build with certified electrical engineers',
    figure: 'test-sequence',
    story: {
      heading: 'How an installation runs',
      paragraphs: [
        'It starts with a site survey and a load list. From those we size the supply, the protection and the cables, draw the single-line diagram and the distribution schedule, and agree the drawings with you before anything is ordered. Where the site already has drawings we work to them; where it does not, we produce them.',
        'Installation follows the drawings, and the drawings are updated as built. Before anything is energised the installation is tested in a fixed sequence, each result recorded on a certificate you keep. Generators and changeovers are commissioned under load, and the people who will run the system are shown how it behaves before we leave.',
      ],
    },
  },
  {
    slug: 'automation-control',
    title: 'Industrial automation and control',
    short: 'Automation and control',
    stages: ['03'],
    summary:
      'We help plants move from manual control to reliable, documented automated control. PLC systems, operator interfaces and variable frequency drives, selected, programmed, installed and commissioned as one integrated system.',
    sections: [
      {
        heading: 'PLC systems',
        items: [
          'PLC selection and system architecture',
          'PLC programming and digital and analogue I/O configuration',
          'PLC panel construction',
          'Replacement and modernisation of existing PLCs',
          'Troubleshooting, program modification and optimisation',
          'Commissioning, fault diagnosis and system documentation',
        ],
      },
      {
        heading: 'HMI systems',
        items: [
          'HMI programming and operator interface development',
          'Alarm management and fault and event indication',
          'Process visualisation and real-time monitoring',
          'Data display and set-point control',
          'HMI commissioning',
        ],
      },
      {
        heading: 'Variable frequency drives',
        items: [
          'VFD selection and installation',
          'Parameter configuration and motor commissioning',
          'Speed and process control',
          'Fault diagnosis and VFD replacement',
          'Integration with PLC and HMI systems',
        ],
      },
    ],
    related: ['control-panels', 'maintenance', 'electrical'],
    seo: {
      title: 'PLC programming and industrial automation in Nigeria',
      description:
        'PLC programming, HMI development, VFD installation and SCADA integration for industrial plants in Nigeria. Selection through commissioning and documentation.',
    },
    cta: 'Automate your industrial processes',
    figure: 'control-loop',
    story: {
      heading: 'From narrative to running plant',
      paragraphs: [
        'Good automation is written down before it is programmed. We start with the I/O schedule, the control narrative and the cause-and-effect matrix, agreed with your operators, so the program is built to a description everyone has read. Hardware is selected against the process, the platforms already on site and the availability of local support.',
        'Programs are structured, alarms are managed rather than merely raised, and set-points are documented. The system is tested in the workshop before it goes to site, then commissioned against the narrative with your operators present. Handover includes backups, as-built drawings and the FAT and SAT record, so the plant can be maintained by whoever comes next.',
      ],
    },
  },
  {
    slug: 'control-panels',
    title: 'Control panel design and fabrication',
    short: 'Control panels',
    stages: ['01', '02'],
    summary:
      'We design and build electrical and automation control panels to the operational requirements of each client, with cable management, ventilation and protection engineered in rather than added later.',
    sections: [
      {
        heading: 'Panels we build',
        items: [
          'Motor control panels and motor control centres',
          'PLC control panels',
          'Automatic and process control panels',
          'Pump control panels',
          'Generator control panels',
          'VFD panels',
          'Changeover panels',
          'Distribution boards',
          'Custom industrial control systems',
        ],
      },
      {
        heading: 'Engineered in',
        items: ['Cable management systems', 'Ventilation and thermal management', 'Protection coordination'],
      },
    ],
    related: ['automation-control', 'electrical', 'power-energy'],
    seo: {
      title: 'Control panel fabrication in Nigeria',
      description:
        'Design and fabrication of motor control, PLC, MCC, generator, pump, VFD and changeover panels for industrial and commercial sites in Nigeria.',
    },
    cta: 'Upgrade your power distribution panels',
    figure: 'panel-anatomy',
    story: {
      heading: 'Engineered in, not added later',
      paragraphs: [
        'A panel is designed from its schedule outward. Protection is graded and rated against the calculated fault level; the heat load of what goes inside sets the ventilation; terminal rails and trunking are sized with room to hand so every core can be traced from drawing to terminal. Labelling, interlocks and earthing are drawn before the enclosure is ordered.',
        'Panels are built and inspected in the workshop and tested before dispatch, so time on site is spent on termination and commissioning. Each leaves with its own drawing set, its test record and a parts list, and we keep a copy for the day a modification is needed.',
      ],
    },
  },
  {
    slug: 'power-energy',
    title: 'Power and energy systems',
    short: 'Power and energy',
    stages: ['01', '02'],
    summary:
      'Conventional and renewable energy systems, designed and installed to work together: generators, solar photovoltaic, battery storage, inverters and UPS, with the changeover and monitoring that keeps supply continuous. Solar comes as single-phase systems for homes and small businesses and three-phase systems for commercial and industrial sites, sized to the load and the budget, with high-specification systems for those who want them.',
    sections: [
      {
        heading: 'Solar, sized to the site and the budget',
        intro: 'Single-phase for homes and small businesses, three-phase for commercial and industrial sites, each designed from the load and the hours of autonomy you want.',
        items: [
          'Single-phase solar systems with hybrid inverters and battery storage',
          'Three-phase solar systems for commercial and industrial loads',
          'Grid-tied, off-grid and hybrid arrangements with generator backup',
          'Lithium and lead-acid battery banks sized to the autonomy required',
          'Systems specified to a budget, with the path to expand designed in',
          'High-specification systems for premium homes and facilities: whole-property backup, monitoring and remote diagnostics',
        ],
      },
      {
        heading: 'Systems',
        items: [
          'Diesel generator systems and automatic transfer systems',
          'Hybrid energy systems and generator/solar hybrids',
          'Battery energy storage systems',
          'UPS and inverter systems',
          'Generator and inverter integration',
          'Load management and energy monitoring',
          'Power distribution and electrical protection',
        ],
      },
    ],
    related: ['electrical', 'control-panels', 'maintenance'],
    seo: {
      title: 'Solar, generator and UPS installation in Lagos and Nigeria',
      description:
        'Solar PV, diesel generator, hybrid, battery storage and UPS systems designed and installed for commercial, industrial and residential sites in Nigeria.',
    },
    cta: "Audit your plant's power architecture",
    figure: 'changeover',
    story: {
      heading: 'Continuity is designed, not assumed',
      paragraphs: [
        'We begin with a load and autonomy study: what has to stay on, for how long, and what can wait. Grid, generator, solar and battery are then sized together rather than bolted on one at a time, with the changeover logic and the protection between them drawn on one single-line diagram. For solar that means a single-phase or three-phase system matched to the site, specified to the budget in hand or, where a client wants it, to the highest specification available.',
        'Transfer systems are commissioned under real load, with the delays and interlocks set and recorded. Monitoring shows you where the energy goes, and the same engineers who installed the system maintain it, so the record of what was set and why stays with the plant.',
      ],
    },
  },
  {
    slug: 'instrumentation-calibration',
    title: 'Instrumentation and calibration',
    short: 'Instrumentation and calibration',
    stages: ['04'],
    summary:
      'Calibration of pneumatic, hydraulic, electronic, survey, civil and weighing instruments, with every result recorded as found and as left. Procedures follow defined multi-point methods and are benchmarked against international laboratories.',
    sections: [
      {
        heading: 'Pneumatic and hydraulic',
        items: [
          'Low and high pressure hydraulic and pneumatic pumps',
          'Pressure gauges, pressure and temperature transmitters',
          'Dead weight testers',
          'Temperature and pressure recorders',
          'Lamp and clip-on meters',
        ],
      },
      {
        heading: 'Electronic instruments',
        items: [
          'Gas alert monitors and gas analysers',
          'Multimeters, insulation and continuity testers',
          'Digital, analogue and liquid-in-glass thermometers',
          'Holiday detectors, pin-hole and thickness gauges',
          'Dew point gauges, light meters, sound analysers, flow meters',
        ],
      },
      {
        heading: 'Survey, civil and weighing',
        items: [
          'Echo sounders, level instruments and total stations',
          'Batching plants, drying ovens and laboratory balances',
          'Compressive test machines and CBR machines',
          'Cranes, weighbridges and heavy weight devices',
          'All industrial and domestic electrical measuring equipment',
        ],
      },
    ],
    sequence: {
      heading: 'How a calibration is run',
      steps: [
        { name: 'As-found reading', body: 'The instrument\'s state is recorded before any adjustment, so previous work with the device can be evaluated.' },
        { name: 'Adjustment', body: 'Multi-point testing at 0, 25, 50, 75 and 100 percent of full-scale span, following the defined procedure.' },
        { name: 'As-left reading', body: 'Final verified measurements are recorded after adjustment, maintenance or repair.' },
      ],
      note: 'Expanded measurement uncertainty is quantified from reference standard uncertainty, environmental drift and instrument resolution. Procedures are validated through proficiency testing and inter-laboratory comparison.',
    },
    related: ['hydrotest-pressure-testing', 'maintenance', 'automation-control'],
    seo: {
      title: 'Instrument calibration services in Nigeria',
      description:
        'Calibration of pressure, temperature, electronic, survey, civil and weighing instruments with as-found and as-left records. Warri and Lagos.',
    },
    cta: 'Book field instrument calibration',
    figure: 'calibration-curve',
    story: {
      heading: 'A record for every tag',
      paragraphs: [
        'Every calibration starts with the as-found reading, taken before anything is adjusted, so you can judge what the instrument has been reporting since the last visit. It is then checked at five points across its span against a reference standard with a known uncertainty, adjusted where it is out, and read again as left.',
        'The certificate carries both sets of readings, the reference used, the expanded uncertainty and the result against your tolerance, one per tag. Intervals are recorded and the next due date scheduled, and loops are checked end to end after the instruments on them are done.',
      ],
    },
  },
  {
    slug: 'hydrotest-pressure-testing',
    title: 'Hydrotest and pressure testing',
    short: 'Hydrotest and pressure testing',
    stages: ['04'],
    summary:
      'Pressure and integrity testing of storage tanks, pipelines, flow lines and valves, with pipeline cleaning and flushing where it is needed first.',
    sections: [
      {
        heading: 'Scope',
        items: [
          'Surface and underground oil and gas storage tanks',
          'Leak detection and integrity assurance',
          'Cleaning and flushing of pipelines and flow lines',
          'Hydro-testing and pressure safety testing of valves from 4 to 12 inches',
          'Ball valves, relief valves and flow meters',
        ],
      },
    ],
    related: ['instrumentation-calibration', 'maintenance'],
    seo: {
      title: 'Hydrotest and pressure testing services in Nigeria',
      description:
        'Hydrotest, pressure safety testing and integrity assurance for tanks, pipelines, flow lines and valves from 4 to 12 inches, across Nigeria.',
    },
    cta: 'Book a pressure test',
    figure: 'hold-chart',
    story: {
      heading: 'Held, watched, recorded',
      paragraphs: [
        'Lines and vessels are cleaned and flushed first where they need it, then filled and vented so no air is trapped. Pressure is raised in steps with a check at each, on gauges that have their own calibration certificates, to the test pressure set by the code the item is built to.',
        'The hold is watched for the full period, with pressure and temperature logged and joints inspected for leaks. Release is controlled, and the record, gauge certificates and any findings are handed over with the test report. Valves from 4 to 12 inches are tested the same way.',
      ],
    },
  },
  {
    slug: 'maintenance',
    title: 'Preventive maintenance and troubleshooting',
    short: 'Maintenance and troubleshooting',
    stages: ['05'],
    summary:
      'Preventive, corrective and predictive maintenance for electrical and industrial control systems. Our engineers use systematic fault-finding procedures to identify the root cause of failures rather than treating symptoms.',
    sections: [
      {
        heading: 'Faults we diagnose and resolve',
        items: [
          'Electrical, motor and control-panel faults',
          'PLC, HMI and VFD faults',
          'Sensor and communication faults',
          'Generator electrical and inverter faults',
          'Battery and inverter communication problems',
          'Protection-device trips',
          'Power-quality problems',
          'Control-system failures',
        ],
      },
    ],
    related: ['electrical', 'automation-control', 'instrumentation-calibration'],
    seo: {
      title: 'Industrial electrical maintenance and troubleshooting in Nigeria',
      description:
        'Preventive, corrective and predictive maintenance for electrical, PLC, HMI, VFD and generator systems. Root-cause fault finding across Nigeria.',
    },
    cta: 'Enrol in a predictive maintenance contract',
    figure: 'trend-chart',
    story: {
      heading: 'Find it before it trips',
      paragraphs: [
        'A maintenance contract begins with a survey and an as-found record of the plant, so there is a baseline, and a schedule agreed against your production calendar. Preventive visits follow it; predictive checks, such as thermography, insulation resistance trending and vibration, are read against the visit before, not just against a limit.',
        'When something fails, fault-finding follows a documented procedure to the root cause rather than the symptom. Every visit ends in a report the next engineer can act on, and where a panel or a drive is reaching the end of its life we propose the retrofit before the plant proposes it for us.',
      ],
    },
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
