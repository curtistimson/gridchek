import React, { Component } from 'react';
import { OpenLocationCode } from 'open-location-code';
import Map from '../../components/Map';

class Location extends Component {

  constructor(props) {
    super(props);
      this.state = {
        latitude: null,
        longitude: null,
        openCode: ``
      }
    }

    render() {

      const olc = new OpenLocationCode();

      console.log('ccc', this.props.match.params.code);

      console.log(olc.decode(this.props.match.params.code));

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