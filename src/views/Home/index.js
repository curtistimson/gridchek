import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import { fetchUserCheckins } from '../../actions/checkinActions';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Home extends Component {
    componentDidMount() {
      this.props.dispatch(fetchUserCheckins());
    }

    render() {

      const locationRedirect = () => {
        history.replace(`/checkin`);
      }

      return (
          <div>
            <div>
                <Button onClick={locationRedirect}>Check In</Button>
            </div>
            <h2>{this.props.userCheckins.count} Checkins</h2>
            <Row>
              {
                this.props.userCheckins.checkins && this.props.userCheckins.checkins.map(checkin => (
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
      )
  }
}

export default connect(store => ({
  userCheckins: store.userCheckins,
}))(Home);