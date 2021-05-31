//Main middle function
const middle = (arr) => {
  let result = [],
    midIndex = Math.floor(0 + (arr.length - 1 - 0) / 2);
  if (arr.length === 1 || arr.length === 2) {
    return result;
  } else if (arr.length % 2 === 0) {
    result.push(arr[midIndex], arr[midIndex + 1]);
    return result;
  } else {
    result.push(arr[midIndex]);
    return result;
  }
};

module.exports = middle;
