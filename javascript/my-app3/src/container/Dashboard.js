import React from "react";
import { ProductList } from "../data/productlist";
import ProductCard from "../components/productCard";
export default function Dashboard(){
    return(
        <div className=" p-2 d-flex flex-wrap justify-content-center">
            {ProductList.map((product)=><ProductCard{...product}/>)}
            </div>
    )
}