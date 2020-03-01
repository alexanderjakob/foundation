export function isTouch () {
    return (('ontouchstart' in window) || window.TouchEvent || (window.DocumentTouch && document instanceof DocumentTouch));
}