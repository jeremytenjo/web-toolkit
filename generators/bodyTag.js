const { wappDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')
const createFile = require('../utils/createFile')

exports.initBodyTag = () => (global.addToBodyTag = '')

// expects string
exports.addToBodyTag = (string) => {
  let copy = global.addToBodyTag
  copy += string
  global.addToBodyTag = copy
}

exports.generateAddBodyTag = async () => {
  const addToBodyTag = global.addToBodyTag
  const successMessage = 'Added body string'
  const outputDir = wappDir('bodyTag.js')
  const content = `module.exports = ${'`'}${addToBodyTag}${'`'}`

  await createFile(outputDir, content)
  logSuccessMessage(successMessage)
}
