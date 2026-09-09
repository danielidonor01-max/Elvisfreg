// The two photo cards in the services menu. Images are TEMPORARY stand-ins
// from src/assets/temp (see PLACEHOLDERS.md); swap for field photography.
import type { ImageMetadata } from 'astro';
import technicianPanel from '../assets/temp/technician-panel.jpg';
import engineerIndustrial from '../assets/temp/engineer-industrial.jpg';

export interface MenuCard {
  href: string;
  title: string;
  body: string;
  image: ImageMetadata;
  alt: string;
  temp: boolean;
}

export const MENU_CARDS: MenuCard[] = [
  {
    href: '/projects/',
    title: 'Recent work, as found and as left.',
    body: 'Projects across oil and gas, power and manufacturing, each recorded as found, work done and as left.',
    image: technicianPanel,
    alt: 'Technician working on an electrical control panel',
    temp: true,
  },
  {
    href: '/help/',
    title: 'Questions, answered by stage.',
    body: 'What we need before design starts, what is tested before energisation, what a calibration certificate shows.',
    image: engineerIndustrial,
    alt: 'Engineer working on industrial equipment',
    temp: true,
  },
];
