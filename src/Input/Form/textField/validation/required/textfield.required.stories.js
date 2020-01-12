import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/customComponents/variationBlock/variationBlock.index'
import Button from '../../../../button/styles/1'
import Form from '../../../'
import TextField from '../../styles/1'

// Test data
const placeholder = 'this is a Placeholder'

const Variations = () => {
  const [submitValue, setsubmitValue] = useState(null)
  const handleSubmit = ({ exampleField1 }) => {
    setsubmitValue(exampleField1)
  }

  return (
    <>
      <B title='required'>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField
            placeholder={placeholder}
            name='exampleField1'
            errorMessage='this is an error message'
            validation={[{ name: 'required', message: 'Input required in this field' }]}
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
storiesOf('Input|Form/TextField/Validation', module).add('Required', () => <Variations />)
