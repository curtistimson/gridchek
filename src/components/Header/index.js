import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from '../Login';
import Logout from '../Logout';

function Header(props) {
  const { auth } = props;
  return (
    <Row>
      <Col>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Gridchek</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {
                !auth.isAuthenticated
                  ? (
                    <Nav.Link>
                      <Login />
                    </Nav.Link>
                  )
                  : (
                    <div>
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link>
                        <Logout />
                      </Nav.Link>
                    </div>
                  )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

Header.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

export default connect(store => (
  {
    auth: store.auth,
  }
))(Header);
