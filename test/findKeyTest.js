const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("should return the value of key which callback function wants", () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    const callBack = (x) => x.stars === 2;
    assert.strictEqual(findKey(obj, callBack), "noma");
  });
});
