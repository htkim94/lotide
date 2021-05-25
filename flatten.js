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

/* This is a recursion method.
   If we want to flatten only one level,
   to check if the recursion was gone through once
   by using boolean.
   However, if we want to fully flatten,
   we need to remove the boolean part of the code,
   so that recursion would repeat until it is fully flattened
*/

//Helper function for flatten
const helperFlatten = (arr, resArr, bool) => {
  for (let a of arr) {
    if (Array.isArray(a) && bool === false) {
      resArr = helperFlatten(a, resArr, true);
    } else {
      resArr.push(a);
    }
  }
  return resArr;
}

//Main flatten function
const flatten = (arr) => {
  let res = [];
  return helperFlatten(arr, res, false);
}

console.log(flatten([1, 2, [3, 4], 5, [6, 7, [8, 9]]]));
console.log(flatten([1, [2, [3, [4]], 5]]));