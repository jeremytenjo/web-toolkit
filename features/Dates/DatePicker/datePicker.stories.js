import React from 'react'
import { storiesOf } from '@storybook/react'

import DatePicker from './datePicker.index'

const DayPickerStories = () => (
  <>
    <p>Date Picker - Month</p>
    <DatePicker type='month' />
    <p>Date Picker - Year</p>
    <DatePicker type='year' onSelect={(value) => console.log(value)} />
  </>
)

storiesOf('Dates/Date Picker', module)
  .add('Variations', () => <DayPickerStories />)
  .add('Dev', () => <DatePicker />)
