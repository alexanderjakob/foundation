export function addDaysToDate (date, days) {
    return new Date(date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)));
}