import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import history from './history';
import AuthCallback from './components/AuthCallback';
import config from './config';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';

import Home from './views/Home';
import Checkins from './views/Checkins';
import Checkin from './views/Checkin';

function App() {

  ReactGA.initialize(config.googleAnalytics.trackingId, {
    debug: config.debug,
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Container fluid style={{ paddingLeft:0, paddingRight:0 }}>
      <Header/>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth-callback" component={AuthCallback} />
        <Route exact path="/checkin" component={Checkin} />
        <Route exact path="/checkins" component={Checkins} />
      </Router>
    </Container>
  );
}

export default connect((store) => {
  return {
    auth: store.auth,
  };
})(App);
