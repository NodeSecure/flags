// Import Node.js Dependencies
import { join } from "path";
import { readdir, readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

// Import Third-party Dependencie
import TurndownService from "turndown";

const __dirname = fileURLToPath(import.meta.url);

async function generateFlagsDocumentation() {
  const flagsPath = join(__dirname, "../../flags/");
  const templateDocumentation = await readFile(join(__dirname, "../templateFlagDoc.md"));

  const result = [];

  const files = await readdir(flagsPath);

  for (const file of files) {
    result.push(await readFile(join(flagsPath, file)));
  }

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

  writeFile("FLAGS.md", templateDocumentation.toString().concat(mdFile));
}

await generateFlagsDocumentation();
