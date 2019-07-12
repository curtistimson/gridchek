import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import history from './history';
import AuthCallback from './components/AuthCallback';
import config from './config';

function App(props) {

  ReactGA.initialize(config.googleAnalytics.trackingId, {
    debug: config.debug,
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router history={history}>
      <Route exact path="/" render={() => (
        <div className="App">
          <header className="App-header">
            {
              !props.auth.isAuthenticated ?
              <Login/>
              : <Logout/>
            }
          </header>
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