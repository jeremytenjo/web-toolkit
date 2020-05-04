const firebaseConfig = require(`./src/firebase/firebase.config`)
const serviceWorkerReceiverFunction = require(`./src/firebase/serviceWorkerReceiverFunction`)
const colors = require('./bin/defaults/theme/colors')

module.exports = {
  projectInfo: {
    name: 'Wapp',
    shortName: 'Wapp',
    description: 'Wapp',
    startUrl: '/',
    colors,
    logo: {
      path: 'bin/defaults/images/logo',
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
    perfomanceMonitoring: true
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
