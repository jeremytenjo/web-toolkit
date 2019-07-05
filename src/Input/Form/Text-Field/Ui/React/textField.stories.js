import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Button from '../../../../Button/Ui/React/Styles/1'
import Form from '../../../Ui/React/form.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'

import TextField from './Styles/1'

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

      <B title='round'>
        <TextField round placeholder={placeholder} />
      </B>
      <B title='Icon Left'>
        <TextField
          placeholder={placeholder}
          iconLeft={
            <Icon name='plus/material' color='secondary' noBackground />
          }
        />
      </B>
      <B title='Icon  right'>
        <TextField
          placeholder={placeholder}
          iconRight={
            <Icon name='plus/material' color='secondary' noBackground />
          }
        />
      </B>
    </>
  )
}

// Stories
storiesOf('Input|Form/TextField', module).add('Variations', () => (
  <Variations />
))
