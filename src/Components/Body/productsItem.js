import React, { useContext,useRef, useState } from 'react';
import './productsItem.css';
// import ProductsArr from './product';
// import { Button,Form } from 'react-bootstrap';
import CartContext from '../Store/CartContext';
import ProductToCart from './productToCart';
import { Await } from 'react-router-dom';




const ProductsItem = (props) => {

    const cartCtx = useContext(CartContext);
    const price =`$${props.price.toFixed(2)}`;
    const addToCartHandler = amount =>{
        cartCtx.addItem({
        // const addToCartHandler = async(amount) =>{
        //     await cartCtx.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            amount: amount,
            image: props.image,

        });
        
    };
    // const[amountIsValid, setAmountIsValid] = useState(true);

    // const amountRef = useRef();

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     const enteredAmount = amountRef.current.value;
    //     const enteredAmountNumber =  +enteredAmount;
         
    //     // const Title = props.title;
    //     // const Price = props.price;
    //     // const id = props.id;
    //     // const image =`${props.image}`
    //     if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
    //        setAmountIsValid(false);
    //        return;
    //     }
    //     //  add cart item handling logic here.

    // //     const Data = {
    // //         Title,
    // //         Price,
    // //         enteredAmountNumber,
    // //         id,
    // //         image,
    // //     };
    // //    cartCtx.addItem(Data);

    // //   { console.log(cartCtx.items)};
    // console.log(enteredAmountNumber);
    //     props.onAddToCart(enteredAmountNumber);
    // };

    // console.log(props);
    return (
        <div className="col-sm-1 col-md-auto col-lg-4 m-4">
            <div className="card">
                <h5 className="card-title text-center m-3">{props.title}</h5>
                <img src={props.image} className="card-img-top img" alt={props.title} />
                <div className="card-body d-flex justify-content-between">
                    <span className="card-text">${props.price}</span>
                    <ProductToCart id={props.id} onAddToCart={addToCartHandler}/>
                    {/* <ProductToCart id={props.id}/> */}
                   
                </div>
            </div>
        </div>
    );

}

export default ProductsItem;


