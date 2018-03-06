JsonMLElement = function(tagName) {
  this._attributes = {};
  this._jsonML = [tagName, this._attributes];
};

JsonMLElement.prototype = {
  createChild: function(tagName) {
    var c = new JsonMLElement(tagName);
    this._jsonML.push(c.toJsonML());
    return c;
  },

  createObjectTag: function(object) {
    var tag = this.createChild("object");
    tag.setAttribute("object", object);
    return tag;
  },

  setStyle: function(style) {
    this._attributes["style"] = style;
  },

  setAttribute: function(key, value) {
    this._attributes[key] = value;
  },

  createTextChild: function(text) {
    this._jsonML.push(text + "");
  },

  toJsonML: function() {
    return this._jsonML;
  }
};

module.exports = JsonMLElement;
