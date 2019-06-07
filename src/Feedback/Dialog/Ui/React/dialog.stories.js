import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../,,/../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Dialog from './dialog.index'

const Variations = () => {
  return (
    <>
      <B title=' title & message'>
        <Dialog title='title' message='Message'>
          Hello
        </Dialog>
      </B>

      <B title='only message'>
        <Dialog message='Message'>Hello</Dialog>
      </B>

      <B title='only title'>
        <Dialog title='title'>Hello</Dialog>
      </B>
    </>
  )
}

storiesOf('Feedback|Dialog/Ui/React', module).add('variations', () => (
  <Variations />
))
