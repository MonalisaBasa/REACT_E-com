import React from 'react';
import './productsItem.css';
// import ProductsArr from './product';
import { Button } from 'react-bootstrap';




const ProductsItem = (props) => {
    console.log(props);
    return (
        <div className="col-sm-1 col-md-auto col-lg-4 m-4">
            <div className="card">
                <h5 className="card-title text-center m-3">{props.title}</h5>
                <img src={props.image} className="card-img-top img" alt={props.title} />
                <div className="card-body d-flex justify-content-between">
                    <span className="card-text">${props.price}</span>
                    <Button className="ms-5">Add To Cart</Button>
                </div>
            </div>
        </div>
    );

}

export default ProductsItem;


