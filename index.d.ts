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
    emoji: string,
    title: string,
    tooltipDescription: string,
  }

  interface Manifest {
    [k: string]: FlagObject
  }

  export function getManifest(): Manifest
  export function getFlags(): { [key: string]: string; }
  export function getFlagFile(): ReadableStream
}

export = flags;
export as namespace flags;


