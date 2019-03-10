// Vendors
import React, { useState, memo, useImperativeHandle, forwardRef } from 'react'

// Main
const Input = (
  {
    onChange = () => null,
    onFocus = () => null,
    type = 'text',
    errMsg = '',
    errMesgStyle = { color: 'red' },
    placeholder = '',
    style = {},
  },
  ref,
) => {
  // State
  const [input, setInput] = useState('')

  // Shared Functions
  useImperativeHandle(ref, () => ({
    clearInput() {
      clearInput()
    },
    getCurrentValue() {
      getCurrentValue()
    },
  }))

  // Functions
  const clearInput = () => setInput('')
  const getCurrentValue = () => input

  const handleChange = async ({ target: { value } }) => {
    setInput(value)
    onChange(value)
  }

  // Template
  return (
    <>
      <input
        type={type}
        value={input}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        style={style}
      />
      {errMsg !== '' && <p style={errMesgStyle}>{errMsg}</p>}
    </>
  )
}

// Exports
export default memo(forwardRef(Input))
// forwardRef does not support proptypes
