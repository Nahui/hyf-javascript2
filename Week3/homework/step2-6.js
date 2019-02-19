'use strict';

/* 2.6 2.6 We did some work with arrays:

const arr = [1, 2, 3];
We can also nest arrays inside arrays like this:

const arr2d = [[1, 2], [3, 4], [5, 6]];
(for math people you can think of this as a matrix)

How would you flatten out all the items of an array with 2 dimensions into a one-dimensional array? Flattening out the arr2d array above would result in:

const flattenedArr = [1, 2, 3, 4, 5, 6];
How about 3 dimensions? How about with K dimensions? What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it.) */

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  // Replace this comment and the next line with your code
  // console.log(arr);
  // const twoDim = arr.flat(2); doesn't work yet
  const twoDim = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      twoDim.push(arr[i][j]);
    }
  }
  // This also works:
  /* const twoDim = [].concat.apply([], arr); */
  // This way of console.log seems to be because of a bug in test. The correct answer would be to just log twoDim
  console.log(twoDim.join(''));
  // console.log('Two dimensions: ' + twoDim);
}

function printArray3d(arr) {
  const threeDim = [];
  // Replace this comment and the next line with your code
  // console.log(arr);
  // const threeDim = arr.flat(3); doesn't work yet
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[j].length; k++) {
        threeDim.push(arr[i][j][k]);
      }
    }
  }

  // This way of console.log seems to be because of a bug in test. The correct answer would be to just log threeDim
  console.log(threeDim.join(''));
  // console.log('Three dimensions: ' + threeDim);
}

printArray2d(arr2d);
printArray3d(arr3d);

// ******* For any dimension: ********
// 1. Reduce way without =>:
function flatten(arr1) {
  return arr1.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
// 2. Reduce way with =>:
function flattenDeep(arr2) {
  return arr2.reduce(
    (flat, toFlatten) =>
      Array.isArray(toFlatten) ? flat.concat(flattenDeep(toFlatten)) : flat.concat(toFlatten),
    []
  );
}

// 3. for loop way:

const flattenFor = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flattenFor(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

flattenDeep([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
console.log(
  'Multidimension reduce way with => : ' + flattenDeep([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]])
);

flatten([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]
console.log('Multidimension reduce way without => : ' + flatten([[[1, [1.1]], 2, 3], [4, 5]]));

flattenFor([[1, 2, 3], [4, 5]]);
console.log('Multidimension for loop way: ' + flattenFor([[1, 2, 3], [4, 5]]));

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
