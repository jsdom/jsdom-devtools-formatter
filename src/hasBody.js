const isElement = require('./isElement');
const findInlineText = require('./findInlineText');

module.exports = x => isElement(x) && x.childNodes.length > 0 && !findInlineText(x)
