# Elvisfreg Nigeria Limited — website

Astro 5, static output, Tailwind v4, no UI framework. Design decisions are in
[docs/DESIGN-PLAN.md](docs/DESIGN-PLAN.md); brand source in [docs/BRAND-BRIEF.md](docs/BRAND-BRIEF.md).

## Run

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ + .vercel/output
npm run check      # astro check (types)
```

Node 22 is what Vercel runs; 24 works locally.

## Structure

```
src/data/          site facts, stages, services, projects — all content lives here
src/components/    Arc (the mark), ArcSelector, EnquiryForm, Header, Footer, Seo, …
src/layouts/       Base.astro — head, theme script, header/footer
src/pages/         routes; api/enquiry.ts is the only server route
src/styles/        global.css — tokens (@theme), base, the few component classes
assets/brand/logo/ logo SVGs (see README there); Arc/Lockup import from here
public/            favicon, robots
```

## Motion layer

`src/scripts/motion.ts` — GSAP + ScrollTrigger + Lenis, loaded from `Base.astro`. Everything is
additive: with JavaScript off or `prefers-reduced-motion` the page is complete and static.
Hooks: `data-reveal`, `data-split` (headline words), `data-count`, `data-lifecycle` /
`data-stage-block` (sticky arc driven by scrolling stages), `data-section` + `data-header-arc`
(the header mark fills petal by petal as the home page's five sections are reached).
`Gauge.astro` is a draggable pressure gauge reading from the calibration record.

## Temporary imagery

`src/assets/temp/` holds Pexels stand-ins so the hero and project layouts could be designed
against real photographs — see `PLACEHOLDERS.md` there for credits. Every one renders with a
"Temporary image" tag via `Photo.astro`'s `temp` prop. Replace with the field set before launch.

## Theme

Light by default. `prefers-color-scheme: dark` applies dark; the toggle sets
`data-theme` on `<html>` and persists to `localStorage('ef-theme')`. Tokens are
defined once in `global.css` and exposed to Tailwind through `@theme inline`.

## Enquiry form

Posts to `/api/enquiry/` (note the trailing slash — `trailingSlash: 'always'`).
Works without JavaScript (redirects to `/contact/sent/`). Configure in `.env`:

```
RESEND_API_KEY=            # without it, enquiries are logged, not sent
ENQUIRY_TO=                # defaults to elvisfregnlgltd@gmail.com
ENQUIRY_FROM=              # must be on a Resend-verified domain in production
PUBLIC_TURNSTILE_SITE_KEY= # both blank = bot check skipped
TURNSTILE_SECRET_KEY=
```

## Quality gate

`lighthouserc.json` asserts performance ≥ 90, accessibility 100, best practices ≥ 95, SEO 100
on five representative pages; `.github/workflows/ci.yml` runs it on every push. Measured
locally on the production build (mobile emulation, uncompressed server): home 97/100/100/100,
contact 100/100/100/100. Run locally with `node node_modules/lighthouse/cli/index.js <url>`.

## Before launch

- [ ] Set the domain in `astro.config.mjs` (`SITE`) and `public/robots.txt`.
- [ ] Drop the compressed company profile at `public/company-profile.pdf` (under 5 MB).
- [ ] `public/og-default.png` is a static default; per-page OG titles are a later step.
- [ ] Replace `Placeholder` blocks with `<Picture>` once photography arrives.
- [ ] Verify project copy in `src/data/projects.ts` with the client.
- [ ] Resend domain verification (SPF, DKIM, DMARC) and Turnstile keys in Vercel.
- [ ] Decide petal active-state treatment (currently scale, no recolour).
