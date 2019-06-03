import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import ShareReadme from '../README.md'

import ShareExample from './Default/share.example.simple'

storiesOf('Engagement|Utils/Share', module).add(
  'default',
  withReadme(ShareReadme, () => <ShareExample />),
)
