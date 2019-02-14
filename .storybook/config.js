import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'

// Addons
addDecorator(
  withOptions({
    name: 'Web Features',
    addonPanelInRight: true
  })
)

const req = require.context('../features', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
