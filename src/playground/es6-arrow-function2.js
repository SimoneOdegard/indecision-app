// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  //  ---> no longer works. if you need arguments use es5 function
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: 'Simone',
  cities: ['Redmond', 'Maple Valley', 'Issaquah'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

// map vs forEach
// map = transform each item getting a new array back
// forEach = do something with each item like print to the screen

console.log(user.printPlacesLived());

// ** ======================================== ** //
// **                 Challenge                ** //
// 1. similar to up above...
//    - array of numbers we want to multiply
//    - multiplyBy - single number
//    - multiply - return new array where the
//      numbers have been multiplied
// ** ======================================== ** //

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());