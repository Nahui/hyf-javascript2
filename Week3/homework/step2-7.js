'use strict';

/* 2.7 Here are two functions that look like they do the something similar but they print different results.Please explain what's going on here.

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
If you are confused please run the code and then consult the Google for "javascript pass by value pass by reference" */

const x = 9;
function f1(val) {
  val = val + 1;
  // console.log(val);
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// The first function takes an integer declared as a constant, and even though
// we try to change its value, it stays the same and does not change when used outside of the function.
// The second function takes an object previously declared as a constant, and when we try to
// change it and see the change outside of the function, we succeed.
// This is due to the fact that primitive data types in JavaScript (booleans, numbers, and strings)
// are passed by value, while objects are called by sharing. Call by sharing is largely
// similar to pass by reference (variables passed in to functions are given the direct memory address)
// in that the function is able to modify the same mutable object,
// but unlike pass by reference, it isn’t able to assign directly over it. In other
// words, pass by value means that when you pass that variable into a function it is the equivalent
// of creating a new var and making a copy of the passed in var. They’re not necessarily the same
// exact variable in the same exact memory address but rather copies. Modifying the copy does not
// affect the original. But when objects are passed into functions, a copy of the address goes in. This
// allows the function to manipulate the object outside the scope of the function.
