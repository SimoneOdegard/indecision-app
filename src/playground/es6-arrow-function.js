// es5 function
const square = function (x) {
  return x * x;
};

console.log(square(8));

// es6 arrow function
// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

// ** ======================================== ** //
// **                 Challenge                ** //
// 1. use arrow function called get first name
//    - getFirstName('mike smith') -> 'mike'
//    - create regular arrow function
//    - create 2nd arrow function using
//      shorthand syntax
// ** ======================================== ** //

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));
console.log(getFirstName2('Johnny Depp'));