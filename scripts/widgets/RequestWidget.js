export default class RequestWidget {
    constructor (options) {
        this.options = Object.assign({
            url: '',
            data: [],
            onSuccess: () => {}
        }, options);
    }
    getRequest (url, data) {
        return fetch(url, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: data
            }).then((response) => {
                return response.json();
            }).then((json) => {
                this.options.onSuccess(json);
            }).catch((error) => {
                throw new Error(error);
            });
    }
}