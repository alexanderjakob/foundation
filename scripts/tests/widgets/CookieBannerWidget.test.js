import CookieBannerWidget from '../../widgets/CookieBannerWidget';

describe('CookieBannerWidget', () => {
    document.body.innerHTML = `
        <div data-cookie-banner>
            <button data-cookie-banner-accept></button>
            <button data-cookie-banner-decline></button>
        </div>
    `;

    const cookieBannerWidget = new CookieBannerWidget({
        element: document.querySelector('[data-cookie-banner]'),
        cookieName: 'cookieName'
    });

    test('it should not set a cookie initially', () => {
        expect(cookieBannerWidget.cookieBannerCookie.get()).toBe('');
    });

    test('it should set a cookie after clicking accept', () => {
        document.querySelector('[data-cookie-banner-accept]').click();

        expect(cookieBannerWidget.cookieBannerCookie.get()).toBe('true');
    });

    test('it should set a cookie after clicking decline', () => {
        document.querySelector('[data-cookie-banner-decline]').click();

        expect(cookieBannerWidget.cookieBannerCookie.get()).toBe('false');
    });
});