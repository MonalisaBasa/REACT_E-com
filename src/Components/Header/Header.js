import React,{useContext,useState} from 'react';
import{ useNavigate,NavLink,Link} from 'react-router-dom';
import { Nav, Navbar, Container,Badge, Button} from "react-bootstrap";
// import {NavLink} from "react-router-bootstrap";
import CartContext from '../Store/CartContext';
import AuthContext from '../Store/AuthContext';
import Product from '../Body/product';
import ModalCart from '../UI/Modal';


// const Header = () => {
//   return (
//     <div>
//     <Navbar bg="dark" expand="sm" variant="dark" className='my-12'>
//     <Container className='justify-content-center ' >
//       <Nav>
//       <Nav.Link>HOME</Nav.Link>
//       <Nav.Link>STORE</Nav.Link>
//       <Nav.Link>ABOUT</Nav.Link>
//       </Nav>

//     </Container>

//     <Button variant="outline-primary text-white mx-2">Cart <span>0</span></Button>


//   </Navbar>
//     </div>
//   )
// }
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx= useContext(AuthContext);

  const navigate= useNavigate();
  const logoutHandler = () =>{
    authCtx.logout();
    navigate("/");
    // cartCtx.clearcart();
  };
  // reduce method allow us to transform array of data into single value.
  // reduce method rcv two arguments 
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  console.log(numberOfCartItems);
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
          
          <Nav className=" me-5 ">
          {authCtx.isLoggedIn && (

         <>
            {/* <NavLink  onClick={() => handleLinkClick("/home")} className="text-white fs-5 fw-bold me-3">
              Home
            </NavLink> */}
            <Link onClick={() => handleLinkClick("/Homepage")} className="text-white fs-5 fw-bold me-3" style={{textDecoration: 'none'}}>
          HOME
        </Link>
            <Link  to="/store" className="text-white fs-5 fw-bold me-3" style={{textDecoration: 'none'}}>
              STORE
            </Link>
            <Link to="/about"className="text-white fs-5 fw-bold me-3" style={{textDecoration: 'none'}}>
              ABOUT
            </Link>
            <Link  to="/contact" className="text-white fs-5 fw-bold me-3" style={{textDecoration: 'none'}}>
              CONTACT US
            </Link>
        </>
            )}
            </Nav>
            
          <Button variant="primary" className="text-white" onClick={handleShow}>
           
            <span className="px-2 fw-bold">Cart</span>
            <span>{numberOfCartItems}</span>
          </Button>
        
            <Nav className="justify-content-end" style={{alignItems: "Center"}}>
              {!authCtx.isLoggedIn && (
                <NavLink to="/auth" style={{padding:5, margin:5}}>
                  Login
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
                <button
                onClick={logoutHandler}
                style={{padding:5, margin:0}}
                >
                  Logout

                </button>
              )}

            </Nav>
          {show && <ModalCart show={show} handleClose={handleClose} />}
         
          </Container>
          </Navbar>
          </>
        
      );
};
 export default Header;
