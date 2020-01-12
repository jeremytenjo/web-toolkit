const createFile = require('../utils/createFile')

module.exports = ({ name, nameUppercase, outputPathBase }) => {
  const outputPath = outputPathBase('index.js')
  const content = `
import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'

const ${nameUppercase} = () => {
  return (
    <>
     Hello
    </>
  )
}

${nameUppercase}.defaultProps = defaultProps
${nameUppercase}.propTypes = propTypes

export default memo(${nameUppercase})
`

  createFile(outputPath, content)
}
