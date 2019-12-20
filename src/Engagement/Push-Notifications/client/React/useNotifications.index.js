import React, { useState, createContext, useContext } from 'react'

export const NotificationsContext = createContext(null)

export const NotificationsProvider = ({ children, service = 'firebase' }) => {
  const init = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        console.log('Notification permission granted.')
        let fun = await import(`../Functions/${service}`)
        fun = fun.default
        fun()
      }
    }
  }

  return (
    <NotificationsContext.Provider value={{ init }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export default () => useContext(NotificationsContext)
