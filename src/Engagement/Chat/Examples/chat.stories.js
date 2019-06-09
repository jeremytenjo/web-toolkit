import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import markdown from '../README.md'

import Default from './Default/chat.default.example'

const Variations = () => (
  <>
    <B title='Default'>
      <Default />
    </B>
  </>
)

storiesOf('Engagement|Chat', module).add('default', () => <Variations />, {
  notes: { markdown },
})
