// Import Node.js Dependencies
import { createReadStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __dirname = fileURLToPath(import.meta.url);

const FLAGS = JSON.parse(
  await readFile(
    new URL('src/manifest.json', import.meta.url)
  )
);

// Export src/manifest.json
export function getManifest() {
  return FLAGS
}

// Return set flags
export function getFlags() {
  return new Set(Object.values(FLAGS).map((flagDescriptor) => flagDescriptor.title));
}

// Read specific flag file
export function getFlagFile(name) {
  if (!name) {
    throw new Error("You should provide a flag name")
  }

  return createReadStream(join(__dirname, `../src/flags/${name}.html`))
}
