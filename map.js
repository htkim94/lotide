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

//Main function
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test Cases. Should all pass
const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, (word) => word[0]);
assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);
const result2 = map(words, (word) => word[1]);
assertArraysEqual(result2, ["r", "o", "o", "a", "o"]);
const result3 = map(words, (word) => word[2]);
assertArraysEqual(result3, ["o", "n", undefined, "j", "m"]);
