const { logSuccessMessage } = require('./logMessage')
const { projectDir } = require('./getModulePath')
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
const addNetworkFiles = require('./network/addIsOnlineState')

module.exports = async (env, wappManifest) => {
  const payload = { wappManifest, env }
  const { isTest } = global

  initGenerateAppIndex()
  initExtraBuildFiles()
  initBodyTag()
  await addNetworkFiles()
  await generateSplash(payload)
  await generateAnimateOnSiteLoad(payload)
  await generateBabel(isTest)
  await generateFirebase(payload)
  await generateTheme(payload)
  await generateRouter(payload)
  await generateStoreAndListen(payload)
  // await generateFonts(payload)
  // await generateAddExtraBuildFiles(payload)
  // await generateAddBodyTag(payload)
  // await offlineSupport(payload)
  // await generateAppIndex(payload)

  logSuccessMessage('Wapp Build Created', 'star2')
}
