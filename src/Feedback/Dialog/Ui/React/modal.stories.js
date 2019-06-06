import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../,,/../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Modal from './modal.index'

const Variations = () => (
  <>
    <B title='Default'>
      <Modal show>Hello</Modal>
    </B>

    <B title='Fullscreen'>
      <Modal />
    </B>

    <B title='Drawer - Default'>
      <Modal />
    </B>
  </>
)

storiesOf('Feedback|Modal/Ui/React', module).add('variations', () => (
  <Variations />
))
