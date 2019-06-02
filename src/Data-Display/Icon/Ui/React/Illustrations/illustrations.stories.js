import React from 'react'
import { storiesOf } from '@storybook/react'

import Chat from './illustrations.chat'
import Schedule from './illustrations.schedule'

storiesOf('Illustrations', module)
  .add('Chat', () => <Chat />)
  .add('Schedule', () => <Schedule />)
