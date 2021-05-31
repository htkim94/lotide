//Main function
const countOnly = (arr, obj) => {
  const resultObj = {};
  for (let a of arr) {
    if (obj[a]) {
      if (resultObj[a]) {
        resultObj[a] += 1;
      } else {
        resultObj[a] = 1;
      }
    }
  }
  return resultObj;
};

module.exports = countOnly;