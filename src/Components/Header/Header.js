import React, { useContext, useState } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { Nav, Navbar, Container, Badge, Button } from "react-bootstrap";
// import {NavLink} from "react-router-bootstrap";
import CartContext from '../Store/CartContext';
import AuthContext from '../Store/AuthContext';
// import Product from '../Body/product';
import ModalCart from '../UI/Modal';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
    // cartCtx.clearcart();
  };
  // reduce method allow us to transform array of data into single value.
  // reduce method rcv two arguments 
  // const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
  //   console.log(cartCtx.items);
  //   return currNumber + item.amount;
  // }, 0);
  const numberOfCartItems = Array.isArray(cartCtx.items)
  ? cartCtx.items.reduce((currNumber, item) => currNumber + item.amount, 0)
  : 0;
  // console.log(numberOfCartItems);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Handle link click
  const handleLinkClick = (path) => {
    if (!authCtx.isLoggedIn) {
      // Redirect to auth page if not logged in
      navigate("/auth");
    } else {
      // Navigate to the specified path
      navigate(path);
    }
  };
  return (
    <>
      <Navbar bg="dark">
        <Container className="">

          {/* <Nav className=" me-5 "> */}
          <Nav className="d-flex justify-content-center m-0 ">
            <div className="d-flex justify-justify-content-center position-relative start-50">

              {authCtx.isLoggedIn && (

                <>
                  {/* <NavLink  onClick={() => handleLinkClick("/home")} className="text-white fs-5 fw-bold me-3">
              Home
            </NavLink> */}
                  <Link to="/Homepage"
                    className="text-white fs-5 fw-bold me-3"
                    style={{ textDecoration: 'none' }}>
                    HOME
                  </Link>
                  <Link to="/store"
                    className="text-white fs-5 fw-bold me-3"
                    style={{ textDecoration: 'none' }}>
                    STORE
                  </Link>
                  <Link to="/about"
                    className="text-white fs-5 fw-bold me-3"
                    style={{ textDecoration: 'none' }}>
                    ABOUT
                  </Link>
                  <Link to="/contact"
                    className="text-white fs-5 fw-bold me-3"
                    style={{ textDecoration: 'none' }}>
                    CONTACT US
                  </Link>
                </>
              )}
            </div>
          <div className=" d-flex justify-content-evenly gap-3 position-relative start-100  m-0 ">


          <Button variant="primary"
            className="text-white"
            onClick={handleShow}>
            <span className="px-2 fw-bold">Cart</span>
            <span>{numberOfCartItems}</span>
          </Button>

          <Nav 
          className="justify-content-end" 
          style={{ alignItems: "Center" }}>
            {!authCtx.isLoggedIn && (
              <NavLink to="/auth" 
              style={{ padding: 5, margin: 5 }}>
                Login
              </NavLink>
            )}
            {authCtx.isLoggedIn && (
              <button
              onClick={logoutHandler}
              style={{ padding: 5, margin: 0 }}
              >
                Logout

              </button>
            )}

          </Nav>
          {show && (
            <ModalCart show={show}
            handleClose={handleClose} 
            />
            )}
           </div>
            </Nav>

        </Container>
      </Navbar>
    </>

  );
};
export default Header;
