import React from 'react'
import { storiesOf } from '@storybook/react'

import Contact from '../Contact/contact.index'

import Photo from './photo.index'

const avatarImageUrl =
  'https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'
const name = 'Hayle Whitehead'
const photoUrl =
  'https://s.yimg.com/ny/api/res/1.2/RlohyTwlNFUUVy_la7dKkw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/teen_vogue_128/ad2029a8bd7ea7eac4d17f8ca63e7a4d'
const cardOptions = ['Remove']

storiesOf('Cards/Compounds/Contact + Image', module)
  .add('default', () => (
    <Photo photoUrl={photoUrl} menuOptions={cardOptions}>
      <Contact
        photoUrl={avatarImageUrl}
        name={name}
        rating={5}
        city='Vancouver, BC'
      />
    </Photo>
  ))
  .add('Likeable', () => (
    <Photo photoUrl={photoUrl} menuOptions={cardOptions} likeable>
      <Contact
        photoUrl={avatarImageUrl}
        name={name}
        rating={5}
        city='Vancouver, BC'
      />
    </Photo>
  ))
