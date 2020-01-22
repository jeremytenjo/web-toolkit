import { configure, addParameters, addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import theme from './theme/storybook.theme'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import './firebase/firebase.index'
import ViewportOptions from './addons/viewport/addon.viewport'
import { withResponsiveViews } from 'storybook-addon-responsive-views'

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

addDecorator(withResponsiveViews)

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
