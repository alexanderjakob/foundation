import {addDaysToDate} from '../utils/addDaysToDate';

export default class CookieWidget {
    constructor (options) {
        this.name = options.name;
        this.expireDays = options.expireDays;
    }
    set (value, expireDays = this.expireDays) {
        if (this.name === undefined) {
            throw new Error('Name des Cookies muss gesetzt werden.');
        }

        document.cookie = `${this.name}=${value}; expires=${addDaysToDate(new Date(), expireDays)}; path=/`;
    }
    get () {
        const cookie = document.cookie.split('; ').filter((cookie) => {
            return cookie.includes(this.name);
        });

        if (cookie.length) {
            return cookie[0].split('=')[1];
        }

        return '';
    }
    remove () {
        document.cookie = `${this.name}=; expires=${addDaysToDate(new Date(), -1)};`;
    }
    setName (name) {
        this.name = name;
    }
}