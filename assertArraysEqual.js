const eqArrays = require('./eqArrays');

//Function for assertion message
const assertArraysEqual = (arrA, arrB) => {
  if (eqArrays(arrA, arrB)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

module.exports = assertArraysEqual;