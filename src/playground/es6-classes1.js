// ** ======================================== ** //
// **               Challenge  8               ** //
// 1. Add second optional item to constructor
//    function. Take name and age. Default to 0
// 2. getDescription - take into acct person's age
//    Andrew Mead is 26 year(s) old.
//    No name or age, Anonymous is 0 years old.
// ** ======================================== ** //

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hello, I am ' + this.name + '!';
    return `Hello, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Simone Odegard', 32);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());