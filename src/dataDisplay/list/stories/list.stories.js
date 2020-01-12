import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from '../../../media/image'
import B from '../../../../.storybook/customComponents/variationBlock/variationBlock.index'
import List from '../index'

import markdown from './list.readme.md'

// Test Data
const dataSet1 = ['block', 'block', 'block', 'block']
const dataSet2 = ['block', 'block', 'block', 'block', 'block', 'block', 'block']
const dataSetimages = [
  {
    src: 'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src: 'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src: 'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src: 'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src: 'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src: 'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
  {
    src: 'http://www.sclance.com/wallpapers/wallpaper-walli/wallpaper-walli_1962686.jpg',
  },
]

const itemComponent = ({ item }) => <p>{item}</p>

const Variations = () => (
  <>
    <B title='Direction - Vertical' background>
      <List data={dataSet1} ItemComponent={itemComponent} direction='row' />
    </B>

    <B title='Direction - Horizontal' background>
      <List data={dataSet2} ItemComponent={itemComponent} direction='column' />
    </B>

    <B
      title='Direction - Horizontal - Overflow'
      background
      contentStyle={{ width: '50%', padding: 0 }}
    >
      <List data={dataSet2} ItemComponent={itemComponent} direction='column' overflows />
    </B>

    <B title='with Children' background>
      <List direction='column'>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </List>
    </B>

    <B title='Grid' background>
      <List
        data={dataSet2}
        ItemComponent={itemComponent}
        grid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
      />
    </B>

    <B title='photoGrid' style={{ width: '100%' }} background>
      <List
        data={dataSetimages}
        ItemComponent={Image}
        photoGrid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
        onItemClick={(e) => console.log(e)}
      />
    </B>

    <B title='onScrollEnd' style={{ width: '100%' }} background>
      <List
        data={dataSetimages}
        ItemComponent={Image}
        photoGrid
        repeat={3}
        repeatOnMinWidth={4}
        minWidth={800}
        onItemClick={(e) => console.log(e)}
        direction='row'
        gap='xl'
        style={{ height: 100, overflow: 'scroll' }}
        onScrollEnd={() => console.log('Reached Bottom')}
      />
    </B>
  </>
)

storiesOf('Data-Display|List', module).add('Variations', () => <Variations />, {
  notes: { markdown },
})
