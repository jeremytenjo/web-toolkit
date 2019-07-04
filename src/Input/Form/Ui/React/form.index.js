import React, { memo, useRef, useState } from 'react'

import serialize from '../../Functions/form.serialize'

import { defaultProps, propTypes } from './form.propTypes'

const Form = ({ children, onSubmitSuccess, emptyFormMessage }) => {
  const formRef = useRef(null)
  const { isEmptyForm, setisEmptyForm } = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValues = serialize(formRef.current)
    // console.log(formValues)
    if (formValues === null) return null
    if (formValues === 'empty') {
      setisEmptyForm(true)
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
