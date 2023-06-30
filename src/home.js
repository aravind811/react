import { useState } from "react";

const Home = () => {
   const[name,line]= useState("hi aravind")
    //let name="aravind"
    const click=()=>{
        line("thanks for buying");
        console.log(name)
    }
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <h5> {name}</h5>
            <button id="button" onClick={click}>buy now</button>
        </div>
     );
}
 
export default Home;