// never going to use var... const first... let if we need to reassign variables

// var based variables
// can reassign, can also redefine
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let based variables
// can reassign, cannot redefine it
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// const based variables
// cannot reassign, cannot redefine
// value does not change .... use const by default
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping
const fullName = 'Simone Odegard';
let firstName

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);