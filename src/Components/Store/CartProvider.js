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
 
  if (action.type === 'ADD') {

    const updatedTotalAmount = 
    state.totalAmount + action.item.price *  action.item.amount;
    // console.log(updatedTotalAmount);

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
};

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  // const emailForCrud = authCtx.email.replace("@", "").replace(".", "");

  //chat gpt
  // const[email,setEmail] = useState('');
  // console.log(email);

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD', item: item});
  };

    // useEffect hook to set the default cart value when the component mounts


  //   useEffect(() => {
  //   const setDefaultValue = async () => {
  //           // Fetches cart data from Firebase and initializes the state
  //       await fetch(
  //       // `https://react-ecomm-43750-default-rtdb.firebaseio.com/cart/${emailForCrud}.json`
  //       `https://react-post-request-3c49a-default-rtdb.firebaseio.com/cart/${emailForCrud}.json`

  //     )
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         dispatchCartAction({
  //           type: "ADD",
  //           items: data?.items || [],
  //           totalAmount: data?.totalAmount || 0,
  //         });
  //         // console.log(data);
  //       })
  //       .catch((err) => console.log(err));

  //   };
  //   if (emailForCrud) {
  //     setDefaultValue();
  //   }
  // }, [emailForCrud]);


// const addItemToCartHandler = async (product) => {
//   console.log('cartState.items:',cartState.items);
//   const updatedAmount =
//     cartState.totalAmount + product.price * product.amount;
//     const existingCartItemIndex = cartState.items.findIndex(
//       ({ item}) => item === product.item
//       );
   
//   const existingCartItem = cartState.items[existingCartItemIndex];
//   let updatedItems;

//   if (existingCartItem) {
//     const updatedItem = {
//       ...existingCartItem,
//       amount: existingCartItem.amount + product.amount,
//     };
//     updatedItems = [...cartState.items];
//     updatedItems[existingCartItemIndex] = updatedItem;
//   } else {
//     updatedItems = cartState.items.concat(product);
//   }
//   dispatchCartAction({
//     type: "ADD",
//     items: updatedItems,
//     totalAmount: updatedAmount,
//   });
//   await fetch(
//     // `https://react-ecomm-43750-default-rtdb.firebaseio.com/cart/${emailForCrud}.json`,
//     `https://react-post-request-3c49a-default-rtdb.firebaseio.com/cart/${emailForCrud}.json`,
//   {
//       method: "PUT",
//       body: JSON.stringify({
//       items: updatedItems,
//         totalAmount: updatedAmount,
//       }),
//     }
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .catch((err) => console.log(err));
// };



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
  // chatgpt
  // email,
  // setEmail,
  
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
// chatgpt code

// export const useCart = () => useContext(CartContext);