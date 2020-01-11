import React, { useState, useEffect, createContext, useContext } from 'react'
import firebase from 'firebase/app'

import isProduction from '../../../../../Misc-Utils/Enviroment/isProduction'
import 'firebase/messaging'

const messaging = firebase.messaging()

export const NotificationsContext = createContext(null)

export const NotificationsProvider = ({ children }) => {
  const isProductionApp = isProduction()
  const [initialized, setInitialized] = useState(null)
  const [token, setToken] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const hasPermission = Notification.permission === 'granted'
    if (isSupported() && hasPermission) {
      registerServiceWroker()
      setNotificationListener()
      setInitialized(true)
    }
  }, [])

  const isSupported = () =>
    'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window

  const registerServiceWroker = () => {
    if (isProductionApp) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
    }
  }

  const init = async () => {
    if (isSupported() && !initialized) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') setNotificationListener()
    }
    setInitialized(true)
  }

  const setNotificationListener = async () => {
    const token = await messaging.getToken()
    token && setToken(token)
    messaging.onMessage((payload) => setMessage(payload))
  }

  const showNotification = async ({ title, options }) => {
    const registrations = await navigator.serviceWorker.getRegistrations()
    if (registrations.length) registrations[0].showNotification(title, options)
  }

  return (
    <NotificationsContext.Provider
      value={{ isSupported, init, token, message, showNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export default () => useContext(NotificationsContext)
