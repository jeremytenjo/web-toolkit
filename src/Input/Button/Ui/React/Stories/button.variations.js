import React from 'react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Typography from '../../../../../Data-Display/Typography/Ui/React/typography.index'

const Variations = ({ Button, name }) => {
  return (
    <div>
      <Typography
        text={name}
        variant='h6'
        color='white'
        fontWeight='bold'
        paddingLeft='20px'
      />

      <B title='color - primary'>
        <Button color='primary' />
      </B>
      <B title='alternative color'>
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
