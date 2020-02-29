import {isInViewport} from '../../utils/isInViewport';

describe('isInViewport.js', () => {
    const mockGetBoundingClientRect = (dimensions) => {
        Element.prototype.getBoundingClientRect = jest.fn(() => {
            return dimensions;
        });
    };

    document.body.innerHTML = `
        <div id="test"></div>
    `;

    test('it should be in viewport', () => {
        mockGetBoundingClientRect({
            width: 120,
            height: 120,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        });

        expect(isInViewport(document.querySelector('#test'))).toBe(true);
    });

    test('it should be outside viewport', () => {
        mockGetBoundingClientRect({
            width: 120,
            height: 120,
            top: -1000,
            bottom: -1000,
            right: 0,
            left: 0
        });

        expect(isInViewport(document.querySelector('#test'))).toBe(false);
    });
});
