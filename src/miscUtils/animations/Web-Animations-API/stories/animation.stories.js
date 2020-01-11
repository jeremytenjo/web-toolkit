import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Example from './animation.example'

const variationsReq = require.context('./Types', true, /.js$/)
const animationTypesPaths = variationsReq.keys()

const Variations = () => {
  return (
    <>
      {animationTypesPaths.map((path) => {
        const type = path.split('.')[2]
        return (
          <B title={type} key={path}>
            <Example type={type} />
          </B>
        )
      })}
    </>
  )
}

storiesOf('Misc-Utils|Aniamation/Web Animation API', module).add('variations', () => (
  <Variations />
))
