import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import markdown from './poster.readme.md'
import One from './Styles/1'
const image = 'https://images-na.ssl-images-amazon.com/images/I/818NtgncwLL._SL1500_.jpg'

const Variations = () => (
  <>
    <B title='default'>
      <One src={image} onClick={() => console.log('sdf')} />
    </B>
    <B title='no photo'>
      <One
        alt='this is a poster jfhajklsdhf ljk ahslk lkashd f fjklahsljk fjljaksh dfjklhasjkld fhljkas hdfjklhasjk fhkjas hdfjklhasdfjklhaskj fhljkas fhlkjashdf jkas j fhjkasdhfjklashldfjkhasjkl lkjasd fjklas sdhfjklahsfkjasdhf lkjashdfkjhasljdkfhaks  h aklsdf fhklajshfd'
        onClick={() => console.log('sdf')}
      />
    </B>
    <B title='loading'>
      <One loading alt='this is a poster' onClick={() => console.log('sdf')} />
    </B>
  </>
)

storiesOf('Data-Display|Cards/Poster', module).add('variations', () => <Variations />, {
  notes: { markdown },
})