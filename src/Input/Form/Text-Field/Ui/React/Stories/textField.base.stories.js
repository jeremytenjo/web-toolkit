import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Form from '../../../../Ui/React/form.index'
import { useStyles } from '../../../../../../../.storybook/Utils/useStyles'

// Test data
const placeholder = 'this is a Placeholder'

export const Variants = ({ Component: TextField }) => {
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

const All_Styles = () => {
  const req = require.context('../Styles', true, /index.js$/)
  const { Elements } = useStyles({
    req,
    Variants,
    name: 'Input/Form/Text-Field',
  })

  return Elements
}

storiesOf('Input|Form/TextField', module).add('All_Styles', () => <All_Styles />)


