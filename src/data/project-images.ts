// Lead photograph per project. Everything here is a TEMPORARY stand-in from
// src/assets/temp (see PLACEHOLDERS.md there); swap for field photography.
import type { ImageMetadata } from 'astro';
import offshoreSunset from '../assets/temp/offshore-sunset.jpg';
import offshorePlatform from '../assets/temp/offshore-platform.jpg';
import hvPanel from '../assets/temp/hv-panel.jpg';
import technicianPanel from '../assets/temp/technician-panel.jpg';
import engineerIndustrial from '../assets/temp/engineer-industrial.jpg';
import motorWires from '../assets/temp/motor-wires.jpg';
import panelWires from '../assets/temp/panel-wires.jpg';
import controlPanel from '../assets/temp/control-panel.jpg';

export interface LeadImage { src: ImageMetadata; alt: string; temp: boolean }

export const PROJECT_LEAD: Record<string, LeadImage> = {
  'cat-g3516-gas-engine-overhaul': { src: offshoreSunset, alt: 'Offshore platform at dusk', temp: true },
  'cat-generator-total-overhaul': { src: engineerIndustrial, alt: 'Engineer working on industrial equipment', temp: true },
  'instrument-tubing-installation': { src: panelWires, alt: 'Electrical panel with wiring and switches', temp: true },
  'electrical-motor-installation': { src: motorWires, alt: 'Technician testing electrical motor wiring', temp: true },
  'offshore-flow-line-maintenance': { src: offshorePlatform, alt: 'Offshore oil platform under a clear sky', temp: true },
  '100kw-solar-installation-lekki': { src: controlPanel, alt: 'Industrial control panel', temp: true },
  'process-power-panel-maintenance': { src: technicianPanel, alt: 'Technician working on an electrical control panel', temp: true },
  'industrial-domestic-electrical-installations': { src: hvPanel, alt: 'High-voltage electrical panel with circuit breakers', temp: true },
};
