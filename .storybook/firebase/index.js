import firebase from 'firebase/app'
import 'firebase/auth'

import config from './config'
import enablePerfMonitoring from './perfMonitoring'

firebase.initializeApp(config)

enablePerfMonitoring(firebase)
