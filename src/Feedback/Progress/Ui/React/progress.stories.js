import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Linear from './Linear/linear.index'
import Donut from './Donut/donut.index'

const Variations = () => {
  return (
    <>
      <B title='linear'>
        <Linear color='secondary' />
      </B>
      <B title='donut'>
        <Donut color='primary' />
      </B>
    </>
  )
}

storiesOf('Feedback|Progress/Ui/React', module).add('Variations', () => (
  <Variations />
))
