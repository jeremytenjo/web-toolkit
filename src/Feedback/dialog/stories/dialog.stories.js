import React from 'react'
import { storiesOf } from '@storybook/react'

import markdown from '../README.md'
import DialogStyle1 from '../Styles/Style1/dialog.style1.index'
import List from '../../../../../Data-Display/List/Ui/React/list.index'

import Variations from './dialog.variations'

const All = () => (
  <List>
    <Variations Dialog={DialogStyle1} name='style1' />
  </List>
)

storiesOf('Feedback|Dialog/Ui/React', module).add('styles', () => <All />, {
  notes: { markdown },
})
