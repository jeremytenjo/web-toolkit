module.exports = (env, argv) => {
  const { mode, wappManifestPath } = argv

  const wappManifest = require(wappManifestPath)
  const entry = require('./options/entry')(wappManifest)
  const output = require('./options/output')(wappManifest)
  const devtool = require('./options/devTool')(wappManifest)
  const devServer = require('./options/devServer')(wappManifest)
  const performance = require('./options/performance')(wappManifest)
  const optimization = require('./options/optimization')(wappManifest)
  const module = require('./options/module')
  const getPlugins = require('./options/plugins')

  return {
    entry,
    output,
    devtool,
    devServer,
    performance,
    optimization,
    module,
    plugins: getPlugins(wappManifest, mode),
  }
}
