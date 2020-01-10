import BaseWidget from './BaseWidget';

export default class TrackingWidget extends BaseWidget {
    constructor (options) {
        super();

        this.options = Object.assign({
            id: 'TrackingWidget',
            containerId: ''
        }, options);
    }
    listeners () {
        this.subscribe('onCookiesAccepted', this._onCookiesAccepted.bind(this));
    }
    init () {
        if (this.options.containerId === null) {
            return;
        }

        this.setGoogleTagManager(this.options.containerId);
    }
    setGoogleTagManager (containerId) {
        if (navigator.doNotTrack !== 1 && navigator.doNotTrack !== 'yes' && window.doNotTrack !== 1 && navigator.msDoNotTrack !== 1) {
            document.querySelector('head').appendChild(this.getMarkup(containerId));
        }
    }
    getMarkup (containerId) {
        let script = document.createElement('script');

        script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${containerId}');`;

        return script;
    }
    _onCookiesAccepted () {
        this.init();
    }
}