import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from '../../../.storybook/Custom-Components/Title/title'

import Day from './day.index'

const Variations = () => (
  <>
    <Title>Default</Title>
    <Day />
    <Title>Status</Title>
    <Day statuses={['accepted', 'rejected', 'pending']} />
    <Title>isCurrentDay</Title>
    <Day isCurrentDay />
    <Title>grey</Title>
    <Day grey />
    <Title>isActive</Title>
    <Day isActive />
  </>
)

storiesOf('Dates/Day', module)
  .add('Variations', () => <Variations />)
  .add('Dev', () => <Day />)
