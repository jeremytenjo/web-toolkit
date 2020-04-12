const fs = require('fs-extra')
const emoji = require('node-emoji')
const chalk = require('chalk')

module.exports = (path) => {
  let error = false
  let fullpath = `src/${path}`

  // no path
  if (!path) {
    error = `${emoji.get(
      'x',
    )}  missing second path parameter eg: node generators/component/index.js ${chalk.yellow(
      '<path>',
    )}`
  }

  // component already exists
  if (fs.existsSync(fullpath)) {
    error = `${emoji.get('x')}  component ${chalk.yellow(path)} already exists`
  }

  return error
}
