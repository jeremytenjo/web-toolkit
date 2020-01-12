const createFile = require('../utils/createFile')

module.exports = ({ name, nameUppercase, outputPathBase }) => {
  const outputPath = outputPathBase('styles/1/index.js')
  const content = `
import React, { memo } from 'react'

const Style1 = () => {
  return (
    <>
     Style1
    </>
  )
}

export default memo(Style1)
`

  createFile(outputPath, content)
}
