import BaseWidget from './BaseWidget';

export default class RequestWidget extends BaseWidget {
    constructor (options) {
        super();

        this.options = Object.assign({
            id: 'RequestWidget',
            url: '',
            headers: {},
            data: [],
            onSuccess: () => {},
            defaultOptions: {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        }, options);

        this.request = this.getRequest(this.options.url);
    }
    getHeaders () {
        return Object.assign({}, this.options.defaultOptions.headers, this.options.headers);
    }
    getRequest (url) {
        return fetch(url, {
                method: 'POST',
                headers: this.getHeaders(),
                body: this.options.data
            }).then((response) => {
                return response.json();
            }).then((json) => {
                this.options.onSuccess(json);
            }).catch((error) => {
                this.logger(error);
            });
    }
}
