const fs = require('fs-extra')
const emoji = require('node-emoji')
const chalk = require('chalk')

module.exports = (name) => {
  let result = { isValid: true }

  // no name
  if (!name) {
    result.isValid = false
    result.errorMessage = `${emoji.get(
      'x',
    )}  missing second name parameter eg: node generators/component/index.js ${chalk.yellow(
      '<name>',
    )}`
  }

  // component already exists
  if (fs.existsSync(name)) {
    result.isValid = false
    result.errorMessage = `${emoji.get('x')}  component ${chalk.yellow(
      name,
    )} already exists`
  }

  return result
}
