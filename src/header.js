const JsonMLElement = require('./JsonMLElement');
const styles = require('./styles');
const isElement = require('./isElement');
const findInlineText = require('./findInlineText');

module.exports = x => {
  if (!isElement(x)) {
    // i.e. use normal formatter
    return null;
  }

  const tagName = x.tagName.toLowerCase();
  const el = new JsonMLElement("span");
  el.setStyle(styles.tag);
  el.createTextChild("<");

  const startTagName = el.createChild("span");
  startTagName.createTextChild(tagName);
  startTagName.setStyle(styles.tagName);

  x.getAttributeNames().forEach(name => {
    el.createTextChild(" ");

    const attrName = el.createChild("span");
    attrName.createTextChild(name);
    attrName.setStyle(styles.attributeName);
    el.createTextChild('="');

    const attrVal = el.createChild("span");
    attrVal.createTextChild(x.getAttribute(name));
    attrVal.setStyle(styles.attributeValue);

    el.createTextChild('"');
  });

  el.createTextChild(">");

  const content = findInlineText(x) || '…';
  const text = el.createChild('span');
  text.createTextChild(content);
  text.setStyle(styles.text);

  el.createTextChild("<");

  const closeTagName = el.createChild("span");
  closeTagName.setStyle(styles.tagName);
  closeTagName.createTextChild("/" + tagName);

  el.createTextChild(">");
  return el.toJsonML();
};
