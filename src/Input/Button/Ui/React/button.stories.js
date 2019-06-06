import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './button.index'

storiesOf('Input|Button/Ui/React', module)
  .add('Primary', () => <Button color='primary' />)
  .add('Secondary', () => <Button color='secondary' />)
  .add('Active', () => <Button active />)
  .add('Disabled', () => <Button disabled />)
  .add('Outlined', () => <Button outlined />)
  .add('Outlined', () => <Button outlined />)
  .add('with Icon', () => <Button iconName='camera' />)
  .add('FAB', () => <Button iconName='camera' type='FAB' />)
