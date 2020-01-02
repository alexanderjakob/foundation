import EventsWidget from './EventsWidget';

export default class BaseWidget extends EventsWidget {
    constructor () {
        super();

        this.listeners();
    }
    listeners () {}
    get options () {
        return this._options;
    }
    set options (options) {
        this._options = options;
    }
    get scrollPosition () {
        return this._scrollPosition;
    }
    set scrollPosition (position) {
        this._scrollPosition = position;
    }
    getScrollPosition () {
        return document.documentElement.scrollTop;
    }
    getVisibility (element) {
        const rect = element.getBoundingClientRect(),
            windowHeight = (window.innerHeight || document.documentElement.clientHeight),
            windowWidth = (window.innerWidth || document.documentElement.clientWidth),
            vertical = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0),
            horizontal = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        return (vertical && horizontal);
    }
    logger (message) {
        /* eslint-disable */
        if (this.debug === true) {
            console.log(message);
        }
        /* eslint-enable */
    }
    raf (callback) {
        return window.requestAnimationFrame(callback.bind(this));
    }
}
