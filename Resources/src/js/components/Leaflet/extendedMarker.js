import React from 'react'
import { Marker } from 'react-leaflet'

const extendedMarker = props => {

    const openPopup = marker => {
        if (marker) marker.leafletElement.openPopup();
    };

    return (
        <Marker ref={el => openPopup(el)} {...props}/>
    );
};

export default extendedMarker;
