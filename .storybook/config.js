import { configure, addParameters } from '@storybook/react'
import theme from './Theme/storybook.theme'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import './Firebase/firebase.index'
import ViewportOptions from './Addons/Viewport/addon.viewport'

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

window.historyRouter = {
  push: () => null,
  location: {
    pathanme: '',
  },
}

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
