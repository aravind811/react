import { useState } from "react";


function Home() {
    const [name, line] = useState("hi aravind");
    //let name="aravind"
    const click = () => {
        line("thanks for buying");
        console.log(name);
    };
    return (
        <div className="home">
            <h2 id="home">Home page</h2>
            <h1> {name}</h1>
            <button id="button" onClick={click}>buy now</button>
        </div>
    );
}
 
export default Home;