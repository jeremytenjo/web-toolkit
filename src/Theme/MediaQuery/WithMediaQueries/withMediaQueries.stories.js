import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Icon from '../../../Data-Display/Icon/Ui/React/Base/icon.index'
import Box from '../../../Data-Display/Box/Ui/React/box.index'

import markdown from './withMediaQueries.readme.md'

const Variations = () => (
  <>
    <B background>
      <Box
        padding={['s', 'l']}
        backgroundColor={['secondary', 'primary']}
        justifyItems={['start', 'end']}
        transition='2s'
      >
        <h4>Featured</h4>
        <Icon name='search/material' color='primaryDarker' />
      </Box>
    </B>
  </>
)

storiesOf('Styling|MediaQuery/Ui/React', module).add(
  'withMediaQueries',
  () => <Variations />,
  {
    notes: { markdown },
  },
)
