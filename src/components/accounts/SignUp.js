import React from 'react';
import { Button, Form, Col, Alert, InputGroup, FormControl } from 'react-bootstrap';


const SignUp = () => (
    <div>
        <Alert key={1} variant="primary">
            <h1>Register</h1>
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
                        <InputGroup.Append>
                            <Button variant="outline-secondary">중복검사</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password 중복확인</Form.Label>
                    <Form.Control type="password2" placeholder="Password" />
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

            <Button variant="primary" type="submit">
                가입
            </Button>
        </Form>
    </div>
);

export default SignUp;