'use strict';

/* 2.1 We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it. */

function foo(func) {
  // What to do here?
  // Replace this comment and the next line with your code
  // console.log(func);
  console.log("Hello, I'm a foo function that will run a bar function: ");
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
