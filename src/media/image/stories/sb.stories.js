import React from 'react'
import { storiesOf } from '@storybook/react'

import testImage from '../../../../.storybook/customComponents/testImages/testImag.jpg'
import testImageBase64 from '../../../../.storybook/customComponents/testImages/testImag-base64'
import testImage2 from '../../../../.storybook/customComponents/testImages/test2.jpg'
import B from '../../../../.storybook/customComponents/variationBlock'
import Image from '../index'

const Variations = () => (
  <>
    <B title='default'>
      <Image
        src={testImage}
        styles={{ width: '300px', height: '300px' }}
        onClick={() => console.log('Clicked')}
      />
    </B>

    <B title='with base64'>
      <Image
        base64={testImageBase64}
        src={testImage}
        styles={{ width: '300px', height: '300px' }}
        onClick={() => console.log('Clicked')}
      />
    </B>

    <B title='isLazyLoaded'>
      <Image
        isLazyLoaded
        styles={{ width: '400px', height: '400px' }}
        src={testImage2}
        onClick={() => console.log('Clicked')}
      />
    </B>
  </>
)

storiesOf('Media|Image', module).add('variations', () => <Variations />)
