import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/customComponents/variationBlock'

import Example from './variants'

const variationsReq = require.context('../presets', true, /.js$/)
const animationTypesPaths = variationsReq.keys()

const Variations = () => {
  return animationTypesPaths.map((path) => {
    const type = path
      .split('/')
      .join('')
      .split('.')[1]
    return (
      <B title={type} key={path}>
        <Example type={type} />
      </B>
    )
  })
}

storiesOf('Misc-Utils|Animation/Web Animations API', module).add('variations', () => (
  <Variations />
))
