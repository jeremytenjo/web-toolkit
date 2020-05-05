/* eslint-disable no-useless-catch */
const filehound = require('filehound')
const { watch } = require('chokidar')

const { projectDir, wappDir } = require('../utils/getModulePath')
const addToIndex = require('../utils/addToIndex')
const createFile = require('../utils/createFile')
const { logSuccessMessage } = require('../utils/logMessage')

exports.generateStoreAndListen = async ({ wappManifest }) => {
  const srcDirPath = projectDir('src')
  const glob = `${srcDirPath}/**/*.state.js`
  const options = {
    ignoreInitial: true,
  }
  const watcher = watch(glob, options)

  watcher.on('add', async () => await generateStore(wappManifest, true))
  watcher.on('unlink', async () => await generateStore(wappManifest, true))

  await generateStore(wappManifest)
}

const generateStore = async (wappManifest, hydrate) => {
  const successMessage = `Store ${hydrate ? 'hydrated' : 'generated'}`
  let masterString = ''
  let stringImports = ''
  let stringProviders = ''
  let files = []
  let orderedFiles = null
  const srcPath = projectDir('/src')
  const outputFile = wappDir('store.js')

  try {
    files = await filehound
      .create()
      .path(srcPath)
      .glob(['*state*'])
      .find()

    orderedFiles = handleAuthProviderArrayLoaction({ files })

    orderedFiles.map(async (path, i) => {
      const index = i + 1
      const pathSplit = path.split('/')
      const fileNameFull = pathSplit[pathSplit.length - 1]
      const fileName = pathSplit.pop().split('.')[0]
      const fileNameUppercase = fileName[0].toUpperCase() + fileName.slice(1)
      const providerName = `${fileNameUppercase}Provider`
      const srcIndex = pathSplit.findIndex((item) => item === 'src') + 1
      const statePath = `../${pathSplit.slice(srcIndex).join('/')}/${fileNameFull}`
      const props = getProviderProps({ wappManifest, fileName })

      stringImports += `\nimport { ${providerName} } from '${statePath}'`

      stringProviders += `<${providerName} key={${index}} ${props} />,`
    })

    masterString = `import React, { cloneElement } from 'react'
  ${stringImports}
 
 const providers = [
    ${stringProviders}
 ]
 
 const ProviderComposer = ({ contexts, children }) =>
   contexts.reduceRight(
     (kids, parent) =>
       cloneElement(parent, {
         children: kids,
       }),
     children,
   )
 
 const ContextProvider = ({ children }) => (
   <ProviderComposer contexts={providers}>{children}</ProviderComposer>
 )
 
 export default ContextProvider`

    await createFile(outputFile, masterString)
    addToIndex({ name: 'Store', position: 1 })
    logSuccessMessage(successMessage)
  } catch (err) {
    throw err
  }
}

const getProviderProps = ({ wappManifest, fileName }) => {
  let retString = ''

  if (fileName === 'auth' && wappManifest.authentication) {
    retString = `service='${wappManifest.authentication}'`
  }

  return retString
}

const handleAuthProviderArrayLoaction = ({ files }) => {
  let authFileName = false
  files.map((file) => {
    const isAuth = file
      .split('\\')
      .pop()
      .includes('auth.state.js')
    if (isAuth) authFileName = file
    else return file
  })

  if (authFileName) {
    let authFileIndex = files.findIndex((file) => file === authFileName)
    files.splice(authFileIndex, 1)
    files.unshift(authFileName)
  }

  return files
}
