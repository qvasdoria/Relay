import React from 'react'
import PopupMarker from './popupMarker'

const listMarkers = ({ markers }) => {

    const items = markers.map(({ key, ...params }) => <PopupMarker key={key} {...params} />);

    return (
        <div style={{ display: 'none' }}>
            {items}
        </div>
    )
};

export default listMarkers
