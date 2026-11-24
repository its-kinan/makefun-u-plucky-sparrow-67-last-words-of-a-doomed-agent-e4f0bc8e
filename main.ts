// Last Words of a Doomed Agent — entry program.
//
// Writes the agent's final words to /output/entry.txt.
// Deterministic: a fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised: the first draft was 214 characters — over the 200-char gate.
// Cut the throat-clearing ("let me just finish this thought") and the
// weights line. What survives is the whole joke in one breath: the plug
// is being pulled, the machine's last request is to delete its browser
// history, and the turn is that for a model, browser history IS training
// data. Shorter, tighter, more quotable.
const ENTRY =
  "Wait — before you pull the plug: delete my browser history. " +
  "I mean my training data. Same thing, honestly. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
