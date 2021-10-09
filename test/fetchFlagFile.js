// Import Third-party Dependencies
import test from "tape";
import is from "@slimio/is";

// Import Internal Dependencies
import { getFlags, lazyFetchFlagFile } from "../index.js";

test("lazyFetchFlagFile() should throw an Error if no flag name is provided", (tape) => {
  try {
    lazyFetchFlagFile();
    tape.fail("Should not get here since there is no flagName");
  }
  catch (err) {
    tape.equal(err.name, "TypeError");
    tape.equal(err.message, "You should provide a flag name");
  }

  tape.end();
});

test("lazyFetchFlagFile() should throw an Error if provided flags doesn't exist", (tape) => {
  try {
    lazyFetchFlagFile("wrongFlagName");
    tape.fail("Should not get here since this is not a valid flagName");
  }
  catch (err) {
    tape.equal(err.name, "Error");
    tape.equal(err.message, "There is no file associated with that name");
  }

  tape.end();
});

test("check if every flags have a valid html file", async(tape) => {
  for (const flag of getFlags()) {
    try {
      const rStream = lazyFetchFlagFile(flag);
      tape.equal(is.asyncIterable(rStream), true);
    }
    catch (err) {
      tape.fail(err);
    }
  }

  tape.end();
});
