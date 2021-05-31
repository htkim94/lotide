//flatten function using concat and recursion
const flatten = (arr) => {
  let res = [];
  for (const a of arr) {
    if (Array.isArray(a)) {
      res = res.concat(flatten(a));
    } else {
      res.push(a);
    }
  }
  return res;
};

module.exports = flatten;