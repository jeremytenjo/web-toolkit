import { configure, addDecorator } from '@storybook/react'

// Addons
import { withOptions } from '@storybook/addon-options'
import { withPrettierSource } from 'storybook-addon-prettier-source'

// Addons
addDecorator(
  withOptions({
    name: 'Web Features',
    addonPanelInRight: true,
  }),
)

addDecorator((story, context) => withPrettierSource()(story)(context))

const req = require.context('../features', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
