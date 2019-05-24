import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from '../../../../../.storybook/CustomComponents/title'
import Image from '../image.index'

// Test Data
const testSrc = 'https://pbs.twimg.com/media/DsidDmwXcAAwG9i.jpg:large'

const Variations = () => (
  <>
    <Title>default</Title>
    <Image src={testSrc} />
    <Title>Skeleton</Title>
    <Image skeleton />
  </>
)

storiesOf('Image/Variations', module)
  .add('all', () => <Variations />)
  .add('Skeleton', () => <Variations Skeleton />)
