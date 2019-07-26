import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OpenLocationCode } from 'open-location-code';
import Button from 'react-bootstrap/Button';
import Map from '../../components/Map';
import { createCheckIn } from '../../actions/checkinActions';

class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      openCode: null,
    };
  }

  componentWillMount() {
    this.getLocation().then((data) => {
      this.setState(prevState => ({
        ...prevState,
        openCode: data.openCode,
      }));
    });
  }

  getLocation() {
    return new Promise((resolve, reject) => {
        const location = window.navigator && window.navigator.geolocation;
        
        if (location) {
            const olc = new OpenLocationCode;

            location.getCurrentPosition((position) => {
        
                let openCode = olc.encode(position.coords.latitude, position.coords.longitude, 11);
                console.log(openCode);

                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    openCode,
                })
            }, (error) => {
                console.log('Error');
                reject();
            })
        }
    })
  };

  render() {
    const { dispatch } = this.props;

    let olc = null;
    let codeDetails = null;

    if (this.state.openCode){
      olc = new OpenLocationCode();
      codeDetails = olc.decode(this.state.openCode);
    }

    const checkIn = () => {
      dispatch(createCheckIn(this.state.openCode));
    }

    return (
      <div>
        {
          this.state.openCode ?
            <div>
              <h1>{this.state.openCode}</h1>
              <Map position={[codeDetails.latitudeCenter, codeDetails.longitudeCenter]} />
              <Button onClick={checkIn}>Check In</Button>
            </div>
          : <div/>
        }
        
      </div>
    )
  }
}

export default connect()(Checkin);
