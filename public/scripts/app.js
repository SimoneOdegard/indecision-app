'use strict';

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
var app = {
  title: 'Indecision App',
  subtitle: 'A practice app for reviewing React',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  )
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

var user = {
  name: 'Monie',
  age: 32,
  location: 'Renton'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else return undefined;
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
