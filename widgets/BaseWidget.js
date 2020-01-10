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
    setCookie (name, value, expireDays = 1) {
        const date = new Date();

        date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));

        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }
    getCookie (cookie) {
        const name = `${cookie}=`;
        const decodedCookie = decodeURIComponent(document.cookie).split(';');

        for (let i = 0; i < decodedCookie.length; i++) {
            let c = decodedCookie[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return null;
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
