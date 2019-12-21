import firebase from 'firebase/app'
import 'firebase/messaging'

const messaging = firebase.messaging()

export default async () => {
  if (firebase.messaging.isSupported()) {
    let token = null
    let registration = null

    registration = await registerServiceWorker()
    await setPublicKey()
    await setNotificationListener({ swRegistration: registration })
    token = await getToken()

    console.log(token)
  } else {
    console.log('Firebase messaging not supported in this browser')
  }
}

const setPublicKey = () => {
  try {
    messaging.usePublicVapidKey(
      'BHlOUk7fnlpYBMFaEHNckPkosvoUoLULGg0uAVLyKxepB6wxBqai_cK0S0LithVoKSLQANnENNdStvUorfFJGcc',
    )
  } catch (error) {
    console.error('Error in setPublicKey ', error)
  }
}

const registerServiceWorker = async () => {
  let registration = null
  try {
    registration = await navigator.serviceWorker.register(`/firebase-messaging-sw.js`, {
      updateViaCache: 'none',
    })
    return registration
  } catch (error) {
    console.error('Error in registerServiceWorker ', error)
  }
}

const setNotificationListener = async ({ swRegistration }) => {
  try {
    messaging.useServiceWorker(swRegistration)
    messaging.onMessage((payload) => {
      console.log({ payload })
      const title = payload.notification.title
      const options = {
        body: payload.notification.body,
        icon: payload.notification.icon,
        actions: [
          {
            action: 'payload.fcmOptions.link',
            title: 'Book Appointment',
          },
        ],
      }
      swRegistration.showNotification(title, options)
    })
  } catch (error) {
    console.error('Error in setNotificationListener. ', error)
  }
}

const getToken = async () => {
  try {
    const currentToken = await messaging.getToken()
    return currentToken
  } catch (error) {
    console.error('Error in getToken ', error)
  }
}
