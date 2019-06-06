import React from 'react'
import { storiesOf } from '@storybook/react'

import Linear from './linear.index'

storiesOf('Feedback|Progress/Ui/React/Linear', module)
  .add('Linear', () => <Linear color='primary' />)
  .add('Secondary', () => <Linear color='secondary' />)
