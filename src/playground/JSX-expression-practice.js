// ** ======================================== ** //
// **                 Challenge                ** //
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