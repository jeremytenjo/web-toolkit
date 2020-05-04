const fs = require('fs-extra')
const filehound = require('filehound')

const { wappRootDir, projectDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async () => {
  const successMessage = `Router generated`
  const defaultRouter = wappRootDir('/router/router.js')
  const outputFile = projectDir('src/pages/router.js')
  const pagesSrc = projectDir('src/pages')
  const files = await filehound
    .create()
    .path(pagesSrc)
    .find()
  const splitFiles = files.map((path) =>
    path
      .split('\\')
      .pop()
      .split('.')
      .shift(),
  )
  const hasRouter = splitFiles.includes('router')

  if (!hasRouter) {
    await fs.copy(defaultRouter, outputFile)
    logSuccessMessage(successMessage)
  }
}
