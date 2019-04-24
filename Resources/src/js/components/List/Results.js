import React, { useEffect, useRef } from 'react'
import Result from './Result'
import { resultsPropTypes } from './type/type'
import * as s from './style/resultsStyle'

const results = props => {
    const containerEl = useRef();
    const {
        items,
        current,
        onSelect
    } = props;

    useEffect(() => {
        const input = containerEl.current.querySelector('.is-active');

        if (input) {
            containerEl.current.scrollTop = input.offsetTop - 70
        }
    });

    return (
        <s.Container ref={containerEl}>
            { items.map(item => (
                <Result
                    {...item}
                    key={item.id}
                    isActive={item.id === current}
                    onClick={() => onSelect(item.id)}
                />
            )) }
        </s.Container>
    )
};

results.propTypes = resultsPropTypes;

export default results
