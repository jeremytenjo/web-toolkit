import filter from './array.filter'

test('should Filter array of single values', () => {
  const arrayOfStrings = ['1', '2', '3']
  const result = filter({
    array: arrayOfStrings,
    post: '',
    condition: '===',
    value: '3',
  })
  expect(result).toContain('3')
})

// should Filter array of objects
