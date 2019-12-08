import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Dialog from '../../../Dialog/Ui/React/Styles/Style1/dialog.style1.index'

import markdown from './README.md'
import Modal from './modal.index'

const Variations = () => {
  const [show, setShow] = useState(null)
  const showit = () => setShow(true)
  const hideit = () => setShow(false)
  return (
    <>
      <B title='Center'>
        <button onClick={showit}>Show Modal</button>

        <Modal show={show} animationStyle='centerOut' onClose={() => setShow(false)}>
          <Dialog onAccept={hideit} title='title' message='Message' />
        </Modal>
      </B>
    </>
  )
}

storiesOf('Feedback|Modal/Ui/React', module).add('variations', () => <Variations />, {
  notes: { markdown },
})
