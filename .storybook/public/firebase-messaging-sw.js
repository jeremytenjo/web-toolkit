/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAr0XrSoBuZP8_fcvJKnjSD3YfDpdzr0kQ',
  authDomain: 'tenjo-web-toolkit.firebaseapp.com',
  databaseURL: 'https://tenjo-web-toolkit.firebaseio.com',
  projectId: 'tenjo-web-toolkit',
  storageBucket: 'tenjo-web-toolkit.appspot.com',
  messagingSenderId: '761012518504',
  appId: '1:761012518504:web:4cbe27f5fe948d41',
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  }

  return self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})
