import { OpenLocationCode } from 'open-location-code';

export default () => (
  new Promise((resolve, reject) => {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      const olc = new OpenLocationCode;
      location.getCurrentPosition((position) => {
        const openCode = olc.encode(position.coords.latitude, position.coords.longitude, 11);
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          openCode,
        });
      }, (error) => {
        console.log('Error', error);
        reject();
      });
    }
  })
);
