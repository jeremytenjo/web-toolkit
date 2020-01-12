import { configure, addParameters, addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import theme from './Theme/storybook.theme'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import './firebase/firebase.index'
import ViewportOptions from './addons/viewport/addon.viewport'

// Theme
addParameters({
  options: {
    name: 'Web Toolkit',
    theme: theme(),
    panelPosition: 'right',
    showPanel: false,
  },
  viewport: ViewportOptions,
})

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

addDecorator(StoryRouter())

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
