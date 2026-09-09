// Facts about the company. Single source for the footer, the contact page and
// the structured data — keep NAP (name, address, phone) identical everywhere.

export const SITE = {
  name: 'Elvisfreg Nigeria Limited',
  shortName: 'Elvisfreg',
  legalName: 'Elvisfreg Nigeria Limited',
  rc: '8734614',
  incorporated: '2025-08',
  incorporatedLabel: 'August 2025',
  email: 'elvisfregnlgltd@gmail.com',
  phoneDisplay: '+234 706 998 6848',
  phoneE164: '+2347069986848',
  whatsapp: 'https://wa.me/2347069986848',
  tagline: 'Engineered for zero downtime.',
  heroSub:
    'High-integrity power, intelligent control and calibrated instrumentation for Nigeria\'s oil and gas, power and manufacturing sites.',
  description:
    'High-integrity electrical, automation and calibration engineering for Nigeria\'s oil and gas, power and manufacturing sites. Designed to IEC and IEEE practice, proven before energisation.',
  shortDescription:
    'The precision behind Nigeria\'s heavy industry.',
  profilePdf: '/company-profile.pdf',
} as const;

export const OFFICES = [
  {
    id: 'warri',
    name: 'Head office',
    lines: ['22 Eworitsemogha Street', 'Ubeji, Warri', 'Delta State, Nigeria'],
    city: 'Warri',
    region: 'Delta State',
    country: 'NG',
    countryName: 'Nigeria',
    isHq: true,
  },
  {
    id: 'lagos',
    name: 'Lagos office',
    lines: ['4 Awolowo Way', 'Ikeja, Lagos', 'Nigeria'],
    city: 'Ikeja',
    region: 'Lagos',
    country: 'NG',
    countryName: 'Nigeria',
    isHq: false,
  },
  {
    id: 'houston',
    name: 'USA office',
    lines: ['12580 Piping Rock Dr, Apt 36', 'Houston, Texas 77077', 'United States'],
    city: 'Houston',
    region: 'TX',
    country: 'US',
    countryName: 'United States',
    isHq: false,
  },
] as const;

export const CERTIFICATIONS = [
  { name: 'NIPEX', detail: 'Certificate of prequalification' },
  { name: 'NUPRC', detail: 'Licences and permits' },
  { name: 'National Institute of Welding', detail: 'Member' },
  { name: '100% Nigerian-owned', detail: 'Nigerian Content Plan in force' },
] as const;

// Text list until written permission for logos exists.
export const CLIENTS = [
  'Exxon Mobil Nigeria',
  'Seplat',
  'Nestoil Group',
  'Saipem Contracting Nigeria',
  'Niger Dock',
  'Renaissance Africa Energy',
  'FMC Technologies',
  'Aveon Offshore',
  'Globestar Engineering',
  'Dormanlong Engineering',
  'ZB Joint Ventures',
  'Lee Engineering and Construction',
  'Godsvics Nigeria',
  '261 Industrial Control',
] as const;

export const SECTORS = [
  'Oil and gas',
  'Power generation and distribution',
  'Manufacturing',
  'Commercial building',
  'Residential',
  'Other',
] as const;

export const VALUES = [
  { letter: 'P', name: 'Precision', body: 'Calibrated accuracy in every calculation, drawing, wire termination and control loop.' },
  { letter: 'R', name: 'Reliability', body: 'Fault-tolerant, resilient architectures fit for mission-critical industrial demands.' },
  { letter: 'I', name: 'Integrity', body: 'Uncompromising safety compliance, ethical engineering practice and single-source accountability.' },
  { letter: 'M', name: 'Mastery', body: 'Continuous technical evolution across PLCs, VFDs and smart devices.' },
  { letter: 'E', name: 'Efficiency', body: 'Solutions optimised for minimal energy loss, maximum uptime and total lifecycle sustainability.' },
] as const;

export const NAV = [
  { label: 'Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Company', href: '/company/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const LEGAL = [
  { label: 'Privacy policy', href: '/privacy/' },
  { label: 'Terms of use', href: '/terms/' },
  { label: 'Cookie notice', href: '/cookies/' },
  { label: 'Accessibility', href: '/accessibility/' },
  { label: 'Company information', href: '/legal/' },
] as const;
