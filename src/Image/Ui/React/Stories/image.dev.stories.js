import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from '../image.index'

// Test Data
const testSrc = 'https://i.stack.imgur.com/Zb0vXm.jpg'

storiesOf('Image/Dev', module).add('dev', () => <Image src={testSrc} />)
