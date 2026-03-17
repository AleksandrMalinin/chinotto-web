/**
 * Regenerates favicon PNGs and ICO from public/favicon.svg.
 * Usage: pnpm favicon
 */

import { createRequire } from "module";
import { readFile, writeFile } from "fs/promises";
import { pathToFileURL } from "url";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
// Resolve packages from project root so pnpm/node_modules layout works
const require = createRequire(pathToFileURL(join(ROOT, "package.json")).href);
const { Resvg } = require("@resvg/resvg-js");
const toIco = require("to-ico");

const SVG_PATH = join(ROOT, "public", "favicon.svg");
const PUBLIC = join(ROOT, "public");

async function renderPng(svg, size) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

async function main() {
  const svg = await readFile(SVG_PATH, "utf-8");

  const [png16, png32, png180] = await Promise.all([
    renderPng(svg, 16),
    renderPng(svg, 32),
    renderPng(svg, 180),
  ]);

  await Promise.all([
    writeFile(join(PUBLIC, "favicon-16.png"), png16),
    writeFile(join(PUBLIC, "favicon-32.png"), png32),
    writeFile(join(PUBLIC, "favicon-32x32.png"), png32),
    writeFile(join(PUBLIC, "favicon-light-16.png"), png16),
    writeFile(join(PUBLIC, "favicon-light-32.png"), png32),
    writeFile(join(PUBLIC, "apple-touch-icon.png"), png180),
  ]);

  const ico = await toIco([png16, png32]);
  await writeFile(join(PUBLIC, "favicon.ico"), ico);

  console.log("Favicons generated: favicon.ico, favicon-*.png, apple-touch-icon.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
