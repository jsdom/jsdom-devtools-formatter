const exampleDomFixture = require('./example-dom-fixture');

const jsdomDevtoolsFormatter = require("../index")
jsdomDevtoolsFormatter.install();

const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html>${exampleDomFixture}`);
const { window } = dom;
const { document } = window;

let exampleNode = document.getElementById("root");
debugger;
// type exampleNode<enter> in the console,
// it should be rendered like an actual HTML element which can be expanded and explored
