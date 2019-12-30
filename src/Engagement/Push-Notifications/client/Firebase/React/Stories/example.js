import React from 'react'

import icon from '../../../../../../../public/logo-192.png'
import useNotifications from '../useNotifications.index'

import Store from './store'

const Child = () => {
  const { init, token, message } = useNotifications()

  console.log(token)
  console.log(message)

  if (message) {
    const {
      notification: { title, body },
    } = message
    const options = { icon, body }

    new Notification(title, options)
  }

  return (
    <>
      <button onClick={() => init()}>Initialize</button>
    </>
  )
}

export default () => (
  <Store>
    <Child />
  </Store>
)
