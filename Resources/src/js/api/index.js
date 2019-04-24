import axios from 'axios'
import { MARKER_ICON, MARKER_ICON_SELECTED, MARKER_PATH_BASE } from './types'
import { getParameter, getConfig, processError } from './utils'
import { changePosition, savePoints, changeLoaderVisible } from '../store/actions'

/**
 * get points
 * @param dispatch
 * @param address
 * @param provider
 * @param switchPosition
 */
export const getPoints = (dispatch, address, provider, switchPosition = true) => {
    dispatch(changeLoaderVisible(true));

    return axios.post(getParameter('relay_api_get_points'), {...address}, {
        headers: {'Content-Type': 'application/json', 'rwd-relay-provider': provider},
        withCredentials: true
    })
    .then(({data}) => {
        if (data.length > 0 && switchPosition) {
            const { coord: { lat, lon } } = data[0];
            dispatch(changeLoaderVisible(true));
            dispatch(changePosition, lat, lon)
        }

        dispatch(changeLoaderVisible(false));
        dispatch(savePoints(data))
    })
    .catch(({response: {data}}) => processError(data))
};



/**
 * validate point
 * @param id
 */
export const validatePoint = (id) => {
    let url = getParameter('relay_get_select_address');
    url = url.slice(0, -1) + id;

    axios.get(url, {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
    })
};



export const getCustomIcon = (isCurrent) => {
    let customIcon = {};

    let {
        configsIconUrl,
        configsIconUrlSelected,
        configsIconShadowUrl,
        configsIconSize,
        configsIconShadowSize,
        configsIconAnchor,
        configsIconShadowAnchor,
        configsIconPopupAnchor
    } = getConfig();

    configsIconUrl = configsIconUrl || MARKER_PATH_BASE + MARKER_ICON;
    configsIconUrlSelected = configsIconUrlSelected || MARKER_PATH_BASE + MARKER_ICON_SELECTED;

    customIcon = Object.assign({ iconUrl : (isCurrent) ? configsIconUrlSelected : configsIconUrl }, customIcon)

    if (configsIconShadowUrl) {
        customIcon = Object.assign({ shadowUrl : configsIconShadowUrl }, customIcon)
    }
    if (configsIconSize) {
        customIcon = Object.assign({ iconSize : JSON.parse(configsIconSize) }, customIcon)
    }
    if (configsIconShadowSize) {
        customIcon = Object.assign({ shadowSize : JSON.parse(configsIconShadowSize)}, customIcon)
    }
    if (configsIconAnchor) {
        customIcon = Object.assign({ iconAnchor : JSON.parse(configsIconAnchor) }, customIcon)
    }
    if (configsIconShadowAnchor) {
        customIcon = Object.assign({ shadowAnchor : JSON.parse(configsIconShadowAnchor) }, customIcon)
    }
    if (configsIconPopupAnchor) {
        customIcon = Object.assign({ popupAnchor : JSON.parse(configsIconPopupAnchor) }, customIcon)
    } else {
        customIcon = Object.assign({ popupAnchor : [11, 0] }, customIcon)
    }

    return customIcon;
};



/**
 * Helper to group any object by id
 * @param points
 * @param current
 * @param onClick
 * @param onSelectPoint
 * @returns {*}
 */
export const getMarkers = (points, current, onClick, onSelectPoint) => {
    return points.reduce((acc, point) => {
        acc.push({
            key: point.id,
            position: [ parseFloat(point.coord.lat), parseFloat(point.coord.lon) ],
            children: {...point, onClick : onClick, onSelectPoint : onSelectPoint} ,
            isCurrent: point.id === current
        });
        return acc
    }, [])
};



