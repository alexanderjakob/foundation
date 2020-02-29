export default class EventsWidget {
    constructor () {}
    publish (event, detail, callback) {
        document.dispatchEvent(new CustomEvent(event, {detail}));

        if (typeof callback === 'function') {
            callback.apply(this);
        }
    }
    subscribe (event, callback) {
        document.addEventListener(event, callback, false);
    }
    unsubscribe (event, callback) {
        document.removeEventListener(event, callback, false);
    }
}