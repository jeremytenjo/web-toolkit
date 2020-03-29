import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Icon from '../index'

import markdown from './readme.md'

const Variations = () => (
  <>
    <B title='Default' color='black'>
      <Icon name='camera/material' />
    </B>

    <B title='plain'>
      <Icon name='camera/material' plain />
    </B>

    <B title='size' color='black'>
      <Icon name='camera/material' size={90} />
    </B>

    <B title='color'>
      <Icon name='camera/material' color='secondary' />
    </B>

    <B title='backgroundColor'>
      <Icon
        name='camera/material'
        color='white'
        backgroundColor='primary'
        backgroundSize={20}
      />
    </B>

    <B title='outlined'>
      <Icon name='camera/material' color='primary' outlined background />
    </B>

    <B title='label' color='black'>
      <Icon name='camera/material' label={{ text: 'label' }} />
    </B>
    <B title='isStroke' color='black'>
      <Icon name='camera/feather' color='primary' />
    </B>
    <B title='backgroundSize' color='black'>
      <Icon name='camera/feather' color='primary' backgroundSize={40} />
    </B>
    <B title='file upload' color='black'>
      <Icon
        name='camera/material'
        inputProps={{
          name: 'file_upload',
          onInput: (file) => console.log(file),
        }}
        size={60}
      />
    </B>
  </>
)

storiesOf('Data-Display|Icon', module).add('Base', () => <Variations />, {
  notes: { markdown },
})
