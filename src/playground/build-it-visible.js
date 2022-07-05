console.log('app.js is running!');

const app = {
  title: 'Visibility Toggle',
  text: 'this is what will show when you toggle'
}

let visibility = false;

const toggle = (e) => {
  e.preventDefault();
  visibility = !visibility;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggle}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (<p>{app.text}</p>)}
    </div>
  )
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
render();