const emoji = require('node-emoji')
const chalk = require('chalk')

const capitalize = require('./utils/capitalize')
const getOutputPathBase = require('./utils/outputPathBase')
const validate = require('./validation')

const createIndex = require('./templates/index.js')
const createPropTypes = require('./templates/propTypes.js')
const createStories = require('./templates/stories/index.js')
const createStyles = require('./templates/styles.js')
const createTests = require('./templates/tests.js')

const name = process.argv[2]

const successMessage = `${emoji.get('white_check_mark')}  ${chalk.yellow(
  name
)} created!`
const { isValid, errorMessage } = validate(name)

if (!isValid) return console.log(errorMessage)
else {
  const nameUppercase = capitalize(name)
  const outputPathBase = getOutputPathBase(name)
  const payload = { name, nameUppercase, outputPathBase }

  createIndex(payload)
  createPropTypes(payload)
  createStories(payload)
  createStyles(payload)
  createTests(payload)

  return console.log(successMessage)
}
