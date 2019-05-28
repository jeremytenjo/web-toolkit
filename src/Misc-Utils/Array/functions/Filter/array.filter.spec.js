import filter from './array.filter'

test('should Filter array of single values', () => {
  const arrayOfSingleValues = ['1', '2', '3']
  const result = filter({
    array: arrayOfSingleValues,
    condition: '===',
    value: '3',
  })
  expect(result).toContain('3')
})

test('should Filter array of objects', () => {
  const arrayOfObjects = [
    { id: 1, name: 'jeremy' },
    { id: 2, name: 'hayle' },
    { id: 3, name: 'jen' },
  ]
  const result = filter({
    array: arrayOfObjects,
    post: 'id',
    condition: '===',
    value: 2,
  })
  expect(result).toContainEqual(
    expect.objectContaining({ id: 2, name: 'hayle' }),
  )
})
