const fs = require('fs-extra')
const emoji = require('node-emoji')
const chalk = require('chalk')

module.exports = (path) => {
  let result = { isValid: true }
  let fullpath = `src/${path}`

  // no path
  if (!path) {
    result.isValid = false
    result.errorMessage = `${emoji.get(
      'x',
    )}  missing second path parameter eg: node generators/component/index.js ${chalk.yellow(
      '<path>',
    )}`
  }

  // component already exists
  if (fs.existsSync(fullpath)) {
    result.isValid = false
    result.errorMessage = `${emoji.get('x')}  component ${chalk.yellow(
      path,
    )} already exists`
  }

  return result
}
