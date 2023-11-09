import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import Cart from '../Cart/Cart'

const ModalCart = (props) => {
  return (
    <>
    {/* <Button variant="Primary" onClick={props.handleShow}>CART</Button> */}
    <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {/* <div className='row'>
            <div className='col-3 ms-3 text'>
                <u>ITEM</u>
            </div>
            <div className='col-3 text'>
                <u>PRICE</u>
            </div>
            <div className='col-4 text'>
                <u>QUANTITY</u>

            </div>
            <Cart/>
        </div>
        <div className="row justify-content-end">
            <div className="col-1 box me-4">Total </div>
            <div className="col-1 box me-4"> ₹0</div>
          </div>
          <div className="row justify-content-center">
            <div className="col-3 me-5">
              <button className="btn btn-primary text-white btn-lg">
                PURCHASE
              </button>
            </div>
          </div> */}
          <Cart/>
        
    </Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' onClick={props.handleClose}>Close</Button>
        <Button variant='secondary' onClick={props.handleClose}>Order</Button>



        {/* <Button variant='primary' onClick={props.handleClose}>Save Changes</Button> */}
    </Modal.Footer>
    </Modal>
      
    </>
  )
}

export default ModalCart;
