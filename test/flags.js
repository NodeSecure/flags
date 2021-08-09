import test from "tape";
import { getFlags, getManifest, getFlagFile } from "../index.js";

// get flag
test("get set of flags", (tape) => {
  const flags = getFlags()

  tape.equal(typeof flags, 'object')
  tape.doesNotEqual(flags.size, 0)
  tape.end()
})

// get manifest
test("get manifest", (tape) => {
  const manifest = getManifest()
  tape.equal(typeof manifest, 'object')
  tape.end()
})

// get flag file
test("get flag file", async (tape) => {
  const flagFile = await getFlagFile('hasBannedFile')

  tape.equal(typeof flagFile, 'string')
  tape.end()
})