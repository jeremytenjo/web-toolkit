import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Avatar from './avatar.index'

const Variations = () => {
  return (
    <>
      <B title='With image'>
        <Avatar
          name='Hayle Whitehead'
          src='https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'
        />
      </B>
      <B title='No Image'>
        <Avatar name='Hayle Whitehead' />
      </B>
      <B title='No Image no lastname'>
        <Avatar name='Hayle' />
      </B>
      <B title='editable'>
        <Avatar
          type='secondary'
          name='Hayle Whitehead'
          inputProps={{ onInput: (file) => console.log(file) }}
        />
      </B>
      <B title='editable'>
        <Avatar
          type='secondary'
          name='Hayle Whitehead'
          inputProps={{ onInput: (file) => console.log(file) }}
          borderColor='primary'
          src='https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'
        />
      </B>
    </>
  )
}

storiesOf('Data-Display|Avatar/Ui/React', module).add('Variations', () => (
  <Variations />
))
