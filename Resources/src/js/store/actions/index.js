import {
    SAVE_ADDRESS,
    SELECT_POINT,
    LEAFLET_POSITION_CHANGE,
    LIST_PANE_VISIBLE_CHANGE,
    REMOVE_ADDRESS,
    SAVE_POINTS,
    REMOVE_POINTS,
    PROVIDER_CHANGE,
    LOADER_VISIBLE_CHANGE
} from './types'


/**
 * save address
 * @param address
 */
export const saveAddress = (address) => ({
    type: SAVE_ADDRESS,
    ...address
});


/**
 * select point
 * @param id
 */
export const selectPoint = id => ({
    type: SELECT_POINT,
    id
});


/**
 * change position
 * @param coords
 */
export const changePosition = coords => ({
    type: LEAFLET_POSITION_CHANGE,
    ...coords
});


/**
 * (show / hide) list pane
 * @param listPaneShow
 */
export const changeListPaneVisible = listPaneShow => ({
    type: LIST_PANE_VISIBLE_CHANGE,
    listPaneShow
});


/**
 * select point
 * @param coords
 */
export const changeLeafletPosition = coords => ({
    type: LEAFLET_POSITION_CHANGE,
    ...coords
});


/**
 * remove address
 */
export const removeAddress = () => ({
    type: REMOVE_ADDRESS
});


/**
 * save points
 * @param points
 */
export const savePoints = points => ({
    type: SAVE_POINTS,
    points
});


/**
 * remove points
 */
export const removePoints = () => ({
    type: REMOVE_POINTS
});


/**
 * change provider
 * @param provider
 */
export const changeProvider = provider => ({
    type: PROVIDER_CHANGE,
    provider
});


/**
 * (show / hide) loader
 * @param visible
 */
export const changeLoaderVisible = visible => ({
    type: LOADER_VISIBLE_CHANGE,
    visible
});
