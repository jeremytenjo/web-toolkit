import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import README from '../README.md'

import Default from './Default/chat.default.example'

const Variations = () => (
  <>
    <B title='Default'>
      <Default />
    </B>
  </>
)

storiesOf('Chat', module).add(
  'default',
  withReadme(README, () => <Variations />),
)
