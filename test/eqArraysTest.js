const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

//test case
describe("#eqArrays", () => {
  it('should return true if passed arrays are equal', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  
  it('should return true if passed nested arrays are equal', () => {
    assert.isTrue(eqArrays([1, [2, [3, 4]]], [1, [2, [3, 4]]]));
  });
})