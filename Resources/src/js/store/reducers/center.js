import { LEAFLET_POSITION_CHANGE } from '../actions/types'
import { centerState } from '../state/state'

const center = (state = centerState, action) => {

    switch (action.type) {
        case LEAFLET_POSITION_CHANGE:
            return [
                parseFloat(action.lat),
                parseFloat(action.lon)
            ];
    }

    return state;
};

export default center
