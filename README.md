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

See TypeScript definition file.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
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
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT
