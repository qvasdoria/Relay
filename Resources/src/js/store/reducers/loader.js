import { LOADER_VISIBLE_CHANGE } from '../actions/types'
import { loaderState } from '../state/state'

const loader = (state = loaderState, action) => {

    switch (action.type) {
        case LOADER_VISIBLE_CHANGE:
            return action.visible;
    }

    return state;
};

export default loader
