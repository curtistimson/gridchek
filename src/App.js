import React from 'react';
import { Router, Route } from 'react-router-dom';
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
            <Login/>
          </header>
        </div>
      )} />
      <Route exact path="/auth-callback" component={AuthCallback} />
    </Router>
  );
}

export default App;
