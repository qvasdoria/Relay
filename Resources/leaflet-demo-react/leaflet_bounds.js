import React from 'react';
import { Map, TileLayer, Rectangle } from 'react-leaflet'


const outer = [[50.505, -29.09], [52.505, 29.09]]
const inner = [[49.505, -2.09], [53.505, 2.09]]

class SimpleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounds: outer,
        }

        this.onClickInner = this.onClickInner.bind(this);
        this.onClickOuter = this.onClickOuter.bind(this);
    }

    onClickInner()  {
        this.setState({ bounds: inner })
    }

    onClickOuter ()  {
        this.setState({ bounds: outer })
    }

    render() {
        return (
            <Map bounds={this.state.bounds}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Rectangle
                    bounds={outer}
                    color={this.state.bounds === outer ? 'red' : 'white'}
                    onClick={this.onClickOuter}
                />
                <Rectangle
                    bounds={inner}
                    color={this.state.bounds === inner ? 'red' : 'white'}
                    onClick={this.onClickInner}
                />
            </Map>
        )
    }
}

export default SimpleExample;