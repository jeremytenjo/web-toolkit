import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Button from '../../button/styles/base'
// Inputs
import TextField from '../textField/styles/1/index'

import Form from '..'

const General = () => {
  const [result, setresult] = useState('')
  const handleSubmitSuccess = (values) => {
    console.log(values)
    setresult('success')
  }
  const handleSubmitFail = () => setresult('fail')

  return (
    <B title='default'>
      <Form onSubmitSuccess={handleSubmitSuccess} onSubmitFail={handleSubmitFail}>
        <TextField
          type='text'
          placeholder='textfield1'
          name='textfield1'
          validation={[{ name: 'required' }]}
        />

        <br />

        <Button
          dataCy='upload_button'
          text='Upload'
          color='secondary'
          inputProps={{
            errorMessage: 'Please upload profile picture',
            name: 'file_upload',
          }}
        />

        <br />

        <Button type='submit' dataCy='form_submit_button' text='Submit' />
      </Form>

      <br />

      <p data-cy='form_result'>Result: {result}</p>
    </B>
  )
}

storiesOf('Input|Form', module).add('Full Example', () => <General />)
