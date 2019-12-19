import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Form from '../../../../Ui/React/form.index'
import markdown from '../textField.readme.md'
import TextField from '../Styles/1'

// Test data
const placeholder = 'this is a Placeholder'

export const States = ({ TextField }) => {
  const [f, setsubmitValue] = useState(null)
  const handleSubmit = ({ exampleField }) => {
    setsubmitValue(exampleField)
  }

  return (
    <>
      <B title='default' noBackground>
        <TextField placeholder={placeholder} name='default_textfield' />
      </B>

      <B title='clear after input' noBackground>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField placeholder={placeholder} name='textfield2' clearOnSubmit />
        </Form>
      </B>
      <B title='save input in session storage' noBackground>
        <Form onSubmitSuccess={handleSubmit}>
          <TextField
            placeholder={placeholder}
            name='textfieldsetInSessionStorage'
            setInSessionStorage
          />
        </Form>
      </B>

      <B title='color=secondary' noBackground>
        <TextField color='secondary' placeholder={placeholder} />
      </B>

      <B title='all color' noBackground>
        <TextField
          placeholder={placeholder}
          backgroundColor='primaryLighter'
          textColor='primaryDarker'
          foregroundColor='primaryDarker'
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
  'Base',
  () => <States TextField={TextField} />,
  {
    notes: { markdown },
  },
)
