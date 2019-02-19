'use strict';

/* Write a function takes this array['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has
unique values in it(so it removes the duplicate ones).Make it a 'smart' algorithm that could do it for every array
(only strings / number).Try to make it as fast as possible!
 */

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// const values = [3, 6, 7, 4, 5, 9, 6, 5];

function makeUnique(arr) {
  // Replace this comment and the next line with your code
  // console.log(arr);
  return arr.filter((v, i) => arr.indexOf(v) === i);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
