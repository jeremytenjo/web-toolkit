import { configure, addParameters } from '@storybook/react'
import theme from './storybook.theme'

// Theme
addParameters({
  options: {
    name: 'Web Toolkit',
    theme,
    panelPosition: 'right',
    showPanel: false,
  },
})

// Load Stories
const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
