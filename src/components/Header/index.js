import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../Login';
import Logout from '../Logout';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {
        return (
          <Row>
            <Col>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href='/'>Gridchek</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link>
                    {
                      !props.auth.isAuthenticated ?
                      <Login/>
                      : <Logout/>
                    }
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </Col>
          </Row>
        )
}

export default connect((store) => {
    return {
      auth: store.auth,
    };
  })(Header);