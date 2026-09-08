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

## Before launch

- [ ] Set the domain in `astro.config.mjs` (`SITE`) and `public/robots.txt`.
- [ ] Drop the compressed company profile at `public/company-profile.pdf` (under 5 MB).
- [ ] Add `public/og-default.png` (1200×630) or wire build-time OG generation.
- [ ] Replace `Placeholder` blocks with `<Picture>` once photography arrives.
- [ ] Verify project copy in `src/data/projects.ts` with the client.
- [ ] Resend domain verification (SPF, DKIM, DMARC) and Turnstile keys in Vercel.
- [ ] Decide petal active-state treatment (currently scale, no recolour).
