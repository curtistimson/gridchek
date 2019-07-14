import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class Login extends Component {
  render() {
    const { dispatch } = this.props;

    const sendLogout = () => {
      dispatch(logout());
    }

    return (
      <button onClick={sendLogout}>Logout</button>
    )
  }
}

export default connect()(Login);