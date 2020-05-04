const createFile = require('../utils/createFile')
const { wappDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')
const addToIndex = require('../utils/addToIndex')

module.exports = async ({ wappManifest: { offlineSupport = true } }) => {
  if (!offlineSupport) return

  const successMessage = `Offline Service Worker generated`
  const registerSWDir = wappDir('offlineSupport.js')
  const registerSWContent = `
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', function() {
     navigator.serviceWorker.register('/service-worker.js')
    })
  }
`
  await createFile(registerSWDir, registerSWContent)
  addToIndex({ name: 'offlineSupport', onlyImport: true })
  logSuccessMessage(successMessage)
}
