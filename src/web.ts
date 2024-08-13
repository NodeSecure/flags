// Import Internal Dependencies
import { FLAGS, type Flag } from "./manifest.js";

const kNotFoundFlags = "🔴";
const kManifestEmoji: Record<string, string> = Object.fromEntries(getManifestEmoji());

/**
 * @description Export src/manifest.json
 */
export function getManifest(): Record<string, Flag> {
  return FLAGS;
}

/**
 * @example
 * const kManifestEmoji = Object.fromEntries(getManifestEmoji());
 */
export function* getManifestEmoji(): IterableIterator<[string, string]> {
  for (const { emoji, title } of Object.values(FLAGS)) {
    yield [title, emoji];
  }
}

export function getEmojiFromTitle(title: string): string {
  return kManifestEmoji[title] ?? kNotFoundFlags;
}

/**
 * @description Complete list of flags title (as an ES6 Set)
 */
export function getFlags(): Set<string> {
  return new Set(Object.values(FLAGS).map((flagDescriptor) => flagDescriptor.title));
}
