import { create } from '@storybook/theming'
import { colors } from './Colors/colors.index.js'

import './Typography/Fonts/fonts.css'

// Add theme to <head>
import { headCss } from './Head/theme.head'
document.write(headCss)

export default () => {
  // Project Theme
  const { primary } = colors

  // Return storybook theme
  return create({
    base: 'light',
    brandUrl: 'https://github.com/tenjojeremy/Web-Toolkit',
    brandImage:
      'https://firebasestorage.googleapis.com/v0/b/tenjo-web-toolkit.appspot.com/o/logo.svg?alt=media&token=7c793c04-67c2-4eba-bb5a-3857c2b2aa75',
    colorSecondary: primary,
  })
}
