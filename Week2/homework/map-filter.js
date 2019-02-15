'use strict';

/* 1.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

Your solution could be something like this:

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.
*/

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  // console.log(numbers);
  return numbers.filter(num => num % 2 !== 0).map(num => num * 2);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// It would look nicer and simpler without the doubleOddNumbers function, like this:
// Filter returns either true or false. If it returns true then the array keeps that element, and false is filtered out
// Map modifies an array
/* const myNumbers = [1, 2, 3, 4];
const myDoubleOddNumbers = myNumbers.filter(num => {
    return num % 2 !== 0;
}).map(num => {
    return num *= 2
});
console.log(myDoubleOddNumbers); */

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers
};
