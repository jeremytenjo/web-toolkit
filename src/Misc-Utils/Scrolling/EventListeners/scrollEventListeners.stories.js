import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import List from '../../../Data-Display/List/Ui/React/list.index'

import ScrollEnd from './scrollEnd'

// Test Data
const dataSet2 = ['block', 'block', 'block', 'block', 'block', 'block', 'block']
const itemComponent = ({ item }) => <p>{item}</p>
const containerId = 'containerId'

const Variations = () => {
  return (
    <>
      <B
        title='Trigger on Scroll End'
        contentStyle={{ height: 100, width: 200, overflow: 'auto' }}
        containerId={containerId}
      >
        <ScrollEnd>
          <List
            data={dataSet2}
            ItemComponent={itemComponent}
            direction='row'
            gap='xl'
          />
        </ScrollEnd>
      </B>
    </>
  )
}

storiesOf('Misc-Utils|Event Listeners/Scroll', module).add('Variations', () => (
  <Variations />
))
