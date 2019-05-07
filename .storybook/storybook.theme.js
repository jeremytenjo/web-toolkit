import { create } from '@storybook/theming'
import { colors } from './Theme/Colors/colors.index.js'

import './Theme/Typography/Fonts/fonts.css'

// Add theme to <head>
import { headCss } from './Theme/Head/theme.head'
document.write(headCss)

export default () => {
  // Project Theme
  const { primary: colorSecondary } = colors

  // Return storybook theme
  return create({
    base: 'light',
    colorSecondary,
  })
}
