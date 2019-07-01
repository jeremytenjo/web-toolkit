import React, { useState, createContext, useContext } from 'react'

import animation from './toast.animation'

export const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const [variant, setVariant] = useState('')
  const [text, setText] = useState('')

  const showToast = (message, variant) => {
    animation()
    setText(message)
    setVariant(variant)
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        variant,
        text,
      }}
    >
      <div>{children}</div>
    </ToastContext.Provider>
  )
}

export default () => useContext(ToastContext)
