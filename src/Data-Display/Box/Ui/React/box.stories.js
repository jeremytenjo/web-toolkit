import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '../../../Icon/Ui/React/Base/icon.index'

import markdown from './box.readme.md'
import Box from './box.index'

storiesOf('Data-Display|Box/Ui/React', module).add(
  'Primary',
  () => (
    <Box>
      <h4>Featured</h4>
      <Icon name='search/material' />
    </Box>
  ),
  {
    notes: { markdown },
  },
)
