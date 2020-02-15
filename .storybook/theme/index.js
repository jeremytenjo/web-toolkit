import { create } from '@storybook/theming'
import colors from './colors'

import './typography/fonts/index.css'

// Add theme to <head>
import headCss from './head'
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
