'use strict';

/* 2.5 Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr */
function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  // Replace this comment and the next line with your code
  // console.log(arr, product);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }

  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;
