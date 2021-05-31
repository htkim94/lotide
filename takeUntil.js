//Main function
const takeUntil = (array, callback) => {
  const result = [];
  for (let a of array) {
    if (callback(a) === true) {
      return result;
    } else {
      result.push(a);
    }
  }
};

module.exports = takeUntil;

//Test cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]); //Should pass

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); //Should pass
