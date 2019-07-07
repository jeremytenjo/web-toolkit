import React, {
  useState,
  memo,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
} from 'react'

import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'
import animation from '../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

const TextField = (
  {
    Wrapper,
    Input,
    IconLeftCon,
    IconRightCon,
    InputCon,
    CloseIconCon,
    onFocus = () => null,
    type = 'text',
    name = 'UNAMEDtextField',
    validation = [],
    errMesgStyle = { color: 'red' },
    color = 'white',
    foregroundColor = 'primary',
    backgroundColor = 'white',
    textColor = 'black',
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
    initialInput = '',
    clearOnSubmit = null,
  },
  ref,
) => {
  // Refs
  const inputRef = useRef(null)
  const closeIconRef = useRef(null)

  const config = {
    fill: 'forwards',
    duration: 100,
    direction: 'normal',
    easing: 'ease-out',
  }

  // State
  const [input, setInput] = useState(initialInput)
  const [errMsg, seterrMsg] = useState(null)
  const [isValid, setisValid] = useState(true)
  const [focus, setfocus] = useState(null)

  useEffect(() => {
    clearOnSubmit && startOnSubmitListener()
    return removeOnSubmitListener
  }, [])

  useEffect(() => {
    if (input !== null)
      animation({
        name: 'showHide',
        el: closeIconRef.current,
        config,
        show: input !== '',
      })
  }, [input])

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
  const startOnSubmitListener = () => {
    const parentForm = inputRef.current.parentNode.parentNode.parentNode
    parentForm.addEventListener('submit', handleFormListener, true)
  }
  const removeOnSubmitListener = () => {
    const parentForm = inputRef.current.parentNode.parentNode.parentNode
    parentForm.removeEventListener('submit', handleFormListener, true)
  }

  const handleFormListener = () => isValid && setInput('')

  const clearInput = () => setInput('')
  const getCurrentValue = () => input
  const handleValidation = () => {}

  const handleChange = async ({ target: { value } }) => {
    setInput(value)
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
      foregroundColor={foregroundColor}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {iconLeft && (
        <IconLeftCon onClick={onLeftIconClick}>
          <Icon
            name={iconLeft}
            onClick={clearInput}
            noBackground
            style={{
              height: '100%',
            }}
          />
        </IconLeftCon>
      )}

      {label && label}

      <InputCon>
        <Input
          ref={inputRef}
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

        <CloseIconCon ref={closeIconRef} textColor={textColor}>
          <Icon
            name='close/material'
            onClick={clearInput}
            size={16}
            fill='black'
            style={{
              height: '100%',
            }}
          />
        </CloseIconCon>
      </InputCon>

      {errMsg !== '' && <p style={errMesgStyle}>{errMsg}</p>}

      {iconRight && (
        <IconRightCon onClick={onRightIconClick}>
          <Icon
            name={iconRight}
            onClick={clearInput}
            noBackground
            style={{
              height: '100%',
            }}
          />
        </IconRightCon>
      )}
    </Wrapper>
  )
}

export default memo(forwardRef(TextField))
// forwardRef does not support proptypes
