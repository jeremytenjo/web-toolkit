import React from 'react'
import { storiesOf } from '@storybook/react'

import testImage from '../../../../../.storybook/Custom-Components/Test-Images/testImag.jpg'
import testImage2 from '../../../../../.storybook/Custom-Components/Test-Images/test2.jpg'
import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Image from './image.index'

const Variations = () => (
  <>
    <B title='default' noBackground>
      <Image
        src={testImage}
        width={400}
        height={400}
        onClick={() => console.log('Clicked')}
      />
    </B>

    <B title='isLazyLoaded' noBackground>
      <Image
        isLazyLoaded
        src={testImage2}
        onClick={() => console.log('Clicked')}
      />
    </B>
  </>
)

storiesOf('Media|Image/Ui/React', module).add('variations', () => (
  <Variations />
))
