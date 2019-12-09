import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Like from './like.index'

const Example = () => {
  const [liked, setLiked] = useState(null)

  return (
    <>
      <B title='Default ' color='black'>
        <Like
          liked={liked}
          onLike={() => setLiked(true)}
          onUnlike={() => setLiked(false)}
        />
      </B>

      <B title='Liked' color='black'>
        <Like liked onLike={() => setLiked(true)} onUnlike={() => setLiked(false)} />
      </B>
    </>
  )
}
storiesOf('Data-Display|Icon/React/Special', module).add('Like', () => <Example />)
