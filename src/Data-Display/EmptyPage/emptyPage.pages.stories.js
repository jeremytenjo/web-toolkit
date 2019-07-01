import React from 'react'
import { storiesOf } from '@storybook/react'

import Chat from './Pages/emptyPage.chat'
import Schedule from './Pages/emptyPage.schedule'

storiesOf('Empty Page/Pages', module)
  .add('Chat', () => <Chat />)
  .add('Schedule', () => <Schedule />)
