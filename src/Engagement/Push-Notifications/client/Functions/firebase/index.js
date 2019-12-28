import firebase from 'firebase/app'
import 'firebase/messaging'

const messaging = firebase.messaging()

export default async () => {
  if (firebase.messaging.isSupported()) {
    let token = null
    let registration = null

    registration = await registerServiceWorker()
    // await setPublicKey()
    await setNotificationListener({ swRegistration: registration })
    token = await getToken()

    return token
  } else {
    console.log('Firebase messaging not supported in this browser')
  }
}

const setPublicKey = () => {
  try {
    messaging.usePublicVapidKey(
      'BN3rLeTGSC1Z64OCHAJea9VahXHaq3QjO1i8WtdvvP9haL-DJjHAbpH9CQyaaNgkuR2QWRQj2tkskbZZ7IKScEE',
    )
  } catch (error) {
    console.error('Error in setPublicKey ', error)
  }
}

const registerServiceWorker = async () => {
  let registration = null
  try {
    await navigator.serviceWorker.register(`/firebase-messaging-sw.js`, {
      updateViaCache: 'none',
    })
    registration = await navigator.serviceWorker.ready

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
    throw `Error in getToken = ${error}`
  }
}
