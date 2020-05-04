/* eslint-disable no-useless-escape */
const { wappDir } = require('../../utils/getModulePath')
const createFile = require('../../utils/createFile')

module.exports = async ({
  theme = { base: 'dark' },
  srcPath = '../../',
  filesToWatch = '/.stories.(js|mdx)$/',
  ...restConfig
}) => {
  const stringifyTheme = JSON.stringify(theme)
  const options = {
    ...restConfig,
  }
  let stringifyOptions = JSON.stringify(options)
  stringifyOptions = stringifyOptions.substring(0, stringifyOptions.length - 1)
  stringifyOptions += `,theme: create(${stringifyTheme}) }`
  const outputFile = wappDir('storybook/config.js')
  const outputPresetsFile = wappDir('storybook/presets.js')
  const presetsContent = `module.exports = ['@storybook/addon-docs/react/preset']`
  const fileContent = `
  import { configure, addParameters } from '@storybook/react'
  import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
  import { create } from '@storybook/theming'

  addParameters({
    options: ${stringifyOptions}
  })

  addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  })

  configure(require.context('${srcPath}', true, ${filesToWatch}), module)
  `

    await createFile(outputFile, fileContent)
    await createFile(outputPresetsFile, presetsContent)

}
