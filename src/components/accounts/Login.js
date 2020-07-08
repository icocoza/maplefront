import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => (
    <div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="이름를 입력하세요" />
                <Form.Text className="text-muted">
                    아이디 적용 규칙...
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="danger" type="submit" className="m-2">
                Register
            </Button>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    </div>
);

export default Login;