// Import Node.js Dependencies
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Import Internal Dependencies
import { FLAGS } from "./src/manifest.js";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const kFlagsPath = path.join(__dirname, "src", "flags");
const kNotFoundFlags = "🔴";
const kManifestEmoji = Object.fromEntries(getManifestEmoji());

/**
 * @description Export src/manifest.json
 */
export function getManifest() {
  return FLAGS;
}

/**
 * @example
 * const kManifestEmoji = Object.fromEntries(getManifestEmoji());
 */
export function* getManifestEmoji() {
  for (const { emoji, title } of Object.values(FLAGS)) {
    yield [title, emoji];
  }
}

export function getEmojiFromTitle(title) {
  return kManifestEmoji[title] ?? kNotFoundFlags;
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
