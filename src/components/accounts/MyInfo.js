import React from 'react';
import { Button, Form, Col, Alert, InputGroup, FormControl, Modal } from 'react-bootstrap';



const MyInfo = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Alert key={1} variant="primary">
                <h1>My Info</h1>
            </Alert>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Username</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Username"
                                aria-label="username"
                                aria-describedby="basic-addon2"
                                />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password2" placeholder="Confirm Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter your Email" />
                </Form.Group>

                <Form.Group controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="Enter your Phone Number" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => setModalShow(true)}>
                    수정
                </Button>
            </Form>
            <PasswordPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

function PasswordPopup(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Your Current Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Password</h4>
          <Form>
          <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Cancel</Button>
          <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyInfo;