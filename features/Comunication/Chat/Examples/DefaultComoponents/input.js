// Vendors
import React, { useState, useImperativeHandle, forwardRef } from 'react'

// Main
const Input = ({ onChange = null, onFocus = null, type = 'text' }, ref) => {
  // State
  const [inputMessageValue, setInputMessageValue] = useState('')

  // Shared Functions
  useImperativeHandle(ref, () => ({
    clearInput() {
      clearInput()
    },
  }))

  // Functions
  const clearInput = () => setInputMessageValue('')

  const handleChange = ({ target: { value } }) => {
    setInputMessageValue(value)
    onChange(value)
  }

  // Template
  return (
    <input
      type={type}
      onChange={handleChange}
      value={inputMessageValue}
      onFocus={onFocus}
    />
  )
}

export default forwardRef(Input)
// forwardRef does not support proptypes
