const isElement = require('./isElement');
const findInlineText = require('./findInlineText');
const isTextNode = x => x.nodeType === 3;

module.exports = x => {
  if (!isElement(x)) return;

  const childNodes = Array.from(x.childNodes);
  if (!childNodes.every(isTextNode)) return;

  const str = childNodes.reduce((str, c) => str + c.nodeValue, '');
  if (str.length <= 80) {
    return str;
  }
}
