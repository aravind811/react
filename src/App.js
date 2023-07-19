import { Router,Routes,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './home';
import Navbar from './Navbar';
import Toggle from './addButton';
import Main from './maincontent';
import Contact  from './contact';
import LoginPage from './login';
import ProductForm from './product';
import DisplayData from './displayData';
function App() {
  const title="sweat it out"
  const username = useSelector((state) => state.user.username)
  
  return (
<div className="App">
 
  <Navbar />

  <Routes>
    <Route path='/' element={< Home />}/>
    <Route path='contact' element={< Contact/>}/>
    <Route path='login' element={<LoginPage/>}/>
    <Route path='product' element={<ProductForm/>}/>
    <Route  id="contentBox" path="/display" element={<DisplayData  />} />
    </Routes>
  

<div id='button'> <Toggle /> </div>
    </div>
  );
}

export default App;
