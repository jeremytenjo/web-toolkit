import React from 'react'
import { storiesOf } from '@storybook/react'

import Calendar from './Calendar/calendar.index'
import Day from './Day/day.index'
import DatePicker from './DatePicker/datePicker.index'

storiesOf('Dates', module)
  .add('Calendar Day - Default', () => <Day />)
  .add('Calendar Day - with Status', () => <Day accepted rejected pending />)
  .add('Calendar Day - isCurrentDay', () => <Day isCurrentDay />)
  .add('Calendar Day - grey', () => <Day grey />)
  .add('Calendar Day Active', () => <Day isActive />)
  .add('Event Calendar', () => <Calendar />)
  .add('Event Calendar + Agenda', () => <Calendar />)
  .add('Date Picker', () => <DatePicker />)
  .add('Date Picker with data', () => (
    <DatePicker
      data={['December', 2019]}
      onSelect={(value) => console.log(value)}
    />
  ))
