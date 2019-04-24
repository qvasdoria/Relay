import React, { useState } from 'react'
import Results from './Results'
import Search from './Search'
import Toggle from './Toggle'
import { listPropTypes } from './type/type'
import * as s from './style/listStyle'

const list = props => {
    const {
        points,
        current,
        listPaneShow,
        onSelectPoint,
        onClickToggleList,
        loader
    } = props;

    const [ searchTerm, setSearchTerm ] = useState('');

    const searchUpdated = event => setSearchTerm(event.target.value);
    const searchClear = () => setSearchTerm('');

    const pointsToDisplay = points.filter(point => {
        return point.name.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return (
        <s.List aria-hidden={listPaneShow}>
            <Search
                searchTerm={searchTerm}
                clear={searchClear}
                onChange={searchUpdated}
                isLoading={loader}
            />
            <Results
                items={pointsToDisplay}
                current={current}
                onSelect={onSelectPoint}
            />
            <Toggle
                onClick={() => onClickToggleList(!listPaneShow)}
                isActive={listPaneShow}
            />
        </s.List>
    )
};

list.propTypes = listPropTypes;

export default list
