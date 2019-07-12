import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/authActions';

class Login extends Component {
  render() {
    const { dispatch } = this.props;

    const openAuth0 = () => {
      dispatch(requestLogin());
    }

    return (
      <button onClick={openAuth0}>Login</button>
    )
  }
}

export default connect()(Login);