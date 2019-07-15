import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Button from '../../../Button/Ui/React/Styles/button.1.index'
// Inputs
import TextField from '../../Text-Field/Ui/React/Styles/textfield.1.index'

import markdown from './form.readme.md'
import Form from './form.index'

const General = () => {
  const [result, setresult] = useState('')
  const handleSubmitSuccess = (values) => {
    console.log(values)
    setresult('success')
  }
  const handleSubmitFail = () => setresult('fail')

  return (
    <>
      <B title='default'>
        <Form
          onSubmitSuccess={handleSubmitSuccess}
          onSubmitFail={handleSubmitFail}
        >
          <TextField
            type='text'
            placeholder='textfield1'
            name='textfield1'
            validation={[{ name: 'required' }]}
          />

          <br />

          <Button
            data-cy='upload_button'
            text='Upload'
            color='secondary'
            name='file_upload'
            inputProps={{ errorMessage: 'Please upload profile picture' }}
          />

          <br />

          <Button type='submit' data-cy='form_submit_button' text='Submit' />
        </Form>

        <br />

        <p data-cy='form_result'>Result: {result}</p>
      </B>
    </>
  )
}

storiesOf('Input|Form', module).add('Full Example', () => <General />, {
  notes: { markdown },
})
