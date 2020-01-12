import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock/variationBlock.index'
import Icon from '../../icon'
import Box from '../index'

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

storiesOf('Data-Display|Box', module)
  .add('default', () => <Variations />)
  .add('fullscreen', () => <Box fullscreen styles={{ backgroundColor: 'black' }} />)
