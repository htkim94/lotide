# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @htkim94/lotide`

**Require it:**

`const _ = require('@htkim94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of input array.
* `tail(array)`: remove first element of input array and returns rest in new array.
* `middle(array)`: returns middle-most index element of input array in new array. Returns two if input array length is even number.
* `countLetters(string)`: returns an object with key of characters and value of occurence in the input string.
* `countOnly(array, object)`: function will take an array (list of items) and find/count for the key with true value from input object and returns new object of found/counted items.
* `eqArrays(array1, array2)`: function will compare two input arrays (works with nested as well), and return true if they have same values at every index.
* `eqObjeccts(obj1, obj2)`: function will compare two input objects (works for nested objects and value of array) and return true if both objects have same keys and values.
* `findKey(obj, callback)`: returns the key of input object which matches the result of callback function.
* `findKeyByValues(obj, value)`: returns the key of input object with the input value.
* `letterPositions(string)`: takes an input of string and returns as object with key of character and value of positions (array).
* `map(array, callback)`: mini copy of existing JS method map function.
* `takeUntil(array, callback)`: loops through input array and push only the elements which is true to the callback function. Returns array of pushed elements.
* `without(array, value)`: returns new array with same values of input array only without the input value element.