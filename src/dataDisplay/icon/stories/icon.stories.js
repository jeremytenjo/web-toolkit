import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Icon from '../index'

import markdown from './icon.readme.md'

const Variations = () => (
  <>
    <B title='Default' color='black' noBackground>
      <Icon name='camera/material' />
    </B>

    <B title='background' noBackground>
      <Icon name='camera/material' color='white' background noBackgroundChange />
    </B>
    <B title='plain' noBackground>
      <Icon name='camera/material' plain />
    </B>

    <B title='color' noBackground>
      <Icon name='camera/material' background color='secondary' noBackgroundChange />
    </B>

    <B title='outlined' noBackground>
      <Icon name='camera/material' color='primary' outlined background />
    </B>

    <B title='size' color='black' noBackground>
      <Icon name='camera/material' size={60} />
    </B>
    <B title='label' color='black' noBackground>
      <Icon name='camera/material' label={{ text: 'label' }} size={60} />
    </B>
    <B title='isStroke' color='black' noBackground>
      <Icon name='camera/feather' color='primary' label={{ text: 'label' }} size={60} />
    </B>
    <B title='backgroundSize' color='black' noBackground>
      <Icon
        name='camera/feather'
        color='primary'
        label={{ text: 'label' }}
        size={20}
        backgroundSize={80}
      />
    </B>
    <B title='file upload' color='black' noBackground>
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

storiesOf('Data-Display|Icon/React', module).add('Base', () => <Variations />, {
  notes: { markdown },
})
