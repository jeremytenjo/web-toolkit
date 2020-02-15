import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/customComponents/variationBlock'

import ScrollBackToTop from '..'

const Example = () => {
  return (
    <B title='Default' style={{ height: '200vh' }}>
      <ScrollBackToTop />
    </B>
  )
}
storiesOf('Data-Display|Icon/Scroll back to top', module).add('ScrollBackToTop', () => (
  <Example />
))
