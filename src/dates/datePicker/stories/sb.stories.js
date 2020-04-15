import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import DatePicker from '../index'

const Variations = () => (
  <>
    <B title='Date Picker - Month' background>
      <DatePicker type='month' />
    </B>
    <B title='Date Picker - Year' background>
      <DatePicker type='year' onSelect={(value) => console.log(value)} />
    </B>
  </>
)

storiesOf('Dates/Date Picker', module).add('variations', () => <Variations />)
