import capitalize, { testValue } from '.'

test('Letter is capitalized', () => {
  const result = capitalize(testValue)
  expect(result).toBe('String')
})
