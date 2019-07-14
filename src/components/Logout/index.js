import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import Button from 'react-bootstrap/Button';

class Login extends Component {
  render() {
    const { dispatch } = this.props;

    const sendLogout = () => {
      dispatch(logout());
    }

    return (
      <Button onClick={sendLogout}>Logout</Button>
    )
  }
}

export default connect()(Login);