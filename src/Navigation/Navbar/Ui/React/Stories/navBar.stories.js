import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Bar from '../Base/navBar.index'

import data from './navBar.links'

const testFileInput = (file) => {
  console.log(file)
}

const Variations = () => (
  <>
    <B title='Example 1' noBackground style={{ width: 'auto' }}>
      <Bar data={data} activeColor='primary' defaultColor='grey' />
    </B>
  </>
)

storiesOf('Navigation|Nav Bar/React', module).add('Example', () => (
  <Variations />
))
