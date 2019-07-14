import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { OpenLocationCode } from 'open-location-code';
import history from '../../history';

class Home extends Component {

    getLocation() {
        return new Promise((resolve, reject) => {
            const location = window.navigator && window.navigator.geolocation;

            console.log('sdsd');
            
            if (location) {
                const olc = new OpenLocationCode;

                location.getCurrentPosition((position) => {
            
                    let openCode = olc.encode(position.coords.latitude, position.coords.longitude);
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
        });
      }


    render() {

        const locationRedirect = () => {

            this.getLocation().then(res => {
                history.replace(`/l/${res.openCode}`);
            });

            
        }

        return (
            <div>
                <Button onClick={locationRedirect}>Check In</Button>
            </div>
        )
    }
}

export default Home;