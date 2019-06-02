import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Like from './like.index'

const Example = () => {
  const [liked, setLiked] = useState(null)

  return (
    <B title='Like ' color='black'>
      <Like
        liked={liked}
        onLike={() => setLiked(true)}
        onUnlike={() => setLiked(false)}
      />
    </B>
  )
}
storiesOf('Data-Display|Icon/Functional', module).add('Like', () => <Example />)
