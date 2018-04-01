const exampleDomFixture = require('./example-dom-fixture');

const jsdomDevtoolsFormatter = require("../index")
jsdomDevtoolsFormatter.install();

test("manual", () => {
  document.body.innerHTML = exampleDomFixture;

  let exampleNode = document.getElementById("root");
  expect(exampleNode).toBeDefined();

  debugger;
  // type exampleNode<enter> in the console,
  // it should be rendered like an actual HTML element which can be expanded and explored
});
