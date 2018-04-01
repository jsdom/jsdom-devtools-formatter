const header = require('./src/header');
const body = require('./src/body');
const hasBody = require('./src/hasBody');

const formatter = {
  header,
  body,
  hasBody,

  install: () => {
    global.devtoolsFormatters = global.devtoolsFormatters || [];
    if (global.devtoolsFormatters.indexOf(formatter) === -1) {
      global.devtoolsFormatters.push(formatter);
    }
  },

  uninstall: () => {
    global.devtoolsFormatters = global.devtoolsFormatters || [];
    global.devtoolsFormatters = global.devtoolsFormatters.filter(x => x !== formatter);
  }
};

module.exports = formatter;
