'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  //  ---> no longer works. if you need arguments use es5 function
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
  name: 'Simone',
  cities: ['Redmond', 'Maple Valley', 'Issaquah'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

// map vs forEach
// map = transform each item getting a new array back
// forEach = do something with each item like print to the screen

console.log(user.printPlacesLived());

// ** ======================================== ** //
// **               Challenge  5               ** //
// 1. similar to up above...
//    - array of numbers we want to multiply
//    - multiplyBy - single number
//    - multiply - return new array where the
//      numbers have been multiplied
// ** ======================================== ** //

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
