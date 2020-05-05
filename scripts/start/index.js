const concurrently = require('concurrently')

const createWappBuild = require('../../utils/createWappBuild')
const webpack = require('../../webpack')

module.exports = async () => {
  const { isTest } = global
  const env = 'dev'
  const wappManifestPath = isTest
    ? '../../testApp/.wapp.manifest'
    : projectDir('.wapp.manifest.js')
  const wappManifest = require(wappManifestPath)

  await createWappBuild(env, wappManifest)
  const webpackManifest = require('../../utils/getWebpackManifest')(wappManifest)
  webpack('start', webpackManifest)
  // await concurrently(scripts)
}
