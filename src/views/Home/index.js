import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { fetchUserCheckins } from '../../actions/checkinActions';
import history from '../../history';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUserCheckins());
  }

  render() {
    const locationRedirect = () => {
      history.replace('/checkin');
    };

    const { userCheckins } = this.props;

    const {
      count,
      checkins,
    } = userCheckins;

    return (
      <div>
        <div>
          <Button onClick={locationRedirect}>Check In</Button>
        </div>
        <h2>
          {count}
          Checkins
        </h2>
        <Row>
          {
            checkins && checkins.map(checkin => (
              <Col sm={4}>
                <Card style={{ marginTop: '1em' }}>
                  <Card.Body>
                    <Card.Title>{checkin.plusCode}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userCheckins: PropTypes.shape({
    count: PropTypes.number,
    checkins: PropTypes.array,
  }).isRequired,
};

export default connect(store => ({
  userCheckins: store.userCheckins,
}))(Home);
