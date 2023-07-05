
import './App.css';
import Home from './home';
import Navbar from './NAVbar';
import element from './Demo';
import Toggle from './addButton';
function App() {
  const title="sweat it out"
  
  return (
<div className="App">
  <Navbar />

  <h1>HOME PAGE</h1>
    <div className="content">
    <div id='button'> <Toggle /> </div>
    <div className="homepage-text">
    < Home />
  
    </div></div>
     
    <div id='button'> <Toggle /> </div>
    </div>
  );
}

export default App;
