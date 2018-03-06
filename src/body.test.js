const body = require("./body");

describe("body", () => {
  it("returns expected JsonML for 1st-level elements", () => {
    const element = document.createElement("div");
    element.innerHTML = `
      <h1 id="title">A title</h1>
      <article class="example">
        <p>Lorem ipsum</p>
        <p>and so forth</p>
      </article>
      <div class="">
        <!-- a comment -->
      </div>
      <footer>
        Foo bar
      </footer>
    `;
    const actual = body(element);
    expect(actual).toMatchSnapshot();
  });
});
