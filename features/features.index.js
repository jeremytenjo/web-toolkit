var allModules = {}

function importAll(r) {
  r.keys().forEach((key) => (allModules[key] = r(key)))
}

importAll(require.context('./', true, /\.index\.js$/))

module.exports = allModules
