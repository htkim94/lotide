//Function for checking if two arrays are equal
const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) return false;
    }
    return true;
  }
};

//Function for assertion message
const assertArraysEqual = (arrA, arrB) => {
  if (eqArrays(arrA, arrB)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

//Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual(['1', '2', 3], ['1', '2', '3']); //false