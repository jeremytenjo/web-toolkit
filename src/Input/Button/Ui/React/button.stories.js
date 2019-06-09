import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Button from './button.index'

const Variations = () => {
  return (
    <>
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
        <Button iconName='camera' />
      </B>
      <B title='FAB'>
        <Button iconName='camera' type='FAB' />
      </B>
    </>
  )
}

storiesOf('Input|Button/Ui/React', module).add('Variations', () => (
  <Variations />
))
