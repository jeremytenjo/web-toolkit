import { configure, addParameters } from '@storybook/react'
import theme from './Theme/storybook.theme'
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

window.historyRouter = {
  push: () => null,
  location: {
    pathanme: '',
  },
}

configure(require.context('../src', true, /\.stories\.js$/), module)
