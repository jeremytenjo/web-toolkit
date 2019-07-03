import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Contact from '../../../Contact/React/Ui/1/contact.index'

import Photo1 from './1/photo.index'

const avatarImageUrl =
  'https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'
const name = 'Hayle Whitehead'
const photoUrl =
  'https://s.yimg.com/ny/api/res/1.2/RlohyTwlNFUUVy_la7dKkw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/teen_vogue_128/ad2029a8bd7ea7eac4d17f8ca63e7a4d'
const cardOptions = ['Remove']

const Variations = () => {
  return (
    <>
      <B title='style1' noBackground contentStyle={{ width: 300, height: 600 }}>
        <Photo1 photoUrl={photoUrl} menuOptions={cardOptions} />
      </B>
    </>
  )
}

storiesOf('Data-Display|Cards/Photo', module).add('styles', () => (
  <Variations />
))
