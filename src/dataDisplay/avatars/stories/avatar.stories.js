import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'

import Avatar from '..'

const img =
  'https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'

const Variations = () => {
  return (
    <>
      <B title='With image'>
        <Avatar name='Hayle Whitehead' src={img} />
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
      <B title='border'>
        <Avatar type='secondary' name='Hayle Whitehead' borderColor='primary' src={img} />
      </B>
      <B title='paddedBorder'>
        <Avatar
          type='secondary'
          name='Hayle Whitehead'
          borderColor='primary'
          paddedBorder
          src={img}
        />
      </B>
    </>
  )
}

storiesOf('Data-Display|Avatar', module).add('Variations', () => <Variations />)
