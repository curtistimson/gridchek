import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import './Map.css';

function MapComponent(props) {
    return (
        props.position ?
        <Map center={props.position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={props.position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
        </Map>
        : <div/>
    )

};

export default MapComponent;