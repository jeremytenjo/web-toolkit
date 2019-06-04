import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import List from '../../../Data-Display/List/Ui/React/list.index'

import useEndScroll from './scrollEventListeners.index'

// Test Data
const dataSet2 = ['block', 'block', 'block', 'block', 'block', 'block', 'block']
const itemComponent = ({ item }) => <p>{item}</p>
const containerId = 'containerId'

const Variations = () => {
  const ChildComp = () => {
    const elToWatched = document.querySelector(containerId)
    const handleScrollEnd = () => {
      // TODO: enusre is only triggered when reched end
      console.log('Scrolled to end')
    }

    const hi = useEndScroll({
      elToWatched,
      enabled: true,
    })
      ? handleScrollEnd()
      : null
    return (
      <>
        <List
          data={dataSet2}
          ItemComponent={itemComponent}
          direction='row'
          gap='xl'
        />
      </>
    )
  }

  return (
    <>
      <B
        title='Trigger on Scroll End'
        contentStyle={{ height: 100, width: 200, overflow: 'auto' }}
        containerId={containerId}
      >
        <ChildComp />
      </B>
    </>
  )
}

storiesOf('Misc-Utils|Event Listeners/Scroll', module).add('Variations', () => (
  <Variations />
))
