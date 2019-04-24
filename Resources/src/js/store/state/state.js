import { DEFAULT_FORM_SHOW, DEFAULT_LIST_SHOW, DEFAULT_PROVIDER, DEFAULT_ZOOM, DEFAULT_CENTER } from '../actions/constants'

const dataSet = document.getElementById('asdoria-relay-root').dataset;

const {
    addressStreet,
    addressZipCode,
    addressCity,
    addressCountry,
    configsProvider,
    configsFormShow,
    configsZoom,
    configsListPaneShow
} = dataSet;

const provider = configsProvider || DEFAULT_PROVIDER;
const formShow = configsFormShow === 'true' || DEFAULT_FORM_SHOW;
const listPaneShow = configsListPaneShow === 'true' || DEFAULT_LIST_SHOW;
const zoom = parseInt(configsZoom) || DEFAULT_ZOOM;


export const addressState = {
    street: addressStreet,
    zipCode: addressZipCode,
    city: addressCity,
    country: addressCountry,
};

export const configsState = {
    provider,
    formShow,
    zoom,
    listPaneShow
};

export const centerState = DEFAULT_CENTER;

export const pointsState = [];

export const currentState = '';

export const loaderState = false;
