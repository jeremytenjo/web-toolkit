import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Button from '../../../../Button/Ui/React/Styles/style1.index'
import Form from '../../../Ui/React/form.index'

import markdown from './textField.readme.md'
import TextField from './Styles/style1.index'

// Test data
const placeholder = 'this is a Placeholder'

const Variations = () => {
  const [submitValue, setsubmitValue] = useState(null)
  const handleSubmit = ({ exampleField }) => {
    setsubmitValue(exampleField)
  }

  return (
    <>
      <B title='default' noBackground>
        <TextField placeholder={placeholder} />
      </B>

      <B title='clear after input' noBackground>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField
            placeholder={placeholder}
            name='textfield2'
            clearOnSubmit
          />
        </Form>
      </B>

      <B title='with parent form'>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField placeholder={placeholder} name='exampleField' />
          <br />
          <Button type='submit' text='Submit' color='secondary' />
          <br />
          <br />
          <span>value:{submitValue}</span>
        </Form>
      </B>

      <B title='with parent form - validation - required'>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField
            placeholder={placeholder}
            name='exampleField'
            validation={['required']}
          />
          <br />
          <Button type='submit' text='Submit' color='secondary' />
          <br />
          <br />
          <span>value:{submitValue}</span>
        </Form>
      </B>

      <B title='color=secondary'>
        <TextField color='secondary' placeholder={placeholder} />
      </B>

      <B title='all color' noBackground>
        <TextField
          placeholder={placeholder}
          backgroundColor='primary-background'
          textColor='primary-darker'
          foregroundColor='primary-darker'
        />
      </B>

      <B title='round' noBackground>
        <TextField round placeholder={placeholder} />
      </B>
      <B title='Icon Left' noBackground>
        <TextField placeholder={placeholder} iconLeft='plus/material' />
      </B>
      <B title='Icon  right' noBackground>
        <TextField placeholder={placeholder} iconRight='plus/material' />
      </B>
      <B title='Icon  right round' noBackground>
        <TextField placeholder={placeholder} round iconRight='plus/material' />
      </B>
    </>
  )
}

// Stories
storiesOf('Input|Form/TextField', module).add(
  'Variations',
  () => <Variations />,
  {
    notes: { markdown },
  },
)
