import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'
import { getParameter } from '../../api/utils'
import { formPropTypes } from './type/type'
import * as s from './style/formStyle'

const formAddress = props => {
    const {
        city,
        country,
        formShow,
        onSubmit,
        street,
        zipCode
    } = props;

    const [ address, setAddress ] = useState({ street, zipCode, city, country });

    const handleChange = event => {
        event.persist();
        let { target: { name, value } } = event;
        setAddress(address => ({ ...address, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(address);
    };

    if (!formShow) {
        return null;
    }

    return (
        <s.Form onSubmit={handleSubmit}>
            <Input
                value={address.street}
                name="street"
                onChange={(e) => { handleChange(e) }}
            />
            <Input
                value={address.city}
                name="city"
                onChange={(e) => { handleChange(e) }}
            />
            <Input
                value={address.zipCode}
                name="zipCode"
                onChange={(e) => { handleChange(e) }}
            />
            <Select
                value={address.country}
                name="country"
                onChange={(e) => { handleChange(e) }}
                countries={getParameter('countries')}
            />
            <s.Submit
                type="submit"
                value={getParameter('submit')}
            />
        </s.Form>
    );
};

formAddress.propTypes = formPropTypes;

export default formAddress
