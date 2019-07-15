import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import FileInput from './fileInput.index'

const Variations = () => (
  <>
    <B title='Single File' noBackground style={{ width: 'auto' }}>
      <FileInput onInput={(e) => console.log(e)}>Upload</FileInput>
    </B>

    <B title='Multiple Files' noBackground style={{ width: 'auto' }}>
      <FileInput multiple onInput={(e) => console.log(e)}>
        Upload Multiple
      </FileInput>
    </B>
  </>
)

storiesOf('Files/React', module).add('Multiple', () => <Variations />)
