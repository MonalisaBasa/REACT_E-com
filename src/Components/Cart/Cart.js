import React, { useContext } from 'react';
import CartContext from '../Store/CartContext';


// import './Cart.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  // const TotalUpdatedAmount = cartCtx.totalAmount;
  const totalAmount =`$${cartCtx.totalAmount.toFixed(2)}`

  const cartItemAddHandler = item =>{
    cartCtx.addItem({...item,amount:1});
  };

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  }

 
//   let cartItem;
//   let cartPrice;
//   let cartTitle;
// console.log(cartCtx.items);
//   const cartItems = cartCtx.items.map((item) => {
//     <li>
//       {(cartItem = item.image)} {(cartPrice = item.Price)} {(cartTitle = item.name)}
//     </li>
//   })
// const cartItem = (
//   <ul>
// {cartCtx.items.map((item) => (
//   <CartItems
//   key={item.id}
//   title={item.title}
//   price={item.price}
//   amount={item.amount}
//   image={item.image}
//   onRemove={cartItemAddHandler.bind(null,item.id)}
//   onAdd={cartItemAddHandler.bind(null,item)}
// />
// ))}
// </ul>
// );
  return (
    <React.Fragment>
     {cartCtx.items.map((item) => (
     
        <div className="row" key={item.id}>
          <div className="col-3 ms-3 text">
            <u>ITEM</u>
            <div className="cartImage">
              <img
                src={`${item.image}`}
                width="80px"
                height="80px"
                className="mb-2 mt-2"
                alt={item.title}
              />
              {item.title}
            </div>
          </div>
          <div className="col-3 text">
            <u>PRICE</u>
            <p>{item.price}</p>
          </div>
          <div className="col-4 text">
            <u>QUANTITY</u>
            <p>{item.amount}</p>
          </div>
        </div>
      ))}
      <div className="row justify-content-start">
        <div className="col-1 box me-4">
          <span className="total"><b>Total:</b></span>
          <span>{totalAmount}</span>
        </div>
        {/* <div className="col-1 box text-end">
          <span>{totalAmount}</span>
        </div> */}
      </div>
      <div className="row justify-content-center">
        <div className="col-3 me-5">
          <button className="btn btn-primary text-white btn-lg">
            PURCHASE
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;

