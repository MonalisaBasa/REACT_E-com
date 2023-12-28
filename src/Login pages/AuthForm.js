import { useState, useRef } from 'react';
import StorePage from '../Pages/StorePage';

import classes from './AuthForm.module.css';
import { useContext } from 'react';
import AuthContext from '../Components/Store/AuthContext';
import { Navigate, useHistory, useNavigate } from 'react-router-dom';
// chatgpt
// import {useCart} from '../Components/Store/CartProvider';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  //instead of useHistory we using useNavigate
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  // const [hasAccount, sethasAccount] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    // sethasAccount((prevState) => !prevState);
  };

  //chatgpt

  // const {setEmail} = useCart();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredpassword = passwordInputRef.current.value;
    // const emailForCrud = enteredEmail.replace("@", "").replace(".", "");
    
    // chatgpt
    // update email in cartcontext
    // setEmail(enteredEmail);

    


    //optional :Add validation

    setIsLoading(true);
    setError(null);
    let url;
    // if (isLogin) {
    //   url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAy1x8U_13KlYqai3cwii7J-Hdy4Wv4PMM'
    // }
   
    if (isLogin) {
      url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAy1x8U_13KlYqai3cwii7J-Hdy4Wv4PMM'

      
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredpassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            const data = res.data;
            return res.json();

          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed";

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken,data.email);
          localStorage.setItem("Email",data.email);
          navigate("/store");
        })
      .catch((err) => {
          alert(err.message);
        });

      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";

    }
       else {
       url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAy1x8U_13KlYqai3cwii7J-Hdy4Wv4PMM'
      };
      fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredpassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();

      } else {
        return res.json().then((data) => {
          //show an error modal
          console.log(data);
          let errorMessage = 'Authentication failed';
          // if(data && data.error && data.error.message){
          //   errorMessage = data.error.message;
          // };
          // alert(errorMessage);
          throw new Error(errorMessage);
        });
      };
    })
    .then((data) =>{
      console.log("Data",data);
      // authCtx.login(data.idToken);
      authCtx.login(data.idToken,data.email);
      // navigate('/Homepage');
      navigate('/store');
    })
    .catch((err) => {
      alert(err.message);
      });
      emailInputRef.current.value="";
      passwordInputRef.current.value="";

    // else {
    //   url =
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAy1x8U_13KlYqai3cwii7J-Hdy4Wv4PMM';
    //   fetch(url,
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         email: enteredEmail,
    //         password: enteredpassword,
    //         returnSecureToken: true
    //       }),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     })
    //     .then((res) => {
    //       setIsLoading(false);
    //       if (res.ok) {
    //         return res.json();

    //       } else {
    //         return res.json().then((data) => {

    //           let errorMessage = 'Authentication failed';

    //           throw new Error(errorMessage);
    //         });
    //       };
    //     })
    //     .then((data) => {
    //       console.log(authCtx);
    //       authCtx.login(data.idToken, data.email);
    //       navigate('/Homepage');
    //       // navigate('/StorePage');
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    
// store data to api

    //   let cart = {};
    //     fetch(
    //       `https://crudcrud.com/api/52797b4170c34224960fa598a3ed041c/cart${emailForCrud}`,
    //       {
    //         method: "POST",
    //         body: JSON.stringify(cart),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //     }
    //   )
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    //     fetch(
    //       // `https://react-ecomm-43750-default-rtdb.firebaseio.com/cart/${emailForCrud}.json`,
    //       `https://react-post-request-3c49a-default-rtdb.firebaseio.com/cart/${emailForCrud}.json`,
    //       {
    //         method: "POST",
    //         body: JSON.stringify(cart),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     )
    //       .then((res) => console.log(res))
    //       .catch((err) => console.log(err));

    //     emailInputRef.current.value = "";
    //     passwordInputRef.current.value = "";

    //     console.log(cart);
    //   }

    };

    return (
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        {/* <h1>{hasAccount ? "Login" : "Sign Up"}</h1> */}
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email'
              id='email'
              required
              ref={emailInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && <button>{isLogin ? 'Login' : 'Create account'}</button>}
            {/* {!isLoading && error === null && (
            <button>{hasAccount ? "Login" : "Create Account"}</button>
          )} */}

            {isLoading && <p>Sending Request...</p>}
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
              {/* {hasAccount ? "Create new account" : "Login with existing account"} */}

            </button>
          </div>
        </form>
      </section>
    );
  };

  export default AuthForm;
