console.log('app.js is running!');

// ** ======================================== ** //
// **               Challenge  2               ** //
// 1. create app object title/subtitle
// A. use title/subtitle in the template
// B. render template
// **               Challenge  3               ** //
// 1. Only render the subtitle (and p tag) if
//    subtitle exist - logical and operator
// 2. Render new p tag - if options.length > 0
//    'here are your options'. if < 0 'no options'
//    * hint. ternary
// ** ======================================== ** //

// JSX - JavaScript XML
// need wrapper div
const app = {
  title: 'Indecision App',
  subtitle: 'A practice app for reviewing React',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
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

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else return undefined;
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);