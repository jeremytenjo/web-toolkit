import React, { useState } from 'react'

import B from '../../../../../.storybook/customComponents/variationBlock'
import Form from '../..'
import { useVariants } from '../../../../../.storybook/utils/useVariants'

// Test data
const placeholder = 'this is a Placeholder'

const Variants = ({ Component: TextField }) => {
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

export default () => {
  const req = require.context('../styles', true, /index.js$/)
  const { Elements } = useVariants({
    req,
    Variants,
    dir: 'input/form/textField',
  })

  return Elements
}
