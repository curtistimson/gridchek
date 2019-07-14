import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import history from './history';
import AuthCallback from './components/AuthCallback';
import CheckIn from './views/CheckIn';
import config from './config';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';

function App(props) {

  ReactGA.initialize(config.googleAnalytics.trackingId, {
    debug: config.debug,
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Header/>
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