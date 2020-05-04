module.exports = (array, word, split = '/') => {
  const index = array.split('/').findIndex((i) => i === word)
  return array
    .split(split)
    .slice(index + 1)
    .join('')
}
