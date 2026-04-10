import map from '../src/map.js';
import reduce from '../src/reduce.js';
import keys from '../src/keys.js';

describe('map', () => {
  test('maps array', () => {
    expect(map([1,2,3], x => x * 2)).toEqual([2,4,6]);
  });
});

describe('reduce', () => {
  test('sum values', () => {
    expect(reduce([1,2,3], (a,b) => a+b, 0)).toBe(6);
  });
});

describe('keys', () => {
  test('object keys', () => {
    expect(keys({a:1,b:2})).toEqual(['a','b']);
  });
});
