import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown, Form, FormControl, Figure } from 'react-bootstrap';
import Home from './components/Home';
import Login from './components/accounts/Login';
import SignUp from './components/accounts/SignUp';
import ServiceList from './components/services/ServiceList';
import ServiceRegist from './components/services/ServiceRegist';
import MyInfo from './components/accounts/MyInfo';

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
            <NavDropdown title="서비스" id="basic-nav-dropdown">
              <LinkContainer to="/serviceLists">
                <NavDropdown.Item>
                    ServiceLists
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/serviceRegist">
                <NavDropdown.Item>
                    RegistService
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

          </Nav>
          <Form inline>
            <LinkContainer to="/login">
              <Button variant="outline-success" className="mr-2">Login</Button>
            </LinkContainer>

            <LinkContainer to="/signUp">
              <Button variant="outline-success">SignUp</Button>
            </LinkContainer>

            <LinkContainer to="/myInfo">
              <Figure>
                <Figure.Image
                  className="ml-2 mt-2 mb-0"
                  roundedCircle={true}
                  width={30}
                  height={30}
                  alt="30*30"
                  src="Kido.png"
                />
              </Figure>
            </LinkContainer>

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
          <Route path="/serviceLists">
            <ServiceList />
          </Route>
          <Route path="/serviceRegist">
            <ServiceRegist />
          </Route>
          <Route path="/myInfo">
            <MyInfo />
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
