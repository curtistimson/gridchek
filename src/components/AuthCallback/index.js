import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { receiveLogin } from '../../actions/authActions';

class AuthCallback extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(receiveLogin());
  }

  render() {
    return (
      <div />
    );
  }
}

AuthCallback.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userCheckins: PropTypes.shape({
    count: PropTypes.number,
    checkins: PropTypes.array,
  }).isRequired,
};

export default connect()(AuthCallback);
