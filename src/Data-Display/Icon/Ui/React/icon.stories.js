import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Icon from './icon.index'

const Variations = () => (
  <>
    <B title='Default' color='black'>
      <Icon name='material/camera' />
    </B>

    <B title='background'>
      <Icon name='material/camera' background />
    </B>

    <B title='with Color'>
      <Icon
        name='material/camera'
        background
        color='primary'
        noBackgroundChange
      />
    </B>

    <B title='with Size' color='black'>
      <Icon name='material/camera' background size={60} />
    </B>
  </>
)

storiesOf('Data-Display|Icon/React', module).add('variations', () => (
  <Variations />
))
