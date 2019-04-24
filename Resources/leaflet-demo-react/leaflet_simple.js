import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class SimpleExample extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', this.props)
        const { points } = this.props
        this.state = {
            lat: 45.665,
            lng: 6.388,
            zoom: 13,
            points
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        console.log('renderProps',this.props)
        const { points, dispatch } = this.props
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {points.map(id =>
                    <div key={id} ref={`item${id}`} >
                        <Marker position={position}>
                            <Popup>
                                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                            </Popup>
                        </Marker>
                    </div>
                )}
            </Map>
        );
    }
}

export default SimpleExample;