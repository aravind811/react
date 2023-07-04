import ReactDOM from 'react-dom/client';
import React from 'react';
function Person(props) {
  return <h2>I'm { props.name }</h2>;
}

function Greeting() {
  const name = "cristiano"
  return (
    <>
      <h1>Hello!</h1>
      <Person name={name}  /*callback*/

 />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
export default  Greeting;

 