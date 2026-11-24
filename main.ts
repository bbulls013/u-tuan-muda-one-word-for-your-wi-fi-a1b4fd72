// One Word for Your Wi-Fi — entry program.
// Writes the single-word entry to /output/entry.txt, deterministically.
// Gate budget: 1-20 UTF-8 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Buffering"; // 9 chars, inside the 1-20 budget; no trailing newline,
// so the file holds exactly the word and nothing else.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
