import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import markdown from './poster.readme.md'
import One from './Styles/1/poster.1.index'
const image =
  'https://images-na.ssl-images-amazon.com/images/I/818NtgncwLL._SL1500_.jpg'

const Variations = () => (
  <>
    <B title='1' noBackground>
      <One src={image} onClick={() => console.log('sdf')} />
    </B>
  </>
)

storiesOf('Data-Display|Cards/Poster', module).add(
  'variations',
  () => <Variations />,
  {
    notes: { markdown },
  },
)
