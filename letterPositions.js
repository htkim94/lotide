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

module.exports = letterPositions;

// //Test cases
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);