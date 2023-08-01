import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function ProductCard(props){
    const rupees=(Number(props.price))* 80
    const navigate=useNavigate();
    return(
        <div className="card m-2" style={{width: 300}} role="button" onClick={()=>navigate('/product/${props.id}')}>
            <div className="mt-2">
                <img src={props.thumbnail} height={150} width={180} alt={props.title} className="border-radius-9" />
            </div>
            <div className="card-body">
                <h3 className="mt-2">{props.title}</h3>
                <h6 className="mt-2">Price:{rupees}</h6>
                <h5 className="mt-2">Discount:{props.discountPercentage}</h5>
                <h6>Rating:{props.rating}</h6>
                <div>
                    {props.stock> 0?  <Button> buy now </Button>:<p style={{color:'red'}}>Out of stock</p>}
                </div>
            </div>
            
        </div>
    )
}