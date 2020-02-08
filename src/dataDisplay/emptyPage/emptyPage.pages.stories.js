import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/customComponents/variationBlock'
import IllChat from '../illustration/chat/style1'

import EmptyPage from './Style1/emptyPage.index'

const Variations = () => {
  return (
    <B title='style1' noBackground>
      <EmptyPage image={<IllChat />} />
    </B>
  )
}

storiesOf('Data-Display|Empty Page', module).add('Variations', () => <Variations />)
