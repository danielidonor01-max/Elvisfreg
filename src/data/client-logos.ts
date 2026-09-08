// Client marks. Sources and licences in src/assets/logos/LOGOS.md. Use of a
// client's logo on this site needs that client's permission — see the note there.
import type { ImageMetadata } from 'astro';
import exxonmobil from '../assets/logos/exxonmobil.svg';
import seplat from '../assets/logos/seplat.svg';
import nestoil from '../assets/logos/nestoil.webp';
import saipem from '../assets/logos/saipem.svg';
import nigerdock from '../assets/logos/nigerdock.png';
import renaissance from '../assets/logos/renaissance-africa-energy.png';
import fmc from '../assets/logos/fmc-technologies.svg';
import aveon from '../assets/logos/aveon-offshore.png';
import dormanlong from '../assets/logos/dormanlong.png';
import lee from '../assets/logos/lee-engineering.png';

export interface ClientMark { name: string; logo?: ImageMetadata; wide?: boolean }

export const CLIENT_MARKS: ClientMark[] = [
  { name: 'Exxon Mobil Nigeria', logo: exxonmobil, wide: true },
  { name: 'Seplat', logo: seplat },
  { name: 'Nestoil Group', logo: nestoil },
  { name: 'Saipem Contracting Nigeria', logo: saipem },
  { name: 'Niger Dock', logo: nigerdock, wide: true },
  { name: 'Renaissance Africa Energy', logo: renaissance },
  { name: 'FMC Technologies', logo: fmc, wide: true },
  { name: 'Aveon Offshore', logo: aveon },
  { name: 'Dormanlong Engineering', logo: dormanlong, wide: true },
  { name: 'Lee Engineering and Construction', logo: lee },
  { name: 'Globestar Engineering' },
  { name: 'ZB Joint Ventures' },
  { name: 'Godsvics Nigeria' },
  { name: '261 Industrial Control' },
];
