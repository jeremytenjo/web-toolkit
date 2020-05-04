import React from 'react'
import { ThemeProvider } from 'styled-components'

export default ({ children }) => (
  <ThemeProvider
    theme={{ mediaQueries: { minWidth: [400, 700, 1200], minHeight: [400, 700] } }}
  >
    {children}
  </ThemeProvider>
)
