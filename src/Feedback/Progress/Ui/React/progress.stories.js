import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Linear from './Linear/linear.index'
import Donut from './Donut/donut.index'
import Dots from './Dots/dots.index'

const Variations = () => {
  return (
    <>
      <B title='linear' noBackground>
        <Linear color='secondary' />
      </B>
      <B title='donut' noBackground>
        <Donut color='primary' />
      </B>
      <B title='dots' noBackground>
        <Dots />
      </B>
    </>
  )
}

storiesOf('Feedback|Progress/Ui/React', module).add('Variations', () => (
  <Variations />
))
