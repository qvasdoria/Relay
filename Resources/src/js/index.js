import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { EVENT_SELECTED_POINT } from './store/actions/events'
import App from './app'
import Relay from './relay'
import '../img/marker-shadow.png'
import '../img/marker-icon-red.png'

if (!global._babelPolyfill) {
    require('babel-polyfill');
}

/**
 * The entry point of the search application.
 * React documentation: https://facebook.github.io/react/docs/hello-world.html
 * Redux documentation: http://redux.js.org/
 * React-redux documentation: http://redux.js.org/docs/basics/UsageWithReact.html
 */
const run = () => {
    const root = document.getElementById('asdoria-relay-root');
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}><App/></Provider>,
        root
    );

    window.addEventListener(EVENT_SELECTED_POINT, (e) => {
        findFunction(e.detail.callback)(e)
    }, false);

    window.relay = new Relay(guid(), store);
    window.relay.getPoints(true);
};


/**
 *
 * @returns {string}
 */
function guid() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(6)
        .substring(1);
}


/**
 *
 * @param name
 * @returns {*}
 */
function findFunction(name) {
    if (window[name] === undefined) {
        (async () => {
            const module = await import('toastify-js');
            module.default({
                text: 'Aucun callback n\'a été défini',
                gravity: 'bottom',
                backgroundColor: '#dc3545'
            }).showToast();
        })();

        return null;
    }

    return window[name];
}


document.addEventListener('DOMContentLoaded', () => {
    run()
});
