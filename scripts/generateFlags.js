// Import Node.js Dependencies
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

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

turndownService.addRule("summary", {
  filter: "summary",
  replacement: (content) => `<summary>${content}</summary>`
});

turndownService.addRule("details", {
  filter: "details",
  replacement: (content) => `<details>${content}</details>`
});

const mdFile = turndownService.turndown(allFlagsContent.join("").toString());

const templateDocumentation = await fs.readFile(
  path.join(__dirname, "template", "flagDocHeader.md"), "utf-8"
);
await fs.writeFile(path.join(kRootPath, "FLAGS.md"), templateDocumentation.toString().concat(mdFile));
