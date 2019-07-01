import React from 'react'
import { storiesOf } from '@storybook/react'

import Ratings from './ratings.index'

storiesOf('Ratings', module)
  .add('Default', () => <Ratings rating={5} />)
  .add('Les numers', () => <Ratings rating={3} />)
