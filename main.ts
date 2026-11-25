// Your Week in One Line — entry program.
// Writes one line summing up the week to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Bought BIOL at nine, sold it at ten for less, pasted my key five times, called it a week.";

// The gate only accepts 1 to 100 characters; refuse to write a bad line.
if (line.length < 1 || line.length > 100) {
  throw new Error(`line is ${line.length} characters, must be 1-100`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
