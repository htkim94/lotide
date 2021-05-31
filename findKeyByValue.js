//Main function
const findKeyByValue = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;