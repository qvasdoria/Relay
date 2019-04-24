import React from 'react'
import ListMarkers from './listMarker'
import { getMarkers } from '../../api'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'
import { leafletPropTypes } from './type/type'
import * as s from './style/leafletStyle'

const leaflet = props => {
    const {
        center,
        current,
        points,
        listPaneShow,
        zoom,
        onClick,
        onSelectPoint
    } = props;

    const markers = getMarkers(points, current, onClick, onSelectPoint);

    return (
        <s.Container listPaneShow={listPaneShow} isLoading={points.length < 1}>
            <Map center={center} zoom={zoom} zoomControl={false}>
                <ZoomControl position='topright' />
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                {markers.length && <ListMarkers markers={markers} />}
            </Map>
        </s.Container>
    )
};

leaflet.propTypes = leafletPropTypes;

export default leaflet
