import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Ratings from './ratings.index'

const Variations = () => {
  return (
    <>
      <B title='default' noBackground>
        <Ratings rating={5} />
      </B>
    </>
  )
}

storiesOf('Data-Display|Ratings', module).add('Default', () => <Variations />)
