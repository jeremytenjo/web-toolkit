import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Dialog from '../../dialog/styles/1'
import Modal from '../'

import markdown from './README.md'

const Variations = () => {
  const [show, setShow] = useState(null)
  const showit = () => setShow(true)
  const hideit = () => setShow(false)
  return (
    <B title='Center'>
        <button onClick={showit}>Show Modal</button>

        <Modal show={show} animationStyle='centerOut' onClose={() => setShow(false)}>
          <Dialog onAccept={hideit} title='title' message='Message' />
        </Modal>
      </B>
  )
}

storiesOf('Feedback|Modal', module).add('variations', () => <Variations />, {
  notes: { markdown },
})
