import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserCheckins } from '../../actions/checkinActions';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Checkins extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUserCheckins());
  }

  render() {
    console.log(this.props); 
      return (
          <div>
            <Row>
              {
                this.props.userCheckins.checkins && this.props.userCheckins.checkins.map(checkin => (
                  <Col>
                    <Card style={{ width: '18rem' }}>
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
}))(Checkins);