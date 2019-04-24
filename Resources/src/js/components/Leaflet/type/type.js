import propTypes from 'prop-types'

export const leafletPropTypes = {
    center: propTypes.array,
    current: propTypes.string,
    points: propTypes.array,
    listPaneShow: propTypes.bool,
    zoom: propTypes.number,
    onClick: propTypes.func,
    onSelectPoint: propTypes.func
};

export const popupPropTypes = {
    position: propTypes.array,
    isCurrent: propTypes.bool,
    name: propTypes.string,
    address: propTypes.object,
    openings: propTypes.array,
    id: propTypes.string,
    onClick: propTypes.func,
    onSelectPoint: propTypes.func
};
