export function isInViewport (element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertical = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horizontal = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertical && horizontal);
}