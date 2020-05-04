const { wappDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')
const createFile = require('../utils/createFile')

exports.initExtraBuildFiles = () => (global.addExtraBuildFiles = [])

// expects { from: 'source', to: 'dest' }
exports.addExtraBuildFile = (file) => {
  const copy = global.addExtraBuildFiles.slice()
  copy.push(file)
  global.addExtraBuildFiles = copy
}

exports.generateAddExtraBuildFiles = async () => {
  const addExtraBuildFiles = global.addExtraBuildFiles
  const addExtraBuildFilesString = JSON.stringify(addExtraBuildFiles)
  const successMessage = 'Added extra build files generated'
  const outputDir = wappDir('extraBuildFiles.js')
  const content = `module.exports = ${addExtraBuildFilesString}`

  await createFile(outputDir, content)
  logSuccessMessage(successMessage)
}
