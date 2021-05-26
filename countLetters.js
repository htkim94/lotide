//Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Main function
const countLetters = (sentence) => {
  const resultObj = {};
  for (let c of sentence) {
    if (c !== ' ') {
      if (resultObj[c]) {
        resultObj[c]++;
      } else {
        resultObj[c] = 1;
      }
    }
  }
  return resultObj;
}

console.log(countLetters('lighthouse in the house'));