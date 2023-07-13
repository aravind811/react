import React, { useReducer,useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
   const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
      
  }, [data]);

  return (
    <>
      {data &&
        data.map((ite) => {
          return <p >{ite.userId}" ara   "{ite.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

   
  
  }
  export default MyComponent;
  
