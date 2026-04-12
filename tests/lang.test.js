const toInteger = require('../src/toInteger.js')

test('converts float to integer', () => {
  expect(toInteger(3.7)).toBe(3)
})

test('handles string numbers', () => {
  expect(toInteger("5")).toBe(5)
})

test('handles null', () => {
  expect(toInteger(null)).toBe(0)
})