const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("should return an object with only true value of passed object counted from passed array", () => {
    assert.deepEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Agouhanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe",
        ],
        {
          Jason: true,
          Karima: true,
          Fang: true,
          Agouhanna: false,
        }
      ),
      { Fang: 2, Jason: 1 }
    );
  });
});
