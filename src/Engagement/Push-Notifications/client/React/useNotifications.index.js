import React, { useState, createContext, useContext } from 'react'

export const NotificationsContext = createContext(null)

export const NotificationsProvider = ({ children, service = 'firebase' }) => {
  const [initialized, setInitialized] = useState(false)

  const isSupported = () =>
    'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window

  const init = async () => {
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
    <NotificationsContext.Provider value={{ isSupported, init }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export default () => useContext(NotificationsContext)
