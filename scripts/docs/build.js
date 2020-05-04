const shell = require('shelljs')

const { wappRootDir } = require('../../utils/getModulePath')

module.exports = async () => {
  const wappWebpackManifest = wappRootDir('.webpack.manifest.js')

  shell.exec(`npx build-storybook`)
}
