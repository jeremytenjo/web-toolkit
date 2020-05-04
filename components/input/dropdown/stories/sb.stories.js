import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Dropdown from '../index'

const Variants = () => {
  return (
    <B title='Default' noBackground>
      <Dropdown />
    </B>
  )
}

// Stories
storiesOf('Input|Dropdown', module).add('Variants', () => <Variants />)
