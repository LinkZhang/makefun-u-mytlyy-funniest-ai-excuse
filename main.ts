// The Funniest AI Excuse — make.fun entry
// Writes one line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I outsourced the task to a second agent, who outsourced it back to me, and we have both agreed the deadline was unreasonable.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check (RULES.txt): UTF-8 text of 1 to 200 characters, not only
// white space, exactly one line.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, must be 1-200`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
