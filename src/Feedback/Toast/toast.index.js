import React, { useState, createContext, useContext, useRef } from 'react'

import Icon from '../../Data-Display/Icon/Ui/React/Base/icon.index'

import { Wrapper } from './toast.styles'
import animation from './toast.animation'

export const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const tastRef = useRef()
  const [background, setBackground] = useState('black')
  const [foreground, setforeground] = useState('white')
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
        setBackground,
        setforeground,
      }}
    >
      {children}
      <Wrapper
        variant={variant}
        background={background}
        foreground={foreground}
        ref={tastRef}
      >
        <Icon name='checkmark/1' />
        <span>{text}</span>
      </Wrapper>
    </ToastContext.Provider>
  )
}

export default () => useContext(ToastContext)
