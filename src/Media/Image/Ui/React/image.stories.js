import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Image from './image.index'

// Test Data
const testSrc = 'https://pbs.twimg.com/media/DsidDmwXcAAwG9i.jpg:large'

const Variations = () => (
  <>
    <B title='default'>
      <Image src={testSrc} />
    </B>

    <B title='Skeleton'>
      <Image skeleton />
    </B>
  </>
)

storiesOf('Media|Image', module).add('variaitons', () => <Variations />)
