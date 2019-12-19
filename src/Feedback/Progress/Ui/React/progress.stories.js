import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Linear from './linear'
import Donut from './donut'
import Dots from './dots'

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

storiesOf('Feedback|Progress/Ui/React', module).add('Variations', () => <Variations />)
