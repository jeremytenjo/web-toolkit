// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

// Component
import ShareExample from './share.examples/share.example.simple'
import { ShareReadme } from './share.index'

// Stories
storiesOf('Share', module).add('default', withReadme(ShareReadme, () => <ShareExample />))
