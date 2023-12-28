import {React,useEffect,useState,useContext,useReducer} from 'react'
// import Navbar from '../About/Navbar';
import Header from '../Components/Header/Header';
import Footer from '../About/Footer';
import Product from '../Components/Body/product';
import CartContext from '../Components/Store/CartContext';
import AuthContext from '../Components/Store/AuthContext';

const StorePage = () => {
  // const cartCtx = useContext(CartContext);
  // const authCtx = useContext(AuthContext);



  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (authCtx.email) {
  //       try {
  //         // Fetch cart data for the logged-in user from Firebase
  //         const response = await fetch(`https://react-ecomm-43750-default-rtdb.firebaseio.com/cart/${authCtx.email}.json`);
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch cart data from Firebase');
  //         }

  //         const cartData = await response.json();

  //         // Update the cart context with the fetched data
  //         // cartCtx.updateCart(cartData);
  //         dispatchCartAction({
  //           type: 'ADD',
  //           items: cartData?.items || [],
  //           totalAmount: cartData?.totalAmount || 0,
  //         });
  //       } catch (error) {
  //         console.error('Error fetching cart data:', error.message);
  //       }
  //     }
  //   };

  //   // Call the fetchData function when the component mounts and when the user logs in
  //   fetchData();
  // }, [authCtx.email]); // Dependency on authCtx.email ensures this runs when the user logs in

  return (
    <div>
        <Header/>
        <Product  />
        <Footer/>

      
    </div>
  );
};

export default StorePage
