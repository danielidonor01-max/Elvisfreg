# Elvisfreg Nigeria Limited — Brand & Content Brief

Source documents (in `~/Downloads`): `Elvisfreg Brand Guide.pdf` (v1.0, Sept 2026, 29pp),
`Elvisfreg.pdf` (Company Profile), `elvisfreg Update.pdf` (revised profile), `elvisfreg.fig` (Figma source).

---

## 1. Who they are

Indigenous Nigerian engineering services + industrial technology firm. Incorporated **August 2025**
under CAMA, **RC No. 8734614**. 100% Nigerian-owned, ₦10,000,000 ordinary share capital.

**Scope:** Electrical · Instrumentation & Calibration · Mechanical · Automation · Hydrotest ·
Supplies · General Contracting.

**Sectors:** Oil & Gas (upstream/midstream/downstream), heavy manufacturing, power generation
& distribution, blue-sea economy, aerospace, mines & steel, agriculture, commercial infrastructure.

**The positioning hook:** they bridge *conventional electrical power systems* and *modern
intelligent automation* (PLCs, HMIs, VFDs, SCADA) under a single-source accountability model.

### Vision
> "To be West Africa's most trusted benchmark in high-integrity electrical engineering and
> intelligent industrial automation, powering critical infrastructure with absolute reliability,
> safety, and operational precision."

### Mission
> "To engineer, integrate, and sustain robust electrical and automation architectures that
> eliminate downtime, maximize energy efficiency, safeguard operational personnel, and elevate
> Nigeria's industrial self-reliance."

### Positioning statement
> "For asset owners, plant managers, and industrial operators demanding zero tolerance for
> failure, Elvisfreg delivers end-to-end, standards-compliant electrical, power, and automation
> engineering backed by certified technical mastery and dependable field support."

### Core values — P.R.I.M.E.
| | | |
|---|---|---|
| **P** | Precision | Calibrated accuracy in every calculation, drawing, wire termination, control loop. |
| **R** | Reliability | Fault-tolerant, resilient architectures fit for mission-critical demands. |
| **I** | Integrity | Uncompromising safety compliance, ethical practice, single-source accountability. |
| **M** | Mastery | Continuous technical evolution across PLCs, VFDs, smart devices. |
| **E** | Efficiency | Minimal energy loss, maximum uptime, total lifecycle sustainability. |

> The company profile carries a second, older values set (Integrity · Accountability · Safety ·
> Empowerment). **P.R.I.M.E. is the brand-guide-sanctioned set** — use it as primary.

---

## 2. Tone of voice

- **Authoritative & Technical** — empirical clarity, correct nomenclature, named standards
  (IEEE, IEC, NERC, ISO, DPR).
- **Disciplined & Direct** — no fluff, no marketing hyperbole. Facts, specs, tolerances,
  measurable efficiencies.
- **Professional & Trustworthy** — reassuring, corporate, safety-conscious at every touchpoint.

**Copy implication for the site:** no "we're passionate about…" filler. Lead with capability,
standard, and number. Let the monospace face carry specs, IDs, and metrics.

---

## 3. Identity system

### The mark — "The Precision Spectrum Arc"
A **180° arc** on a horizontal baseline, divided into **5 petal segments** radiating from a
centre point. Synthesises two ideas: the 180° instrumentation control sweep (analogue gauge
face) and the 5-stage engineering lifecycle. The apex petal sits at 90°.

| Segment | Angle | Lifecycle stage |
|---|---|---|
| 01 | 0°–36° | Design & Systems Architecture (FEED, calculations, CAD schematics) |
| 02 | 36°–72° | Installation & Integration (heavy switchgear, cabling, MCC fabrication) |
| 03 | 72°–108° *(apex)* | Intelligent Automation & Control (PLCs, HMIs, VFDs, SCADA) |
| 04 | 108°–144° | Instrumentation & Commissioning (sensors, calibration, loop testing, QA) |
| 05 | 144°–180° | Lifecycle Optimization & Maintenance (predictive upgrades, asset care) |

- **Centre point** = single-source accountability — all engineering pathways converge.
- **Negative-space circuit cuts** between petals = conduits carrying signal transmission.
- Gauge semantics: 180° visible sweep = calibrated safety, 100% instrument control.

**How it actually reads (from the vector, received 8 Sep):** five broad teardrop petals fanning
from a single convergence point at bottom-centre, separated by tapered white slivers — closer to
a hand fan or palm frond than to a thin gauge arc. It is a **solid, weighty shape**, not a line
drawing. Two consequences: it holds up at small sizes (good for the favicon), and it does *not*
want to be drawn as a stroked path — so a "draw-on" line animation is off the table. Motion
should come from **per-petal opacity, scale-from-origin, or staggered reveal** instead, which the
`transform-origin` at the convergence point makes natural. Aspect ratio 1.58:1 (87×55).

### Wordmark
Lowercase **`elvisfreg`** + `TM`, over the descriptor **`Nigeria Limited`** in lowercase with
balanced tracking. Set in **Outfit**. Rendered two-tone: **`elvis` in Flame Orange, `freg` in
white (dark bg) or navy (light bg)** — confirmed from mockup artwork.

### Lockups
1. **Primary horizontal** — mark left, wordmark + descriptor stacked right.
   *Use: letterheads, website headers, email signatures, nameplates, vehicles.* ← **site header**
2. **Vertical / centered** — mark above, wordmark + descriptor centered below.
   *Use: documents, covers, plant signage, corporate reports, apparel.*
3. **Standalone icon** — arc alone. *Use: app icons, favicons, social avatars, stamps.* ← **favicon**
4. **Stamp emblem** — arc enclosed in a circular stamp treatment.

### Colour variants
Standard full-colour · Dark-mode / reverse · Monochrome (1-colour tech) · High-vis accent.

### Clear space & minimum size
- Clear space **X** = width of the central apex petal on all four sides. Nothing intrudes.
- Min horizontal lockup: **140px** wide (digital) / **35mm** (print).
- Min standalone icon: **24×24px** (digital) / **10mm** (metal etching, stamping).

### Prohibited (matters for CSS)
No stretching or aspect distortion · no rotation off the 180° baseline · no recolouring outside
the sanctioned palette · no individual petal recolouring · **no drop shadows, glows, bevels or
outlines on the vector** · never place over unauthorised gradients, busy photography, or
non-black solid colours without approval.

---

## 4. Colour system

### Primary
| Token | Name | HEX | RGB | CMYK | Pantone |
|---|---|---|---|---|---|
| `--flame` | Industrial Flame Orange (Energy) | `#F26522` | 242, 101, 34 | 0/75/98/0 | PMS 1655 C |
| `--navy` | Corporate & Grounding | `#0B1B2B` | 11, 27, 43 | 88/73/52/65 | PMS 533 C |

### Secondary & neutral
| Token | Name | HEX | RGB |
|---|---|---|---|
| `--titanium` | Titanium Grey | `#8A95A5` | 138, 149, 165 |
| `--isolation` | Isolation White | `#FFFBF9` | 255, 251, 249 |
| `--surface-dark` | Dark Mode Surfaces & Panels | `#1E2C3A` | 30, 44, 58 |
| — | Pure White | `#FFFFFF` | — |
| — | Pure Black | `#000000` | — |

> `#FFFBF9` is a warm off-white — it will read as the light-mode page ground and pairs with
> the orange without going clinical.

### Functional / safety status (dashboards, schematics, reports)
| State | HEX |
|---|---|
| Active / Normal Operation (Relay Green) | `#00A86B` |
| Caution / System Alert (Cadmium Amber) | `#FFB800` |
| Trip / Critical Alarm (Fault Red) | `#D92D20` |

> Genuinely useful for the site: status chips, uptime indicators, capability meters,
> form validation. Reads as instrumentation, not generic UI.

### Measured contrast (WCAG 2.1) — build constraints
| Pair | Ratio | Verdict |
|---|---|---|
| `#F26522` on `#FFFFFF` | **3.15 : 1** | ✗ AA body text · ✓ large text (≥24px / 19px bold) & UI borders |
| `#F26522` on `#0B1B2B` | **5.53 : 1** | ✓ AA normal text |
| `#0B1B2B` on `#FFFFFF` | **17.4 : 1** | ✓ AAA |
| `#8A95A5` on `#FFFFFF` | **3.03 : 1** | ✗ AA body text |

**Consequences for the design system:**
1. Orange is an **accent and large-display colour in light mode** — never small body copy on
   white. It becomes a legitimate text colour in dark mode.
2. Titanium Grey needs a **darkened light-mode variant** for muted/secondary text
   (target ≈ `#5A6675` for 4.5:1). Keep `#8A95A5` for dark-mode muted text, where it passes.
3. Dark mode is the brand's natural home — it is the only theme where the full palette is
   simultaneously accessible.

---

## 5. Typography

### Primary — **Outfit** (Rodrigo Fuenzalida). Geometric sans-serif.
Wordmark, corporate comms, display headers, subheads, body.
Weights in use: **Bold 700 · SemiBold 600 · Medium 500 · Regular 400**.
Rationale: geometric purity complements the radial arc.

### Technical — **JetBrains Mono**. Professional monospace.
Schematics, CAD title blocks, PLC code/parameters, cable schedules, calibration specs, legal
metadata (RC number, coordinates, drawing IDs). Weights: **Medium 500 · Regular 400**.
84° oval counters, maximum optical clarity for numerals.

> Both are on Google Fonts — loadable directly.

### Type scale (as specified)
| Style | Family | Weight | Size | Line height |
|---|---|---|---|---|
| H1 / Display | Outfit | Bold 700 | 40px | 120% (48px) |
| H2 / Section | Outfit | SemiBold 600 | 28px | 130% (36px) |
| H3 / Subsection | Outfit | SemiBold 600 | 20px | 140% (28px) |
| H4 / Component | Outfit | Medium 500 | 16px | 140% |
| Body 1 / Regular | Outfit | Regular 400 | 15px | 160% (24px) |
| Body 2 / Emphasis | Outfit | Medium 500 | 15px | 160% (24px) |
| Caption | Outfit | Medium 500 | 12px | 140% (17px) |
| Code 1 / Data | JetBrains Mono | Regular 400 | 13px | 140% (18px) |
| Code 2 / Data | JetBrains Mono | Medium 500 | 11px | 130% (14px) |

> This scale is document-calibrated. For web, treat it as the **ratio and role reference** and
> scale the display tier up fluidly (H1 → ~`clamp(40px, 6vw, 76px)`) while holding body at
> 15–17px and preserving the 120/130/140/160% line-height rhythm.

---

## 6. Service architecture (site information architecture)

**A. Electrical**
- *Domestic* — new installs, wiring, DB install/modification, lighting & socket outlets,
  changeover switches, generator & inverter integration, solar PV, battery storage, fault
  diagnosis, earthing & bonding, surge protection, lightning protection, maintenance,
  energy-efficiency, smart-home, testing & commissioning.
- *Commercial* — design & install, LV distribution, MDB/SDB, cable install & termination, cable
  tray & management, lighting, emergency lighting, generator integration, auto/manual changeover,
  UPS, inverter & battery, power factor correction, surge protection, earthing, testing &
  commissioning, preventive & corrective maintenance.
- *Industrial* — installations, LV power distribution, motor control systems, MCCs, control
  panels, switchboards, MCCB/MCB/ACB protection, motor starters (DOL, star-delta, soft starter,
  VFD), generator electrical systems, automatic transfer systems, industrial cabling &
  termination, cable tray & ladder, earthing & bonding, industrial lighting, testing &
  commissioning, maintenance, fault finding.

**B. Industrial Automation & Control**
- *PLC* — selection & system architecture, programming, digital/analogue I/O configuration,
  panel construction, replacement & modernization, troubleshooting, program modification &
  optimization, commissioning, fault diagnosis, system documentation.
- *HMI* — programming, operator interface development, alarm management, process visualization,
  real-time monitoring, data display, set-point control, fault & event indication, commissioning.
- *VFD* — selection, installation, parameter configuration, motor commissioning, speed control,
  fault diagnosis, replacement, PLC/HMI integration.

**C. Control Panel Design & Fabrication**
Motor control · PLC control · MCC · automatic control · pump control · generator control · VFD ·
changeover · process control panels · distribution boards · custom industrial control systems ·
cable management · ventilation & protection.

**D. Power & Energy Systems**
Diesel generator systems · automatic transfer systems · solar PV · hybrid energy systems ·
battery energy storage · UPS · inverter systems · generator/inverter integration ·
generator/solar hybrid · load management · energy monitoring · power distribution ·
electrical protection.

**E. Preventive Maintenance & Troubleshooting**
Root-cause fault finding across: electrical, motor, control-panel, PLC, HMI, VFD, sensor,
communication, generator electrical, inverter, battery/inverter comms, protection-device trips,
power-quality, control-system failures.
> Quotable differentiator: *"systematic fault-finding procedures to identify the root cause of
> failures rather than simply treating symptoms."*

**F. Design, Installation & Commissioning — full lifecycle**
Site Survey → Engineering Design → Equipment Selection → Procurement → Installation →
Programming → Testing → Commissioning → Training → Documentation → Maintenance.
> This 11-step chain maps directly onto the 5-segment arc. **Strong candidate for the site's
> signature interactive element.**

**G. Instrumentation & Calibration**
- *Pneumatic & hydraulic* — LP/HP hydraulic & pneumatic pumps, pressure gauges,
  pressure/temperature transmitters, lamp & clip-on meters, dead weight testers,
  temperature/pressure recorders.
- *Electronic instruments* — gas alert monitors, gas analysers, multimeters, digital & analogue
  thermometers, liquid-in-glass thermometers, insulation/continuity testers, holiday detectors,
  pin-hole, thickness gauges, dew point gauges, light meters, sound analyzers, flow meters.
- *Survey* — echo sounders, level instruments, total stations (Nikon etc.).
- *Civil* — batching plants, drying ovens, balances (triple beam), compressive test/crushing
  machines, CBR machines.
- *Weights & measurement* — cranes, weighbridges, heavy weight devices.
- *Electrical* — all industrial & domestic electrical measuring equipment.
- *Pressure testing / hydrotest* — surface & underground oil and gas storage tanks, leak
  detection & integrity assurance, pipeline & flow-line cleaning/flushing, hydro-testing and
  pressure safety testing of valves 4in / 6in / 8in / 12in (ball valves, relief valves, flow meters).

**H. Quality Control & Assurance** *(distinctive — worth its own section)*
- **"As-Found" data collection** — record initial instrument state before any adjustment, to
  evaluate whether previous work with the device was compromised.
- **SOP compliance** — multi-point testing at 0%, 25%, 50%, 75%, 100% of full-scale span.
- **"As-Left" data collection** — document final verified measurements post-adjustment.
- **Measurement uncertainty calculation** — expanded uncertainty factoring reference standard
  uncertainty, environmental drift, instrument resolution.
- **Proficiency Testing (PT) participation** — validate equipment, verify internal procedures,
  benchmark against leading global laboratories.
- **Inter-Laboratory Comparisons (ILC)** — routine cross-lab testing against top-tier
  international calibration facilities.

---

## 7. Credentials & clients

**National certification:** NIPEX Certificate of Prequalification · NUPRC Licenses/Permits ·
National Institute of Welding.

**Client certification (from `elvisfreg Update.pdf` — newer, richer than the base profile):**
Exxon Mobil Nigeria Ltd · Renaissance Africa Energy Company Ltd · Saipem Contracting Nigeria Ltd ·
Niger Dock Plc · Nestoil Group · ZB Joint Ventures · Aveon Offshore · Globestar Engineering Ltd ·
FMC Technologies Ltd · Dormanlong Engineering Company Ltd.

**Clientele / sectors served:** Lee Engineering and Construction Company · Nestoil · Godsvics
Nigeria · Seplat · 261 Industrial Control. Sectors: Oil & Gas, Manufacturing, Power Generation
& Distribution, Blue Sea Economy, Aerospace, Mines & Steel, Agriculture.

**Nigerian Content Plan:** 90% Nigerian / 10% foreign workforce · internal & external training ·
understudy programmes for technology transfer · preference for locally manufactured goods ·
foreign alliances for know-how transfer · partnership with local competent firms · student
mentorship & industrial training with academic institutions.

**Expertise assurance:** qualified foreign and Nigerian-based testing engineers, improving plant
reliability, reducing rework, increasing client profitability.

---

## 8. Project gallery (portfolio proof)

1. General overhaul of a **CAT G3516 gas engine** at an offshore location.
2. **Total overhaul of the CAT generator.**
3. Completion of **instrument tubing installation** in an oil field.
4. **Electrical motor installation**, protection and test running.
5. **Offshore platform flow-line maintenance**, Nigeria.
6. **100kW solar panel installation** on a commercial building, Lekki, Lagos.
7. Technician on site performing **preventive maintenance on a process power panel**.
8. Industrial & domestic electrical installations — HV power systems distribution &
   integration · 3-phase LV control for motor starters · single-phase domestic wiring.

> ⚠️ One gallery slide in the source deck carries the placeholder caption **"Need Writeup"**
> (offshore piping / topside process deck photo). Needs copy from Daniel before it ships.

---

## 9. Contact

| | |
|---|---|
| Head Office | 22 Eworistsemogha Str., Ubeji, Warri, Delta State |
| Lagos Office | 4 Awolowo Way, Ikeja, Lagos |
| USA Office | 12580 Piping Rock Dr, Apt. 36, Houston, Texas 77077 |
| Email | elvisfregnlgltd@gmail.com |
| Phone | 07069986848 |
| RC | 8734614 |

---

## 10. Design directions the brand itself suggests

These fall out of the identity — not imported taste.

- **The arc is the interaction primitive.** 180°, five segments, apex at 90°. It is a gauge:
  it can sweep on scroll, fill on load, act as a service selector where each petal maps to its
  lifecycle stage, and drive the section navigation. The mark *is* the IA.
- **Instrumentation, not decoration.** The safety palette (`#00A86B` / `#FFB800` / `#D92D20`)
  makes status a native visual language — uptime chips, capability readouts, live-looking meters.
- **Monospace as texture.** JetBrains Mono for RC number, coordinates, drawing IDs, spec values,
  section numbering (`01 / 02 / 03`), and micro-labels. It carries the technical register the
  tone of voice demands, and it separates *fact* from *prose*.
- **Dark mode is the primary theme.** It is where the palette is fully accessible, where the
  reverse lockup lives, and where `#1E2C3A` panels read as equipment surfaces. Light mode
  (`#FFFBF9` ground) is the specification-sheet mode.
- **Restraint is on-brand.** "No fluff or marketing hyperbole" is a stated brand rule, so it is
  also a *design* rule. Minimalism here is compliance, not aesthetic preference. Motion should
  be precise and mechanical — calibrated easing, no bounce, no float.
- **The 11-step lifecycle chain** is the natural signature scroll sequence.

---

## 11. Open items before build

1. ~~**Logo vector.**~~ **Received 8 Sep 2026.** Eight flat SVG exports plus three derived
   themeable versions now live in [`assets/brand/logo/`](../assets/brand/logo/) — see the
   [README](../assets/brand/logo/README.md) there for the full inventory and usage rules.
   The vertical/centered lockup and stamp emblem were **descoped** (8 Sep) — compose a stacked
   mark from `mark-themed.svg` + live text where one is needed.
2. **Photography.** Field photos exist inside the profile PDFs and as `Elvisfreg 24–27.jpg`,
   but not as a clean web-ready set. Needed at 2× for hero and gallery.
3. **Gallery caption** for the "Need Writeup" slide.
4. **Values set** — confirm P.R.I.M.E. supersedes the older Integrity/Accountability/Safety/
   Empowerment list on the website.
5. **Company name in copy** — `elvisfreg Update.pdf` contains a typo, "elvisFregene Nigerian
   Limited", in the overview paragraph. Correct form is **Elvisfreg Nigeria Limited**.
6. **Client logos** — permission/assets for the Exxon Mobil / Saipem / Nestoil / FMC wall.
