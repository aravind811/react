import { useState } from "react";
import Main from "./maincontent";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Home() {
    const username = useSelector((state) => state.user.username)
    const [name, line] = useState(username);
    //let name="aravind"
    const click = () => {
        line("thanks for buying");
        console.log(name);
    };
    return (
        <div className="home">
            <h2 id="home">Home page</h2>
            <h1> {name}</h1>
            <Main />
            
            <button id="button" onClick={click}>buy now</button>
        </div>
    );
}
 
export default Home;