import { PROVIDER_CHANGE, LIST_PANE_VISIBLE_CHANGE } from '../actions/types'
import { configsState } from '../state/state'

const configs = (state = configsState, action) => {
    const { type, provider, listPaneShow } = action;

    switch (type) {
        case PROVIDER_CHANGE:
            return {
                ...state,
                provider
            };

        case LIST_PANE_VISIBLE_CHANGE:
            return {
                ...state,
                listPaneShow
            };
    }

    return state;
};

export default configs
