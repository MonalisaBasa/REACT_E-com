import React, { useReducer, useState } from 'react';
import CartContext from './CartContext';
import { useContext, useEffect } from 'react';
import AuthContext from './AuthContext';

 const defaultCartState = {
// let defaultCartState = {
  items: [],
  totalAmount: 0
};


const cartReducer = (state, action) => {
  // console.log(action.totalAmount);
  // console.log(state);
 
  if (action.type === 'ADD') {

    const item = action.item;
    // console.log(item);

    // const updatedTotalAmount = 
    // state.totalAmount + item.price * item.amount;
    // console.log( state.totalAmount);

    
// console.log(Object.values(item));
const data=Object.values(item);

//
  let updatedTotalAmount = state.totalAmount;

for (const key of data) {
  console.log(typeof key.price,typeof key.amount);

  updatedTotalAmount += (key.price * key.amount);
}
console.log(updatedTotalAmount)
    

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems;

    if(existingCartItem){
        const updatedItem ={
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex]=updatedItem;
    }else {
        updatedItems = state.items.concat(action.item);
    }
    // console.log(updatedItems);
    return {
          items: updatedItems,

          totalAmount: updatedTotalAmount
    //  return {
    //   items: action.items,
    //   totalAmount: action.totalAmount,
    };

  }

  if (action.type === 'CLEAR') {
    return {
      items: action.items,
      totalAmount: action.totalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);

    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
  // return state;
};

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const storedEmail = localStorage.getItem('Email');

  // Check if the storedEmail is not null or undefined before manipulating it
  const emailForCrud = storedEmail ? storedEmail.replace("@", "").replace(".", "") : null;

  // const emailForCrud = localStorage.getItem('email').replace("@", "").replace(".", "");
  console.log(emailForCrud);
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  // console.log(cartState);

  const addItemToCartHandler = (item) => {
    // console.log(item);
    // if (!item || typeof item !== 'object' || !('price' in item)) {
    //   console.error('Invalid item:', item);
    //   return;
    // }
      dispatchCartAction({type: 'ADD', item: item});

        // Log the state after the update
    // console.log('Cart State after addItemToCartHandler:', cartState);
  };

    // useEffect hook to set the default cart value when the component mounts


    useEffect(() => {
    const setDefaultValue = async () => {
            // Fetches cart data from Firebase and initializes the state
        await fetch(
        `https://react-ecomm-43750-default-rtdb.firebaseio.com/cart.json`
      )
        .then((res) => {
          // console.log(res);
          return res.json();
        })
        .then((data) => {
          const loadedObj=[];
          for (const id in data) {
            console.log(loadedObj.push({id,...data[id]}))
        }
      
    
          // console.log(data,'Incartprovider');
         
          dispatchCartAction({
            type: "ADD",
            // item: data|| [],
            item:loadedObj,
            totalAmount: data || 0,
          });
          // Log the state after the update
        // console.log('Cart State after setDefaultValue:', cartState);
        }) 
        .catch((err) => console.log(err))  
       };
    // if (emailForCrud) {
      setDefaultValue();
    
    // }
    // addItemToCartHandler();
  }, []);

 






const removeItemFromCartHandler = (id) => {
  dispatchCartAction({ type: 'REMOVE', id: id })
};

// const clearCartHandler = () => {
//   dispatchCartAction({
//     type: "CLEAR", items: [],
//     totalAmount: 0
//   });
// };

const cartContext = {
  items: cartState.items,
  totalAmount: cartState.totalAmount,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler,
 dispatchCartAction: dispatchCartAction,
  
  // clearCart: clearCartHandler,
};
return (
  <CartContext.Provider value={cartContext}>
    {/* props.children is a special prop that allows you to pass components or elements as children to another component */}
    {/* You can use props.children wherever you want to render the children components in the parent component's JSX. */}
    {/* the CartContext.Provider component is being used as a wrapper around its children. The components or elements that are placed inside the CartContext.Provider component when it is used will become its props.children.  */}
    {props.children}
  </CartContext.Provider>
)
};

export default CartProvider;


