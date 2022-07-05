'use strict';

console.log('app.js is running!');

var app = {
  title: 'Visibility Toggle',
  text: 'this is what will show when you toggle'
};

var visibility = false;

var toggle = function toggle(e) {
  e.preventDefault();
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'p',
      null,
      app.text
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
render();
