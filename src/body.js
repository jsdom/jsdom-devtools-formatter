const JsonMLElement = require("./JsonMLElement");
const styles = require("./styles");

module.exports = x => {
  var body = new JsonMLElement("span");
  body.setStyle(styles.body);

  for (let i = 0; i < x.childNodes.length; i++) {
    const child = x.childNodes[i];
    const row = body.createChild("span");

    switch (child.nodeType) {
      case 1: // element
        row.createObjectTag(child);
        break;
      case 3: // text
        {
          let val = child.nodeValue.trim();

          // makes sure each item is rendered on its own rowne
          if (i > 0) {
            val = "\n" + (val || "");
          }

          if (val) {
            row.createTextChild(val);
          }
        }
        break;
      case 8: // comment
        row.createTextChild(`<!-- ${child.nodeValue} -->`);
        row.setStyle(styles.comment);
        break;
    }
  }

  return body.toJsonML();
};
