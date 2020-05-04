const shell = require('shelljs')

module.exports = async () => {
  shell.exec('npx webpack-scripts analyze')
}
