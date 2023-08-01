import React from "react";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "../components/product";
export default function Home(){
    return(
      <div> home
        <Header />
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      </div>

    )
}