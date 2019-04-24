import { SAVE_POINTS, REMOVE_POINTS } from '../actions/types'
import { pointsState } from '../state/state'

const points = (state = pointsState, action) => {

    switch (action.type) {
        case SAVE_POINTS:
            return [...action.points];

        case REMOVE_POINTS:
            return [];
    }

    return state;
};

export default points
