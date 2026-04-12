function toInteger(value) {
  if (value == null) return 0

  const number = Number(value)

  if (isNaN(number)) return 0

  return number < 0 ? Math.ceil(number) : Math.floor(number)
}

module.exports = toInteger