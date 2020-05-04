import { configure, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { create } from '@storybook/theming'

addParameters({
  options: {
    name: 'Wapp',
    restConfig: { panelPosition: 'right', theme: { base: 'dark' }, showPanel: false },
    theme: create({ base: 'dark' }),
  },
})

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

configure(require.context('../../', true, /.stories.(js|mdx)$/), module)
