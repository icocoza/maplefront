import React from 'react';
import { Button, Form, Row, Col, Alert} from 'react-bootstrap';


const ServiceRegist = () => (
    <div>
       <Form>
            <Alert key={1} variant="success">
                BasicInfo
            </Alert>
            <Form.Group as={Row} controlId="formHorizontalServiceCode">
                <Form.Label column sm={2}>
                ServiceCode
                </Form.Label>
                <Col sm={8}>
                <Form.Control type="text" placeholder="ServiceCode" />
                </Col>
                <Col sm={2}>
                <Button type="submit">중복체크</Button>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalTitle">
                <Form.Label column sm={2}>
                Title
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Title" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalDescription">
                <Form.Label column sm={2}>
                Description
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Description" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalStatus">
                <Form.Label column sm={2}>
                Status
                </Form.Label>
                <Col sm={10}>
                    Pending...
                </Col>
            </Form.Group>

            <hr/>

            <Alert key={2} variant="success">
                DB Info
            </Alert>
            <Form.Group as={Row} controlId="formHorizontalHost">
                <Form.Label column sm={2}>
                Host
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Host" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPort">
                <Form.Label column sm={2}>
                Port
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Port" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalUsername">
                <Form.Label column sm={2}>
                Username
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Username" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <hr/>

            <Alert key={3} variant="success">
                Push Info
            </Alert>
            <Form.Group as={Row} controlId="formHorizontalFCMID">
                <Form.Label column sm={2}>
                FCM ID
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="FCMID" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalFCMKEY">
                <Form.Label column sm={2}>
                FCM KEY
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="FCMKEY" />
                </Col>
            </Form.Group>


            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" variant="info" className="mr-2">Cancel</Button>
                    <Button type="submit" variant="danger" className="mr-2">Delete</Button>
                    <Button type="submit">Regist</Button>
                </Col>
            </Form.Group>
        </Form>
    </div>
);

export default ServiceRegist;