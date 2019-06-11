import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Chip from './chip.index'

const Variations = () => (
  <>
    <B title='default'>
      <Chip
        text='hello'
        onClick={() => console.log('click')}
        onClose={() => console.log('close')}
      />
    </B>

    <B title='no close button'>
      <Chip text='hello' noClose />
    </B>
  </>
)

storiesOf('Data-Display|Chip/Ui/React', module).add('variations', () => (
  <Variations />
))
