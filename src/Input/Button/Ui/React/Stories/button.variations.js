import React from 'react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

const Variations = ({ Button }) => {
  return (
    <div>
      <B title='color - primary'>
        <Button color='primary' />
      </B>
      <B title='color - secondary'>
        <Button color='secondary' />
      </B>
      <B title='active'>
        <Button active />
      </B>
      <B title='disabled'>
        <Button disabled />
      </B>
      <B title='outlined' color='black'>
        <Button outlined />
      </B>
      <B title='iconName'>
        <Button iconName='camera/material' />
      </B>
      <B title='FAB'>
        <Button iconName='camera/material' type='FAB' />
      </B>
    </div>
  )
}

export default Variations
