import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import Container from 'react-bootstrap/Container';
import history from './history';
import AuthCallback from './components/AuthCallback';
import config from './config';
import Header from './components/Header';

import { checkAuthentication } from './actions/authActions';

import Home from './views/Home';
import Checkin from './views/Checkin';
import CheckinSuccess from './views/CheckinSuccess';

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize(config.googleAnalytics.trackingId, {
      debug: config.debug,
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(checkAuthentication());
  }

  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Header />
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth-callback" component={AuthCallback} />
          <Route exact path="/checkin" component={Checkin} />
          <Route exact path="/checkin/success" component={CheckinSuccess} />
        </Router>
      </Container>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(store => (
  {
    auth: store.auth,
  }
))(App);
