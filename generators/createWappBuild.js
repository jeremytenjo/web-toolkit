const { logSuccessMessage } = require('../utils/logMessage')
const { projectDir } = require('../utils/getModulePath')
const generateAnimateOnSiteLoad = require('./animateOnSiteLoad')
const generateSplash = require('./splash')
const generateBabel = require('./babel')
const { initGenerateAppIndex, generateAppIndex } = require('./appIndex')
const generateFirebase = require('./firebase')
const generateTheme = require('./theme/theme')
const generateRouter = require('./router')
const { generateStoreAndListen } = require('./store')
const generateFonts = require('./fonts')
const { initExtraBuildFiles, generateAddExtraBuildFiles } = require('./extraBuildFiles')
const { initBodyTag, generateAddBodyTag } = require('./bodyTag')
const offlineSupport = require('./offlineSupport')
const addNetworkFiles = require('../utils/network/addIsOnlineState')

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
  await generateFonts(payload)
  await generateAddExtraBuildFiles(payload)
  await generateAddBodyTag(payload)
  await offlineSupport(payload)
  await generateAppIndex(payload)

  logSuccessMessage('Wapp Build Created', 'star2', 'star2')
}
