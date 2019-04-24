import React from 'react'
import { resultPropTypes} from './type/type'
import * as s from './style/resultStyle'

const result = props => {
    const {
        isActive,
        onClick,
        name,
        distance,
        address: { street, zipCode, city }
    } = props;

    return (
        <s.Container isActive={isActive} onClick={onClick} className={isActive ? 'is-active' : ''}>
            <s.Header>
                <span>
                    {name} ({distance} m)
                </span>
            </s.Header>
            <s.Detail>
                {street}
            </s.Detail>
            <s.Detail>
                {zipCode} {city}
            </s.Detail>
        </s.Container>
    )
};

result.propTypes = resultPropTypes;

export default result
