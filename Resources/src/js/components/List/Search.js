import React from 'react'
import { getParameter } from '../../api/utils'
import { searchPropTypes } from './type/type'
import * as s from './style/searchStyle'

const search = props => {
    const {
        searchTerm,
        clear,
        onChange,
        isLoading
    } = props;

    return (
        <s.Container>
            <s.Inner>
                <s.Field>
                    <s.Input
                        type="text"
                        placeholder={getParameter('search')}
                        value={searchTerm}
                        onChange={onChange}
                    />
                </s.Field>
                <s.ClearButton isLoading={isLoading} onClick={clear} />
            </s.Inner>
        </s.Container>
    )
};

search.propTypes = searchPropTypes;

export default search
