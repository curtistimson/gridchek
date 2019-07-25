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
        return (
            <div>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default connect()(Checkins);