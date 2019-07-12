import React from 'react';
import { Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import history from './history';
import AuthCallback from './components/AuthCallback';

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" render={() => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Login/>
          </header>
        </div>
      )} />
      <Route exact path="/auth-callback" component={AuthCallback} />
    </Router>
  );
}

export default App;
