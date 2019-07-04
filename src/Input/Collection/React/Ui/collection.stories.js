import React from 'react'
import { storiesOf } from '@storybook/react'
import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Collection from './collection.index'
import Chip from '../../../../Data-Display/Chip/Ui/React/chip.index'

const Variations = () => {
  return (
    <>
      <B title='default' noBackground>
        <Collection
          ItemComponent={Chip}
          itemComponentTextKey='text'
          onItemClick={() => 'function to remove elem,ent'}
          onItemAdded={() => 'function to add to databse etc'}
          placeholder='add'
        />
      </B>
    </>
  )
}

storiesOf('Input|Collection', module).add('default', () => <Variations />)
