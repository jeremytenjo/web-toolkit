import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Icon from '../index'

import markdown from './readme.md'

const Variations = () => (
  <>
    <B title='Default'>
      <Icon name='camera/material' />
    </B>

    <B title='plain'>
      <Icon name='camera/material' plain />
    </B>

    <B title='size'>
      <Icon name='camera/material' size='90px' />
    </B>
    <B title='size - where width and height are different'>
      <Icon name='express/1' width='auto' height='20px' />
    </B>

    <B title='color'>
      <Icon name='camera/material' color='secondary' />
    </B>

    <B title='backgroundColor'>
      <Icon
        name='camera/material'
        color='white'
        backgroundColor='primary'
        backgroundSize='20px'
      />
    </B>

    <B title='outlined'>
      <Icon name='camera/material' color='primary' outlined background />
    </B>

    <B title='label'>
      <Icon name='camera/material' label={{ text: 'label' }} />
    </B>
    <B title='isStroke'>
      <Icon name='camera/feather' color='primary' />
    </B>
    <B title='backgroundSize'>
      <Icon name='camera/feather' color='primary' backgroundSize='40px' />
    </B>
    <B title='file upload'>
      <Icon
        name='camera/material'
        inputProps={{
          name: 'file_upload',
          onInput: (file) => console.log(file),
        }}
        size='60px'
      />
    </B>
  </>
)

storiesOf('Data-Display|Icon', module).add('Base', () => <Variations />, {
  notes: { markdown },
})
