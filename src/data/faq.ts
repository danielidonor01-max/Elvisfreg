// Questions asked about each stage of the work, answered in the company's own
// terms. DRAFT — written from the company profile and the stage copy; every
// answer must be confirmed by Elvisfreg's engineers before launch, and none
// should promise a figure (a response time, a price, an interval) that the
// company has not committed to.

import { STAGES, type StageId } from './stages';

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  slug: string;
  stage?: StageId;
  name: string;
  headline: string;
  items: FaqItem[];
}

const GENERAL: FaqItem[] = [
  {
    q: 'How do I get a quotation?',
    a: 'Use the enquiry form, or call or message us on WhatsApp. Tell us the site, what the system does and what you need done; we reply with questions if the scope is unclear, or with a quotation if it is not.',
  },
  {
    q: 'Where do you work?',
    a: 'Across Nigeria from our head office in Warri and our Lagos office. Offshore and remote sites are planned around the client\'s logistics, with parts and tooling brought out with the crew.',
  },
  {
    q: 'Are you a Nigerian company?',
    a: 'Yes. Elvisfreg Nigeria Limited is wholly Nigerian-owned, incorporated under the Companies and Allied Matters Act, and runs a Nigerian Content Plan across all of its work. We hold a NIPEX certificate of prequalification and NUPRC licences and permits.',
  },
];

const BY_STAGE: Record<StageId, FaqItem[]> = {
  '01': [
    {
      q: 'What do you need from us before design starts?',
      a: 'A site survey is the first step, and we carry it out ourselves. Beyond that we need the load list, the supply arrangement (utility, generator, solar or a combination), any existing drawings, and the conditions the equipment will live in. Where drawings do not exist, we produce them.',
    },
    {
      q: 'Can you design around equipment we have already bought?',
      a: 'Yes. The equipment is checked against the duty, the fault level and the protection coordination like any other selection. Where it does not suit, the design compliance statement says so, and we propose what would.',
    },
    {
      q: 'Do we receive the drawings, or only the installation?',
      a: 'The drawings are a deliverable in their own right: single-line diagram, cable schedule, panel layout and equipment schedule, issued for construction and updated as built after installation. They are yours to keep and to hand to whoever works on the system next.',
    },
    {
      q: 'Which standards do you design to?',
      a: 'Low-voltage installations are designed to IEC 60364 and assemblies to IEC 61439, alongside the client\'s own specifications and the regulations that apply to the site. The standards applied are named in the design compliance statement.',
    },
  ],
  '02': [
    {
      q: 'Can the installation be done within a shutdown window?',
      a: 'That is how most industrial work is planned. Panels are built and tested in the workshop beforehand, so time on site is spent on termination, testing and commissioning rather than fabrication. The sequence is agreed against the shutdown plan before the crew mobilises.',
    },
    {
      q: 'What is tested before the system is energised?',
      a: 'Insulation resistance, continuity, earth-fault loop impedance and polarity, each recorded on a test certificate. Generator and changeover systems are commissioned under load, and the record of that test is part of the handover.',
    },
    {
      q: 'Do you take on domestic and commercial work, or only industrial?',
      a: 'All three. Domestic work runs from new building wiring to solar and inverter systems; commercial covers distribution boards, emergency lighting, UPS and power factor correction; industrial covers LV distribution, motor control centres and switchboards.',
    },
    {
      q: 'Do you install solar for homes as well as industrial sites?',
      a: 'Yes. Single-phase solar and battery systems for homes and small businesses, three-phase systems for commercial and industrial sites, each sized to the load, the hours of autonomy you want and the budget. Where a client wants a premium system, with whole-property backup, monitoring and remote diagnostics, we design and install that too.',
    },
    {
      q: 'Who commissions the generator and the changeover?',
      a: 'We do. Automatic transfer systems are set up and tested under load with the generator running, and the commissioning record is handed over with the as-built drawings.',
    },
  ],
  '03': [
    {
      q: 'Our plant runs on relay logic. Do we have to replace everything?',
      a: 'Not necessarily. We document the existing control first, as an I/O schedule and a control narrative, and then migrate in phases where the process allows. Replacing and modernising existing PLCs is routine work; a full rebuild is proposed only when the survey shows it is needed.',
    },
    {
      q: 'Which PLC and HMI platforms do you use?',
      a: 'Selection is part of the design. We specify against the process, the platforms already on site and the availability of local support and spares, and the choice is documented so it can be maintained by others.',
    },
    {
      q: 'What do we receive at handover?',
      a: 'Backups of the PLC program and the HMI, the I/O schedule, the control narrative, the cause-and-effect matrix, as-built drawings and the FAT and SAT record. Operator training is part of commissioning.',
    },
    {
      q: 'Can you add a variable frequency drive to an existing motor?',
      a: 'Yes. The drive is selected against the motor and the load, installed, configured with ramp, torque and protection parameters recorded, and integrated with the PLC and HMI where there is one.',
    },
  ],
  '04': [
    {
      q: 'Do you calibrate on site or at your premises?',
      a: 'Both. Installed and heavy equipment, such as transmitters in service, weighbridges, cranes and batching plants, is calibrated in place. Portable instruments can be calibrated at our premises.',
    },
    {
      q: 'What does the calibration certificate show?',
      a: 'The as-found and as-left readings at 0, 25, 50, 75 and 100 percent of span, the reference standard used, the expanded measurement uncertainty and the result against the tolerance, one certificate per tag.',
    },
    {
      q: 'How often should instruments be recalibrated?',
      a: 'It depends on the instrument, its duty and the requirements of your quality system or the manufacturer. The interval is recorded on the certificate, and we can schedule the next due date for you.',
    },
    {
      q: 'What can you hydrotest?',
      a: 'Storage tanks, pipelines, flow lines and valves from 4 to 12 inches, including ball valves, relief valves and flow meters. Lines are cleaned and flushed first where needed, holds are recorded, and the test record is handed over.',
    },
  ],
  '05': [
    {
      q: 'What is the difference between preventive, corrective and predictive maintenance?',
      a: 'Preventive maintenance is done on a schedule to keep equipment within specification. Corrective work is done on demand when something fails. Predictive checks, such as thermography, insulation trending and vibration measurement, find faults before they trip.',
    },
    {
      q: 'Can you maintain systems you did not install?',
      a: 'Yes. We start with a survey and an as-found record of the system, so there is a baseline, and then agree the schedule. Missing drawings are produced along the way.',
    },
    {
      q: 'What happens when something breaks down?',
      a: 'Call the head office number. Fault-finding follows a documented procedure to the root cause rather than the symptom, and every visit ends in a fault report the next engineer can act on.',
    },
    {
      q: 'Do you retrofit old control panels?',
      a: 'Yes. Ageing panels are retrofitted in place, without a plant-wide overhaul, and the work starts from a retrofit proposal that sets out what is replaced, what is kept and what the plant gains.',
    },
  ],
};

export const FAQ_GROUPS: FaqGroup[] = [
  { slug: 'working-with-us', name: 'Working with Elvisfreg', headline: 'Before you write.', items: GENERAL },
  ...STAGES.map((s) => ({ slug: s.slug, stage: s.id, name: s.name, headline: s.headline, items: BY_STAGE[s.id] })),
];

export const faqForStage = (id: StageId) => BY_STAGE[id];
