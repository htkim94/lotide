const eqArrays = require('./eqArrays');

//Main function
const eqObjects = (obj1, obj2) => {
  //Compare the number of keys
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      //Check if they are objects
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        //Check for array if not, compare values
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          if (!eqArrays(obj1[key], obj2[key])) {
            return false;
          }
        } else if (
          (Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) ||
          (!Array.isArray(obj1[key]) && Array.isArray(obj2[key]))
        ) {
          return false;
        } else if (!eqObjects(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;
