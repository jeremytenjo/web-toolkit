import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import markdown from './icon.readme.md'
import Icon from './icon.index'

const Variations = () => (
  <>
    <B title='Default' color='black' noBackground>
      <Icon name='camera/material' />
    </B>

    <B title='background' noBackground>
      <Icon
        name='camera/material'
        color='primary'
        background
        noBackgroundChange
      />
    </B>

    <B title='color' noBackground>
      <Icon
        name='camera/material'
        background
        color='secondary'
        noBackgroundChange
      />
    </B>

    <B title='outlined' noBackground>
      <Icon name='camera/material' color='primary' outlined background />
    </B>

    <B title='size' color='black' noBackground>
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
