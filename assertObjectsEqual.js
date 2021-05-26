//Function for equal Array check
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

//Function for equal Object check
const eqObjects = (obj1, obj2) => {
  //Compare the number of keys
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      //Check for array if not, compare values
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

//Main function
const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `🟢🟢🟢Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🔴🔴🔴Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }); //=> fail
assertObjectsEqual({ d: 4, e: 5, f: 6 }, { d: 4, e: 5, f: 6 }); //=> pass
