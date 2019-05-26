import firebase from 'firebase/app'

import config from './firebase.config'
import enablePerfMonitoring from './firebase.perfMonitoring'

firebase.initializeApp(config)

enablePerfMonitoring(firebase)
