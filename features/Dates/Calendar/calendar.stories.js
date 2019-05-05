import React from 'react'
import { storiesOf } from '@storybook/react'

import Calendar from './Component/calendar.index'
import Day from './Day/day.index'

storiesOf('Dates', module)
  .add('Calendar Day - Default', () => <Day />)
  .add('Calendar Day - with Status', () => <Day accepted rejected pending />)
  .add('Calendar Day - isCurrentDay', () => <Day isCurrentDay />)
  .add('Calendar Day - grey', () => <Day grey />)
  .add('Calendar Day Active', () => <Day active />)
  .add('Event Calendar', () => <Calendar />)
  .add('Event Calendar + Agenda', () => <Calendar />)
