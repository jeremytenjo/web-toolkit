import React from 'react'
import { storiesOf } from '@storybook/react'

import stubs from './calendar.stubs'
import Calendar from './calendar.index'

storiesOf('Dates/Calendar', module).add('Dev', () => (
  <Calendar events={stubs} onDateSelect={(e) => console.log(e)} />
))
