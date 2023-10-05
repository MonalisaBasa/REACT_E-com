import React from 'react'
import {Navbar,Nav,Container}  from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <Navbar bg="dark">
    
      <Container>
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
      {/* <Button variant="primary" className="text-white" onClick={handleShow}>
       
        <span className="px-2 fw-bold">Cart</span>
        <span>{numberOfCartItems}</span>
      </Button>
      {setShow && <ModalCart show={show} handleClose={handleClose} />}
      */}
      </Container>
     
    </Navbar>

      
    </>
  )
}

export default Header;
