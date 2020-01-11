import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Chip from './chip.index'

const Variations = () => (
  <>
    <B title='default'>
      <Chip text='hello' onClick={() => console.log('click')} />
    </B>

    <B title='toRemove button'>
      <Chip text='hello' toRemove />
    </B>
  </>
)

storiesOf('Data-Display|Chip/Ui/React', module).add('variations', () => <Variations />)
