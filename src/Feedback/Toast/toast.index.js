import React, { useState, createContext, useContext } from 'react'

export const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const [Toast, setToast] = useState(null)

  const showToast = async ({
    message = 'message',
    style = 1,
    type = 'success',
    background = 'black',
    foreground = 'white',
  }) => {
    let mod = await import(`./Styles/toast.${style}.index`)
    setToast(
      mod.default({
        background,
        type,
        foreground,
        message,
      }),
    )
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {children}
      {Toast && Toast}
    </ToastContext.Provider>
  )
}

export default () => useContext(ToastContext)
