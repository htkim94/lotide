//Function for equal Array check
const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  return arrOne.every((n1, i) => {
    if (Array.isArray(n1) && Array.isArray(arrTwo[i])) {
      return eqArrays(n1, arrTwo[i]);
    } 
    return n1 === arrTwo[i];
  });
  
  // for (let i = 0; i < arrOne.length; i++) {
  //   if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
  //     if (!eqArrays(arrOne[i], arrTwo[i])) {
  //       return false;
  //     }
  //   } else if (arrOne[i] !== arrTwo[i]) {
  //     return false;
  //   } 
  // }
  // return true;
};

module.exports = eqArrays;