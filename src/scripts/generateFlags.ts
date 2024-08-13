// Import Node.js Dependencies
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Import Third-party Dependency
import TurndownService from "turndown";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kRootPath = path.join(__dirname, "..");
const kFlagsPath = path.join(kRootPath, "src", "flags");

const files = await fs.readdir(kFlagsPath);
const allFlagsContent = await Promise.all(
  files.map((file) => fs.readFile(path.join(kFlagsPath, file)))
);

const turndownService = new TurndownService();

turndownService.addRule("h1", {
  filter: "h1",
  replacement: (content) => `<summary>${content}</summary>`
});

turndownService.addRule("div", {
  filter: "div",
  replacement: (content) => `<details>${content}</details>`
});

const mdFile = turndownService.turndown(allFlagsContent.join("").toString());

const templateDocumentation = await fs.readFile(
  path.join(__dirname, "template", "flagDocHeader.md"), "utf-8"
);
await fs.writeFile(path.join(kRootPath, "FLAGS.md"), templateDocumentation.toString().concat(mdFile));
