import React, { useContext,useRef } from 'react';
import './productsItem.css';
// import ProductsArr from './product';
import { Button,Form } from 'react-bootstrap';
import CartContext from '../Store/CartContext';




const ProductsItem = (props) => {
    const cartCtx = useContext(CartContext);

    const Amountref = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const Amount = Amountref.current.value;
        const UpdatedAmount = +Amount;
        const Title = props.title;
        const Price = props.price;
        const id = props.id;
        const image =`${props.image}`
        if (UpdatedAmount.trim === 0 || UpdatedAmount < 1 || UpdatedAmount > 10) {
            return;
        }
        const Data = {
            Title,
            Price,
            UpdatedAmount,
            id,
            image,
        };
       cartCtx.addItem(Data);
       console.log(cartCtx.items)
        
    }

    // console.log(props);
    return (
        <div className="col-sm-1 col-md-auto col-lg-4 m-4">
            <div className="card">
                <h5 className="card-title text-center m-3">{props.title}</h5>
                <img src={props.image} className="card-img-top img" alt={props.title} />
                <div className="card-body d-flex justify-content-between">
                    <span className="card-text">${props.price}</span>
                    {/* <Button className="ms-5" >Add To Cart</Button> */}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label className="ms-5 mt-0">Amount</Form.Label>
                            <Form.Control
                                ref={Amountref}
                                type="number"
                                min="1"
                                max="10"
                                className="ms-5 mb-2"
                                step="1"
                                defaultValue="1"
                                style={{ width: "4rem", height: "2rem" }}
                           />
                             <Button type="submit" className="ms-5">
                                 Add To Cart
                             </Button>
                         </Form.Group>
                     </Form>
                </div>
            </div>
        </div>
    );

}

export default ProductsItem;


