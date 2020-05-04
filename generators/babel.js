const createFile = require('../utils/createFile')
const { projectDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async (isTest) => {
  const importPath = isTest
    ? '../.babelrc.js'
    : './node_modules/@tenjojeremy/wapp/.babelrc.js'
  const successMessage = `Babel generated `
  const outputFile = projectDir('.babelrc.js')

  let cssString = `module.exports = {
    extends: '${importPath}'
}`

  // write to  file
  createFile(outputFile, cssString)
  logSuccessMessage(successMessage)
}
