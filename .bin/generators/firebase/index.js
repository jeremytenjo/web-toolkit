const addToIndex = require('../../utils/addToIndex')
const createFile = require('../../utils/createFile')
const { wappDir } = require('../../utils/getModulePath')
const { logSuccessMessage } = require('../../utils/logMessage')

const analyticsReqs = require('./analytics/requirements')

module.exports = async ({ wappManifest: { firebase } }) => {
  if (firebase) {
    const { pushNotifications, authentication, database, analytics = true, config, perfomanceMonitoring } = firebase
    const successMessage = `Firebase generated`
    const appImport = `import firebase from 'firebase/app'`
    const authImport = authentication ? `import 'firebase/auth'` : ''
    const analyticsImport = analytics && analyticsReqs(config) ? `import 'firebase/analytics'` : ''
    const firestoreImport = database === 'firestore' ? `import 'firebase/firestore'` : ''
    const perfomanceMonitoringImport = perfomanceMonitoring ? `import 'firebase/performance'` : ''
    const perfomanceMonitoringInit = perfomanceMonitoring ? 'window.firebasePerformance = firebase.performance()':''

    const firebaseImports = `
  ${appImport}
  ${authImport}
  ${analyticsImport}
  ${firestoreImport}
  ${perfomanceMonitoringImport}
  `
    const configString = JSON.stringify(config)
    const outputFile = wappDir('firebase/index.js')
    const fileContent = `
${firebaseImports}
    
firebase.initializeApp(${configString})
    
${perfomanceMonitoringInit}
    `

       if (pushNotifications)
        await require('./notifications/pushNotifications')({
          config,
          serviceWorkerReceiverFunction: pushNotifications,
        })

        if (authentication) await require('../../utils/authentication/addState')()

      await createFile(outputFile, fileContent)
      addToIndex({ name: 'Firebase/index', onlyImport: true })
      logSuccessMessage(successMessage)
   
  } else return null
}
