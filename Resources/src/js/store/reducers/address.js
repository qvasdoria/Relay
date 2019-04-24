import { SAVE_ADDRESS, REMOVE_ADDRESS } from '../actions/types'
import { addressState } from '../state/state'

const address = (state = addressState, action) => {

    switch (action.type) {
        case SAVE_ADDRESS:
            return { ...action };

        case REMOVE_ADDRESS:
            return addressState;
    }

    return state
};

export default address
