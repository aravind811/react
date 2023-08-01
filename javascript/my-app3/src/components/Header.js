import React from "react"; 
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate=useNavigate();
    return(
     <div className="p-3 bg-secondary"> 
     <h3> Shopping Application </h3>
     <div className="row justify-content-center pt-2 pb-1">
   <div className="row justify content-center pt-2 pb-1">
     <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex"></div>
     <button className="btn btn-success " onClick={()=>navigate("/")}>Home</button>
     <input className="form-control" type="search" placeholder="search products"/>
     <button className="btn btn-success ">cart</button>
           
     </div>
     </div>
     </div>
    )
}