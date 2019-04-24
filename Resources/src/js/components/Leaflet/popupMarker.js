import React, { useState, useEffect } from 'react';
import {Popup, Marker} from 'react-leaflet'
import {icon} from 'leaflet'
import {getCustomIcon} from '../../api'
import {getParameter} from '../../api/utils'
import {popupPropTypes} from './type/type'
import * as s from './style/popupStyle'

const popupMarker = props => {
    const popupRef = React.createRef();
    const markerRef = React.createRef();
    const {
        position,
        isCurrent,
        children: {name, address, openings, id, onClick, onSelectPoint}
    } = props;

    const [currentState, setCurrentState] = useState(isCurrent);

    useEffect(() => {
        if(currentState === isCurrent) return;
        setCurrentState(isCurrent);

        if(!isCurrent) return;
        markerRef.current.contextValue.popupContainer.openPopup();
    });

    let params = {
        position: position,
        selected: isCurrent
    };

    const customIcon = getCustomIcon(isCurrent);

    if (customIcon) {
        params = Object.assign({icon: icon(customIcon)}, params)
    }

    return (
        <Marker {...params} ref={markerRef}>
            <Popup onOpen={() => onSelectPoint(id)} ref={popupRef}>
                <s.Container>
                    <s.Title>{name}</s.Title>
                    <s.Address>{address.street}</s.Address>
                    <s.Address>{address.zipCode} {address.city}</s.Address>

                    <s.Table>
                        <s.Thead>
                            <tr>
                                <td colSpan="3">{getParameter('open')}</td>
                            </tr>
                        </s.Thead>
                        <s.Tbody>
                            {openings.map(({day, morning, afternoon}, key) => (
                                <tr key={key}>
                                    <s.Day>{getParameter(day)}</s.Day>
                                    <s.Hour>{morning}</s.Hour>
                                    <s.Hour>{afternoon}</s.Hour>
                                </tr>
                            ))}
                        </s.Tbody>
                    </s.Table>

                    <s.Button onClick={() => {
                        markerRef.current.contextValue.popupContainer.closePopup();
                        onClick(id);
                    }}>
                        {getParameter('selected')}
                    </s.Button>
                </s.Container>
            </Popup>
        </Marker>
    )
};

popupMarker.propTypes = popupPropTypes;

export default popupMarker
