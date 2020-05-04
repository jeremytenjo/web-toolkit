const { logSuccessMessage } = require('../utils/logMessage')
const { projectDir } = require('../utils/getModulePath')
const generateAnimateOnSiteLoad = require('../generators/animateOnSiteLoad')
const generateSplash = require('../generators/splash')
const generateBabel = require('../generators/babel')
const { initGenerateAppIndex, generateAppIndex } = require('../generators/appIndex')
const generateFirebase = require('../generators/firebase')
const generateTheme = require('../generators/theme/theme')
const generateRouter = require('../generators/router')
const { generateStoreAndListen } = require('../generators/store')
const generateFonts = require('../generators/fonts')
const {
  initExtraBuildFiles,
  generateAddExtraBuildFiles,
} = require('../generators/extraBuildFiles')
const { initBodyTag, generateAddBodyTag } = require('../generators/bodyTag')
const offlineSupport = require('../generators/offlineSupport')
const addNetworkFiles = require('../utils/network/addIsOnlineState')

module.exports = async (env) => {
  const wappManifest = require(projectDir('.wapp.manifest.js'))
  const payload = { wappManifest, env }

  initGenerateAppIndex()
  initExtraBuildFiles()
  initBodyTag()
  await addNetworkFiles()
  await generateSplash(payload)
  await generateAnimateOnSiteLoad(payload)
  await generateBabel(payload)
  await generateFirebase(payload)
  await generateTheme(payload)
  await generateRouter(payload)
  await generateStoreAndListen(payload)
  await generateFonts(payload)
  await generateAddExtraBuildFiles(payload)
  await generateAddBodyTag(payload)
  await offlineSupport(payload)
  await generateAppIndex(payload)

  logSuccessMessage('Wapp Build Created', 'star2')
}
