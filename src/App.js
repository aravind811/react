import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import Navbar from './NAVbar';
import element from './Demo';
import Toggle from './addButton';
import Main from './maincontent';
import Contact  from './contact';
function App() {
  const title="sweat it out"
  
  return (
<div className="App">
  <>
  <Navbar />
  <Routes>
    <Route path='/' element={< Home />}/>
    <Route path='contact' element={< Contact/>}/>
    </Routes>
</>

  <h1></h1>
    
   
     
    <div id='button'> <Toggle /> </div>
    </div>
  );
}

export default App;
