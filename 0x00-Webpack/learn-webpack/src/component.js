export default (text = 'Hello, webpack!') => {
    const element = document.createElement('h1');
    element.innerHTML = text;
    return element;
}