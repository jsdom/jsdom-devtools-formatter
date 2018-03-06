require("../index").install();

const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html>
  <div class="testing class names" id="root" data-foo-bar="baz">
    <div class="first">
      something else
    </div>
    <!-- a comment -->
    <div class="second">
      <div class="second-inner">
        something something
      </div>
    </div>
    <p>
      <span class="example">Hello world</span>
    </p>

    and some text outside elements
  </div>
`);
const { window } = dom;
const { document } = window;

let a = document.getElementById("root");
debugger;
// type a<enter> in the console,
// it should be rendered like an actual HTML element which can be expanded and explored
