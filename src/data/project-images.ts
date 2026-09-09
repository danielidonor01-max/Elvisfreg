// Lead photograph and gallery per project. Everything here is a TEMPORARY
// stand-in from src/assets/temp (see PLACEHOLDERS.md there); swap for field
// photography. Galleries share images between projects on purpose: they exist
// to prove the layout, not the work.
import type { ImageMetadata } from 'astro';
import offshoreSunset from '../assets/temp/offshore-sunset.jpg';
import offshorePlatform from '../assets/temp/offshore-platform.jpg';
import hvPanel from '../assets/temp/hv-panel.jpg';
import technicianPanel from '../assets/temp/technician-panel.jpg';
import engineerIndustrial from '../assets/temp/engineer-industrial.jpg';
import motorWires from '../assets/temp/motor-wires.jpg';
import panelWires from '../assets/temp/panel-wires.jpg';
import controlPanel from '../assets/temp/control-panel.jpg';
import panelWork from '../assets/temp/panel-work.jpg';
import switchboard from '../assets/temp/switchboard.jpg';
import dieselEngine from '../assets/temp/diesel-engine.jpg';
import mechanicEngine from '../assets/temp/mechanic-engine.jpg';
import rigAerial from '../assets/temp/rig-aerial.jpg';
import rigSunset from '../assets/temp/rig-sunset.jpg';
import gaugePipes from '../assets/temp/gauge-pipes.jpg';
import pipeValve from '../assets/temp/pipe-valve.jpg';
import solarRoof from '../assets/temp/solar-roof.jpg';
import solarTeam from '../assets/temp/solar-team.jpg';
import controlRoom from '../assets/temp/control-room.jpg';
import substationCrew from '../assets/temp/substation-crew.jpg';
import welderPipe from '../assets/temp/welder-pipe.jpg';
import multimeter from '../assets/temp/multimeter.jpg';
import factoryMachine from '../assets/temp/factory-machine.jpg';

export interface LeadImage { src: ImageMetadata; alt: string; temp: boolean }

const t = (src: ImageMetadata, alt: string): LeadImage => ({ src, alt, temp: true });

const IMG = {
  offshoreSunset: t(offshoreSunset, 'Offshore platform at dusk'),
  offshorePlatform: t(offshorePlatform, 'Offshore oil platform under a clear sky'),
  hvPanel: t(hvPanel, 'High-voltage electrical panel with circuit breakers'),
  technicianPanel: t(technicianPanel, 'Technician working on an electrical control panel'),
  engineerIndustrial: t(engineerIndustrial, 'Engineer working on industrial equipment'),
  motorWires: t(motorWires, 'Technician testing electrical motor wiring'),
  panelWires: t(panelWires, 'Electrical panel with wiring and switches'),
  controlPanel: t(controlPanel, 'Industrial control panel'),
  panelWork: t(panelWork, 'Electrician working inside an electrical panel'),
  switchboard: t(switchboard, 'Electrician at an opened switchboard'),
  dieselEngine: t(dieselEngine, 'Diesel engine in a workshop'),
  mechanicEngine: t(mechanicEngine, 'Mechanic working on an engine'),
  rigAerial: t(rigAerial, 'Offshore platforms seen from the air'),
  rigSunset: t(rigSunset, 'Offshore rig at sunset'),
  gaugePipes: t(gaugePipes, 'Pressure gauge on steel pipework'),
  pipeValve: t(pipeValve, 'Valve on a large pipeline'),
  solarRoof: t(solarRoof, 'Worker installing solar panels on a roof'),
  solarTeam: t(solarTeam, 'Technicians installing solar panels'),
  controlRoom: t(controlRoom, 'Industrial electrical control room'),
  substationCrew: t(substationCrew, 'Workers at a transformer substation'),
  welderPipe: t(welderPipe, 'Welder working on a steel pipe'),
  multimeter: t(multimeter, 'Digital multimeter with test probes'),
  factoryMachine: t(factoryMachine, 'Industrial machine on a factory floor'),
};

export const PROJECT_LEAD: Record<string, LeadImage> = {
  'cat-g3516-gas-engine-overhaul': IMG.offshoreSunset,
  'cat-generator-total-overhaul': IMG.engineerIndustrial,
  'instrument-tubing-installation': IMG.panelWires,
  'electrical-motor-installation': IMG.motorWires,
  'offshore-flow-line-maintenance': IMG.offshorePlatform,
  '100kw-solar-installation-lekki': IMG.solarRoof,
  'process-power-panel-maintenance': IMG.technicianPanel,
  'industrial-domestic-electrical-installations': IMG.hvPanel,
};

export const PROJECT_GALLERY: Record<string, LeadImage[]> = {
  'cat-g3516-gas-engine-overhaul': [IMG.dieselEngine, IMG.mechanicEngine, IMG.rigAerial],
  'cat-generator-total-overhaul': [IMG.dieselEngine, IMG.multimeter, IMG.switchboard],
  'instrument-tubing-installation': [IMG.gaugePipes, IMG.pipeValve, IMG.panelWork],
  'electrical-motor-installation': [IMG.factoryMachine, IMG.multimeter, IMG.switchboard],
  'offshore-flow-line-maintenance': [IMG.rigSunset, IMG.pipeValve, IMG.welderPipe],
  '100kw-solar-installation-lekki': [IMG.solarTeam, IMG.controlPanel, IMG.multimeter],
  'process-power-panel-maintenance': [IMG.panelWork, IMG.controlRoom, IMG.switchboard],
  'industrial-domestic-electrical-installations': [IMG.switchboard, IMG.panelWork, IMG.substationCrew],
};
