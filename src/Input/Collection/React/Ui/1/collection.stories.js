import React from 'react'
import { storiesOf } from '@storybook/react'
import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Collection from './collection.index'

const Variations = () => {
  return (
    <>
      <B title='style1' noBackground>
        <Collection />
      </B>
    </>
  )
}

storiesOf('Input|Collection', module).add('default', () => <Variations />)
