import { EVENT_SELECTED_POINT } from '../store/actions/events'


export const getPoint = (dispatch, points, id) => {
    const point = getPointById(points, id);
    const detail = {
        callback: getConfig().configsCallback,
        point
    };
    // Creates a custom event with our datas and dispatches it
    const event = new CustomEvent(EVENT_SELECTED_POINT, {detail});
    window.dispatchEvent(event)
};


export const getPointById = (points, id) => {
    return points.find((point) => point.id === id);
};


export const getParameters = () => {
    return JSON.parse(getConfig().params);
};

export const getParameter = (key) => {
    return getParameters()[key];
};


export const getConfig = () => {
    return document.getElementById('asdoria-relay-root').dataset;
};

export const getConfigByName = (name) => {
    return getConfig()[name];
};


export const processError = ({violations = {}}) => {
    Object.keys(violations).forEach(key => {
        violations[key].forEach(error => {
            let msg = error.message;
            if (error.property) {
                msg += ` (${getParameter(error.property)})`
            }

            showAlert(msg)
        })
    });
};


export const showAlert = (text, gravity = 'bottom', backgroundColor = '#dc3545') => {
    (async () => {
        const module = await import('toastify-js');
        module.default({
            text,
            gravity,
            backgroundColor
        }).showToast();
    })();
};
