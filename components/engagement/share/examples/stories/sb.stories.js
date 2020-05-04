import React from 'react'
import { storiesOf } from '@storybook/react'

import markdown from '../../README.md'
import ShareExample from '../default/share.example.simple'

storiesOf('Engagement|Utils/Share', module).add('default', () => <ShareExample />, {
  notes: { markdown },
})
