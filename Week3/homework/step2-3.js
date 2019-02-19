'use strict';

/* 2.3 Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line
  let result = '';

  // Replace this comment and the next line with your code
  // console.log(str, num, result);
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line
  let result = '';

  // Replace this comment and the next line with your code
  // console.log(str, num, result);

  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 5));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line
  let result = '';

  // Replace this comment and the next line with your code
  // console.log(str, num, result);
  // do...while loop will always execute once, even if the condition is never true.
  do {
    if (num <= 0) {
      result = '';
    } else {
      result += str;
      num--;
    }
    // console.log(result);
  } while (num > 0);
  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', -8));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile
};
