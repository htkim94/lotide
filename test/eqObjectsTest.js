const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should return true if both passed objects has same key and values", () => {
    assert.isTrue(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
  });

  it("should return true if both passed objects with array as values has same key and values", () => {
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
  });

  it("should return true if both passed objects with nested objects has same key and values", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
});
