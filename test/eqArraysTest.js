const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //pass
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); //fail
assertEqual(eqArrays([1, [2, [3, 4]]], [1, [2, [3, 4]]]), true);