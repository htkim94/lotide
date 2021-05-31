//Function to remove the value and return new array
const without = (source, target) => {
  let result = [];
  for (let s of source) {
    let eq = false;
    for (let t of target) {
      if (s === t) {
        eq = true;
        break;
      }  
    }
    if (!eq) result.push(s);
  }
  return result;
}

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// //another test case: result should be fail
// assertArraysEqual(without(words, ['lighthouse']), ["hello", "world", "lighthouse"]);