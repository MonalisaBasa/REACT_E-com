import React,{useContext,useState} from 'react';

import { Nav, Navbar, Container, Badge, Button } from "react-bootstrap";
import CartContext from '../Store/CartContext';
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
  // reduce method allow us to transform array of data into single value.
  // reduce method rcv two arguments 
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Navbar bg="dark">
        <Container className="">
          
          <Nav className=" me-5 ">
            <Nav.Link href="#home" className="text-white fs-5 fw-bold ">
              Home
            </Nav.Link>
            <Nav.Link href="#Store" className="text-white fs-5 fw-bold ">
              Store
            </Nav.Link>
            <Nav.Link href="#About" className="text-white fs-5 fw-bold ">
              About
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="text-white" onClick={handleShow}>
           
            <span className="px-2 fw-bold">Cart</span>
            <span>{numberOfCartItems}</span>
          </Button>
          {setShow && <ModalCart show={show} handleClose={handleClose} />}
         
          </Container>
          </Navbar>
          </>
        
      );
};
 export default Header;
