import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Home = () => (
    <div>
      <Jumbotron>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <h2>
            Navigate to{' '}
            <ButtonToolbar className="custom-btn-toolbar">
              <LinkContainer to="/">
                <Button>Home</Button>
              </LinkContainer>
              <LinkContainer to="/about">
                <Button>About</Button>
              </LinkContainer>
              <LinkContainer to="/users">
                <Button>Users</Button>
              </LinkContainer>
            </ButtonToolbar>
          </h2>
        </Jumbotron>
    </div>
  );

export default Home;