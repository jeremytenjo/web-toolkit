import React from 'react'
import { storiesOf } from '@storybook/react'

import DialogStyle1 from '../styles/1'
import List from '../../../dataDisplay/list/index'

import markdown from './README.md'
import Variations from './variations'

const All = () => (
  <List>
    <Variations Dialog={DialogStyle1} name='style1' />
  </List>
)

storiesOf('Feedback|Dialog', module).add('styles', () => <All />, {
  notes: { markdown },
})
