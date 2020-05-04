const addToIndex = require('../../../utils/addToIndex')
const createFile = require('../../../utils/createFile')
const { wappDir } = require('../../../utils/getModulePath')
const { logSuccessMessage } = require('../../../utils/logMessage')

module.exports = () => {
  const successMessage = `Material Ui generated`
  const outputFile = wappDir('materialui.js')
  const string = `import React from 'react'
  import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

  import { primary, secondary } from '../theme/colors'

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
    typography: {
      useNextVariants: true,
    },
  })
  
  export default ({ children }) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  `

  addToIndex({ name: 'materialui' })

  createFile(outputFile, string)
  logSuccessMessage(successMessage)
}
