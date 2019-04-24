import React from 'react'
import { togglePropTypes } from './type/type'
import * as s from './style/toggleStyle'

const toggle = props => (
    <s.Container>
        <s.Button {...props} />
    </s.Container>
);

toggle.propTypes = togglePropTypes;

export default toggle
