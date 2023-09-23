import React from 'react';

import {Nav,Navbar,Container,Badge,Button} from "react-bootstrap";


const Header = () => {
  return (
    <div>
    <Navbar bg="dark" expand="sm" variant="dark" className='my-12'>
    <Container className='justify-content-center ' >
      <Nav>
      <Nav.Link>HOME</Nav.Link>
      <Nav.Link>STORE</Nav.Link>
      <Nav.Link>ABOUT</Nav.Link>
      </Nav>
     
    </Container>
    
    <Button variant="outline-primary text-white mx-2">Cart <span>0</span></Button>
    
    
  </Navbar>
    </div>
  )
}

export default Header;
