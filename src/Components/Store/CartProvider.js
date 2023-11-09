import React, {useReducer} from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items:[],
    totalAmount: 0
};


const cartReducer = (state,action) => {
    console.log(action.item);
    if(action.type === 'ADD'){
       

        
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
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount

        }
        
    }

if(action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id 
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount -existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1){
        updatedItems = state.items.filter(item => item.id !== action.id);

    }else{
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
}
return defaultCartState; 
};

const CartProvider = (props) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }; 

    const removeItemFromCartHandler = (id) =>{
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler ,
        removeItem: removeItemFromCartHandler
    };
  return (
    <CartContext.Provider value={cartContext}>
        {/* props.children is a special prop that allows you to pass components or elements as children to another component */}
        {/* You can use props.children wherever you want to render the children components in the parent component's JSX. */}
        {/* the CartContext.Provider component is being used as a wrapper around its children. The components or elements that are placed inside the CartContext.Provider component when it is used will become its props.children.  */}
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
