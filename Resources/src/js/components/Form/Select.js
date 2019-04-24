import React from 'react'
import { getParameter } from '../../api/utils'
import { fieldPropTypes } from './type/type'
import * as s from './style/fieldStyle'

const select = props => {
    const {
        value,
        name,
        onChange,
        countries
    } = props;

    const countryList = Object.keys(countries).map(country => (
        <option value={countries[country].iso} key={countries[country].iso}>
            {countries[country].name}
        </option>
    ));

    return (
        <s.Container>
            <select
                value={value}
                name={name}
                placeholder={getParameter(name)}
                onChange={onChange}
            >
                <option disabled value="Select country">Select Country</option>
                {countryList}
            </select>
        </s.Container>
    )
};

select.propTypes = fieldPropTypes;

export default select
