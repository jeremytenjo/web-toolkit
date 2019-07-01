import React, { useState, createContext, useContext, useRef } from 'react'

import { Wrapper } from './toast.styles'
import animation from './toast.animation'

export const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const tastRef = useRef()
  const [variant, setVariant] = useState('')
  const [text, setText] = useState('')

  const showToast = (message, variant) => {
    animation(tastRef.current)
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
      {children}
      <Wrapper variant={variant} ref={tastRef}>
        <span>{text}</span>
      </Wrapper>
    </ToastContext.Provider>
  )
}

export default () => useContext(ToastContext)
