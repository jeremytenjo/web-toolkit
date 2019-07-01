import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatar from './avatar.index'

storiesOf('Avatars', module)
  .add('With image', () => (
    <Avatar
      name='Hayle Whitehead'
      rating={5}
      photoUrl='https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'
    />
  ))
  .add('No Image', () => <Avatar name='Hayle Whitehead' rating={5} />)
  .add('No Image no lastname', () => <Avatar name='Hayle' rating={5} />)
  .add('Secondary', () => (
    <Avatar type='secondary' name='Hayle Whitehead' rating={5} />
  ))
