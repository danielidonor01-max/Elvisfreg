// Lead photograph per service, for the services index. Everything here is a
// TEMPORARY stand-in from src/assets/temp (see PLACEHOLDERS.md there); swap
// for field photography of the company's own work.
import type { ImageMetadata } from 'astro';
import hvPanel from '../assets/temp/hv-panel.jpg';
import controlPanel from '../assets/temp/control-panel.jpg';
import panelWires from '../assets/temp/panel-wires.jpg';
import engineerIndustrial from '../assets/temp/engineer-industrial.jpg';
import technicianPanel from '../assets/temp/technician-panel.jpg';
import offshorePlatform from '../assets/temp/offshore-platform.jpg';
import motorWires from '../assets/temp/motor-wires.jpg';

export interface LeadImage { src: ImageMetadata; alt: string; temp: boolean }

export const SERVICE_LEAD: Record<string, LeadImage> = {
  'electrical': { src: hvPanel, alt: 'Low-voltage panel with circuit breakers', temp: true },
  'automation-control': { src: controlPanel, alt: 'Industrial control panel with an operator screen', temp: true },
  'control-panels': { src: panelWires, alt: 'Wired control panel under construction', temp: true },
  'power-energy': { src: engineerIndustrial, alt: 'Engineer at industrial power equipment', temp: true },
  'instrumentation-calibration': { src: technicianPanel, alt: 'Technician taking readings at a panel', temp: true },
  'hydrotest-pressure-testing': { src: offshorePlatform, alt: 'Offshore platform', temp: true },
  'maintenance': { src: motorWires, alt: 'Technician testing motor wiring', temp: true },
};
