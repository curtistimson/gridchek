import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/authActions';
import Button from 'react-bootstrap/Button';

class Login extends Component {
  render() {
    const { dispatch } = this.props;

    const openAuth0 = () => {
      dispatch(requestLogin());
    }

    return (
      <Button onClick={openAuth0}>Login</Button>
    )
  }
}

export default connect()(Login);