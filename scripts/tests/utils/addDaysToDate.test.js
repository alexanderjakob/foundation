import {addDaysToDate} from '../../utils/addDaysToDate';

describe('addDaysToDate.js', () => {
    let date;

    beforeEach(() => {
        date = new Date('2020-01-20T12:30:00');
    });

    test('it should return date three days later', () => {
        const newDate = new Date('2020-01-23T12:30:00');

        expect(addDaysToDate(date, 3)).toStrictEqual(newDate);
    });

    test('it should return date one day prior', () => {
        const newDate = new Date('2020-01-19T12:30:00');

        expect(addDaysToDate(date, -1)).toStrictEqual(newDate);
    });
});
