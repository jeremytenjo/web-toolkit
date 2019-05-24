import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from './image.index'

// Test Data
const testSrc = 'https://i.stack.imgur.com/Zb0vXm.jpg'

storiesOf('Image', module)
  .add('default', () => <Image src={testSrc} />)
  .add('skeleton', () => <Image skeleton />)
