import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import Login from './components/Login';
import Logout from './components/Logout';
import history from './history';
import AuthCallback from './components/AuthCallback';
import config from './config';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App(props) {

  ReactGA.initialize(config.googleAnalytics.trackingId, {
    debug: config.debug,
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router history={history}>
      <Route exact path="/" render={() => (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Gridchek</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="#deets">
                  {
                    !props.auth.isAuthenticated ?
                    <Login/>
                    : <Logout/>
                  }
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )} />
      <Route exact path="/auth-callback" component={AuthCallback} />
    </Router>
  );
}

export default connect((store) => {
  return {
    auth: store.auth,
  };
})(App);