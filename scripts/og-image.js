/**
 * Generates public/og-image.png from public/og-image.svg (Inter font, same as site).
 * Usage: pnpm og-image
 */

import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SVG_PATH = join(ROOT, "public", "og-image.svg");
const OUT_PATH = join(ROOT, "public", "og-image.png");

async function main() {
  const svg = await readFile(SVG_PATH, "utf-8");
  const fontsDir = join(__dirname, "fonts");
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    font: {
      fontFiles: [
        join(fontsDir, "Inter-Light.ttf"),
        join(fontsDir, "Inter-Regular.ttf"),
      ],
      loadSystemFonts: false,
      sansSerifFamily: "Inter",
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  await writeFile(OUT_PATH, pngBuffer);
  console.log("Wrote", OUT_PATH);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
