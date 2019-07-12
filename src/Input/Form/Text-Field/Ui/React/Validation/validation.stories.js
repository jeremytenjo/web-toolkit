import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Button from '../../../../../Button/Ui/React/Styles/style1.index'
import Form from '../../../../Ui/React/form.index'
import markdown from '../textField.readme.md'
import TextField from '../Styles/textfield.1.index'

// Test data
const placeholder = 'this is a Placeholder'

const Variations = () => {
  const [submitValue, setsubmitValue] = useState(null)
  const handleSubmit = ({ exampleField }) => {
    setsubmitValue(exampleField)
  }

  return (
    <>
      <B title='no validation'>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField placeholder={placeholder} name='exampleField1' />
          <br />
          <Button type='submit' text='Submit' color='secondary' />
          <br />
          <br />
          <span>value:{submitValue}</span>
        </Form>
      </B>

      <B title='required'>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField
            placeholder={placeholder}
            name='exampleField2'
            errorMessage='this is an error message'
            validation={['required']}
          />
          <br />
          <Button
            dataCy='textfield_submitButton'
            type='submit'
            text='Submit'
            color='secondary'
          />
          <br />
          <br />
          <span>value:{submitValue}</span>
        </Form>
      </B>
    </>
  )
}

// Stories
storiesOf('Input|Form/TextField', module).add(
  'Validation',
  () => <Variations />,
  {
    notes: { markdown },
  },
)
