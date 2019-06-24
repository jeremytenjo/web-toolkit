import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from '../../../../Media/Image/Ui/React/image.index'
import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import List from './list.index'

// Test Data
const dataSet1 = ['block', 'block', 'block', 'block']
const dataSet2 = ['block', 'block', 'block', 'block', 'block', 'block', 'block']
const dataSetImages = [
  {
    src:
      'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src:
      'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src:
      'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src:
      'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src:
      'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src:
      'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src:
      'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
]

const itemComponent = ({ item }) => <p>{item}</p>

const Variations = () => (
  <>
    <B title='Direction - Vertical'>
      <List data={dataSet1} ItemComponent={itemComponent} direction='row' />
    </B>

    <B title='Direction - Horizontal'>
      <List data={dataSet2} ItemComponent={itemComponent} direction='column' />
    </B>

    <B title='Direction - Horizontal - Overflow' style={{ width: '50%' }}>
      <List
        data={dataSet2}
        ItemComponent={itemComponent}
        direction='column'
        gap='xxl'
        overflows
      />
    </B>

    <B title='with Children'>
      <List direction='column'>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </List>
    </B>

    <B title='Grid'>
      <List
        data={dataSet2}
        ItemComponent={itemComponent}
        grid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
      />
    </B>

    <B title='photoGrid' style={{ width: '100%' }}>
      <List
        data={dataSetImages}
        ItemComponent={Image}
        photoGrid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
        onItemClick={(e) => console.log(e)}
      />
    </B>
  </>
)

storiesOf('Data-Display|List/Ui/React', module).add('Variations', () => (
  <Variations />
))
