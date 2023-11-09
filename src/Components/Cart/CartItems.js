import React from 'react';
import classes from '../Cart/CartItem.module.css';

// const CartItems = (props) => {
//   return (
  
//     <div>
//       <div className="row">
//           <div className="col-3 ms-3 text">
//             <u>ITEM</u>
//             <div className="cartImage">
//               <img
//                 src={`${props.image}`}
//                 width="80px"
//                 height="80px"
//                 className="mb-2 mt-2"
//               />
//               {props.title}
//             </div>
//           </div>
//           <div className="col-3 text ">
//             <u>PRICE</u>
//             <p>{props.price}</p>
//           </div>
//           <div className="col-4 text">
//             <u>QUANTITY</u>
//             <p>{props.amount}</p>

//           </div>
//           {/* <div></div>
//           <button onClick={props.onRemove}>-</button>
//           <button onClick={props.onAdd}>+</button> */}
//         </div>
//     </div>
    
//   )
// }

const CartItem = (props) => {
  console.log(props);
    const price = `Rs ${props.price.toFixed(2)}`;
  
    return (
      <li className={classes["cart-item"]}>
        <div>
       
          <h4>{props.title}</h4>
          <img src={props.image} alt={props.title}/>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    );
  };

export default CartItem;
