import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import DatePicker from './datePicker.index'

const Variations = () => (
  <>
    <B title='Date Picker - Month'>
      <DatePicker type='month' />
    </B>
    <B title='Date Picker - Year'>
      <DatePicker type='year' onSelect={(value) => console.log(value)} />
    </B>
  </>
)

storiesOf('Dates/Date Picker', module).add('variations', () => <Variations />)
