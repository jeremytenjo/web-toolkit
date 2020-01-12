module.exports = (name, rootFolder = 'componentgen') => {
  const split = __dirname.split('\\')
  const index = split.findIndex((i) => i === rootFolder)
  split.splice(0, index)
  const parent = split.splice(0, 2).join('|')
  const children = split.join('/')
  const title = `${parent}/${children}`

  return title
}
