import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock/variationBlock.index'
import Chip from '../'

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

storiesOf('Data-Display|Chip', module).add('variations', () => <Variations />)
