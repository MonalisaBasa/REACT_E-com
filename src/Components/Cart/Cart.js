import React, {useContext} from 'react';
import CartContext from '../Store/CartContext';
// import './Cart.css';

// const Cart = () => {
//   return (
//     <div className="container box">
//     <div className="row justify-content-end">
//       <div className="col-1 me-2 mt-2">
//         <button className="btn btn-dark btn-sm text-white ">X</button>
//       </div>
//     </div>
//     <h2>CART</h2>
//     <div className="row">
//       <div className="col-3 text">
//         <u>ITEM</u>
//       </div>
//       <div className="col-3 text">
//         <u>PRICE</u>
//       </div>
//       <div className="col-4 text">
//         <u>QUANTITY</u>
//       </div>
//     </div>
//     <div className="row justify-content-end">
//       <div className="col-1 text me-3">Total </div>
//       <div className="col-1 text me-2"> ₹0</div>
//     </div>
//     <div className="row justify-content-center">
//       <div className="col-3 me-5">
//         <button className="btn btn-primary text-white btn-lg">
//           PURCHASE
//         </button>
//       </div>
//     </div>
//   </div>
// );
// }

// export default Cart
const Cart = () => {
  const CartCtx = useContext(CartContext);
  // const TotalUpdatedAmount = CartCtx.totalAmount;
  // console.log(TotalUpdatedAmount);
  let cartItem;
   let cartPrice;
  let cartTitle;
  const cartItems = CartCtx.items.map((item)=>{
    <li>
      {(cartItem = item.image)} {(cartPrice = item.Price)} {(cartTitle = item.name)}
    </li>
  })
  return (
    <React.Fragment>
      {/* {CartCtx.items.map((item) => {
        // {console.log(item)}
        return (
          <div className="border-bottom ms-4" key={item.id}>
            <p className="fw-bold text-muted">{item.Title}</p>
            <div className="mb-2 pb-2">
              {item.Price} X{" "}
              <span className="border ms-2 p-2 bg-info">
                {item.UpdatedAmount}
              </span>
            </div>
            <div className="border border-1 border-primary  mb-3"></div>
          </div>
        );
      })}
      <div className="mt-3 fw-bold text-muted p-2 ms-4 border border-bottum border-info rounded d-flex justify-content-between">
        Total Amount :- <span>{TotalUpdatedAmount}</span>
      </div> */}
      <div className="row">
            <div className="col-3 ms-3 text">
              <u>ITEM</u>
              <div className="cartImage">
                <img
                  src={`${cartItem}`}
                  width="80px"
                  height="80px"
                  className="mb-2 mt-2"
                />
                {cartTitle}
              </div>
            </div>
            <div className="col-3 text ">
              <u>PRICE</u>
              <p>{cartPrice}</p>
            </div>
            <div className="col-4 text">
              <u>QUANTITY</u>
              <p>0</p>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-1 box me-4">Total </div>
            <div className="col-1 box me-4"> ₹0</div>
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

