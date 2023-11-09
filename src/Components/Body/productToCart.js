import React, { useContext,useRef} from 'react'
import CartContext from '../Store/CartContext'
import {Form,Button} from 'react-bootstrap';
import ProductsItem from './productsItem';

const ProductToCart = (props) => {
    const cartCtx = useContext(CartContext);
    const amountRef = useRef();
      const submitHandler =(event) =>{
       event.preventDefault();
       const enteredAmount = amountRef.current.value;
       const enteredAmountNumber =+enteredAmount;

       props.onAddToCart(enteredAmountNumber);

       SuccesfullyAdded();


   }
   const SuccesfullyAdded = ()=>{
    alert(`Your Product is added to the cart`)
   }


   

    
  return (
    
    <div>
        <Form onSubmit={submitHandler}>
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label className="ms-5 mt-0">Amount</Form.Label>
                            <Form.Control
                                ref={amountRef}
                                id= {`amount_ + ${props.id}`}
                                type="number"
                                min="1"
                                max="10"
                                className="ms-5 mb-2"
                                step="1"
                                defaultValue="1"
                                style={{ width: "4rem", height: "2rem" }}
                           />
                             <Button type="submit" className="ms-5" onClick={SuccesfullyAdded}>
                                 Add To Cart
                             </Button>
                             {/* {!amountIsValid && <p>Please enter a valid amount(1-10)</p>} */}
                         </Form.Group>
                     </Form>
    </div>
   
  )
}

export default ProductToCart;
