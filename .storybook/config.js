import { configure, addParameters } from '@storybook/react'
import theme from './storybook.theme'

// Theme
addParameters({
  options: {
    name: 'Web Features',
    theme,
    panelPosition: 'right',
  },
})

// Load Stories
const req = require.context('../features', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
