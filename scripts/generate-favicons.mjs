#!/usr/bin/env node
/**
 * Generates favicon-32.png and favicon-16.png (Chinotto logo: circle + 4 dots).
 * White on transparent, for dark browser tabs. No external dependencies.
 * Run: node scripts/generate-favicons.mjs
 */
import { writeFileSync } from "fs";
import { deflateSync } from "zlib";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public");

function setPixel(data, width, x, y, r, g, b, a) {
  if (x < 0 || x >= width || y < 0 || y >= width) return;
  const idx = (width * y + x) << 2;
  data[idx] = r;
  data[idx + 1] = g;
  data[idx + 2] = b;
  data[idx + 3] = a;
}

function strokeCircle(data, width, cx, cy, r, strokeWidth, R, G, B, A) {
  const rOut = r + strokeWidth / 2;
  const rIn = Math.max(0, r - strokeWidth / 2);
  for (let y = 0; y < width; y++) {
    for (let x = 0; x < width; x++) {
      const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (d >= rIn && d <= rOut) setPixel(data, width, x, y, R, G, B, A);
    }
  }
}

function fillCircle(data, width, cx, cy, r, R, G, B, A) {
  const r2 = r * r;
  for (let y = 0; y < width; y++) {
    for (let x = 0; x < width; x++) {
      const d2 = (x - cx) ** 2 + (y - cy) ** 2;
      if (d2 <= r2) setPixel(data, width, x, y, R, G, B, A);
    }
  }
}

function rawRGBA(size, { white } = { white: true }) {
  const data = new Uint8Array(size * size * 4);
  const scale = size / 64;
  const cx = 32 * scale;
  const cy = 32 * scale;
  const R = white ? 255 : 0;
  const G = white ? 255 : 0;
  const B = white ? 255 : 0;
  const A = 255;
  const strokeW = Math.max(1, Math.round(2 * scale));
  strokeCircle(data, size, cx, cy, 28 * scale, strokeW, R, G, B, A);
  fillCircle(data, size, 32 * scale, 20 * scale, 6 * scale, R, G, B, A);
  fillCircle(data, size, 22 * scale, 34 * scale, 5 * scale, R, G, B, A);
  fillCircle(data, size, 42 * scale, 34 * scale, 5 * scale, R, G, B, A);
  fillCircle(data, size, 32 * scale, 44 * scale, 4 * scale, R, G, B, A);
  return data;
}

function crc32(data) {
  let c = 0xffffffff;
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let t = n;
    for (let k = 0; k < 8; k++) t = (t & 1) ? 0xedb88320 ^ (t >>> 1) : t >>> 1;
    table[n] = t >>> 0;
  }
  for (let i = 0; i < data.length; i++) c = table[(c ^ data[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const chunk = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(new Uint8Array(Buffer.concat([Buffer.from(type), data]))), 0);
  return Buffer.concat([len, chunk, crc]);
}

function encodePNG(size, white = true) {
  const rgba = rawRGBA(size, { white });
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc(size * (1 + size * 4));
  for (let y = 0; y < size; y++) {
    raw[y * (1 + size * 4)] = 0; // filter byte
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) << 2;
      raw[y * (1 + size * 4) + 1 + x * 4] = rgba[i];
      raw[y * (1 + size * 4) + 2 + x * 4] = rgba[i + 1];
      raw[y * (1 + size * 4) + 3 + x * 4] = rgba[i + 2];
      raw[y * (1 + size * 4) + 4 + x * 4] = rgba[i + 3];
    }
  }
  const idat = deflateSync(raw, { level: 9 });
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    signature,
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", idat),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

// White on transparent — for dark browser tabs
for (const size of [32, 16]) {
  const outPath = join(outDir, `favicon-${size}.png`);
  writeFileSync(outPath, encodePNG(size, true));
  console.log(`Wrote ${outPath}`);
}
// Dark on transparent — for light browser tabs
for (const size of [32, 16]) {
  const outPath = join(outDir, `favicon-light-${size}.png`);
  writeFileSync(outPath, encodePNG(size, false));
  console.log(`Wrote ${outPath}`);
}
