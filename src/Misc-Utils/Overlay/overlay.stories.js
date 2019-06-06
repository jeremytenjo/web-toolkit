import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Overlay from './overlay.index'

const Variations = () => {
  const [show, setshow] = useState(null)
  return (
    <>
      <B title='default'>
        <button onClick={() => setshow(true)}>show overlay</button>
        <Overlay show={show} onClick={() => setshow(false)} />
      </B>
    </>
  )
}

storiesOf('Misc-Utils|Overlay/Ui/React', module).add('variations', () => (
  <Variations />
))
