import CookieWidget from '../../widgets/CookieWidget';

describe('CookieWidget', () => {
    const cookieWidget = new CookieWidget({
        expireDays: 8
    });

    cookieWidget.setName('cookie');

    test('it should not set a cookie initially', () => {
        expect(cookieWidget.get()).toBe('');
    });

    test('it should set a cookie', () => {
        cookieWidget.set('my cookie value');

        expect(cookieWidget.get()).toBe('my cookie value');
    });

    test('it should remove a cookie', () => {
        cookieWidget.remove();

        expect(cookieWidget.get()).toBe('');
    });
});