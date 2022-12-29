# jsdom-devtools-formatter [![Build Status](https://travis-ci.org/jsdom/jsdom-devtools-formatter.svg?branch=master)](https://travis-ci.org/jsdom/jsdom-devtools-formatter)

In a nutshell: Instead of trying to understand what [jsdom](https://github.com/jsdom/jsdom)'s elements represents by inspecting their _implementation_ objects like so:
![before.png](before.png)
<!-- screenshots should be of width 888px to match default layout on github.com -->

…let's just inspect them like they were real HTML elements:
![after.png](after.png)

Typical use-case would be some script/test that utilizes [jsdom](https://github.com/jsdom/jsdom) in a Node.js environment, e.g. [Jest](https://jestjs.io/).


## How to use

```bash
npm install jsdom-devtools-formatter
```

```js
// in some file.js
const jsdomDevtoolsFormatter = require('jsdom-devtools-formatter');
jsdomDevtoolsFormatter.install();
```

```js
// You can also opt-out at some later point by:
jsdomDevtoolsFormatter.uninstall();
```

E.g. for Jest you need to install the formatter in a [`setupFilesAfterEnv` configuration file](https://jestjs.io/docs/configuration#setupfilesafterenv-array).

As a one-time thing also need to:
- Open Chrome's Devtools
- Click the "⠇" in the upper-right corner > Settings
- Under "Console", check _"Enable custom formatters"_


## Development

The source code is all plain vanilla JS and standard CommonJS modules.
Tests are written using [Jest](https://jestjs.io/)

See package.json's `scripts` sections for all available commands. The most useul ones are probably:

### Automated Tests

```bash
# run all tests once:
npm test

# run tests in "watch mode"
npm test -- --watch
```


### Manual Testing

In addition to verifying _logical changes_ using the automated tests, it's recommended to verify that things "look & feel" as expected using the _manual_ tests:

- Open [chrome://inspect](chrome://inspect) and click the _"Open dedicated DevTools for Node"_ link
- Then run:

```bash
npm run test:manual_node
# -or-
npm run test:manual_jest
```

It should stop at the `debugger` call site, from there you can follow the inlined comment with instructions to play with the console output.


## Related resources

- https://github.com/jsdom/jsdom
- [Custom Object Formatters in Chrome DevTools (gdoc)](https://bit.ly/object-formatters)
- [Contributing to Chrome DevTools (gdoc)](https://bit.ly/devtools-contribution-guide)
- [Debugging Node.js Apps](https://nodejs.org/en/docs/inspector/)
- [Debugger, Advanced usage, V8 Inspector Integration for Node.js](https://nodejs.org/dist/latest-v18.x/docs/api/debugger.html#v8-inspector-integration-for-nodejs)
