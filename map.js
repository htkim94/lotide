//Main function
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//Test Cases. Should all pass
// const words = ["ground", "control", "to", "major", "tom"];

// const result1 = map(words, (word) => word[0]);
// assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);
// const result2 = map(words, (word) => word[1]);
// assertArraysEqual(result2, ["r", "o", "o", "a", "o"]);
// const result3 = map(words, (word) => word[2]);
// assertArraysEqual(result3, ["o", "n", undefined, "j", "m"]);
