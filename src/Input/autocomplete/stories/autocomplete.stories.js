import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Autocomplete from '../index'

const Variants = () => {
  return (
    <>
      <B title='Default' noBackground>
        <Autocomplete />
      </B>
    </>
  )
}

// Stories
storiesOf('Input|Autocomplete', module).add('Variants', () => <Variants />)
