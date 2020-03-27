export default (id, config = { behavior: 'smooth' }) => {
  if (!id) return throw Error('add a selector as the first parameter')

  const element = document.querySelector(id)
  element.scrollIntoView(config)
}
