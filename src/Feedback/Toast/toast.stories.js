import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Style1 from './Styles/toast.1.index'
import ToastState, { ToastProvider } from './toast.index'

const Clicker = () => {
  const { showToast } =
    ToastState({ foreground: 'white', background: 'black' }) || {}

  return (
    <B style={{ position: 'top', bottom: 0 }}>
      <button
        onClick={() =>
          showToast({ type: 'success', message: 'Added to watchlist' })
        }
      >
        Show
      </button>
    </B>
  )
}

const Variations = () => (
  <>
    <B title='style 1'>
      <Style1 display='block' />
    </B>
  </>
)

storiesOf('Feedback/Notifications/Toasts', module)
  .add('Styles', () => <Variations />)
  .add('Default', () => (
    <ToastProvider>
      <Clicker />
    </ToastProvider>
  ))
