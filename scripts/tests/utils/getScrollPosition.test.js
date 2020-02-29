import {getScrollPosition} from '../../utils/getScrollPosition';

describe('getScrollPosition.js', () => {
    test('it should return initial value without scrolling', () => {
        expect(getScrollPosition()).toBe(0);
    });

    test('it should return correct value after scrolling', () => {
        document.documentElement.scrollTop = 10;

        expect(getScrollPosition()).toBe(10);
    });
});
