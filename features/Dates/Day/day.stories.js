import React from 'react'
import { storiesOf } from '@storybook/react'

import Day from './day.index'

const DayStories = () => (
  <>
    <p>Default</p>
    <Day />
    <p>Status</p>
    <Day accepted rejected pending />
    <p>isCurrentDay</p>
    <Day isCurrentDay />
    <p>grey</p>
    <Day grey />
    <p>isActive</p>
    <Day isActive />
  </>
)

storiesOf('Dates/Day', module)
  .add('Variations', () => <DayStories />)
  .add('Dev', () => <Day />)
