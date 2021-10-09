declare namespace flags {

  type Flags =
    "isGit" |
    "isDeprecated" |
    "isOutdated" |
    "hasNativeCode" |
    "hasManifest" |
    "hasOutdatedDependency" |
    "hasWarnings" |
    "hasNoLicense" |
    "hasMultipleLicenses" |
    "hasMissingOrUnusedDependency" |
    "hasMinifiedCode" |
    "hasIndirectDependencies" |
    "hasCustomResolver" |
    "hasDependencies" |
    "hasExternalCapacity" |
    "hasScript" |
    "hasBannedFile";

  interface FlagObject {
    /** An emoji to visually identify the anomaly **/
    emoji: string;
    /** Title (or name) of the flag **/
    title: string;
    /** Short description/warning of the anomaly **/
    tooltipDescription: string;
  }

  type Manifest = Record<string, FlagObject>;

  export function getManifest(): Manifest;
  export function getFlags(): Record<string, string>;
  export function lazyFetchFlagFile(name: string): ReadableStream;
  export function eagerFetchFlagFile(name: string): Promise<string>;
}

export = flags;
export as namespace flags;


