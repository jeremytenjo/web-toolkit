import React, { memo, useRef, useState } from 'react'

import getValues from './functions/form.getValues'
import checkInvalidValues from './functions/checkInvalidValues'
import { defaultProps, propTypes } from './propTypes'

const Form = ({ children, onSubmitSuccess, onSubmitFail, emptyFormMessage }) => {
  const formRef = useRef(null)
  const { isEmptyForm, setisEmptyForm } = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formEl = formRef.current

    // Handle Invalid Inputs
    const hasInvalid = checkInvalidValues(formEl)
    if (hasInvalid) {
      onSubmitFail()
      return null
    }

    // Handle Values
    const formValues = getValues(formEl)

    if (formValues === null) return null
    if (formValues === 'empty') {
      setisEmptyForm(true)
      onSubmitFail()
      return null
    }

    onSubmitSuccess(formValues)
  }

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {children}
      {isEmptyForm && <p>{emptyFormMessage}</p>}
    </form>
  )
}

Form.defaultProps = defaultProps
Form.propTypes = propTypes

export default memo(Form)
