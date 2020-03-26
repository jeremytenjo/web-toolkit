import React from 'react'
import { storiesOf } from '@storybook/react'

import testImage from '../../../../.storybook/customComponents/testImages/testImag.jpg'
import testImage2 from '../../../../.storybook/customComponents/testImages/test2.jpg'
import B from '../../../../.storybook/customComponents/variationBlock'
import Image from '../index'

const Variations = () => (
  <>
    <B title='default'>
      <Image src={testImage} size={400} onClick={() => console.log('Clicked')} />
    </B>

    <B title='isLazyLoaded'>
      <Image
        isLazyLoaded
        size={400}
        src={testImage2}
        onClick={() => console.log('Clicked')}
      />
    </B>
  </>
)

storiesOf('Media|Image', module).add('variations', () => <Variations />)
