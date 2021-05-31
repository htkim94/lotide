const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("should return the name of key when value is passed into function", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      fantasy: "The Witcher",
    };
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "The Witcher"),
      "fantasy"
    );
  });
});
