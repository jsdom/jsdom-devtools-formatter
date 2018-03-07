const JsonMLElement = require("./JsonMLElement");
const styles = require("./styles");

module.exports = x => {
  var body = new JsonMLElement("ol");
  body.setStyle(styles.body);

  for (let i = 0; i < x.childNodes.length; i++) {
    const child = x.childNodes[i];
    const item = body.createChild("li");
    item.setStyle(styles.item);

    switch (child.nodeType) {
      case 1: // element
        item.createObjectTag(child);
        break;

      case 3: // text
        item.createTextChild(child.nodeValue.trim());
        break;

      case 8: // comment
        item.createTextChild(`<!-- ${child.nodeValue.trim()} -->`);
        item.setStyle(styles.comment);
        break;
    }
  }

  return body.toJsonML();
};
