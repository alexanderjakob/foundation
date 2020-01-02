import EventsWidget from './EventsWidget';

export default class BaseWidget extends EventsWidget {
    constructor (options) {
        super();

        this.options = Object.assign({
            id: 'BaseWidget',
            debug: false
        }, options);

        this.listeners();
    }
    listeners () {}
    get options () {
        return this._options;
    }
    set options (options) {
        this._options = options;
    }
    logger (message) {
        /* eslint-disable */
        if (this.options.debug === true) {
            console.log(message);
        }
        /* eslint-enable */
    }
}
