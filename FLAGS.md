# Flags

## Why emojis for flags ?
Because it allows to convey a message while remaining compatible and simple to setup in a Web page.

## Legends

> 👀 click on the arrow to show the complete description

Each summaries title are the name of the flag in the JSON.<details><summary>⚔️ hasBannedFile</summary>

The project has at least one sensitive file (or a file with sensitive information in it).

  

The list of sensitive files are:

*   .npmrc
*   .env
*   files with extension like .key or .pem

</details><details><summary>💎 hasCustomResolver</summary>

The package has custom dependencies resolver such as +git or +ssh or a local file with file:. In this kind of case it is better to check the package.json.

  

Note that pacote doesn't support ssh so there is no support in nsecure for this kind of resolver.

  

Documentation: [npm-install](https://docs.npmjs.com/cli/install)

</details><details><summary>🌍 hasExternalCapacity</summary>

The package use a Node.js core package that allow to access the network. These core package are:

*   http
*   https
*   net
*   http2
*   dgram

⚠️ This flag only work if the AST analysis as successfully retrieved all dependencies as expected.

</details><details><summary>🌲 hasIndirectDependencies</summary>

The package has indirect (or also called transitive) dependencies. This means that the child dependencies of the package also have dependencies.

  
[![](https://camo.githubusercontent.com/013dae362078b4db5f23e4643dfb30932726fd32/68747470733a2f2f692e696d6775722e636f6d2f475142557762702e706e67)](https://camo.githubusercontent.com/013dae362078b4db5f23e4643dfb30932726fd32/68747470733a2f2f692e696d6775722e636f6d2f475142557762702e706e67)  
  

In the following example **accepts** is flagged 🌲 because **mime-types** has a **mime-db** dependency which mean that the package is an indirect dependency of **accepts**.

  

Indirect dependencies are dangerous for many reasons and you may found useful informations in these articles / study:

  

*   [78% of vulnerabilities are found in indirect dependencies, making remediation complex](https://snyk.io/blog/78-of-vulnerabilities-are-found-in-indirect-dependencies-making-remediation-complex/)
*   [Small World with High Risks: A Study of Security Threats in the npm Ecosystem](https://arxiv.org/pdf/1902.09217.pdf)
*   [Angular vs React: the security risk of indirect dependencies](https://snyk.io/blog/angular-vs-react-the-security-risk-of-indirect-dependencies/)

</details><details><summary>👥 hasManyPublishers</summary>

The package has been published on npm by multiple unique users. There is no big deal here, just mean the package is maintained by a group of people.

</details><details><summary>🔬 hasMinifiedCode</summary>

Has one or many files that has been detected as minified JavaScript code. We use a package that will tell us if the code is minified (in case the file as a **.min** then we will consider the file minified by default).

  

Minified JavaScript code are commonly used by hacker to obfuscate the code to avoid being spotted. A good practice is surely to check all the packages with the flag.

  

Example of minified code:

  
![](https://i.imgur.com/13Mxfb2.png)</details><details><summary>👀 hasMissingOrUnusedDependency</summary>

The package has a missing dependency (in package.json) or a dependency that is not used in the code (this may happen if the AST Analysis fail!)

</details><details><summary>📚 hasMultipleLicenses</summary>

We have detected different licenses in **package.json** and other licenses files (**LICENSE**, **LICENSE.MD** etc). This probably means that there is an inconsistency in the choice of the license (or a file not updated yet with the right license).

  

This flag has not been created to detect multiple licenses / conformance rules.

Example: ISC OR GPL-2.0-with-GCC-exception.

  

Under the hood we use [`@nodesecure/conformance`](https://github.com/NodeSecure/scanner/tree/master/workspaces/conformance) to assert licenses conformance!

</details><details><summary>🐲 hasNativeCode</summary>

The package use native components (package, file, configuration) like **binding.gyp** or npm package for native addon like **node-addon-api**.

  

The flag is set to true if:

*   One of the package file has an extension like .c, .cpp, .gyp (etc..)
*   One of the package dependency is known for building native addons.
*   The package.json file has the property "gypfile" set to **true**.

</details><details><summary>📜 hasNoLicense</summary>

This flag mean that we have not detected any licenses in the npm Tarball (or something went wrong in the detection). For detecting licenses we are reading the **package.json** and searching for local files that contain the word **license**.

  

The code and logic behind the detection is handled in the [`@nodesecure/tarball`](https://github.com/NodeSecure/scanner/tree/master/workspaces/tarball) package.

  

For more information on how license must be described in the package.json, please check the [npm documentation](https://docs.npmjs.com/files/package.json#license).

</details><details><summary>📦 hasScript</summary>

The package has pre and/or post script in the **package.json** file. These script will be executed before or after the installation of a dependency (this is useful for example to build native addons or similar things). However these script may be used to execute malicious code on your system.

*   [Package install scripts vulnerability](https://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability)
*   [10 npm Security Best Practices](https://snyk.io/blog/ten-npm-security-best-practices/)

</details><details><summary>🚨 Vulnerabilities</summary>

Vulnerabilities has been detected for the given package **version**. We are fetching vulnerabilities from multiple sources using NodeSecure [vulnera](https://github.com/NodeSecure/vulnera).

  

Available source are

*   GitHub Audit (previously NPM Audit)
*   Sonatype DB
*   Snyk
*   Node.js Security-WG DB **(DEPRECATED)**

We currently working to implement NVD and [OSV](https://osv.dev/).

</details><details><summary>⚠ hasWarnings</summary>

This means that the [SAST](https://www.gartner.com/en/information-technology/glossary/static-application-security-testing-sast) Scanner has detected several problems by analyzing the **Abstract Syntax Tree (AST)** of a JavaScript source code. All warnings are accurately documented [here](https://github.com/NodeSecure/js-x-ray#legends).

</details><details><summary>💀 isDead</summary>

The dependency (package) has not received update **from at least one year** and has at least one dependency that need to be updated.

  

It probably means it's dangerous to use (or continue to) because the author doesn't seem to update the package anymore (even worst if you want him to implement a new version / security patch).

</details><details><summary>⛔️ isDeprecated</summary>

The given npm package has been deprecated by his author (it must be updated or replaced with an equivalent if there is no new version available).

  

For more information on deprecation please check the official [npm documentation](https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions).

</details><details><summary>🎭 hasDuplicate</summary>

Indicate that the package is **also used somewhere else in the dependency tree** but with a different version (like in the screenshot with **yallist**).

  
![](https://camo.githubusercontent.com/933ca23e59bb1ed0159a7b444b783ce740224426/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f70726163746963616c6465762f696d6167652f66657463682f732d2d43477a4e5f4977362d2d2f635f6c696d6974253243665f6175746f253243666c5f70726f6772657373697665253243715f6175746f253243775f3838302f68747470733a2f2f692e696d6775722e636f6d2f3730796e6674542e706e67)</details><details><summary>☁️ isGit</summary>

The project has been detected as a GIT repository. Sometimes a dependency on the package.json link to a GIT repository, example:

  

      `{           "dependencies": {             "zen-observable": "^0.8.15",             "nanoid": "github:ai/nanoid",             "js-x-ray": "git://github.com/NodeSecure/js-x-ray.git",             "nanodelay": "git+ssh://git@github.com:ai/nanodelay.git",             "nanoevents": "git+https://github.com/ai/nanoevents.git"           }         }`
      
    

![](https://i.imgur.com/ww4UtyR.png)  

Because under the hood we use [pacote](https://github.com/npm/pacote#readme) to fetch and extract packages we are supporting this given pattern.

</details><details><summary>⌚️ isOutdated</summary>

The **current** package version is not equal to the **latest** version of the package (Compared to the versions we retrieve from the npm registry).  

  

This can happen, for example, when the package uses **tags** such as:

*   @alpha
*   @beta
*   @next

</details>
