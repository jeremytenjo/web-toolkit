import React, { useState, useEffect, createContext, useContext } from 'react'

export const NotificationsContext = createContext(null)

export const NotificationsProvider = ({ children, service = 'firebase' }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const hasPermission = Notification.permission
    if (hasPermission) {
      setNotificationListener()
      setInitialized(true)
    }
  }, [])

  const isSupported = () =>
    'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window

  const setNotificationListener = async () => {
    if (isSupported() && !initialized) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        const { default: initFunc } = await import(`../Functions/${service}`)
        initFunc()
      }
    }
    setInitialized(true)
  }

  return (
    <NotificationsContext.Provider value={{ isSupported, setNotificationListener }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export default () => useContext(NotificationsContext)
