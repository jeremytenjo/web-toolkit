import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'

import markdown from './README.md'
import Default from './chat.default.example'

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
