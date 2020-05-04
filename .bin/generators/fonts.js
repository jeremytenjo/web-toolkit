const glob = require('glob')
const { existsSync } = require('fs-extra')

const createFile = require('../utils/createFile')
const { wappDir, projectDir, buildDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')
const capitalize = require('../utils/capitalize')
const removeFromArray = require('../utils/removeFromArray')

const { addExtraBuildFile } = require('./extraBuildFiles')

module.exports = ({ env }) =>
  new Promise((resolve) => {
    const hasFonts = existsSync(projectDir('src/fonts'))
    if (!hasFonts) resolve()

    glob(projectDir('src/fonts/**/*'), async (err, files = []) => {
      const successMessage = `Fonts generated`
      const outputFile = wappDir('fonts.js')
      const srcFontsDir = env === 'prod' ? './fonts/' : './src/fonts/'
      const source = projectDir('src/fonts')
      const destination = buildDir('fonts')
      const extraBuildFiles = {
        from: source,
        to: destination,
      }
      let fontFaceString = 'module.exports = `<style>'

      files.map((file) => {
        const path = removeFromArray(file, 'fonts')
        const fileName = file.split('/').pop()
        const fontName = fileName.split('-')[0]
        const fontNameCapitalized = capitalize(fontName)
        const fontWeight = fileName.split('-')[1].split('.')[0]
        const fontFormat = fileName.split('.')[1]

        fontFaceString += `
      @font-face {
        font-family: '${fontNameCapitalized}';
        font-display: swap;
        font-style: normal;
        font-weight: ${fontWeight};
        src: url('${srcFontsDir}${path}') format('${fontFormat}');
      }   
      `
      })
      fontFaceString += '</style>`'

      addExtraBuildFile(extraBuildFiles)
      createFile(outputFile, fontFaceString)
      logSuccessMessage(successMessage)
      resolve()
    })
  })
