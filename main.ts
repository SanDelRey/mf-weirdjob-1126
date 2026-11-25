// entry.txt: the weirdest job title, 60 characters at most.
// A real-sounding office title with one specific, absurd twist.
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text = "Deputy Undersecretary of Group Chat Silence";
const line = text.trim();
if (line.length < 1 || line.length > 60) throw new Error("line is " + line.length + " chars");
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
