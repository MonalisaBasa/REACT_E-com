import {React,useEffect,useState,useContext,useReducer} from 'react'
// import Navbar from '../About/Navbar';
import Header from '../Components/Header/Header';
import Footer from '../About/Footer';
import Product from '../Components/Body/product';
import AuthContext from '../Components/Store/AuthContext';

const StorePage = () => {
  // const [firebaseData,setFirebaseData] = useState(null);

  // useEffect(() => {
  //   const fetchDataFromFirebase = async() =>{
  //     try {
  //       const response = await fetch(`https://react-ecomm-43750-default-rtdb.firebaseio.com/cart.json`,{
  //         method: "GET",
         
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch data from Firebase');
  //         }
  //         const data = await response.json();
  //         setFirebaseData(data);
  //       }catch (error){
  //         console.error('Error fetching data from Firebase:', error);
  //       }

  //     };
  //     fetchDataFromFirebase();
  
  // },[]);
  // const [firebaseData, setFirebaseData] = useState(null);

  // useEffect(() => {
  //   const fetchDataFromFirebase = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://react-ecomm-43750-default-rtdb.firebaseio.com/cart.json'
  //       );
  //       console.log(response);

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data from Firebase');
  //       }

  //       const data = await response.json();
  //       setFirebaseData(data);
  //     } catch (error) {
  //       console.error('Error fetching data from Firebase:', error);
  //     }
  //   };

  //   fetchDataFromFirebase();
  // }, []);

  // // Load cart data from local storage on component mount
  // useEffect(() => {
  //   const savedCart = localStorage.getItem('cart');
  //   if (savedCart) {
  //     const parsedCart = JSON.parse(savedCart);
  //     // Use the parsedCart data as needed
  //   }
  // }, []);

  // // Save cart data to local storage whenever the firebaseData changes
  // useEffect(() => {
  //   if (firebaseData) {
  //     localStorage.setItem('cart', JSON.stringify(firebaseData));
  //   }
  // }, [firebaseData]);

 

  
  return (
    <div>
        <Header/>
        <Product  />
        <Footer/>

      
    </div>
  );
};

export default StorePage
