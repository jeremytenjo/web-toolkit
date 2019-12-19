import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Icon from '../../../Icon/Ui/React/Base/icon.index'

import markdown from './box.readme.md'
import Box from './box.index'

const Variations = () => (
  <>
    <B title='default' background style={{ width: '400px', padding: 0 }}>
      <Box
        styles={{
          justifyContent: 'space-between',
          gridAutoFlow: ['column', 'row'],
          width: '100%',
          alignItems: 'center',
        }}
      >
        <h4>Featured</h4>
        <Icon name='search/material' color='primary' />
      </Box>
    </B>
  </>
)

storiesOf('Data-Display|Box/Ui/React', module)
  .add('default', () => <Variations />, {
    notes: { markdown },
  })
  .add('fullscreen', () => <Box fullscreen backgroundColor='black' />)
