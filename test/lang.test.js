import toInteger from '../src/toInteger.js';
import toString from '../src/toString.js';

describe('toInteger', () => {
  test('converts float', () => {
    expect(toInteger(3.7)).toBe(3);
  });

  test('string input', () => {
    expect(toInteger("5.9")).toBe(5);
  });

  test('Infinity', () => {
    expect(toInteger(Infinity)).toBeGreaterThan(0);
  });

  test('negative float', () => {
    expect(toInteger(-3.2)).toBe(-3);
  });
});

describe('toString', () => {
  test('null and undefined', () => {
    expect(toString(null)).toBe('');
    expect(toString(undefined)).toBe('');
  });

  test('array', () => {
    expect(toString([1,2,3])).toBe('1,2,3');
  });

  test('-0 preserved', () => {
    expect(toString(-0)).toBe('-0');
  });

  test('symbol', () => {
    expect(toString(Symbol('a'))).toContain('Symbol');
  });
});
