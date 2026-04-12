const map = require('../src/map.js')

test('map transforms array', () => {
  const result = map([1, 2, 3], x => x * 2)
  expect(result).toEqual([2, 4, 6])
})

test('map with empty array', () => {
  expect(map([], x => x)).toEqual([])
})