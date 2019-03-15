// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

// Component
import ShareExample from './Default/share.example.simple'
import ShareReadme from '../README.md'

// Stories
storiesOf('Share', module).add(
  'default',
  withReadme(ShareReadme, () => <ShareExample />),
)
