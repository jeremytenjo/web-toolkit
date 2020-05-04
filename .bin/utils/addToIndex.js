module.exports = (module) => {
  const { indexModules } = global
  indexModules.push(module)
  global.indexModules = indexModules
}
