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
           
        </div>
    );
}
 
export default Home;