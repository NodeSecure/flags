import test from "tape";

// Import Internal Dependencies
import { getFlags, getManifest, getFlagFile } from "../index.js";

// get flag
test("get set of flags", (tape) => {
  const flags = getFlags();
  tape.equal(typeof flags, "object");
  tape.doesNotEqual(flags.size, 0);
  tape.end();
});

// get manifest
test("get manifest", (tape) => {
  const manifest = getManifest();
  tape.equal(typeof manifest, "object");
  tape.end();
});

// check if every flags in manifest.json have a valid html
test("get flag file", async(tape) => {
  // Test getFlagFile without flagName
  try {
    getFlagFile();
    tape.fail("Should not get here since there is no flagName");
  }
  catch (err) {
    tape.ok(err, "Got expected error");
  }

  // Test getFlagFile with a wrong flagName
  try {
    getFlagFile("wrongFlagName");
    tape.fail("Should not get here since this is not a valid flagName");
  }
  catch (err) {
    tape.ok(err, "Got expected error");
  }

  tape.end();
});

test("check if every flags have a valid html file", (tape) => {
  const flags = getFlags();
  tape.end();
});
