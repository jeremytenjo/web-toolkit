import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import TextField from '../../Text-Field/Ui/React/Styles/textfield.1.index'

import markdown from './form.readme.md'
import Form from './form.index'

const General = () => (
  <>
    <B title='default'>
      <Form>
        <TextField type='text' name='textField' validation={['required']} />
        <TextField type='number' name='numberField' validation={['required']} />
        <input type='checkbox' name='vehicle' href='vehicle' value='Bike' />
        <select name='selection'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </select>
        <button type='submit'>Submit</button>
      </Form>
    </B>
  </>
)

storiesOf('Input|Form', module).add('Full Example', () => <General />, {
  notes: { markdown },
})
