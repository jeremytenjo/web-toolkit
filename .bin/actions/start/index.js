const concurrently = require('concurrently')

const webpackManifest = require('../../webpack/manifest')
const createWappBuild = require('../createWappBuild')
const webpack = require('../../../webpack')

module.exports = async () => {
  const env = 'dev'

  await createWappBuild(env)
  webpack('start', webpackManifest)
  // await concurrently(scripts)
}
