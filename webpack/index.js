const shell = require('shelljs')

const { projectDir, wappRootDir } = require('../utils/getModulePath')

module.exports = (action) => {
  const { isTest } = global
  const testString = isTest ? 'test' : ''
  const configFilePath = wappRootDir('webpack/config.js')
  const wappManifestPath = wappRootDir('final.wapp.manifest.js')

  const startCommand = `webpack-dev-server ${testString} --config ${configFilePath} --mode development --color --hot --inline --wappManifestPath ${wappManifestPath}`
  const buildCommand = `webpack --config ${configFilePath} -p --wappManifestPath ${wappManifestPath} --color`
  const analyzeCommand = `webpack-bundle-analyzer --port 4200 ${projectDir}/build/stats.json`

  switch (action) {
    case 'start':
      shell.exec(startCommand)
      break

    case 'build':
      shell.exec(buildCommand)
      break

    case 'analyze':
      shell.exec(analyzeCommand)
      break

    default:
      shell.exec(startCommand)
      break
  }
}
