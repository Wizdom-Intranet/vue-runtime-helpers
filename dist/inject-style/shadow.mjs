function createInjector(context, shadowRoot) {
    return (id, style) => addStyle(style, shadowRoot);
}
function createStyleElement(shadowRoot) {
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    shadowRoot.appendChild(styleElement);
    return styleElement;
}
function addStyle(css, shadowRoot) {
    const styleElement = createStyleElement(shadowRoot);
    if (css.media)
        styleElement.setAttribute('media', css.media);
    if ('styleSheet' in styleElement) {
        styleElement.styleSheet.cssText = css.source;
    }
    else {
        while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
        }
        styleElement.appendChild(document.createTextNode(css.source));
    }
}

export default createInjector;
//# sourceMappingURL=shadow.mjs.map
