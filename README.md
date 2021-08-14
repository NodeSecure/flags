# NodeSecure Flags
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/NodeSecure/flags/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/NodeSecure/flags/commit-activity)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md
)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/NodeSecure/flags/blob/master/LICENSE)
![dep](https://img.shields.io/david/NodeSecure/flags)

NodeSecure security flags.

## Requirements
- [Node.js](https://nodejs.org/en/) v14 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @nodesecure/flags
# or
$ yarn add @nodesecure/flags
```

## Usage example

```js
import { getFlags, getManifest, getFlagFile } from "@nodesecure/flags";

// Return a Set of flags title
const flags = getFlags();

// Return the manifest file
const manifest = getManifest();

async function readableToString (readable) {
  let str = "";

  for await (const chunk of readable) {
    str += chunk;
  }

  return str;
}

// Return the flagFile
async function getFlagFile() {
  const readStream = getFlagFile("hasBannedFile");

  return await readableToString(readStream);
}
const HTML = await getFlagFile();
```

## API

See TypeScript definition file.


## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
