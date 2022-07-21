class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  };

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  };

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && <p>this is what will show when you toggle</p>}
      </div>
    );
  };
};

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// console.log('app.js is running!');

// const app = {
//   title: 'Visibility Toggle',
//   text: 'this is what will show when you toggle'
// }

// let visibility = false;

// const toggle = (e) => {
//   e.preventDefault();
//   visibility = !visibility;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggle}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (<p>{app.text}</p>)}
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// render();