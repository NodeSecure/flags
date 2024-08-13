// Import Node.js Dependencies
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";

// Import Internal Dependencies
import { getFlags } from "./web.js";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kFlagsPath = path.join(__dirname, "flags");

/**
 * @description lazy read a flag file by getting a Node.js ReadableStream
 * @param {!string} name flag (HTML File) name
 */
export function lazyFetchFlagFile(name: string): Readable {
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

export async function eagerFetchFlagFile(name: string): Promise<string> {
  const rStream = lazyFetchFlagFile(name);
  let htmlStr = "";

  for await (const chunk of rStream) {
    htmlStr += chunk;
  }

  return htmlStr;
}
