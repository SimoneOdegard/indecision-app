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
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // prevents full page refresh

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var removeAll = function removeAll(e) {
  e.preventDefault();
  app.options = [];
  renderTemplate();
};

var renderTemplate = function renderTemplate() {
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
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderTemplate();
