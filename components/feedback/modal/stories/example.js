import React, { useState } from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Dialog from '../../dialog/styles/1'

import Modal from '..'

export default () => {
  const [show, setShow] = useState(null)
  const showit = () => setShow(true)
  const hideit = () => setShow(false)

  return (
    <B title='centerOut'>
      <button onClick={showit}>Show Modal</button>

      <Modal show={show} animationStyle='centerOut' onClose={() => setShow(false)}>
        <Dialog onAccept={hideit} title='title' message='Message' />
      </Modal>
    </B>
  )
}
