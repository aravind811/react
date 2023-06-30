
import './App.css';
import Home from './home';
import Navbar from './NAVbar';
function App() {
  const title="sweat it out"
  const dollar=82.5;
  const link="https://www.javatpoint.com/react-native-environment-setup"
  return (
<div className="App">
  <Navbar />
    <div className="content">
      <h1></h1>
      <Home />
      <h3>{dollar}</h3>
      <a href={link}>REACT SETUP</a>
    </div></div>
  );
}

export default App;
