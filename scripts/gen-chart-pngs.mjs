// Renders a PNG twin next to every chart SVG in public/img and public/charts.
// Google Images indexes SVG poorly and nobody can pin/share/embed one, so the
// built pages display the PNG (see postbuild-images.mjs) while the original
// SVG stays reachable behind the figure link for anyone who wants the vector.
//
// Runs via the `prebuild` npm hook. Skips PNGs newer than their SVG.
// Run manually: node scripts/gen-chart-pngs.mjs
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const DIRS = ["public/img", "public/charts"];
const WIDTH = 1600; // 2x a typical 800px article column, retina-crisp

let made = 0, skipped = 0;
for (const dir of DIRS) {
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".svg"));
  } catch {
    continue;
  }
  for (const f of files) {
    const svgPath = join(dir, f);
    const pngPath = svgPath.replace(/\.svg$/, ".png");
    try {
      if (statSync(pngPath).mtimeMs > statSync(svgPath).mtimeMs) {
        skipped++;
        continue;
      }
    } catch {
      // no PNG yet
    }
    // density 300 gives libvips enough pixels to downscale to WIDTH cleanly
    await sharp(svgPath, { density: 300 })
      .resize({ width: WIDTH, withoutEnlargement: false })
      .png({ palette: true, compressionLevel: 9 })
      .toFile(pngPath);
    made++;
  }
}
console.log(`chart PNGs: ${made} rendered, ${skipped} up to date`);
