// Import Node.js Dependencies
import { describe, it } from "node:test";
import assert from "node:assert";

// Import Internal Dependencies
import { getFlags, lazyFetchFlagFile } from "../index.js";

describe("lazyFetchFlagFile()", () => {
  it("should throw an Error if no flag name is provided", () => {
    try {
      lazyFetchFlagFile();
      assert.fail("Should not get here since there is no flagName");
    }
    catch (err) {
      assert.equal(err.name, "TypeError");
      assert.equal(err.message, "You should provide a flag name");
    }
  });
  it("should throw an Error if provided flags doesn't exist", () => {
    try {
      lazyFetchFlagFile("wrongFlagName");
      assert.fail("Should not get here since this is not a valid flagName");
    }
    catch (err) {
      assert.equal(err.name, "Error");
      assert.equal(err.message, "There is no file associated with that name");
    }
  });
  it("should return a ReadableStream and every flags should have a valid html file", () => {
    for (const flag of getFlags()) {
      try {
        const rStream = lazyFetchFlagFile(flag);
        assert.equal(typeof rStream[Symbol.asyncIterator] === "function", true);
      }
      catch (err) {
        assert.fail(err);
      }
    }
  });
});
