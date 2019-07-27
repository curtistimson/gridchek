import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { OpenLocationCode } from 'open-location-code';
import Button from 'react-bootstrap/Button';
// import Map from '../../components/Map';
import { createCheckIn } from '../../actions/checkinActions';
import getLocation from './getLocation';

class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCode: null,
    };
  }

  componentWillMount() {
    getLocation().then((data) => {
      this.setState(() => ({
        openCode: data.openCode,
      }));
    });
  }

  render() {
    const { dispatch } = this.props;

    const { openCode } = this.state;

    let olc = null;
    let codeDetails = null;

    if (openCode) {
      olc = new OpenLocationCode();
      codeDetails = olc.decode(openCode);
    }

    const checkIn = () => {
      dispatch(createCheckIn(openCode));
    };

    return (
      <div>
        {
          openCode
            ? (
              <div>
                <h1>
                  {openCode}
                </h1>
                {
                  codeDetails
                    ? <div />
                    : <div />
                }
                <Button onClick={checkIn}>Check In</Button>
              </div>
            )
            : <div />
        }
      </div>
    );
  }
}

Checkin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userCheckins: PropTypes.shape({
    count: PropTypes.number,
    checkins: PropTypes.array,
  }).isRequired,
};

export default connect()(Checkin);

// ? <Map position={[codeDetails.latitudeCenter, codeDetails.longitudeCenter]} />
