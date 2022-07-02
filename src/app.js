console.log('app.js is running!');

// ** ======================================== ** //
// **               Challenge  2               ** //
// 1. create app object title/subtitle
// A. use title/subtitle in the template
// B. render template
// ** ======================================== ** //

// JSX - JavaScript XML
// need wrapper div
const app = {
  title: 'Indecision App',
  subtitle: 'A practice app for reviewing React'
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

// ** ======================================== ** //
// **               Challenge  1               ** //
// 1. create a templateTwo var JSX expression
// A. root div
//      h1 -> your name
//      p -> Age: 32
//      p -> Location: Renton, WA
// B. render templateTwo instead of template
// ** ======================================== ** //

const user = {
  name: 'Monie',
  age: 32,
  location: 'Renton'
};

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p> 
  </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);