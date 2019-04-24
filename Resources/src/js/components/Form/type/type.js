import propTypes from 'prop-types'

export const formPropTypes = {
    city: propTypes.string,
    country: propTypes.string,
    formShow: propTypes.bool,
    onSubmit: propTypes.func,
    street: propTypes.string,
    zipCode: propTypes.string
};

export const fieldPropTypes = {
    value: propTypes.string,
    name: propTypes.string,
    onChange: propTypes.func,
    countries: propTypes.object
};
