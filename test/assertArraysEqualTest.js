const assertArraysEqual = require('../assertArraysEqual');

//Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual(['1', '2', 3], ['1', '2', '3']); //false