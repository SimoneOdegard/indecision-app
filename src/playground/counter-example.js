
// ** ======================================== ** //
// **                 Challenge                ** //
// 1. create 2 new buttons
//    -- Make button "-1". Set up minusOne
//       function and register - log minusOne
//    -- Make reset button "reset". setup reset
//       function - log reset
// ** ======================================== ** //
// **                 Challenge                ** //
// 1. make minusOne and reset work
//    -- minusOne subtracts by 1
//    -- reset resets the count
// ** ======================================== ** //

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();