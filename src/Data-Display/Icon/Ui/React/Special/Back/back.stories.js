import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Back from './back.index'

const BackComp = () => (
  <>
    <B title='back' color='black'>
      <Back />
    </B>
  </>
)

storiesOf('Data-Display|Icon/React/Special', module).add('Back', () => (
  <BackComp />
))
