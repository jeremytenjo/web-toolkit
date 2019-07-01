import React from 'react'
import { storiesOf } from '@storybook/react'

import ToastState, { ToastProvider } from './toast.index'

const ProviderMock = ({ children }) => <ToastProvider>{children}</ToastProvider>

const Clicker = () => {
  const { showToast } = ToastState() || {}

  return (
    <ProviderMock>
      <button onClick={() => showToast('success', 'success message')}>
        Show
      </button>
    </ProviderMock>
  )
}

storiesOf('Feedback/Notifications/Toasts', module).add('Default', () => (
  <Clicker />
))
