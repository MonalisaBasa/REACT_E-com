import React from 'react'
import {Navbar,Nav,Container}  from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark">
    
      <Container>
      <Nav className=" me-5 ">
        <Link to="/Homepage" className="text-white fs-5 fw-bold me-3" style={{textDecoration: 'none'}} >
          HOME
        </Link>
        {/* <NavLink className="text-white fs-5 fw-bold " to="/home">Home</NavLink> */}
        <Link to="/store" className="text-white fs-5 fw-bold me-3 " style={{textDecoration: 'none'}}>
          STORE
        </Link>
        <Link to="/about" className="text-white fs-5 fw-bold me-3 " style={{textDecoration: 'none'}}>
          ABOUT
        </Link>
        <Link to="/contact" className="text-white fs-5 fw-bold me-3 " style={{textDecoration: 'none'}}>
          CONTACT US
        </Link>
        {/* <Link to="/Authform" className="text-white fs-5 fw-bold ">
          Login
        </Link> */}
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
