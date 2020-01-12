import { create } from '@storybook/theming'
import colors from './colors/colors.index.js'

import './typography/fonts/fonts.css'

// Add theme to <head>
import headCss from './head/theme.head'
document.write(headCss)

export default () => {
  // Project Theme
  const { primary } = colors

  // Return storybook theme
  return create({
    base: 'dark',
    brandUrl: 'https://github.com/tenjojeremy/Web-Toolkit',
    colorSecondary: primary,
  })
}
