import BaseWidget from './BaseWidget';

export default class CookieBannerWidget extends BaseWidget {
    constructor (options) {
        super();

        this.options = Object.assign({
            id: 'CookieBannerWidget',
            element: '[data-cookie-banner]',
            cookieName: 'cookieBanner',
        }, options);

        this.acceptButton = this.options.element.querySelector('[data-cookie-banner-accept]');
        this.declineButton = this.options.element.querySelector('[data-cookie-banner-decline]');

        const initialCookie = this.getCookie(this.options.cookieName);

        if (initialCookie === null) {
            this.show(this.options.element);
            this.init();
        }

        if (initialCookie === 'true') {
            this.publish('onCookiesAccepted');
        }
    }
    init () {
        this.acceptButton.addEventListener('click', (event) => {
            event.preventDefault();

            this.setCookie(this.options.cookieName, 'true', 3);
            this.hide(this.options.element);

            this.publish('onCookiesAccepted');
        });

        this.declineButton.addEventListener('click', (event) => {
            event.preventDefault();

            this.setCookie(this.options.cookieName, 'false', 0.25);
            this.hide(this.options.element);

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
