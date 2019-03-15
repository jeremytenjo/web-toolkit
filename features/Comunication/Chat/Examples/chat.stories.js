// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
// Readme
import README from './README.md'
// Components
import Default from './Default/chat.default.example'

// Stories
storiesOf('Chat', module).add('default', withReadme(README, () => <Default />))
