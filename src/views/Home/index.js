import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { OpenLocationCode } from 'open-location-code';
import history from '../../history';

class Home extends Component {
    render() {

        const locationRedirect = () => {
            history.replace(`/checkin`);
        }

        return (
            <div>
                <Button onClick={locationRedirect}>Check In</Button>
            </div>
        )
    }
}

export default Home;