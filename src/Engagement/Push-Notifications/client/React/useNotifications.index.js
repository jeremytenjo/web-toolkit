import React, { useState, useEffect, createContext, useContext } from 'react'

export const NotificationsContext = createContext(null)

export const NotificationsProvider = ({ children, service = 'firebase' }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const hasPermission = Notification.permission
    if (isSupported() && hasPermission === 'granted') {
      setNotificationListener()
      setInitialized(true)
    }
  }, [])

  const isSupported = () =>
    'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window

  const init = async () => {
    if (isSupported() && !initialized) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        await setNotificationListener()
      }
    }
    setInitialized(true)
  }

  const setNotificationListener = async () => {
    const { default: initFunc } = await import(`../Functions/${service}`)
    initFunc()
  }

  return (
    <NotificationsContext.Provider value={{ isSupported, init }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export default () => useContext(NotificationsContext)
