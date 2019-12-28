import React, { useState, createContext, useContext } from 'react'

import Animation from '../../Misc-Utils/Animations/Web-Animations-API/animation.index'
export const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const [Toast, setToast] = useState(null)

  const showToast = async ({
    message = 'message',
    style = 1,
    type = 'success',
    background = 'black',
    foreground = 'white',
    location = 'center',
  }) => {
    let mod = await import(`./Styles/toast.${style}.index`)
    setToast(
      mod.default({
        background,
        type,
        foreground,
        message,
        location,
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
      <Animation name='outmostIn' style={{ zIndex: 999 }} show={Toast}>
        {Toast && Toast}
      </Animation>
    </ToastContext.Provider>
  )
}

export default () => useContext(ToastContext)
