module.exports = ({ config, serviceWorkerReceiverFunction }) => {
  const configString = JSON.stringify(config)
  return `
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js')

firebase.initializeApp(${configString})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
${serviceWorkerReceiverFunction}
  return self.registration.showNotification(title, options)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})
`
}
