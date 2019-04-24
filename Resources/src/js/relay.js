import { getPoints } from './api'
import { DEFAULT_PROVIDER } from './store/actions/constants'

import {
    changeLeafletPosition,
    saveAddress,
    changeProvider
} from './store/actions'

export default class Relay {

    constructor(id, store) {
        this.id = id;
        this.store = store;
        this.dispatch = store.dispatch
    }

    /**
     * change the application provider name
     * @param providerName
     */
    changeProvider(providerName = DEFAULT_PROVIDER) {
        this.dispatch(changeProvider(providerName));
    }

    /**
     * set the current address
     * @param street
     * @param zipCode
     * @param city
     * @param country
     */
    setAddress(street = '', zipCode = '', city = '', country = '') {
        const address = {
            street,
            zipCode,
            city,
            country
        };

        this.dispatch(saveAddress(address));
    }

    /**
     * set the new position for the leaflet
     * @param lat latitude
     * @param lon longitude
     */
    setPosition(lat, lon) {
        this.dispatch(changeLeafletPosition({lat, lon}));
    }


    /**
     * call the provider client for get Relay Point
     * @param switchPosition
     */
    getPoints(switchPosition = false) {
        const { address, configs: { provider } } = this.store.getState();
        getPoints(this.dispatch, address, provider, switchPosition);
    }
}
