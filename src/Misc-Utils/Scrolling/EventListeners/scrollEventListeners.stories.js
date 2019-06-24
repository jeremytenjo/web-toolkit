import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import List from '../../../Data-Display/List/Ui/React/list.index'

// Test Data
const dataSet2 = ['block', 'block', 'block', 'block', 'block', 'block', 'block']
const itemComponent = ({ item }) => <p>{item}</p>

const Variations = () => {
  return (
    <>
      <B title='Trigger on Scroll End'>
        <List
          data={dataSet2}
          ItemComponent={itemComponent}
          repeat={3}
          repeatOnMinWidth={4}
          minWidth={800}
          onItemClick={(e) => console.log(e)}
          direction='row'
          gap='xl'
          style={{ height: 100, overflow: 'scroll' }}
          onScrollEnd={() => alert('Reached Bottom')}
        />
      </B>
    </>
  )
}

storiesOf('Misc-Utils|Event Listeners/Scroll', module).add('Variations', () => (
  <Variations />
))
