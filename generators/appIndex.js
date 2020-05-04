const createFile = require('../utils/createFile')
const { projectDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')

exports.initGenerateAppIndex = () => (global.indexModules = [])

exports.generateAppIndex = async () => {
  const outputFile = projectDir('src/_index.js')

  const { indexModules } = global
  indexModules.sort((a, b) => {
    const aPosition = a.position || 999
    const bPosition = b.position || 999
    return aPosition - bPosition
  })
  const successMessage = `Index generated`
  let masterString = ''
  let onlyImportsString = []
  let importsString = []
  let openingTags = []
  let closingTags = []

  indexModules.map(({ name, onlyImport, path }) => {
    const nameLower = name.charAt(0).toLowerCase() + name.slice(1)
    const _path = path || `./.wapp/_${nameLower}`
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1)
    if (onlyImport) {
      onlyImportsString.push(`import '${_path}'`)
    } else {
      importsString.push(`import ${nameUpper} from '${_path}'`)
      openingTags.push(`<${nameUpper}>`)
      closingTags.unshift(`</${nameUpper}>`)
    }
  })
  onlyImportsString = onlyImportsString.join('\n')
  importsString = importsString.join('\n')
  openingTags = openingTags.join('\n')
  closingTags = closingTags.join('\n')

  masterString = `import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/utils/addToHomeScreen'

import animateOnSiteLoad from './.wapp/_animateOnSiteLoad/animateOnSiteLoad'
import hideSplashScreen from './.wapp/_splashScreen/hideSplashScreen'
${onlyImportsString}
import Router from './pages/router'
${importsString}

const App = hot(() => (
  ${openingTags}
    <Router />
  ${closingTags}
))

// Load asynchronous
animateOnSiteLoad()
hideSplashScreen()
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
`
  createFile(outputFile, masterString)

  logSuccessMessage(successMessage)
}
