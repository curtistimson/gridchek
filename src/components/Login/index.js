import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { requestLogin } from '../../actions/authActions';

function Login(props) {
  const { dispatch } = props;

  const openAuth0 = () => {
    dispatch(requestLogin());
  };

  return (
    <Button onClick={openAuth0}>Login</Button>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
