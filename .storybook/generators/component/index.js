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

const path = process.argv[2]
let name = path.split('/')
name = name[name.length - 1]

const successMessage = `${emoji.get('white_check_mark')}  ${chalk.yellow(path)} created!`
const { isValid, errorMessage } = validate(path)

if (!isValid) return console.log(errorMessage)
else {
  const nameUppercase = capitalize(name)
  const outputPathBase = getOutputPathBase(path)
  const payload = { path, name, nameUppercase, outputPathBase }

  createIndex(payload)
  createPropTypes(payload)
  createStories(payload)
  createStyles(payload)
  createTests(payload)

  return console.log(successMessage)
}
