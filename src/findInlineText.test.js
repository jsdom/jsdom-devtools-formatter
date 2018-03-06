const findInlineText = require('./findInlineText');

describe('findInlineText', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  it('returns inlined if text is short enough', () => {
    element.innerHTML = 'a'.repeat(50);
    expect(findInlineText(element)).toEqual(element.innerHTML);
  });

  it('returns nothing if text is considered too long', () => {
    element.innerHTML = 'a'.repeat(100);
    expect(findInlineText(element)).toBeFalsy();
  });

  it('returns nothing for mixed content', () => {
    element.innerHTML = 'test <hr />';
    expect(findInlineText(element)).toBeFalsy();
  });

  it('returns nothing if contains a comment', () => {
    element.innerHTML = '<!-- a comment -->';
    expect(findInlineText(element)).toBeFalsy();
  });
});
