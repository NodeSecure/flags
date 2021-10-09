// Import Third-party Dependencies
import test from "tape";
import is from "@slimio/is";

// Import Internal Dependencies
import { getFlags, getManifest } from "../index.js";

test("getFlags() should return a Set with multiple flags", (tape) => {
  const flags = getFlags();
  tape.equal(is.set(flags), true);
  tape.doesNotEqual(flags.size, 0);

  tape.end();
});

test("getFlags() should return a Set with only string primitive in it", (tape) => {
  const flags = getFlags();
  const allFlagsAreString = [...flags].every((value) => typeof value === "string");

  tape.equal(allFlagsAreString, true);

  tape.end();
});

test("getFlags() should return the flags (title) from the Manifest", (tape) => {
  const manifestFlags = getManifest();
  const equivalentArr = Object.values(manifestFlags).map((flagDescriptor) => flagDescriptor.title);
  const flags = getFlags();

  tape.deepEqual([...flags], equivalentArr);

  tape.end();
});

