import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import markdown from './icon.readme.md'
import Icon from './icon.index'

const Variations = () => (
  <>
    <B title='Default' color='black'>
      <Icon name='camera/material' />
    </B>

    <B title='background'>
      <Icon
        name='camera/material'
        color='primary'
        background
        noBackgroundChange
      />
    </B>

    <B title='with Color'>
      <Icon
        name='camera/material'
        background
        color='primary'
        noBackgroundChange
      />
    </B>

    <B title='outlined'>
      <Icon name='camera/material' color='primary' outlined />
    </B>

    <B title='with Size' color='black'>
      <Icon name='camera/material' background size={60} />
    </B>
  </>
)

storiesOf('Data-Display|Icon/React', module).add(
  'component',
  () => <Variations />,
  {
    notes: { markdown },
  },
)
