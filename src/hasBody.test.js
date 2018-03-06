const hasBody = require("./hasBody");

describe("hasBody", () => {
  it('returns true for an element with at least a child element', () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <span></span>
    `;
    expect(hasBody(element)).toBe(true);
  })

  it('returns false if element contains only text', () => {
    const element = document.createElement('div')
    element.innerHTML = 'a'.repeat(50);
    expect(hasBody(element)).toBe(false);
  })

  it('returns true if element contains a long text', () => {
    const element = document.createElement('div')
    element.innerHTML = 'b'.repeat(100);
    expect(hasBody(element)).toBe(true);
  })

  it("returns false for non-element input", () => {
    expect(hasBody()).toBe(false);
    expect(hasBody(null)).toBe(false);
    expect(hasBody(undefined)).toBe(false);
    expect(hasBody(false)).toBe(false);
    expect(hasBody("a string")).toBe(false);
    expect(hasBody(123)).toBe(false);
    expect(hasBody({})).toBe(false);
    expect(hasBody([])).toBe(false);
    expect(hasBody(new Date())).toBe(false);

    const element = document.createElement('div')
    expect(hasBody(element)).toBe(false);
  });
});
