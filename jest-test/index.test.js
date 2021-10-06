const { sum, person, toggle, range } = require('./index');

describe('test index.js file', () => {
  it('sums 1 + 1 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('makes a person', () => {
    expect(person('cho', 13)).toEqual({ name: 'cho', age: 13 });
  });

  it('returns index.js file', () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  });

  it('has 2', () => {
    expect(range(1, 3)).toContain(2);
  });
});
