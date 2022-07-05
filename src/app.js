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
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault(); // prevents full page refresh

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const removeAll = (e) => {
  e.preventDefault();
  app.options = [];
  renderTemplate();
}

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderTemplate();