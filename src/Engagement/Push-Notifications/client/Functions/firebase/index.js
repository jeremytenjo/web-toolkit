import firebase from 'firebase/app'
import 'firebase/messaging'

const messaging = firebase.messaging()

messaging.usePublicVapidKey(
  'BHlOUk7fnlpYBMFaEHNckPkosvoUoLULGg0uAVLyKxepB6wxBqai_cK0S0LithVoKSLQANnENNdStvUorfFJGcc',
)

export default async () => {
  try {
    const currentToken = await messaging.getToken()
    if (currentToken) {
      console.log({ currentToken })
    }
  } catch (error) {
    console.log('An error occurred while retrieving token. ', error)
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope)
      })
      .catch(function(err) {
        console.log('Service worker registration failed, error:', err)
      })
  }
}

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', async () => {
      const registration = await navigator.serviceWorker.register(
        '/firebase-messaging-sw.js',
        {
          updateViaCache: 'none',
        },
      )
      messaging.useServiceWorker(registration)
    })
  }
}
