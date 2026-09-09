// Build-time slimming for the brand SVGs that are inlined into every page.
// The source files in assets/brand/logo are left as supplied; only the
// inlined copy is optimised. Two decimals in a 246-unit-wide drawing is
// 0.01 of a unit, far below a device pixel at any size the site renders.
// Structure the components rely on is kept: classes (.ef-mark, .ef-petal,
// .ef-seg-0N, .ef-wordmark), ids, groups, role and aria-label.
import { optimize } from 'svgo';

export function slimSvg(raw: string): string {
  return optimize(raw, {
    multipass: true,
    floatPrecision: 2,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIds: false,
            collapseGroups: false,
            removeUnknownsAndDefaults: false,
          },
        },
      },
    ],
  }).data;
}
