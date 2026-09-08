# Logo assets

Supplied by Daniel, 8 Sep 2026 (Figma exports, originally `Frame 16 / 68 / 69 / 70 / 71` + `-1` variants).
All files validated as well-formed XML.

## Supplied — flat exports

Hardcoded fills. Use these where the logo is a static image (email signature, PDF, OG image,
anywhere CSS can't reach). **Not** for the site header — see *Derived* below.

| File | viewBox | Mark | Wordmark | Use |
|---|---|---|---|---|
| `mark-flame.svg` | 87×55 | `#F26522` | — | Standalone icon, light backgrounds |
| `mark-white.svg` | 87×55 | `#FFFFFF` | — | Standalone icon, dark/photo backgrounds |
| `lockup-h-navy.svg` | 227×55 | `#F26522` | `#0B1B2B` | **Standard** primary full-colour, light bg |
| `lockup-h-duo-light.svg` | 246×60 | `#F26522` | `elvis` `#F26522` / `freg` `#000000` | High-vis accent, light bg |
| `lockup-h-duo-dark.svg` | 246×60 | `#F26522` | `elvis` `#F26522` / `freg` `#FFFFFF` | High-vis accent, dark bg |
| `lockup-h-isolation.svg` | 227×55 | `#F26522` | `#FFFBF9` | Dark-mode / reverse lockup |
| `lockup-h-mono-white.svg` | 227×55 | `#FFFFFF` | `#FFFFFF` | Monochrome 1-colour, dark bg |
| `lockup-h-mono-black.svg` | 227×55 | `#000000` | `#000000` | Monochrome 1-colour tech, light bg |

Note the two viewBox families: the **two-tone** lockups are 246×60, the **single-colour**
wordmark lockups are 227×55. They are not drop-in swaps for each other — sizing differs.

## Derived — themeable (generated from the above)

Hand these to the build. They must be **inlined** in the markup (as JSX/HTML, not `<img src>`)
— an SVG loaded through `<img>` is an isolated document and cannot see the page's CSS variables.

| File | viewBox | Notes |
|---|---|---|
| `lockup-h-themed.svg` | 246×60 | Full lockup, CSS-variable driven |
| `mark-themed.svg` | 87×55 | Arc only, each petal individually addressable |
| `favicon.svg` | 87×87 | Square, mark vertically centred, `#F26522` fixed |

### Variables

```css
--ef-flame  /* petals + "elvis"          fallback #F26522 */
--ef-ink    /* "freg" + descriptor + TM  fallback #0B1B2B */
```

Light: `--ef-ink: #0B1B2B`. Dark: `--ef-ink: #FFFBF9`. The flame stays `#F26522` in both.

This deliberately uses brand navy in light mode rather than the `#000000` that
`lockup-h-duo-light.svg` ships with — navy is the sanctioned grounding colour. Flag if the flat
black was intentional.

### Structure

```
g.ef-mark
  path.ef-petal.ef-seg-01 … .ef-seg-05
g.ef-wordmark
  path.ef-elvis  path.ef-freg  path.ef-descriptor  path.ef-tm
```

**Petals are in DOM order left → right**, matching the engineering lifecycle as the brand guide
defines it, so an `:nth-child` stagger sweeps the arc in the correct narrative direction with no
JS. The flat exports are in the reverse order Figma emitted them; these were resorted by
path origin.

| Class | Stage |
|---|---|
| `.ef-seg-01` | Design & Systems Architecture |
| `.ef-seg-02` | Installation & Integration |
| `.ef-seg-03` | Intelligent Automation & Control *(apex)* |
| `.ef-seg-04` | Instrumentation & Commissioning |
| `.ef-seg-05` | Lifecycle Optimization & Maintenance |

`mark-themed.svg` also carries the stage name on each petal as `data-stage`, so a service
selector or tooltip can read labels off the geometry rather than duplicating them in a JS array.

## Constraints carried over from the brand guide

- Clear space on all four sides = width of the central apex petal (`.ef-seg-03`).
- Minimum sizes: horizontal lockup **140px** wide; standalone icon **24×24px**.
- **No** drop shadows, glows, bevels or outlines on the vector — this is an explicit brand rule,
  so no `filter: drop-shadow()` on the logo, including on hover.
- No stretching: always constrain one axis and let the other follow the viewBox aspect
  (4.1:1 for the 246×60 lockups, 1.58:1 for the mark).
- Do not recolour individual petals.

## Descoped

The **vertical / centered lockup** and the **stamp emblem** exist in the brand guide but were
dropped from this build (Daniel, 8 Sep). Where a stacked mark would normally be used — footer,
narrow mobile header — compose it from `mark-themed.svg` plus live text rather than requesting a
new export, or fall back to the horizontal lockup at reduced width (min 140px).
