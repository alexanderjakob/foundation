import {isTouch} from '../../utils/isTouch';

describe('isTouch.js', () => {
    test('it should be no touch device', () => {
        window.TouchEvent = null;

        expect(isTouch()).toBe(false);
    });
});
