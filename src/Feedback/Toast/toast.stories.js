import React from 'react'
import { storiesOf } from '@storybook/react'

import ToastState, { ToastProvider } from './toast.index'

const ProviderMock = ({ children }) => <ToastProvider>{children}</ToastProvider>

const Clicker = () => {
  const { showToast } = ToastState() || {}
  console.log(ToastState)

  return (
    <>
      <button onClick={() => showToast('success', 'success message')}>
        Show
      </button>
    </>
  )
}

storiesOf('Feedback/Notifications/Toasts', module).add('Default', () => (
  <ProviderMock>
    <Clicker />
  </ProviderMock>
))
