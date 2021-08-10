// Import Node.js Dependencies
import * as fs from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(import.meta.url);

const FLAGS = JSON.parse(
  fs.readFileSync(
    new URL("src/manifest.json", import.meta.url)
  )
);

// Export src/manifest.json
export function getManifest() {
  return FLAGS;
}

// Return set flags
export function getFlags() {
  return new Set(Object.values(FLAGS).map((flagDescriptor) => flagDescriptor.title));
}

// Read specific flag file
export function getFlagFile(name) {
  if (typeof name !== "string") {
    throw new Error("You should provide a flag name");
  }

  return fs.createReadStream(join(__dirname, `../src/flags/${name}.html`));
}
