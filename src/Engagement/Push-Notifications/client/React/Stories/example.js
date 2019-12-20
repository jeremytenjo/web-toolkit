import React from 'react'

import useNotifications from '../useNotifications.index'

import Store from './store'

const Child = () => {
  const { init } = useNotifications()

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
