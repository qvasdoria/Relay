import propTypes from 'prop-types'

export const listPropTypes = {
    points: propTypes.array,
    current: propTypes.string,
    listPaneShow: propTypes.bool,
    onSelectPoint: propTypes.func,
    onChangeListPaneShow: propTypes.func,
    loader: propTypes.bool
};

export const searchPropTypes = {
    searchTerm: propTypes.string,
    clear: propTypes.func,
    onChange: propTypes.func,
    isLoading: propTypes.bool
};

export const resultsPropTypes = {
    items: propTypes.array,
    current: propTypes.string,
    onSelect: propTypes.func
};

export const togglePropTypes = {
    onClick: propTypes.func,
    isActive: propTypes.bool
};

export const resultPropTypes = {
    isActive: propTypes.bool,
    onClick: propTypes.func,
    distance: propTypes.number,
    name: propTypes.string,
    street: propTypes.string,
    zipCode: propTypes.string,
    city: propTypes.string
};
