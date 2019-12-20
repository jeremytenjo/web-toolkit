importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js')
firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
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
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i]
        windowClient.postMessage(payload)
      }
    })
    .then(() => {
      return registration.showNotification('my notification title')
    })
  return promiseChain
})
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
})
