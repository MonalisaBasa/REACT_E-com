import React,{useState,useRef} from 'react'
import {Link} from 'react-router-dom';


const SignUp = () => {
    const [isLoading,setIsLoading] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const passwordRef = useRef();
const submitHandler = async (event)=>{
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredNumber = numberRef.current.value;
    const enteredpassword = passwordRef.current.value;

    setIsLoading(true);
    const data= await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAjK3nG68nTxgdwSXHrLQewMNSlnensig",
        {
            method: "POST",
            body:JSON.stringify({
                email:enteredEmail,
                password: enteredpassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type":"application/json",

            },
        }
    );
    const response = await data.json();
    if(response && response.error && response.error.message){
        let errorMessage = 'Authentication failed';
        errorMessage = response.error.message;
        alert(errorMessage)
    }
    setIsLoading(false);
    return response;
};

  return (
    <div className="login template my-4  d-flex justify-content-center align-items-center">
    <div className=" w-50 p-5 bg-dark rounded-4">
      <form onSubmit={submitHandler}>
        <h3 className="text-center mb-3 text-light">Create An Account</h3>
        <div className="mb-4 text-light">
          <label htmlFor="name" className="mb-2">
            Enter Your Name
          </label>
          <input
            required
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="form-control"
          />
        </div>
        <div className="mb-4 text-light">
          <label htmlFor="number" className="mb-2">
            Enter Mobile Number
          </label>
          <input
            required
            ref={numberRef}
            type="number"
            name="number"
            placeholder="Enter your Number"
            className="form-control"
          />
        </div>
        <div className="mb-4 text-light">
          <label htmlFor="email" className="mb-2 ">
            Email
          </label>
          <input
            required
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="form-control"
          />
        </div>

        <div className="mb-4 text-light">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            required
            ref={passwordRef}
            type="password"
            placeholder="Enter your Password"
            className="form-control"
          />
        </div>
        <div className="mb-4 text-light">
          <label htmlFor="password" className="mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter Confirm Password"
            className="form-control"
          />
        </div>
        <div className="pt-3 d-grid">
          <button type="submit" className="btn btn-primary">
            {isLoading ? "Sending Request..." : "Create Account"}
          </button>
        </div>
        <p className="text-light  mt-3">
          Already User..?
          <Link className="px-3 text-decoration-none" to="/signin">
            Click here To Login
          </Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default SignUp;
