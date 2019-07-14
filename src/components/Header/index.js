import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../Login';
import Logout from '../Logout';
import { connect } from 'react-redux';

function Header(props) {
        return (
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
        )
}

export default connect((store) => {
    return {
      auth: store.auth,
    };
  })(Header);