// Import Node.js Dependencies
import { join } from 'path'
import { readdir, readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url';

// Import Third-party Dependencie
import TurndownService from 'turndown'

const __dirname = fileURLToPath(import.meta.url);

async function * iterateOverFiles(flagsPath) {
  try {
    const files = await readdir(flagsPath);
    for (const filePath of files)
      yield readFile(join(flagsPath, filePath))
  } catch (err) {
    console.error(err)
  }
}

async function generateFlagsDocumentation() {

  const flagsPath = join(__dirname, `../../flags/`);
  const templateDocumentation = await readFile(join(__dirname, '../templateFlagDoc.md'))

  let result = []
  
  for await (const file of iterateOverFiles(flagsPath)) {
    result.push(file)
  }

  const turndownService = new TurndownService()

  turndownService.addRule('summary', {
    filter: 'summary',
    replacement: (content) => {
      return `<summary>${content}</summary>`
    }
  });

  turndownService.addRule('details', {
    filter: 'details',
    replacement: (content) => {
      return `<details>${content}</details>`
    }
  });

  let mdFile = turndownService.turndown(result.join("").toString())

  writeFile("FLAGS.md", templateDocumentation.toString().concat(mdFile), (err) => {
    if (err) console.error(err)
  })
}

await generateFlagsDocumentation()