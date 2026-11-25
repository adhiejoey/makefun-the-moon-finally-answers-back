import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Four billion years of wishes, howls, and 2 a.m. promises you'll change — I'm still just a rock, and you're still texting your ex.";

if (entry.trim().length === 0 || entry.length > 240) {
  throw new Error("Entry must be 1 to 240 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
