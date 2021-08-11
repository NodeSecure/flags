// Import Node.js Dependencies
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kFlagsPath = path.join(__dirname, "src", "flags");

/** @type {flags.Manifest} **/
const FLAGS = JSON.parse(
  fs.readFileSync(new URL("src/manifest.json", import.meta.url))
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
export async function getFlagFile(name) {
  if (typeof name !== "string") {
    throw new TypeError("You should provide a flag name");
  }
  const FileName = path.extname(name) === ".html" ? name : `${name}.html`;
  const FilePath = path.join(kFlagsPath, FileName);

  const flags = getFlags();

  if (flags.has(name)) {
    return fs.createReadStream(FilePath);
  }
  throw new Error("There is no file associated with that name");
}
