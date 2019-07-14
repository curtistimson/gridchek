import React, { Component } from 'react';
import { OpenLocationCode } from 'open-location-code';

class CheckIn extends Component {

  constructor(props) {
    super(props);
      this.state = {
        openCode: ``
      }
    }

  componentDidMount() {
    this.getLocation();
  }
  
  getLocation() {
    const location = window.navigator && window.navigator.geolocation
    
    if (location) {

      const olc = new OpenLocationCode;
      

      location.getCurrentPosition((position) => {

        let openCode = olc.encode(position.coords.latitude, position.coords.longitude);
        console.log(openCode);

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          openCode,
        })
      }, (error) => {
        console.log('Error');
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

    render() {
      return (
        <div>
          <h1>{this.state.openCode}</h1>
          <div>Check In</div>
        </div>
      )
    }
}

export default CheckIn;