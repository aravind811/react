import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/productlist";
import { Button } from "react-bootstrap";

export default function Product() {
  const params = useParams();
  console.log(params.id)
  const props = ProductList.find((element) => element.id === parseInt(params.id));

  // Check if props is undefined before accessing its properties
  if (!props) {
    return <div>Product not found</div>;
  }

  return (
    <div className="card m-2">
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={300}
          width={360}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className="card-body">
        <h3 className="mt-2">{props.title}</h3>
        <h6 className="mt-2">Price: {(props.price) * 80}</h6>
        <h5 className="mt-2">Discount: {props.discountPercentage}</h5>
        <h6>Rating: {props.rating}</h6>
        <div>
          {props.stock > 0 ? <Button>Buy Now</Button> : <p style={{ color: 'red' }}>Out of stock</p>}
        </div>
      </div>
    </div>
  );
}
