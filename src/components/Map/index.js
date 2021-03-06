import React from 'react';
import {
  Map,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

import './Map.css';

function MapComponent(props) {
  const position = { props };
  console.log('pos', position);
  return (
    position
      ? (
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      )
      : <div />
  );
};

export default MapComponent;
