import React,{useRef} from 'react';
// import Form from 'react-bootstrap/Form';
import { Form, Container, Col, Row, Button } from "react-bootstrap";

const Contactcontent = () => {
    // return (
    //     <>
            {/* <Form>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>E-mail Id</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter phonenumber" />
      </Form.Group>
      <button>Submit</button>
    </Form> */}

            const nameRef = useRef();
            const emialRef = useRef();
            const phoneRef = useRef();
            const submitHandler = (event) => {
                event.preventDefault();
            
         const UserData = {
            Name: nameRef.current.value,
            Email: emialRef.current.value,
            Phone: phoneRef.current.value,
    };
    const AddContactDetails = async () => {
      const response = await fetch(
            "https://react-ecommerce-c2294-default-rtdb.firebaseio.com/ContactDetails.json",
            {
            method: "POST",
            body: JSON.stringify(UserData),
            headers: {
                "Content-type": "application/json",
          },
        }
            );
            const Data = await response.json();
    };
            AddContactDetails();
  };

            return (
            <Container className=" d-flex justify-content-center  align-items-center bg-light vh-100">
                <Row className="  d-flex flex-column flex-md-row">
                    <Col className=" p-4 bg-light rounded d-flex justify-content-center align-items-stretch">
                        <h5 className="w-75 w-md-25  fw-normal display-5  text-muted">
                            We'd love to get in touch and learn more about you. So, send us a
                            message and we'll reply as fast as we can.
                        </h5>
                    </Col>
                    <Col className="bg-info rounded p-4 d-flex justify-content-center align-items-center">
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-3">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={nameRef}
                                    placeholder="Enter Your Name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="mb-3">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    ref={emialRef}
                                    placeholder="Enter Your Email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label className="mb-3">Phone Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    ref={phoneRef}
                                    placeholder="Enter Your Number"
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            );

        // </>
    // )
}

export default Contactcontent;
