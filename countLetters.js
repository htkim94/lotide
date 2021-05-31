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

module.exports = countLetters;