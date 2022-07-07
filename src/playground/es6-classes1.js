// ** ======================================== ** //
// **                 Challenge                ** //
// 1. Add second optional item to constructor
//    function. Take name and age. Default to 0
// 2. getDescription - take into acct person's age
//    Andrew Mead is 26 year(s) old.
//    No name or age, Anonymous is 0 years old.
// ** ======================================== ** //
// **                 Challenge                ** //
// 1. Create new subclass - Traveler -> Person
//    Add support for homeLocation
//    Override getGreeting
//    - Hi. I am Andrew Mead. I'm visiting from
//      Philadelphia
//    - Hi. I am Andrew Mead. (If no homeLocation)
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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // calls the parent class, Person
    this.major = major;
  }
  hasMajor() {
    return !!this.major; // flips it so it is false if undefined and true if they define a major
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = description + ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation()) {
      greeting = greeting + ` I am visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}

const me = new Traveler('Simone Odegard', 32, 'Seattle');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());