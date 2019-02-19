'use strict';

/* 2.4 Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively. */

function Dog() {
  // add your code here
  this.name = 'Max';
  this.color = 'brown';
  this.numLegs = 4;
}

const hound = new Dog();
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;
