import React from 'react'
import {Navbar,Nav,Container}  from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark">
    
      <Container>
      <Nav className=" me-5 ">
        <Link to="/" className="text-white fs-5 fw-bold " >
          Home
        </Link>
        {/* <NavLink className="text-white fs-5 fw-bold " to="/home">Home</NavLink> */}
        <Link to="/store" className="text-white fs-5 fw-bold ">
          Store
        </Link>
        <Link to="/about" className="text-white fs-5 fw-bold ">
          About
        </Link>
        <Link to="/contact" className="text-white fs-5 fw-bold ">
          Contact Us
        </Link>
        {/* <NavLink className="text-white fs-3 fw-bold px-10" to="/about"
        >
          About
        </NavLink> */}
      </Nav>
      
      </Container>
     
    </Navbar>

      
    </>
  )
}

export default Header;
