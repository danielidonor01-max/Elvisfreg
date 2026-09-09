# Temporary photography

Every image in this folder is a **stand-in** from Pexels (licence: free for commercial use,
no attribution required — https://www.pexels.com/license/). They exist so the hero, project
and service layouts can be designed against real photographs before the Elvisfreg field set
arrives. Each is rendered with a "Temporary image" tag through `Photo.astro`'s `temp` prop.

**Replace all of these before launch.** None shows Elvisfreg work. Galleries deliberately
share images between projects.

| File | Pexels | Used for |
|---|---|---|
| hero-substation.jpg | [33915172](https://www.pexels.com/photo/33915172/) | Home hero |
| offshore-platform.jpg | [13199842](https://www.pexels.com/photo/13199842/) | Offshore flow line maintenance, lead |
| offshore-sunset.jpg | [30445637](https://www.pexels.com/photo/30445637/) | CAT G3516 overhaul, lead |
| hv-panel.jpg | [35573433](https://www.pexels.com/photo/35573433/) | Industrial and domestic installations, lead |
| technician-panel.jpg | [34526423](https://www.pexels.com/photo/34526423/) | Process power panel maintenance, lead; menu card; company page |
| engineer-industrial.jpg | [33694034](https://www.pexels.com/photo/33694034/) | CAT generator overhaul, lead; menu card; company page |
| motor-wires.jpg | [33531832](https://www.pexels.com/photo/33531832/) | Electrical motor installation, lead |
| panel-wires.jpg | [28265032](https://www.pexels.com/photo/28265032/) | Instrument tubing installation, lead |
| control-panel.jpg | [34194580](https://www.pexels.com/photo/34194580/) | Solar project gallery |
| solar-roof.jpg | [35237908](https://www.pexels.com/photo/35237908/) | 100 kW solar, Lekki, lead |
| solar-team.jpg | [8853536](https://www.pexels.com/photo/8853536/) | Solar project gallery |
| panel-work.jpg | [27928762](https://www.pexels.com/photo/27928762/) | Galleries |
| switchboard.jpg | [257736](https://www.pexels.com/photo/257736/) | Galleries |
| diesel-engine.jpg | [5506052](https://www.pexels.com/photo/5506052/) | Engine and generator galleries |
| mechanic-engine.jpg | [8985465](https://www.pexels.com/photo/8985465/) | CAT G3516 gallery |
| rig-aerial.jpg | [9336586](https://www.pexels.com/photo/9336586/) | CAT G3516 gallery |
| rig-sunset.jpg | [34389698](https://www.pexels.com/photo/34389698/) | Offshore flow line gallery |
| gauge-pipes.jpg | [7937300](https://www.pexels.com/photo/7937300/) | Instrument tubing gallery |
| pipe-valve.jpg | [13726337](https://www.pexels.com/photo/13726337/) | Tubing and flow line galleries |
| control-room.jpg | [33706880](https://www.pexels.com/photo/33706880/) | Process power panel gallery |
| substation-crew.jpg | [13820151](https://www.pexels.com/photo/13820151/) | Installations gallery |
| welder-pipe.jpg | [4305372](https://www.pexels.com/photo/4305372/) | Offshore flow line gallery |
| multimeter.jpg | [5806812](https://www.pexels.com/photo/5806812/) | Galleries |
| factory-machine.jpg | [5953723](https://www.pexels.com/photo/5953723/) | Electrical motor gallery |

Service index cards use their own set; see `src/data/service-images.ts`.

When the field photography lands: drop files into `src/assets/projects/<slug>/`, point
`PROJECT_LEAD` and `PROJECT_GALLERY` in `src/data/project-images.ts` at them, delete this folder.
