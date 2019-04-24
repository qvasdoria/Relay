import React from 'react'
import { getParameter } from '../../api/utils'
import { fieldPropTypes } from './type/type'
import * as s from './style/fieldStyle'

const input = props => {
    const {
        value,
        name,
        onChange
    } = props;

    return (
        <s.Container>
            <input
                type="text"
                required
                value={value}
                name={name}
                placeholder={getParameter(name)}
                onChange={onChange}
            />
        </s.Container>
    )
};

input.propTypes = fieldPropTypes;

export default input
