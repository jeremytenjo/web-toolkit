import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/performance'

firebase.initializeApp({
  apiKey: 'AIzaSyD9rNdySsFa1fqymv7pW77L-upW2zfV9t8',
  authDomain: 'wapp-framework.firebaseapp.com',
  databaseURL: 'https://wapp-framework.firebaseio.com',
  projectId: 'wapp-framework',
  storageBucket: 'wapp-framework.appspot.com',
  messagingSenderId: '1046696464098',
  appId: '1:1046696464098:web:d90c6921a06582bec7d8bb',
  measurementId: 'G-LDXY4PWWVL',
})

window.firebasePerformance = firebase.performance()
