const shell = require('shelljs')
const webpack = require('webpack')

const { projectDir, wappRootDir } = require('../utils/getModulePath')

module.exports = (action, webpackManifest) => {
  const webpackConfig = require(wappRootDir('webpack/config.js'))('dev', webpackManifest)

  console.log({ webpackConfig })
  const compiler = webpack('dev', webpackConfig)

  const watching = compiler.watch(
    {
      // Example watchOptions
      aggregateTimeout: 300,
      poll: undefined,
    },
    (err, stats) => {
      // Stats Object
      // Print watch/build result here...
      console.log(stats)
    },
  )

  //   const startCommand = `webpack-dev-server --config ${configFilePath} --mode development --color --hot --inline --manifestPath ${manifestPath}`
  //   const buildCommand = `webpack --config ${configFilePath} -p --manifestPath ${manifestPath} --color`
  //   const analyzeCommand = `webpack-bundle-analyzer --port 4200 ${projectDir}/build/stats.json`

  //   switch (action) {
  //     case 'start':
  //       shell.exec(startCommand)
  //       break

  //     case 'build':
  //       shell.exec(buildCommand)
  //       break

  //     case 'analyze':
  //       shell.exec(analyzeCommand)
  //       break

  //     default:
  //       shell.exec(startCommand)
  //       break
  //   }
}
