import React, { Component } from 'react';
import { OpenLocationCode } from 'open-location-code';
import Map from '../../components/Map';

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
      const olc = new OpenLocationCode();
      const codeDetails = olc.decode(this.props.match.params.code);

      return (
        <div>
          <h1>{this.state.openCode}</h1>
          <Map position={[codeDetails.latitudeCenter, codeDetails.longitudeCenter]} />
        </div>
      )
    }
}

export default Location;