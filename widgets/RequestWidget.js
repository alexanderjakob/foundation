import BaseWidget from './BaseWidget';

export default class RequestWidget extends BaseWidget {
    constructor (options) {
        super();

        this.options = Object.assign({
            id: 'RequestWidget',
            url: '',
            data: [],
            onSuccess: () => {}
        }, options);

        this.request = this.getRequest(this.options.url);
    }
    getRequest (url) {
        return fetch(url, {
                method: 'POST',
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
