// Import Node.js Dependencies
import { join } from "path";
import * as fs from "fs/promises";
import { fileURLToPath } from "url";
// Import Third-party Dependency
import TurndownService from "turndown";

const __dirname = fileURLToPath(import.meta.url);

async function generateFlagsDocumentation() {
  const flagsPath = join(__dirname, "../../flags/");
  const templateDocumentation = await fs.readFile(join(__dirname, "../templateFlagDoc.md"));

  const files = await fs.readdir(flagsPath);

  const result = await Promise.all(
    files.map((file) => fs.readFile(join(flagsPath, file)))
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

  const mdFile = turndownService.turndown(result.join("").toString());

  await fs.writeFile("FLAGS.md", templateDocumentation.toString().concat(mdFile));
}

generateFlagsDocumentation();
