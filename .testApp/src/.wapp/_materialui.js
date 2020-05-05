import React from 'react'
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

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
)
