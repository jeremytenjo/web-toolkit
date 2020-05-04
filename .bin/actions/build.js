const concurrently = require('concurrently')

const { wappRootDir } = require('../utils/getModulePath')

const createWappBuild = require('./createWappBuild')

module.exports = async () => {
  const wappWebpackManifest = wappRootDir('.webpack.manifest.js')
  const env = 'prod'
  const scripts = [`npx webpack-scripts build ${wappWebpackManifest}`]

  await createWappBuild(env)
  await concurrently(scripts)
  process.exit()
}
