import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import stubs from '../stubs'
import Calendar from '../'

const Variations = () => (
  <B title='Default' background>
    <Calendar events={stubs} onDateSelect={(e) => console.log(e)} />
  </B>
)

storiesOf('Dates|Calendar', module).add('Variations', () => <Variations />)
