import React, { useContext,useRef, useState } from 'react';
import './productsItem.css';
// import ProductsArr from './product';
// import { Button,Form } from 'react-bootstrap';
import CartContext from '../Store/CartContext';
import ProductToCart from './productToCart';
// import { Await } from 'react-router-dom';
import AuthContext from '../Store/AuthContext';




const ProductsItem = (props) => {

    const cartCtx = useContext(CartContext);
    const price =`$${props.price.toFixed(2)}`;
    // const authCtx = useContext(AuthContext);
    const emailForUserSpecific = localStorage.getItem("Email")
    console.log(localStorage.getItem("Email"));

    // const senddatatoapi = async (amount) => {
      
      
    //     try {
    //       const response = await fetch(
    //         "https://react-ecomm-43750-default-rtdb.firebaseio.com/cart.json",
    //         {
    //           method: "POST",
    //           body: JSON.stringify({ id: props.id,
    //             title: props.title,
    //             price: props.price,
    //             amount: amount,
    //             image: props.image,}),
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );
    
    //       if (!response.ok) {
    //         throw new Error("Failed to store data in Firebase");
    //       }
    
    //       const responseData = await response.json();
    //       console.log("Data stored in Firebase:", responseData);
    //     } catch (error) {
    //       console.error("Error:", error.message);
    //     }
    //   };
    const senddatatoapi = async (amount) => {
   try {
    const existingCartItem = cartCtx.items.find((item) => item.id === props.id);
    console.log(existingCartItem);
    

    if (existingCartItem) {
      // If the item is already in the cart, update the quantity
      const updatedAmount = existingCartItem.amount + amount;

      const response = await fetch(
        `https://react-ecomm-43750-default-rtdb.firebaseio.com/cart/${existingCartItem.key}.json`,
        {
          method: "PUT",
          body: JSON.stringify({ 
            id: props.id,
            title: props.title,
            price: props.price,
            amount: updatedAmount ,
            image: props.image,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update quantity in Firebase");
      }

      const responseData = await response.json();
      console.log("Quantity updated in Firebase:", responseData);
      return responseData;
    } else {
      // If the item is not in the cart, add it as a new item
      const response = await fetch(
        "https://react-ecomm-43750-default-rtdb.firebaseio.com/cart.json",
        {
          method: "POST",
          body: JSON.stringify({
            id: props.id,
            title: props.title,
            price: props.price,
            amount: amount,
            image: props.image,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store data in Firebase");
      }

      const responseData = await response.json();
      console.log("Data stored in Firebase:", responseData);
      return responseData;

      // Store the firebaseId in your local state or context
      // const newCartItem = { ...responseData, id: props.id, amount: amount };
      // cartCtx.addItem(newCartItem);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};


    const addToCartHandler =async(amount) =>{
        const responseData = await senddatatoapi(amount);
        console.log(responseData);
        cartCtx.addItem({
          // const addToCartHandler = async(amount) =>{
            //     await cartCtx.addItem({
              id: props.id,
              title: props.title,
              price: props.price,
              amount: amount,
              image: props.image,
              key:responseData.name,
              
            });
           
        
    };
    
  
   return (
        <div className="col-sm-1 col-md-auto col-lg-4 m-4">
            <div className="card">
                <h5 className="card-title text-center m-3">{props.title}</h5>
                <img src={props.image} className="card-img-top img" alt={props.title} />
                <div className="card-body d-flex justify-content-between">
                    <span className="card-text">${props.price}</span>
                    <ProductToCart id={props.id} onAddToCart={addToCartHandler} productdata={props}/>
                    {/* <ProductToCart id={props.id}/> */}
                   
                </div>
            </div>
        </div>
    );

}

export default ProductsItem;


