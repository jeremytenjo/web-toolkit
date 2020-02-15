import { configure, addParameters, addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

import theme from './theme'
import './firebase'
import ViewportOptions from './addons/viewport'

addParameters({
  options: {
    name: 'Web Toolkit',
    theme: theme(),
    panelPosition: 'right',
    showPanel: false,
  },
  viewport: ViewportOptions,
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

addDecorator(StoryRouter())

configure(require.context('../src', true, /sb.stories\.(js|mdx)$/), module)
