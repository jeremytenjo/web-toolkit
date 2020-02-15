import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Day from '../day.index'

const Variations = () => (
  <>
    <B title='Default'>
      <Day />
    </B>

    <B title='Status'>
      <Day statuses={['accepted', 'rejected', 'pending']} />
    </B>

    <B title='isCurrentDay'>
      <Day isCurrentDay />
    </B>

    <B title='grey'>
      <Day grey />
    </B>

    <B title='isActive'>
      <Day isActive />
    </B>
  </>
)

storiesOf('Dates|Day', module).add('Variations', () => <Variations />)
