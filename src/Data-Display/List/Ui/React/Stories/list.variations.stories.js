import React from 'react'
import { storiesOf } from '@storybook/react'

import VariationBlock from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import List from '../list.index'

// Test Data
const testData = ['hello', 'hello', 'hello', 'hello']
const itemComponent = ({ item }) => <p>{item}</p>

const Variations = () => (
  <>
    <VariationBlock title='Direction - Vertical'>
      <List data={testData} ItemComponent={itemComponent} direction='row' />
    </VariationBlock>

    <VariationBlock title='Direction - Horizontal'>
      <List data={testData} ItemComponent={itemComponent} direction='column' />
    </VariationBlock>
  </>
)

storiesOf('Ui|Display-Data/List/React', module).add('Variations', () => (
  <Variations />
))
