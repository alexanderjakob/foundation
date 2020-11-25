import EventsWidget from './EventsWidget';
import CookieWidget from './CookieWidget';

export default class CookieBannerWidget extends EventsWidget {
    constructor (options) {
        super();

        this.cookieName = options.cookieName;

        this.cookieBannerCookie = new CookieWidget({
            name: this.cookieName,
            expireDays: 7
        });

        const currentValue = this.cookieBannerCookie.get();

        if (currentValue === 'true') {
            this.publish('onCookiesAccepted');

            return;
        }

        this.element = options.element; // [data-cookie-banner]

        if (this.element === null || currentValue === 'false') {
            return;
        }

        this.acceptButton = this.element.querySelector('[data-cookie-banner-accept]');
        this.declineButton = this.element.querySelector('[data-cookie-banner-decline]');

        this.show(this.element);
        this.init();
    }
    init () {
        this.acceptButton.addEventListener('click', () => {
            this.cookieBannerCookie.set('true');

            this.hide(this.element);
            this.publish('onCookiesAccepted');
        });

        this.declineButton.addEventListener('click', () => {
            this.cookieBannerCookie.set('false', 0.25);

            this.hide(this.element);
            this.publish('onCookiesDeclined');
        });
    }
    show (element) {
        element.classList.remove('is-hidden');
    }
    hide (element) {
        element.classList.add('is-hidden');
    }
}