import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import Login from './components/Login';
import Logout from './components/Logout';
import history from './history';
import AuthCallback from './components/AuthCallback';
import CheckIn from './views/CheckIn';
import config from './config';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App(props) {

  ReactGA.initialize(config.googleAnalytics.trackingId, {
    debug: config.debug,
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href='/'>Gridchek</Navbar.Brand>
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
      <Router history={history}>
        <Route exact path="/" render={() => (
          <div>
            <Button href='/checkin'>Check In</Button>
          </div>
        )} />
        <Route exact path="/auth-callback" component={AuthCallback} />
        <Route exact path="/checkin" component={CheckIn} />
      </Router>
    </div>
  );
}

export default connect((store) => {
  return {
    auth: store.auth,
  };
})(App);