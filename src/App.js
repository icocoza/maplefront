import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import './App.css';


const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
  <div>

    <MemoryRouter>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Maple Story</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav href="#home" className="mr-auto">
            <NavDropdown title="서비스목록" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className="mr-2">Search</Button>

            <LinkContainer to="/login">
              <Button variant="outline-success" className="mr-2">Login</Button>
            </LinkContainer>

            <LinkContainer to="/signUp">
              <Button variant="outline-success">SignUp</Button>
            </LinkContainer>

            <NavDropdown title="내정보" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container className="p-3">

        {' '}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </MemoryRouter>
  </div>
);

export default App;
