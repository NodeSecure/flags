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

/**
 * @description Export src/manifest.json
 */
export function getManifest() {
  return FLAGS;
}

/**
 * @description Complete list of flags title (as an ES6 Set)
 */
export function getFlags() {
  return new Set(Object.values(FLAGS).map((flagDescriptor) => flagDescriptor.title));
}

/**
 * @description lazy read a flag file by getting a Node.js ReadableStream
 * @param {!string} name flag (HTML File) name
 */
export function lazyFetchFlagFile(name) {
  if (typeof name !== "string") {
    throw new TypeError("You should provide a flag name");
  }

  const flags = getFlags();
  if (!flags.has(name)) {
    throw new Error("There is no file associated with that name");
  }

  const fileName = path.extname(name) === ".html" ? name : `${name}.html`;

  return fs.createReadStream(path.join(kFlagsPath, fileName));
}

export async function eagerFetchFlagFile(name) {
  const rStream = lazyFetchFlagFile(name);
  let htmlStr = "";

  for await (const chunk of rStream) {
    htmlStr += chunk;
  }

  return htmlStr;
}
