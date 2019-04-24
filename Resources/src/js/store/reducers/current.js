import { SELECT_POINT } from '../actions/types'
import { currentState } from '../state/state'

const current = (state = currentState, action) => {

    switch (action.type) {
        case SELECT_POINT:
            return action.id;
    }

    return state;
};

export default current
