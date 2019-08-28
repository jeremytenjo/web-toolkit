import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Drawer from './drawer.index'

const Variations = () => {
  const [open, setOpen] = useState(null)

  return (
    <>
      <B title='default'>
        <button onClick={() => setOpen(true)}>OPEN</button>

        <Drawer
          open={open}
          onChange={() => setOpen(false)}
          swipeableViewsProps={{
            onTransitionEnd: () => console.log('onTransitionEnd'),
          }}
        >
          <div>
            <p> Here goes the content of your bottom sheet</p>
            <p> Here goes the content of your bottom sheet</p>
            <p> Here goes the content of your bottom sheet</p>
            <p> Here goes the content of your bottom sheet</p>
            <p> Here goes the content of your bottom sheet</p>
          </div>
        </Drawer>
      </B>
    </>
  )
}

storiesOf('Feedback|Drawer', module).add('Variations', () => <Variations />)
