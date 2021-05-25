//Assert function for test
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function for equal Array check
const eqArrays = (arrOne, arrTwo) => {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) return false;
  }
  return true;
}

//test case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);