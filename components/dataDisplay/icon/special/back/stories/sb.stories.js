import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/customComponents/variationBlock'

import Back from '..'

const BackComp = () => (
  <B title='back' color='black'>
    <Back />
  </B>
)

storiesOf('Data-Display|Icon/Special', module).add('Back', () => <BackComp />)
