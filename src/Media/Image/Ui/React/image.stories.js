import React from 'react'
import { storiesOf } from '@storybook/react'

import testImage from '../../../../../.storybook/Custom-Components/Test-Images/testImag.jpg'
import testImage2 from '../../../../../.storybook/Custom-Components/Test-Images/test2.jpg'
import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Image from './image.index'

const Variations = () => (
  <>
    <B title='default'>
      <Image src={testImage} width={400} height={400} />
    </B>

    <B title='isLazyLoaded'>
      <Image isLazyLoaded src={testImage2} />
    </B>
  </>
)

storiesOf('Media|Image/React', module).add('variations', () => <Variations />)
