<p align="center">
  <img src="https://github.com/NodeSecure/flags/assets/4438263/5a87c38f-9375-40dc-8cb9-19597b4befe8" alt="@nodesecure/flags">
</p>

<p align="center">
    <a href="https://github.com/NodeSecure/flags">
      <img src="https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&url=https://raw.githubusercontent.com/NodeSecure/flags/master/package.json&query=$.version&label=Version" alt="npm version">
    </a>
    <a href="https://github.com/NodeSecure/flags/graphs/commit-activity">
      <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge" alt="Maintenance">
    </a>
     <a href="https://api.securityscorecards.dev/projects/github.com/NodeSecure/flags">
      <img src="https://api.securityscorecards.dev/projects/github.com/NodeSecure/flags/badge?style=for-the-badge" alt="ossf scorecard">
    </a>
    <a href="https://github.com/NodeSecure/flags/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/NodeSecure/flags.svg?style=for-the-badge" alt="license">
    </a>
       <a href="https://github.com/NodeSecure/flags/actions?query=workflow%3A%22Node.js+CI%22">
      <img src="https://img.shields.io/github/actions/workflow/status/NodeSecure/flags/main.yml?style=for-the-badge" alt="github ci workflow">
    </a>
</p>

## Requirements

- [Node.js](https://nodejs.org/en/) v20 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @nodesecure/flags
# or
$ yarn add @nodesecure/flags
```

## Usage example

```js
import { getFlags, getManifest, eagerFetchFlagFile } from "@nodesecure/flags";

// Return a Set of flags title
const flags = getFlags();

// Return the manifest file
const manifest = getManifest();

const HTML = await eagerFetchFlagFile("hasBannedFile.html");
```

## API

### `getFlags(): Set<Flag>`

Returns a Set containing all available flag titles.

```js
import { getFlags } from "@nodesecure/flags";

const flags = getFlags();
console.log(flags);
// Set(18) {
//   'hasExternalCapacity',
//   'hasWarnings',
//   'hasNativeCode',
//   'hasCustomResolver',
//   'hasNoLicense',
//   'hasMultipleLicenses',
//   'hasMinifiedCode',
//   'isDeprecated',
//   'hasManyPublishers',
//   'hasScript',
//   'hasIndirectDependencies',
//   'isGit',
//   'hasVulnerabilities',
//   'hasMissingOrUnusedDependency',
//   'isDead',
//   'hasBannedFile',
//   'isOutdated',
//   'hasDuplicate'
// }
```

### `getManifest(): Record<string, FlagDescriptor>`

Returns the complete manifest object containing all flag descriptors.

```js
import { getManifest } from "@nodesecure/flags";

const manifest = getManifest();
console.log(manifest.nativeCode);
// {
//   emoji: "🐲",
//   title: "hasNativeCode",
//   tooltipDescription: "The package uses and runs C++ or Rust N-API code"
// }
```

### `getEmojiFromTitle(title: Flag): string`

Returns the emoji associated with a flag title. Returns "🔴" if the flag is not found.

```js
import { getEmojiFromTitle } from "@nodesecure/flags";

console.log(getEmojiFromTitle("hasNativeCode")); // "🐲"
console.log(getEmojiFromTitle("unknownFlag")); // "🔴"
```

### `getManifestEmoji(): IterableIterator<[string, string]>`

Returns an iterator of [title, emoji] pairs for all flags.

```js
import { getManifestEmoji } from "@nodesecure/flags";

const emojiMap = Object.fromEntries(getManifestEmoji());
console.log(emojiMap);
// {
//   'hasExternalCapacity': '🌍',
//   'hasWarnings': '🚧',
//   'hasNativeCode': '🐲',
//   // ... all other flags
// }
```

### File Operations (Node.js only)

### `eagerFetchFlagFile(name: string): Promise<string>`

Asynchronously reads and returns the HTML content of a flag file.

```js
import { eagerFetchFlagFile } from "@nodesecure/flags";

const htmlContent = await eagerFetchFlagFile("hasNativeCode");
console.log(htmlContent); // Returns the HTML documentation for the flag
```

### `lazyFetchFlagFile(name: string): Readable`

Returns a Node.js Readable stream for a flag file, allowing for memory-efficient processing of large files.

```js
import { lazyFetchFlagFile } from "@nodesecure/flags";

const stream = lazyFetchFlagFile("hasNativeCode");
stream.on('data', (chunk) => {
  console.log(chunk.toString());
});
```

## Types

### `FlagDescriptor`

```ts
interface FlagDescriptor {
  /** An emoji to visually identify the anomaly */
  emoji: string;
  /** Title (or name) of the flag */
  title: string;
  /** Short description/warning of the anomaly */
  tooltipDescription: string;
}
```

### `Flag`

```ts
type Flag = keyof typeof FLAGS | (string & {});
```

### Available Flags

| Flag | Emoji | Description |
|------|-------|-------------|
| `hasExternalCapacity` | 🌍 | The package uses at least one Node.js core dependency capable to establish communication outside of localhost |
| `hasWarnings` | 🚧 | The AST analysis has detected warnings (suspect import, unsafe regex ..) |
| `hasNativeCode` | 🐲 | The package uses and runs C++ or Rust N-API code |
| `hasCustomResolver` | 💎 | The package has dependencies who do not resolve on a registry (git, file, ssh etc..) |
| `hasNoLicense` | 📜 | The package does not have a license |
| `hasMultipleLicenses` | 📚 | The package has licenses in multiple locations (files or manifest) |
| `hasMinifiedCode` | 🔬 | The package has minified and/or uglified files |
| `isDeprecated` | ⛔️ | The package has been deprecated on NPM |
| `hasManyPublishers` | 👥 | The package has several publishers |
| `hasScript` | 📦 | The package has `post` and/or `pre` (un)install npm script |
| `hasIndirectDependencies` | 🌲 | The package has indirect dependencies |
| `isGit` | ☁️ | The package (project) is a git repository |
| `hasVulnerabilities` | 🚨 | The package has one or many vulnerabilities |
| `hasMissingOrUnusedDependency` | 👀 | A dependency is missing in package.json or a dependency is installed but never used |
| `isDead` | 💀 | The dependency has not received update from at least one year |
| `hasBannedFile` | ⚔️ | The project has at least one sensitive file |
| `isOutdated` | ⌚️ | The current package version is not equal to the package latest version |
| `hasDuplicate` | 🎭 | The package is also used somewhere else in the dependency tree but with a different version |

## Error Handling

- `lazyFetchFlagFile()` and `eagerFetchFlagFile()` will throw a `TypeError` if no flag name is provided
- `lazyFetchFlagFile()` and `eagerFetchFlagFile()` will throw an `Error` if the provided flag doesn't exist
- Flag names can be provided with or without the `.html` extension

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt="Gentilhomme"/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/NodeSecure/flags/commits?author=fraxken" title="Code">💻</a> <a href="https://github.com/NodeSecure/flags/commits?author=fraxken" title="Documentation">📖</a> <a href="https://github.com/NodeSecure/flags/pulls?q=is%3Apr+reviewed-by%3Afraxken" title="Reviewed Pull Requests">👀</a> <a href="#security-fraxken" title="Security">🛡️</a> <a href="https://github.com/NodeSecure/flags/issues?q=author%3Afraxken" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Kawacrepe"><img src="https://avatars.githubusercontent.com/u/40260517?v=4?s=100" width="100px;" alt="Vincent Dhennin"/><br /><sub><b>Vincent Dhennin</b></sub></a><br /><a href="https://github.com/NodeSecure/flags/commits?author=Kawacrepe" title="Code">💻</a> <a href="https://github.com/NodeSecure/flags/commits?author=Kawacrepe" title="Documentation">📖</a> <a href="https://github.com/NodeSecure/flags/pulls?q=is%3Apr+reviewed-by%3AKawacrepe" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/NodeSecure/flags/issues?q=author%3AKawacrepe" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Rossb0b"><img src="https://avatars.githubusercontent.com/u/39910164?v=4?s=100" width="100px;" alt="Nicolas Hallaert"/><br /><sub><b>Nicolas Hallaert</b></sub></a><br /><a href="https://github.com/NodeSecure/flags/commits?author=Rossb0b" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mbalabash"><img src="https://avatars.githubusercontent.com/u/16868922?v=4?s=100" width="100px;" alt="Maksim Balabash"/><br /><sub><b>Maksim Balabash</b></sub></a><br /><a href="https://github.com/NodeSecure/flags/issues?q=author%3Ambalabash" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fabnguess"><img src="https://avatars.githubusercontent.com/u/72697416?v=4?s=100" width="100px;" alt="Kouadio Fabrice Nguessan"/><br /><sub><b>Kouadio Fabrice Nguessan</b></sub></a><br /><a href="#maintenance-fabnguess" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MaximeMRF"><img src="https://avatars.githubusercontent.com/u/57860498?v=4?s=100" width="100px;" alt="Maxime"/><br /><sub><b>Maxime</b></sub></a><br /><a href="https://github.com/NodeSecure/flags/commits?author=MaximeMRF" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/intincrab"><img src="https://avatars.githubusercontent.com/u/93028153?v=4?s=100" width="100px;" alt="Ajāy "/><br /><sub><b>Ajāy </b></sub></a><br /><a href="https://github.com/NodeSecure/flags/commits?author=intincrab" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT
