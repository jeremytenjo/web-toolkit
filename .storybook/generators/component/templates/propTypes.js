const createFile = require('../utils/createFile')

module.exports = ({ name, nameUppercase, outputPathBase }) => {
  const outputPath = outputPathBase('propTypes.js')
  const content = `
  import { string } from 'prop-types'

  export const defaultProps = {
    type: 'button',
  }
  
  export const propTypes = {
    type: string,
  }  
`

  createFile(outputPath, content)
}
