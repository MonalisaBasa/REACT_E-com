// import React,{useState, useEffect} from 'react'
import React,{useContext,useState,useEffect} from 'react';
import CartContext from './CartContext';

const AuthContext =React.createContext({
    token: '',
    email:'',
//    to store email in loaclstorage
    emailHand: (email) =>{},
    isLoggedIn: false,
    login: (token) => {},
    logout: () =>{} 
});

export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token');
  
    const[token,setToken] = useState(initialToken);
    const[email,setEmail] = useState("");
    console.log(email);
   
    const userIsLoggedIn =!!token;
//    chatgpt
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedEmail = localStorage.getItem("email");
    
        if (storedToken && storedEmail) {
          loginHandler(storedToken, storedEmail);
        }
      }, []);

    // const emailHandling = () =>{
    //   setEmail(email);
    // }

    // const loginHandler = (token) =>{
        const loginHandler = (token,email) => {
        console.log(email);
        setToken(token);
        setEmail(email);
        localStorage.setItem('token',token);
        localStorage.getItem("email",email);

        
    };

     // Set a timeout to clear the token after 5 minutes
    //  setTimeout(() => {
    //     logout();
    //     alert('Token has expired. Please log in again.');
    //   }, 5000);
   
    // useEffect(() => {
    //     const logoutTimer = setTimeout(() => {
    //       logoutHandler();
    //       alert('Token has expired. Please log in again.');
    //     }, 5*60*1000);
    
    //     // Clean up the timer when the component unmounts or when the token changes
    //     return () => clearTimeout(logoutTimer);
    //   }, [token]);


    const logoutHandler = () =>{
        setToken(null);
        setEmail("");
        localStorage.removeItem('token');
        localStorage.removeItem("email");
    };

    const contextValue = {
        token: token,
        email: email,
        // emailHandler: emailHandling,
        emailHand: setEmail,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,

    };

    return (
    <AuthContext.Provider value=
    {contextValue}>
        {props.children}
    </AuthContext.Provider>
    );
};

export default AuthContext;