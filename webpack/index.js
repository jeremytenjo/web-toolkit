const shell = require('shelljs')

module.exports = (action, manifestPath) => {
  const projectDir = process.cwd()
  const webpackDir = __dirname
  const configFilePath = `${webpackDir}/config.js`

  const startCommand = `webpack-dev-server --config ${configFilePath} --mode development --color --hot --inline --manifestPath ${manifestPath}`
  const buildCommand = `webpack --config ${configFilePath} -p --manifestPath ${manifestPath} --color`
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
