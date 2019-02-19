'use strict';

/* 2.2 You must write a function that takes 4 arguments.

A start value
An end value
A callback to call if the number is divisible by 3
A callback to use if the number is divisible by 5
The function should first generate an array containing values from start value to end value (inclusive).

Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.

The function should call the second callback if the array value is divisible by 5.

Both functions should be called if the array value is divisible by both 3 and 5. */

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  // console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log(numbers);

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 3 === 0 && numbers[j] % 5 === 0) {
      // console.log(numbers[j]);
      threeCallback(numbers[j]);
      fiveCallback(numbers[j]);
    } else if (numbers[j] % 3 === 0) {
      threeCallback(numbers[j]);
    } else if (numbers[j] % 5 === 0) {
      fiveCallback(numbers[j]);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log('This number is divisible by three: ' + number);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log('This number is divisible by five: ' + number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
