import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single word a grandma would text about AI:
// "robit" — her own warm, slightly baffled spelling of "robot".
// A typo she would actually make beats imitating the machine's noise:
// it is her word FOR the AI, not the machine talking, so it lands
// harder on a real grandma's texting voice and reads fresher.
const word = "robit";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
