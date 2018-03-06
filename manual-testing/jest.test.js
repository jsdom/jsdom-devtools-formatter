require("../index").install();

test("manual", () => {
  document.body.innerHTML = `
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
  `;

  let a = document.getElementById("root");
  expect(a).toBeDefined();

  debugger;
  // type a<enter> in the console,
  // it should be rendered like an actual HTML element which can be expanded and explored
});
