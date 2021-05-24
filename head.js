const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = (arr) => {
  /*
  return arr[0];
  This will cause an error when a non array or
  undefined argument passes to function thus,
  we need to check:
   1) if there is an array passing
   2) if array has any values by checking length
  */
  return (arr && arr.length) ? arr[0] : undefined;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");