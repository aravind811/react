import { Link } from "react-router-dom";
const Navbar = (props) => {
    return ( 
      <nav className="navbar">
        <h1>{props.name}</h1>
        <div className="links">
          <Link to="/">home</Link>
          <Link to="/contact">about</Link>
          <Link to="/login">Login</Link>
          <a className="active" href="#home">Home</a>
          <Link to='/product'>{props.menu.first}</Link>
          <a href="mailto:rajkumar@dorustree.in">{props.menu.second}</a>
          <a href="#about">{props.menu.third}</a>
        </div>
      </nav>
    );
  };
  
  const name = "sports store";
  const menu = {
    first: "products",
    second: "contact",
    third: "about"
  };
  
  export default () => <Navbar name={name} menu={menu} />;
  
