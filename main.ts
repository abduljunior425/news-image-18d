// news-image-20261118 entry 4 — "THE MARKETS REACT".
// Copies the pre-built front page (entry.png, beside this file) into the
// grader's output directory, after checking it is really the PNG we built:
// magic bytes, 1024x1024 IHDR, and a byte-identical copy (SHA-256).
// Node standard library only, no network.
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

const bytes = readFileSync(source);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error("entry.png is not a PNG (bad magic bytes)");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}
const before = createHash("sha256").update(bytes).digest("hex");
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

const copied = readFileSync(dest);
const after = createHash("sha256").update(copied).digest("hex");
if (after !== before) {
  throw new Error(`copy mismatch: ${after} != ${before}`);
}
console.log(`wrote ${dest} (${statSync(dest).size} bytes, sha256 ${after})`);
