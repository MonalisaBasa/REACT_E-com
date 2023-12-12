import React, { useContext,useRef,useEffect} from 'react'
import CartContext from '../Store/CartContext'
import {Form,Button} from 'react-bootstrap';
import ProductsItem from './productsItem';

// const ProductToCart = (props) => {
//     const cartCtx = useContext(CartContext);
//     console.log(cartCtx.items);
//     const amountRef = useRef();
    
//     const submitHandler = async (event) =>{
//        event.preventDefault();
//        const enteredAmount = amountRef.current.value;
//        const enteredAmountNumber =+enteredAmount;

//        props.onAddToCart(enteredAmountNumber);

//       // store data in firebase
      
//       //  const email = cartCtx.email;
//       //  console.log(email);

//       //  const existingProductIndex = cartCtx.items.findIndex((item) => item.id === props.id);
//       console.log("After onAddToCart:", cartCtx.items);
//        let cart = {
//         // email: email,
//         items:cartCtx.items,
// };
//       console.log(cart.items);
      

    
//     try{
      
//         const response = await fetch(`https://react-ecomm-43750-default-rtdb.firebaseio.com/cart.json`,{
//           method: "POST",
//           body: JSON.stringify(cart),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if(!response.ok){
//           throw new Error("Failed to store data in Firebase");
//         }
//         const responseData = await response.json();
//         console.log("Data stored in Firebase:", responseData);
//       } 
//       catch (error) {
//         console.error("Error storing data in Firebase:", error.message);
//       }
//     // }
//   }
    
    //  SuccesfullyAdded();
    
    
    
    // }
    //  const SuccesfullyAdded = ()=>{
      //   alert(`Your Product is added to the cart`)
      //  }
      
      
      
      
      
  //     return (
        
  //       <div>
  //       <Form onSubmit={submitHandler}>
  //                       <Form.Group className="" controlId="formBasicEmail">
  //                           <Form.Label className="ms-5 mt-0">Amount</Form.Label>
  //                           <Form.Control
  //                               ref={amountRef}
  //                               id= {`amount_ + ${props.id}`}
  //                               type="number"
  //                               min="1"
  //                               max="10"
  //                               className="ms-5 mb-2"
  //                               step="1"
  //                               defaultValue="1"
  //                               style={{ width: "4rem", height: "2rem" }}
  //                               />
  //                            <Button type="submit" className="ms-5">
  //                                Add To Cart
  //                            </Button>
  //                            {/* {!amountIsValid && <p>Please enter a valid amount(1-10)</p>} */}
  //                        </Form.Group>
  //                    </Form>
  //   </div>
   
  //  )
  // }
  
  // export default ProductToCart;
  const ProductToCart = (props) => {
    const cartCtx = useContext(CartContext);
    const amountRef = useRef();
  
    useEffect(() => {
      console.log("Updated cartCtx.items:", cartCtx.items);
    }, [cartCtx.items]);
  
    const submitHandler = async (event) => {
      event.preventDefault();
  
      const enteredAmount = amountRef.current.value;
      const enteredAmountNumber = +enteredAmount;
  
      try {
        await props.onAddToCart(enteredAmountNumber);
  
        // No need to log here
  
        const response = await fetch(`https://react-ecomm-43750-default-rtdb.firebaseio.com/cart.json`, {
          method: "POST",
          body: JSON.stringify({ items: cartCtx.items }), // Send only the items to Firebase
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to store data in Firebase");
        }
  
        const responseData = await response.json();
        console.log("Data stored in Firebase:", responseData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  
    return (
      <div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="" controlId={`amount_${props.id}`}>
            <Form.Label className="ms-5 mt-0">Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              min="1"
              max="10"
              className="ms-5 mb-2"
              step="1"
              defaultValue="1"
              style={{ width: "4rem", height: "2rem" }}
            />
            <Button type="submit" className="ms-5">
              Add To Cart
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
  
  export default ProductToCart;