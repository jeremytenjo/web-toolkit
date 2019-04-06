import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import README from '../README.md'

import Default from './Default/chat.default.example'

storiesOf('Chat', module).add('default', withReadme(README, () => <Default />))
