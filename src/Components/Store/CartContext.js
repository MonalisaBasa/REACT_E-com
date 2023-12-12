import React from 'react'

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item) =>{
        // console.log(item);
    },
    removeItem: (id) => {},
    // email:'',
    // setEmail: () => {
       
    // },
  
   
});


export default CartContext;
