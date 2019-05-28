import React from 'react'
import { storiesOf } from '@storybook/react'

import filter from './array.filter'

const ArrayofStrings = () => {
  const dataset = ['1', '2', '3']
  const result = filter(dataset)

  return <>Result: {result}</>
}

storiesOf('Misc-Utils|Array/Filter', module).add(
  'Array of Strings',
  <ArrayofStrings />,
)
