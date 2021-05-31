//Test function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//Main function
const eqObjects = (obj1, obj2) => {
  //Compare the number of keys
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      //Check if they are objects
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        //Check for array if not, compare values
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          if (!eqArrays(obj1[key], obj2[key])) {
            return false;
          }
        } else if (
          (Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) ||
          (!Array.isArray(obj1[key]) && Array.isArray(obj2[key]))
        ) {
          return false;
        } else if (!eqObjects(obj1[key], obj2[key])) {
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

//Test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => pass

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => fail

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
