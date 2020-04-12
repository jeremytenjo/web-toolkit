module.exports = (name) => {
  const split = name.split('/')
  const parent = split.slice(0, 1)
  const children = split.slice(1).join('/')
  const title = `${parent}|${children}`

  return title
}
