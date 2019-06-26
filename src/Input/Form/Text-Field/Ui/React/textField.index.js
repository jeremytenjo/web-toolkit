import React, { useState, memo, useImperativeHandle, forwardRef } from 'react'

import { Wrapper, Input, IconLeftCon, IconRightCon } from './textField.styles'

const TextField = (
  {
    onChange = () => null,
    onFocus = () => null,
    type = 'text',
    name = 'UNAMEDtextField',
    validation = true,
    errMesgStyle = { color: 'red' },
    color = 'primary',
    round,
    iconLeft,
    iconRight,
    placeholder,
    onBlur = () => null,
    style,
    width,
    label,
    onLeftIconClick = () => null,
    onRightIconClick = () => null,
    autocomplete = 'off',
  },
  ref,
) => {
  // State
  const [input, setInput] = useState('')
  const [errMsg, seterrMsg] = useState(null)
  const [isValid, setisValid] = useState(validation)
  const [focus, setfocus] = useState(null)

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
  const handleValidation = () => {}

  const handleChange = async ({ target: { value } }) => {
    setInput(value)
    onChange(value)
    validation && handleValidation()
  }

  const handleFocus = () => {
    onFocus()
    setfocus(true)
  }

  const handleBlur = () => {
    onBlur()
    setfocus(false)
  }

  // Template
  return (
    <Wrapper
      color={color}
      round={round}
      isFocused={focus}
      style={style}
      width={width}
    >
      {iconLeft && (
        <IconLeftCon onClick={onLeftIconClick}>{iconLeft}</IconLeftCon>
      )}

      {label && label}

      <Input
        type={type}
        value={input}
        onChange={handleChange}
        onFocus={handleFocus}
        name={name}
        id={name}
        data-isvalidate={isValid}
        autoComplete={autocomplete}
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {errMsg !== '' && <p style={errMesgStyle}>{errMsg}</p>}

      {iconRight && (
        <IconRightCon onClick={onRightIconClick}>{iconRight}</IconRightCon>
      )}
    </Wrapper>
  )
}

export default memo(forwardRef(TextField))
// forwardRef does not support proptypes
