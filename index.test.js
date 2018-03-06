const formatter = require('./index');
const header = require('./src/header');
const body = require('./src/body');
const hasBody = require('./src/hasBody');

describe('formatter', () => {
  it('has expected functions', () => {
    expect(formatter.header).toBe(header);
    expect(formatter.hasBody).toBe(hasBody);
    expect(formatter.body).toBe(body);
  })
});

describe('.install', () => {
  afterEach(() => {
    delete global.devtoolsFormatters;
  });

  it('setup formatter as expected', () => {
    formatter.install();
    expect(global.devtoolsFormatters).toEqual([formatter]);

    // only set it up once
    formatter.install();
    expect(global.devtoolsFormatters).toEqual([formatter]);
  })
})
