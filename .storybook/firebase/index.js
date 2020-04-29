import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

import config from './config'
import enablePerfMonitoring from './perfMonitoring'

firebase.initializeApp(config)

enablePerfMonitoring(firebase)

firebase.analytics().logEvent('page_view')
