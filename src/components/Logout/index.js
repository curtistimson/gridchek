import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { logout } from '../../actions/authActions';

function Logout(props) {
  const { dispatch } = props;

  const sendLogout = () => {
    dispatch(logout());
  };

  return (
    <Button onClick={sendLogout}>Logout</Button>
  );
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Logout);
