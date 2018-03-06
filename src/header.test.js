const header = require("./header");

describe("header", () => {
  it("returns null to utilize default formatter for a non-HTML elements", () => {
    expect(header()).toBe(null);
    expect(header(null)).toBe(null);
    expect(header(undefined)).toBe(null);
    expect(header(false)).toBe(null);
    expect(header("a string")).toBe(null);
    expect(header(123)).toBe(null);
    expect(header({})).toBe(null);
    expect(header([])).toBe(null);
    expect(header(new Date())).toBe(null);
  });

  it("returns summary for a simple DOM element", () => {
    const element = document.createElement("div");
    element.innerHTML = 'test text';
    expect(header(element)).toMatchSnapshot();
  });

  it("returns a ellipsis for a complicated DOM element", () => {
    const element = document.createElement("div");
    element.className = "foo bar baz";
    element.id = "root";
    element.innerHTML = `
      <h1>This is not part of the header</h1>
      <p class="example">And this neither</p>
    `;
    expect(header(element)).toMatchSnapshot();
  });
});
