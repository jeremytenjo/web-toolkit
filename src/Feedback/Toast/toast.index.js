import React, { useState, createContext, useContext } from 'react'

export const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const [background, setBackground] = useState('black')
  const [foreground, setforeground] = useState('white')
  const [text, setText] = useState('')
  const [type, setType] = useState('success')
  const [Toast, setToast] = useState(null)

  const showToast = async ({
    message,
    style = 1,
    type: newType = 'success',
  }) => {
    let mod = await import(`./Styles/toast.${style}.index`)
    setToast(
      mod.default({
        background,
        type,
        foreground,
      }),
    )
    setText(message)
    setType(newType)
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        text,
        setBackground,
        setforeground,
      }}
    >
      {children}
      {Toast && Toast}
    </ToastContext.Provider>
  )
}

export default () => useContext(ToastContext)
