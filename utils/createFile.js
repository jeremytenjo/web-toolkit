const fs = require('fs-extra')
const prettier = require('prettier')

const prettierConfig = require('../.prettierrc.js')

module.exports = (outputFile, cssString, nojs) => {
  const formateed = nojs
    ? cssString
    : prettier.format(cssString, { ...prettierConfig, parser: 'babel' })
  fs.outputFileSync(outputFile, formateed, (err) => {
    if (err) throw err
  })
}
