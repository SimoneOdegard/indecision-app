'use strict';

// es5 function
var square = function square(x) {
  return x * x;
};

console.log(square(8));

// es6 arrow function
// const squareArrow = (x) => {
//   return x * x;
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(4));

// ** ======================================== ** //
// **               Challenge  4               ** //
// 1. use arrow function called get first name
//    - getFirstName('mike smith') -> 'mike'
//    - create regular arrow function
//    - create 2nd arrow function using
//      shorthand syntax
// ** ======================================== ** //

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

var getFirstName2 = function getFirstName2(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
console.log(getFirstName2('Johnny Depp'));
