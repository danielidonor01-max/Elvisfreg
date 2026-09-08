# Elvisfreg website — design plan

Status: **for review before any code is written.** Companion to [BRAND-BRIEF.md](BRAND-BRIEF.md).
Inputs: brand guide v1.0, company profile, logo assets, `frontend-design` and `ui-ux-pro-max` skills.

---

## 0. What this site is

**A prequalification document that happens to be a website.**

- **Subject.** An indigenous Nigerian engineering firm: electrical, automation (PLC/HMI/VFD/SCADA),
  instrumentation and calibration, control panels, power systems, hydrotest. Their world is
  engraved rating plates, DIN rails, calibration certificates with as-found/as-left columns, gauge
  faces, HV switchgear, offshore decks, CAT generators.
- **Audience.** Plant managers, maintenance engineers and procurement/tender officers at operators
  like Exxon Mobil, Seplat, Nestoil, Saipem. Secondary: commercial and residential clients for solar
  and electrical work. Tertiary: engineers looking for jobs and industrial-training places.
- **Primary job.** Let a procurement officer, in under two minutes, (1) verify the company is real
  and licensed, (2) understand the scope of work, (3) send an RFQ or download the company profile.
- **Tone (brand-mandated).** Authoritative, disciplined, direct. No hyperbole. This is also the
  design rule: restraint is compliance, not taste.

---

## 1. Design tokens

### 1.1 Colour

All brand values are fixed by the guide. Derived values were computed for WCAG AA and are marked.

| Token | Light | Dark | Notes |
|---|---|---|---|
| `--bg` | `#FFFBF9` Isolation White | `#0B1B2B` Navy | Page ground |
| `--surface` | `#FFFFFF` | `#1E2C3A` Dark Mode Surfaces | Panels, form fields, cards |
| `--surface-2` | `#F4F0EB` *(derived)* | `#283A4D` *(derived)* | Second step: table stripes, code blocks |
| `--ink` | `#0B1B2B` | `#FFFBF9` | Body and heading text |
| `--ink-muted` | `#5A6675` *(derived, 5.9:1)* | `#8A95A5` Titanium *(5.7:1 on bg, 4.7:1 on surface)* | Secondary text, captions |
| `--line` | `rgba(11,27,43,.14)` | `rgba(255,251,249,.12)` | All borders and dividers |
| `--flame` | `#F26522` | `#F26522` | Petals, primary CTA fill, focus ring, large display only |
| `--flame-text` | `#BF4A15` *(derived, 5.0:1)* | `#F26522` *(5.5:1)* | Links and any orange text under 24px |
| `--ok` | `#00A86B` | `#00A86B` | Indicator only (dot, border) |
| `--ok-text` | `#0E7C55` *(derived, 5.2:1)* | `#00A86B` | "Enquiry sent" |
| `--warn` | `#FFB800` | `#FFB800` | Indicator only; navy text on amber fill passes 10:1 |
| `--fault` | `#D92D20` *(4.8:1 on white)* | `#D92D20` | Errors — passes as text in both themes |

**Rules that fall out of the numbers**

1. `#F26522` on white is 3.15:1. In light mode orange is a *shape* colour, never small text. Links use `--flame-text`.
2. Titanium Grey fails on white (3.0:1) — light mode uses the derived `#5A6675` for muted text.
3. Dark mode is where the full palette is simultaneously legible; light mode is the default anyway (see §2.4).
4. **Orange budget:** at most one orange CTA per viewport. The petals are the orange; buttons compete with them.
5. Status colours are semantic. They appear on the form (sent / fault), on certification validity, on the arc selector's active state — never as decoration.
6. No gradients. No shadows. Separation is border and surface step only.
7. **Primary button is flame fill with navy text** (`#0B1B2B` on `#F26522`, 5.5:1, both themes). White text on flame is 3.15:1 and fails AA at button size. This is a small distinctive move that falls straight out of the contrast maths.

### 1.2 Type

Two families, both mandated by the brand guide, both self-hosted as variable fonts.

| Role | Face | Weight | Size (fluid) | Line-height | Tracking |
|---|---|---|---|---|---|
| Display (home hero) | Outfit | 700 | `clamp(2.75rem, 1.5rem + 5vw, 5rem)` | 1.02 | −0.025em |
| H1 (inner pages) | Outfit | 700 | `clamp(2.25rem, 1.4rem + 3vw, 3.5rem)` | 1.08 | −0.02em |
| H2 | Outfit | 600 | `clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem)` | 1.15 | −0.01em |
| H3 | Outfit | 600 | 1.25rem | 1.3 | 0 |
| Body | Outfit | 400 | 1.0625rem (17px) | 1.6 | 0 |
| Body small | Outfit | 400 | 0.9375rem | 1.55 | 0 |
| Data | JetBrains Mono | 400 / 500 | 0.875rem | 1.4 | 0, `tabular-nums` |

- Measure: 62ch max on body text. Never centre body copy on desktop.
- **JetBrains Mono is for data, not labels.** RC number, dates, calibration ranges (`0 / 25 / 50 / 75 / 100 % FS`), valve sizes, coordinates, project references, phone numbers. It does not appear on section headings, nav, buttons, or eyebrow labels.
- Sentence case everywhere. No all-caps. No eyebrow labels above headings. No single-word colour accents inside headlines.
- The brand guide's 40/28/20/16/15 scale is a document scale; the fluid scale above keeps its ratios and line-height rhythm (1.2 / 1.3 / 1.4 / 1.6) and lets display sizes breathe on wide screens.

### 1.3 Space, grid, radius, elevation

- Base 4px. Component spacing on the 8-step (8 / 16 / 24 / 32 / 48 / 64 / 96 / 128).
- Section padding: 80px mobile, 128px desktop.
- Container 1200px, gutters 24px mobile / 32px desktop. 12 columns. Text blocks sit in columns 1–7, left-aligned.
- Radius is a hierarchy, not one value: **2px** inputs and buttons (technical, tight); **6px** panels; **0** on photographs (photos are prints). The only large curves on any page belong to the petals.
- Elevation: none. No `box-shadow` in either theme.
- Breakpoints: 375 / 768 / 1024 / 1440.

### 1.4 Motion

One orchestrated moment; everything else answers an action.

- **The moment.** First load of the home hero: the five petals scale up from the convergence point in lifecycle order 01 → 05, 60ms stagger, 420ms each, `cubic-bezier(.2,.7,.2,1)`. Wordmark fades in after the last petal. Runs once per session (`sessionStorage` flag) — a returning visitor does not need the show.
- **Responsive motion.** Petal / tab selection crossfades the stage panel (200ms). Accordions open in 240ms via `grid-template-rows: 0fr → 1fr` (never animate height). Theme toggle transitions `background-color` and `color` for 150ms, nothing else. Buttons: colour change on hover, 1px inset ring on press, no scale.
- **Cross-page continuity.** Astro view transitions with `transition:name="arc"` on the mark: navigating from the services index to a service page, the arc persists and the relevant petal takes the active state. This is the site's one piece of spatial continuity and it is structural, not decorative.
- **Not used.** Scroll-triggered fade/slide on sections. Hover lift on cards. Parallax. Counters. Carousels. Cursor effects.
- `prefers-reduced-motion`: petals render in final state; all durations collapse to 0.

---

## 2. Layout concept

**Left-aligned, asymmetric, document-like.** The pages should read like a well-set technical
document, with the arc as the single graphic element allowed to break the grid.

### 2.1 Home

```
┌────────────────────────────────────────────────────────────────────┐
│ [arc] elvisfreg          Services  Projects  Company  Contact  [Request a quote] │  64px, border-bottom --line
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Electrical, automation and                 ┌──────────────────┐   │
│  calibration engineering for                │                  │   │
│  plants that cannot stop.                   │    ◜ ◝ ◜ ◝ ◜     │   │  ← the arc, ~420px wide,
│                                             │   the mark       │   │    petals stagger in once
│  Design, installation, PLC and HMI          │                  │   │
│  programming, instrument calibration        └──────────────────┘   │
│  and maintenance for oil and gas,                                  │
│  power and manufacturing sites across                              │
│  Nigeria.                                                          │
│                                                                    │
│  [Request a quote]   Download company profile (PDF, 4 MB)          │  ← 2nd CTA is a real artefact
│                                                                    │
│  Incorporated August 2025   RC 8734614                             │  ← mono for the RC only
├────────────────────────────────────────────────────────────────────┤
│  NIPEX prequalified    NUPRC licensed    National Institute of Welding    100% Nigerian-owned │  proof strip, plain text
├────────────────────────────────────────────────────────────────────┤
│  What we do, by stage of the asset lifecycle                       │
│                                                                    │
│           ◜ ◝ ◜ ◝ ◜   ← arc as selector: 5 petals = 5 tabs          │
│   Design   Installation   Automation   Instrumentation   Maintenance │  ← text tabs bound to the same state
│                                                                    │
│  ┌ 03  Intelligent automation and control ────────────────────┐    │  numbered: it is a sequence
│  │ PLC selection and programming, HMI development, VFD        │    │
│  │ commissioning, panel construction, modernisation of        │    │
│  │ existing systems.                                           │    │
│  │ PLC systems    HMI systems    Variable frequency drives     │    │  ← plain links, no arrows
│  └─────────────────────────────────────────────────────────────┘    │
├────────────────────────────────────────────────────────────────────┤
│  Recent work                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │  photos radius 0
│  │              │  │              │  │              │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│  CAT G3516 gas       100 kW solar       Instrument tubing          │  caption: body type
│  engine overhaul     installation       installation               │
│  Offshore            Lekki, Lagos       Oilfield                   │  location: mono (it's data)
├────────────────────────────────────────────────────────────────────┤
│  How we verify our own work                                        │
│  ┌ prose (cols 1–6) ────────┐  ┌ a calibration record (cols 8–12) ┐│  the record is a real
│  │ As-found data first.     │  │ Point   As found   As left   Err ││  table in mono — the
│  │ Five-point span test.    │  │ 0 %     0.02       0.00     0.02 ││  brand's own method,
│  │ As-left data recorded.   │  │ 25 %    25.11      25.00    0.11 ││  shown not described
│  │ Expanded uncertainty.    │  │ 50 %    …                       ││
│  │ Proficiency testing.     │  └──────────────────────────────────┘│
├────────────────────────────────────────────────────────────────────┤
│  Clients and partners                                              │  text list until logo
│  Exxon Mobil Nigeria   Seplat   Nestoil Group   Saipem   Niger Dock   FMC Technologies … │  permission is confirmed
├────────────────────────────────────────────────────────────────────┤
│  Send an enquiry                                                   │
│  [short form: name, email, what do you need]    +234 706 998 6848  │
│                                                  WhatsApp          │
├────────────────────────────────────────────────────────────────────┤
│  lockup   Head office / Lagos / Houston (NAP)   nav   RC 8734614   [Theme] │
└────────────────────────────────────────────────────────────────────┘
```

Headline options (all sentence case, all specific):

- **A.** *Electrical, automation and calibration engineering for plants that cannot stop.* — recommended
- **B.** *High-integrity electrical and automation engineering for Nigeria's oil, gas and industrial plants.* — use as the home meta description
- **C.** *We design, install, calibrate and maintain the systems that keep plants running.*

### 2.2 Service page

```
┌────────────────────────────────────────────────────┐
│ Services / Instrumentation and calibration         │  breadcrumb
│                                                    │
│ Instrumentation and calibration     ┌────────────┐ │
│ Two or three plain sentences on     │  ◜ ◝ ◜ ◝ ◜ │ │  arc, static, petal 04 active
│ scope and where it applies.         └────────────┘ │  (view-transitioned from the index)
│                                                    │
│ What we calibrate                                  │  H2
│ Pneumatic and hydraulic   Electronic instruments   │  grouped lists, 2 columns ≥768px
│ Survey instruments        Civil equipment          │
│ Weights and measurement   Electrical equipment     │
│                                                    │
│ How a calibration is run                           │  H2
│ 1  As-found reading   2  Adjustment   3  As-left   │  numbered: sequence
│ Multi-point at 0 / 25 / 50 / 75 / 100 % of span    │  mono
│                                                    │
│ Related                                            │
│ Hydrotest and pressure testing    Maintenance      │  plain links
│                                                    │
│ [Request a quote for calibration]                  │  CTA names the service
└────────────────────────────────────────────────────┘
```

### 2.3 Project page — the as-found / as-left structure

```
┌────────────────────────────────────────────────────┐
│ Projects / CAT G3516 gas engine overhaul           │
│ CAT G3516 gas engine overhaul                      │  H1
│ Offshore, Niger Delta    Mechanical    2025        │  mono meta (location, discipline, year are data)
│ ┌────────────────────────────────────────────────┐ │
│ │ lead photo, radius 0, full container width     │ │
│ └────────────────────────────────────────────────┘ │
│ As found          │ Work done         │ As left     │  3 columns ≥1024px, stacked below
│ what we saw       │ what we did       │ verified    │
│                   │                   │ state       │
│ [remaining photos, 2-col grid, radius 0]           │
└────────────────────────────────────────────────────┘
```

This is the brand's calibration methodology applied to storytelling. It also makes thin content
impossible — a project can't be published without saying what was found and what was left.

### 2.4 Theme default

**Light by default**, dark on `prefers-color-scheme: dark`, toggle in header, choice persisted.

Why light, given the brief's note that dark is where the palette is most at ease: the brand guide's
*Standard (Primary Full-Colour)* lockup is the light one; the audience reads on office monitors
and prints to PDF; and a dark-navy-with-orange-accent default is currently the single most common
AI-generated look. Dark is a first-class theme, not an afterthought — every token above is
specified for both — but it isn't the front door.

---

## 3. Information architecture

### 3.1 Sitemap

```
/                                        Home
/services/                               Overview — arc selector, all seven service families
/services/electrical/                    Domestic, commercial, industrial (one page, three anchored sections)
/services/automation-control/            PLC, HMI, VFD
/services/control-panels/                Design and fabrication
/services/power-energy/                  Solar PV, generators, UPS, hybrid, battery storage
/services/instrumentation-calibration/   All calibration disciplines + the QA methodology
/services/hydrotest-pressure-testing/    Tanks, pipelines, flow lines, valves 4–12 in
/services/maintenance/                   Preventive maintenance and troubleshooting
/projects/                               Index, 8 entries
/projects/<slug>/                        As-found / work done / as-left
/company/                                Overview, vision and mission, P.R.I.M.E. values, ownership, Nigerian content plan, certifications, clients
/contact/                                RFQ form, three offices, WhatsApp, phone
/company-profile.pdf                     The existing profile — must be compressed from 21 MB to under 5 MB first
/privacy/                                NDPR notice for the form
```

20 URLs. Electrical is one page rather than three because the domestic/commercial/industrial
lists overlap heavily; splitting them would make three thin pages competing for the same terms.

### 3.2 Navigation

Header: **Services** (dropdown, seven links grouped by lifecycle stage) · **Projects** · **Company** · **Contact** · **[Request a quote]**.
Mobile: full-height sheet, same order, theme toggle at the bottom.
Footer: lockup, three offices as full NAP, nav repeated, RC number, privacy, theme toggle.

### 3.3 The arc as navigation

The five petals map to lifecycle stages; each stage groups service pages. This is derived from
the brand guide's own definition of the mark, so it's an IA the brand already agreed to.

| Petal | Stage | Service pages |
|---|---|---|
| 01 | Design and systems architecture | control-panels (design), power-energy (system design) |
| 02 | Installation and integration | electrical, control-panels (fabrication), power-energy |
| 03 | Intelligent automation and control | automation-control |
| 04 | Instrumentation and commissioning | instrumentation-calibration, hydrotest-pressure-testing |
| 05 | Lifecycle optimisation and maintenance | maintenance |

Accessibility: petals alone are icon-only controls, so a row of five text tabs is bound to the same
state (`role="tablist"`, arrow-key navigation). At the arc's smallest rendered width (280px on
mobile) each petal is roughly 55px wide — above the 44px touch minimum.

**Brand-rule judgement call, needs Daniel's sign-off:** the active state dims inactive petals to
~40% opacity. The guide forbids recolouring individual petals; opacity on an interactive control
is arguably a UI state, not a recolour, but it should be a conscious decision. Alternative: keep
all petals at full flame and mark the active one with a 2px underline beneath the arc.

### 3.4 Content model (Astro content collections)

```
services/   title, slug, stages[], summary, sections[{heading, items[]}], related[], seo{title, description}
projects/   title, slug, location, discipline, year, lead (image), gallery[], asFound, workDone, asLeft
clients     name, sector, logoPermitted (bool)
offices     name, address lines, phone, geo, mapsUrl
```

---

## 4. Stack decision

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 5, static output** | Zero JS by default; content collections fit 7 services + 8 projects; `astro:assets` handles the 1 MB field JPEGs; view transitions for the arc; first-class SEO. |
| Styling | **Tailwind v4** with `@theme` tokens from §1 | Tokens become CSS variables natively; avoids the selector-specificity traps of hand-rolled CSS across 20 pages. Dark theme via `[data-theme=dark]` custom variant. |
| Interactivity | **No UI framework.** Vanilla `<script>` in Astro components | The arc selector, theme toggle, mobile nav and form enhancement total under 4 kB. React islands (`@astrojs/react`) are the escape hatch if a component outgrows this — including if we pull components from 21st.dev. |
| Animation | **CSS only** + IntersectionObserver where scroll position matters | The brief wants precise, mechanical motion; there is nothing here that needs a physics library. Add `motion` (5 kB) only if a spring proves necessary. |
| Fonts | `@fontsource-variable/outfit`, `@fontsource-variable/jetbrains-mono`, self-hosted, `font-display: swap`, size-adjusted fallbacks | No third-party request, no consent implication, better LCP than Google Fonts CDN. |
| Icons | Lucide, 1.5px stroke, used sparingly (contact, nav, form states) | Consistent stroke; no emoji anywhere. |
| Hosting | **Vercel** | Matches existing deploy workflow. Static site + one serverless function. |
| Form backend | Vercel function `/api/enquiry` → **Resend** | Free tier covers volume; domain verification also fixes SPF/DKIM so mail from the site isn't junked. Sends to `elvisfregnlgltd@gmail.com` and an acknowledgement to the sender. |
| Spam | Honeypot field + **Cloudflare Turnstile** | Free, no Google, no cookie consent implication. |
| Validation | Native HTML constraints, enhanced by JS on blur; **zod** server-side | Form works with JS disabled. |
| Analytics | **Vercel Web Analytics** | Cookieless, no banner, zero setup on Vercel. |
| Quality gate | Lighthouse CI on every preview; axe-core | Targets in §6.5. |

---

## 5. The enquiry form

One form, on `/contact/`, with a shortened three-field version on the home page that posts to
the same endpoint.

### 5.1 Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| Your name | text, `autocomplete="name"` | yes | |
| Company | text, `autocomplete="organization"` | no | |
| Email | email, `autocomplete="email"` | yes | |
| Phone | tel, `autocomplete="tel"` | no | Nigerian format hint; WhatsApp-capable noted |
| Sector | select | yes | Oil and gas / Power / Manufacturing / Commercial building / Residential / Other |
| Service needed | select, grouped by lifecycle stage | yes | Pre-filled when arriving from a service page CTA |
| Site location | text | no | City or facility |
| What do you need? | textarea | yes | Placeholder is an example, not the label |
| Consent | checkbox | yes | "Elvisfreg may contact me about this enquiry." Links to /privacy/ |
| (honeypot) | hidden text | — | Bots fill it, humans can't see it |
| Turnstile | widget | — | Invisible mode |

No file upload in v1 — it's the largest abuse surface on a public form. If RFQ documents are
needed, add signed uploads to object storage later.

### 5.2 Behaviour

- Visible labels above fields. One field per row; email and phone side by side from 768px.
- Validate on blur, not keystroke. Error text directly below the field, in `--fault`, with an icon; the field gets a `--fault` border. Never colour alone.
- On submit with errors: summary at the top with anchor links, focus moves to the first invalid field, `role="alert"`.
- Submitting: button disabled, label changes to *Sending…*, no spinner theatre.
- Sent: the form is replaced in place by a confirmation — *Enquiry sent. We'll reply to `<email>`.* — in `--ok-text` with a check icon, `aria-live="polite"`. Copy stays in sentence case and doesn't promise a reply time the client hasn't committed to.
- Fault: *Couldn't send. Check your connection and try again, or email elvisfregnlgltd@gmail.com directly.* Retry keeps the entered values.
- Every input ≥44px tall. `touch-action: manipulation`.
- Beside the form, always: phone `+234 706 998 6848` and a WhatsApp link (`wa.me/2347069986848`) — in Nigerian B2B this is frequently the channel that actually gets answered.

---

## 6. SEO preparedness

### 6.1 Structure

- One H1 per page, unique, matching the page's head term. Sequential headings.
- Semantic URLs as in §3.1, trailing slash, canonical on every page, `lang="en-NG"`.
- `@astrojs/sitemap`, `robots.txt`, `<meta name="robots" content="index,follow">`.
- Breadcrumbs (visible + `BreadcrumbList` JSON-LD) on every page below home.

### 6.2 Metadata

- Title: `{Page} — Elvisfreg Nigeria Limited`, ≤60 characters.
- Description: factual, ≤155 characters, one head term, no marketing adjectives (the brand tone and Google agree here).
- Open Graph and Twitter cards on every page; OG image 1200×630 generated at build from a branded template (navy ground, lockup, page title) so each service page shares with its own title.

### 6.3 Head terms (one per page)

| Page | Head term | Supporting |
|---|---|---|
| Home | engineering services company Nigeria | electrical automation calibration Warri Lagos |
| Electrical | electrical installation company Nigeria | industrial electrical contractor, LV distribution, earthing |
| Automation | PLC programming Nigeria | HMI development, VFD installation, SCADA integration |
| Control panels | control panel fabrication Nigeria | MCC panels, motor control panels |
| Power & energy | solar installation company Lagos | generator installation, UPS, hybrid inverter systems |
| Instrumentation & calibration | instrument calibration services Nigeria | pressure gauge calibration, calibration laboratory Warri |
| Hydrotest | hydrotest services Nigeria | pressure testing valves, tank integrity testing |
| Maintenance | industrial electrical maintenance Nigeria | preventive maintenance, PLC troubleshooting |

### 6.4 Structured data

- `Organization` (site-wide): `legalName`, `foundingDate: 2025-08`, `identifier` RC 8734614, `logo`, `sameAs` (LinkedIn, NIPEX profile when available), three `PostalAddress` locations, `ContactPoint`.
- `ProfessionalService` on `/contact/` for the Warri head office with `geo` and opening hours.
- `Service` on each service page with `provider` → Organization and `areaServed: Nigeria`.
- `BreadcrumbList` everywhere below home.

### 6.5 Performance budget (Core Web Vitals are a ranking signal, and Nigerian mobile networks are the real test)

| Metric | Target |
|---|---|
| LCP | < 2.0s on throttled 4G |
| CLS | < 0.05 — every image has intrinsic dimensions |
| INP | < 200ms |
| JS shipped | < 15 kB total |
| Lighthouse | 100 / 100 / 100 / 100 on every preview, enforced by CI |

Images: `<Picture>` from `astro:assets`, AVIF + WebP, widths 480 / 800 / 1200 / 1600, `sizes`
declared, `loading="lazy"` below the fold, hero `fetchpriority="high"`. Descriptive filenames and
alt text that says what the photo shows (*"Technician performing preventive maintenance on a
process power panel"*), not the project name.

### 6.6 Outside the codebase, but on the checklist

- Google Business Profiles for Warri and Lagos with NAP identical to the site footer and the JSON-LD.
- Domain — not yet known. Recommend `elvisfreg.com` with `elvisfreg.com.ng` redirecting to it.
- Resend domain verification needs DNS access (SPF, DKIM, DMARC).
- No hreflang — single language.

---

## 7. Review against defaults

The `frontend-design` skill requires this pass: what in the plan is a choice for *this* brief, and
what would I have produced for any B2B engineering site?

| Element | Default? | What makes it specific here | Verdict |
|---|---|---|---|
| Hero: headline left, graphic right, two CTAs | Yes, conventional | The graphic is the brand mark performing its own lifecycle sequence; the second CTA is a real PDF the audience actually wants | Keep — the audience wants conventional; boldness is spent on the arc selector |
| Proof strip of certifications | Trust & Authority default | Plain text, RC in mono, no badge art, no logo carousel | Keep |
| Three-up project grid | Yes | Radius-0 photos, body-type captions, and the as-found / as-left detail structure behind it | Keep |
| Navy + orange palette | Matches the "near-black + vermilion accent" cluster | Brand-mandated. Mitigated by light default, the orange budget, and no gradients or glows | Keep, brand wins |
| Warm off-white ground | Brushes the "cream + serif + terracotta" cluster | `#FFFBF9` is far whiter than that cluster's `#F4F1EA`; geometric sans not serif; flame not terracotta | Keep, brand wins |
| Mono for small text | Named tell | Brand-mandated for *data*; restricted to data | Keep, restricted |
| Numbered markers | Named tell | Used only on two genuine sequences: the five stages and the three calibration steps | Keep, restricted |
| Eyebrow labels above H2s | Named tell | — | **Removed** on review |
| Persistent left rail with the arc | Dashboard idiom | — | **Removed** on review |
| Stat counters ("50+ projects") | Named tell | Company was incorporated in 2025; the numbers would be invented | **Never** |
| Testimonial carousel | Default social proof | — | **Replaced** by the client list and the as-found / as-left projects |
| Middle-dot meta strings, arrows on links, all-caps labels, card shadows, scroll-fades, hover-lift | Named tells | — | **Not used** |

The one element allowed to be memorable: **the arc as a working control**, sweeping once on load
and persisting across pages as the service selector. Everything else is quiet on purpose.

---

## 8. Decisions needed from Daniel

1. **Petal active state** — opacity dimming (cleaner) or underline marker (strictly brand-safe)? See §3.3.
2. **Domain name.**
3. **Project copy** — the eight projects need as-found / work done / as-left text. I can draft from the captions for the client to verify.
4. **Client logos** — text list until written permission exists.
5. **Company profile PDF** — the 21 MB `Elvisfreg.pdf` needs compressing to under 5 MB before it's linked.
6. **Form recipient** — confirm `elvisfregnlgltd@gmail.com`, and whether a second recipient is wanted.
7. **DNS access** for Resend verification, when we get there.

---

## 9. Build sequence

1. Scaffold — Astro, Tailwind v4, tokens, fonts, theme toggle, header/footer shell. *Local, both themes, 375px.*
2. Home — hero with the load sequence, arc selector, projects, QA record, clients, short form.
3. Content collections and the seven service pages plus index; view transition on the arc.
4. Projects index and eight detail pages *(photos pending)*.
5. Company, contact, form endpoint, Turnstile, Resend.
6. SEO layer — SEO component, JSON-LD, sitemap, OG images, robots.
7. QA — Lighthouse CI, axe, keyboard walk, reduced motion, both themes, 375px and landscape.
8. Vercel preview → review → production.

Each step is verified locally before anything is pushed.
