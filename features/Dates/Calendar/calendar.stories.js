import React from 'react'
import { storiesOf } from '@storybook/react'

import Calendar from './calendar.index'

storiesOf('Dates/Calendar', module).add('Dev', () => (
  <Calendar onDateSelect={(e) => console.log(e)} />
))
