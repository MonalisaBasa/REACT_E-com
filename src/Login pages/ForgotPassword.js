import React, { useContext, useRef, useState } from "react";
import AuthContext from "../Components/Store/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const AuthCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setIsLoading(true);
  };

  return (
    <React.Fragment>
      <div className="login template my-4  d-flex justify-content-center align-items-center">
        <div className=" w-50 p-5 bg-info rounded-4">
          <form onSubmit={submitHandler}>
            <div className="mb-4 text-dark">
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

            <div className="mb-4 text-dark">
              <label htmlFor="password" className="mb-2">
                New Password
              </label>
              <input
                required
                type="password"
                placeholder="Enter New Password"
                className="form-control"
              />
            </div>
            <div className="mb-4 text-dark">
              <label htmlFor="password" className="mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                required
                placeholder="Enter Confirm Password"
                className="form-control"
              />
            </div>
            <div className="pt-3 d-grid">
              <button type="submit" className="btn btn-primary">
                {isLoading ? "Updating..." : "Update Password"}
              </button>
            </div>
            <p className="text-light  mt-3">
              <Link className="px-3 text-decoration-none" to="/signin">
                Click here To Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ForgotPassword;