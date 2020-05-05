const firebaseConfig = require(`./src/firebase/firebase.config`)
const serviceWorkerReceiverFunction = require(`./src/firebase/serviceWorkerReceiverFunction`)

module.exports = {
  projectInfo: {
    name: 'Wapp',
    shortName: 'Wapp',
    description: 'Wapp',
    startUrl: '/',
    colors: { primary: '#24c3a9' },
    logo: {
      path: '.testApp/src/images/logo',
    },
  },
  animateOnSiteLoad: 500,
  offlineSupport: true,
  theme: { vendors: 'materialui' },
  firebase: {
    config: firebaseConfig,
    pushNotifications: serviceWorkerReceiverFunction,
    database: 'firestore',
    authentication: true,
    analytics: true,
    perfomanceMonitoring: true,
  },
  docs: {
    config: {
      port: 6006,
      panelPosition: 'right',
      theme: { base: 'dark' },
      showPanel: false,
    },
  },
}
