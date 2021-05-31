const assert = require("chai").assert;
const middle = require("../middle");

//Test Code

describe("#middle", () => {
  it("should return an empty array when array length of one is passed", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return an empty array when array length of two is passed", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return an array of middle index when array.length > 1 && odd number is passed", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return an array of two middle most index when array.length > 2 && even number is passed", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
