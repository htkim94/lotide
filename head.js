const head = (arr) => {
  /*
  return arr[0];
  This will cause an error when a non array or
  undefined argument passes to function thus,
  we need to check:
   1) if there is an array passing
   2) if array has any values by checking length
  */
  return (arr && arr.length) ? arr[0] : undefined;
};

module.exports = head;