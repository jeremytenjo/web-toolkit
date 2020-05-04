const filehound = require('filehound')
const fs = require('fs-extra')

const { wappRootDir, projectDir, wappDir } = require('../../utils/getModulePath')
const toCSSVariable = require('../../utils/converters/cssVariables')
const createFile = require('../../utils/createFile')
const addToIndex = require('../../utils/addToIndex')
const { logSuccessMessage } = require('../../utils/logMessage')

const genDoc = require('./story')

module.exports = async ({ wappManifest }) => {
  const { theme: { vendors } = {} } = wappManifest
  const successMessage = `Theme generated `
  let srcDefaultMerge = {}
  const outputFile = wappDir('theme.js')
  const defaultDir = wappRootDir('defaults/theme')
  const srcThemeDir = projectDir('src/theme')
  const colors = require(projectDir('src/theme/colors'))
  let defaultStringsObject = {}
  const totalObjectSrc = {}
  let directoriesSrc = []
  let cssString = `module.exports = ${'`'}
  <style type="text/css">
  `
  // reset file
  createFile(outputFile, '')
  // copy default files to src without overwriting
  await fs.copySync(defaultDir, srcThemeDir, { overwrite: false })

  directoriesSrc = await filehound
    .create()
    .path(srcThemeDir)
    .ext('js')
    .find()

  directoriesSrc.map((path) => {
    const itemContent = require(path)
    const itemType = typeof itemContent
    const itemName = path
      .split('\\')
      .pop()
      .split('.')
      .shift()

    if (itemType === 'object') {
      Object.assign(totalObjectSrc, { [itemName]: itemContent })
    }
    if (itemType === 'string') {
      defaultStringsObject[itemName] = itemContent
    }
  })

  // merge default and src and defaultStringsObject
  srcDefaultMerge = {
    ...totalObjectSrc,
    ...defaultStringsObject,
  }

  Object.entries(srcDefaultMerge).forEach(([key, value]) => {
    const itemType = typeof value

    if (key === '_theme') return null
    else if (key === 'colors') cssString += toCSSVariable('color', value)
    else if (key === 'typography') cssString += handleTypography(value)
    else if (key === 'mediaQueries') handleMediaQueries(value)
    else if (itemType === 'string') {
      cssString += `\n/* ${key} */
      ${value}`
    } else if (itemType === 'object') cssString += toCSSVariable(key, value)
  })

  // end
  cssString += `\n 
  </style>${'`'}`

  // write to  file
  await createFile(outputFile, cssString)
  logSuccessMessage(successMessage)

  // handle vendors
  if (vendors) {
    const addVendor = require(`./vendors/${vendors}`)
    addVendor({ colors })
  }

  // write storybook file
  genDoc(cssString)
}

const handleTypography = (object) => {
  let string = ''

  // Variables
  string += toCSSVariable('fonts', object.variables)

  // Types
  string += object.types

  // Resets
  string += object.resets

  return string
}

const handleMediaQueries = async (value) => {
  const valueStringify = JSON.stringify(value)
  const fileName = wappDir('styledComponents.js')
  const content = `
  import React from 'react'
  import { ThemeProvider } from 'styled-components'

  export default ({children}) => (
    <ThemeProvider theme={${valueStringify}}>
      {children}
     </ThemeProvider>
  )`

  await createFile(fileName, content)
  addToIndex({ name: 'StyledComponents' })
}
