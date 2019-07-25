import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OpenLocationCode } from 'open-location-code';
import Map from '../../components/Map';
import Button from 'react-bootstrap/Button';
import { createCheckIn } from '../../actions/checkinActions';

class Location extends Component {

  constructor(props) {
    super(props);
      this.state = {
        latitude: null,
        longitude: null,
        openCode: this.props.match.params.code,
      }
    }

    render() {
      const { dispatch } = this.props;
      const olc = new OpenLocationCode();
      const codeDetails = olc.decode(this.props.match.params.code);

      const checkIn = () => {
        dispatch(createCheckIn(this.state.openCode));
      }

      return (
        <div>
          <h1>{this.state.openCode}</h1>
          <Map position={[codeDetails.latitudeCenter, codeDetails.longitudeCenter]} />
          <Button onClick={checkIn}>Check In</Button>
        </div>
      )
    }
}

export default connect()(Location);