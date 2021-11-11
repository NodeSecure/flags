// Import Third-party Dependendies
import test from "tape";
import is from "@slimio/is";

// Import Internal Dependencies
import { getManifest, getEmojiFromTitle, getManifestEmoji } from "../index.js";

/**
 * @param {test.Test} tape
 */
function isFlagObject(tape, flagObject) {
  tape.equal(is.plainObject(flagObject), true);

  tape.equal("emoji" in flagObject, true);
  tape.equal("title" in flagObject, true);
  tape.equal("tooltipDescription" in flagObject, true);
}

test("getManifest() should return a Record<string, flagObject>", (tape) => {
  const manifest = getManifest();

  tape.true(is.plainObject(manifest));
  tape.notEqual(Object.keys(manifest).length, 0);

  for (const [key, flagObject] of Object.entries(manifest)) {
    tape.equal(typeof key, "string");
    isFlagObject(tape, flagObject);
  }

  tape.end();
});

test("getManifestEmoji()", (tape) => {
  const manifestEmoji = Object.fromEntries(getManifestEmoji());
  console.log(manifestEmoji);

  tape.true(is.plainObject(manifestEmoji));
  tape.is(manifestEmoji.hasNativeCode, "🐲");

  tape.end();
});


test("getEmojiFromTitle()", (tape) => {
  tape.is(getEmojiFromTitle("foobar"), "🔴");
  tape.is(getEmojiFromTitle("hasNativeCode"), "🐲");

  tape.end();
});
