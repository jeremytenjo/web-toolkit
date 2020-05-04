const concurrently = require('concurrently')

const { wappRootDir } = require('../../utils/getModulePath')
const createWappBuild = require('../createWappBuild')

module.exports = async (additionalScripts) => {
  const webpackManifest = wappRootDir('.webpack.manifest.js')
  const env = 'dev'
  const scripts = [`npx webpack-scripts start ${webpackManifest}`]

  if (additionalScripts) scripts.push(additionalScripts)

  await createWappBuild(env)
  await concurrently(scripts)
}
