const eqArrays = require('./eqArrays');

//Main function
const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //Compare the number of keys
  for (let key in obj1) {
    const type1 = typeof obj1[key];
    const type2 = typeof obj2[key];

    // Check if they are objects
    if (type1 !== type2) {
      return false;
    }

    if (type1 === 'object' && type2 === 'object') {
      //Check for array if not, compare values
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
        return false;
      } else if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
