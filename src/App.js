import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import history from './history';
import AuthCallback from './components/AuthCallback';
import config from './config';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import { checkAuthentication } from './actions/authActions';

import Home from './views/Home';
import Checkin from './views/Checkin';

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize(config.googleAnalytics.trackingId, {
      debug: config.debug,
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidMount() {
    this.props.dispatch(checkAuthentication());
  }

  render() {
    return (
      <Container fluid style={{ paddingLeft:0, paddingRight:0 }}>
        <Header/>
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth-callback" component={AuthCallback} />
          <Route exact path="/checkin" component={Checkin} />
        </Router>
      </Container>
    )
  };
}

export default connect((store) => {
  return {
    auth: store.auth,
  };
})(App);
