// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

// Component
import { ShareExample, ShareReadme } from './share.index'

// Stories
storiesOf('Share', module).add('default', withReadme(ShareReadme, () => <ShareExample />))
