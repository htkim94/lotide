//Testing functions
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

const assertArraysEqual = (arrA, arrB) => {
  if (eqArrays(arrA, arrB)) {
    console.log(`🟢🟢🟢Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

//Main function
const letterPositions = (sentence) => {
  const resultObj = {};
  for (let i = 0; i < sentence.length; i++) {
    if (resultObj[sentence[i]]) {
      resultObj[sentence[i]].push(i);
    } else {
      resultObj[sentence[i]] = [i];
    }
  }
  return resultObj;
};

//Test cases
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);