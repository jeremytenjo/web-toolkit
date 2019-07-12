import React, { useState, memo, useEffect, useRef } from 'react'

import toBoolean from '../../../../../Misc-Utils/String/toBoolean.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'
import animation from '../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'
import Typography from '../../../../../Data-Display/Typography/Ui/React/typography.index'

const TextField = ({
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
  font = 'primary',
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
  width = 'fit-content',
  label,
  onLeftIconClick = () => null,
  onRightIconClick = () => null,
  autocomplete = 'off',
  initialInput = '',
  clearOnSubmit = null,
}) => {
  // Refs
  const inputRef = useRef(null)
  const closeIconRef = useRef(null)
  const errMessagesRef = useRef(null)

  const config = {
    fill: 'forwards',
    duration: 100,
    direction: 'normal',
    easing: 'ease-out',
  }

  // State
  const [input, setInput] = useState(initialInput)
  const [errorMessages, seterrorMessages] = useState([])
  const [isValid, setIsValid] = useState(true)
  const [isValidFormCheck, setIsValidFormCheck] = useState(null)
  const [focus, setfocus] = useState(null)
  const noValidation = validation.length === 0

  useEffect(() => {
    startOnSubmitListener()
    return removeOnSubmitListener
  }, [])

  useEffect(() => {
    if (input !== null)
      animation({
        name: 'showHide',
        el: closeIconRef.current,
        config,
        show: input !== '',
        displayType: 'visibility',
      })
  }, [input])

  useEffect(() => {
    if (isValid !== null)
      animation({
        name: 'showHide',
        el: errMessagesRef.current,
        config,
        show: !isValid,
      })
  }, [isValid])

  useEffect(() => {
    validation && initialValidation(input)
  }, [])

  useEffect(() => {
    isValidFormCheck !== null && validation && onChangeVaildation(input)
  }, [input])

  // Functions
  const startOnSubmitListener = () => {
    const parentForm = inputRef.current.parentNode.parentNode.parentNode
    parentForm.addEventListener('submit', handleFormListener, true)
  }
  const removeOnSubmitListener = () => {
    const parentForm = inputRef.current.parentNode.parentNode.parentNode
    parentForm.removeEventListener('submit', handleFormListener)
  }

  const handleFormListener = () => {
    const isInputvalid = toBoolean(inputRef.current.dataset.isvalid)
    isInputvalid && clearOnSubmit && setInput('')

    setIsValid(isInputvalid)
    setIsValidFormCheck(isInputvalid)
  }
  const clearIconClick = () => {
    inputRef.current.focus()
    setInput('')
  }

  const initialValidation = async (value) => {
    if (noValidation) {
      setIsValid(true)
      setIsValidFormCheck(true)
      return null
    }

    const errorMessages = await checkValidation(value)
    const errorMessagesBool = !!errorMessages

    errorMessages && seterrorMessages(errorMessages)
    setIsValidFormCheck(!errorMessagesBool)
    value !== '' && setIsValid(false)
  }

  const onChangeVaildation = (value) => {
    const valid = checkValidation(value)
    setIsValid(valid)
    setIsValidFormCheck(valid)
  }

  const checkValidation = async (value) => {
    if (validation) {
      const messages = await validation.map(async (val) => {
        const mod = await import(`./Validation/textfield.${val}.js`)
        const errMessage = mod.default(value)

        if (errMessage) {
          return errMessage
        }
      })

      const allMessage = await Promise.all(messages)
      return allMessage.length > 0 ? allMessage : null
    }
  }

  const handleChange = async ({ target: { value } }) => setInput(value)

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
    <>
      <Wrapper
        color={color}
        round={round}
        isFocused={focus}
        style={style}
        width={width}
        foregroundColor={foregroundColor}
        backgroundColor={backgroundColor}
        textColor={textColor}
        isValid={isValid}
      >
        {iconLeft && (
          <IconLeftCon onClick={onLeftIconClick}>
            <Icon
              name={iconLeft}
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
            data-isvalid={isValidFormCheck}
            type={type}
            value={input}
            onChange={handleChange}
            onFocus={handleFocus}
            name={name}
            id={name}
            autoComplete={autocomplete}
            placeholder={placeholder}
            onBlur={handleBlur}
            font={font}
          />

          <CloseIconCon
            ref={closeIconRef}
            textColor={textColor}
            style={{ visibility: 'hidden' }}
          >
            <Icon
              name='close/material'
              onClick={clearIconClick}
              size={16}
              fill='black'
              style={{
                height: '100%',
              }}
            />
          </CloseIconCon>
        </InputCon>

        {iconRight && (
          <IconRightCon onClick={onRightIconClick}>
            <Icon
              name={iconRight}
              noBackground
              style={{
                height: '100%',
              }}
            />
          </IconRightCon>
        )}
      </Wrapper>
      <div
        data-cy='textfield_errorMessages'
        ref={errMessagesRef}
        style={{ marginTop: 10, display: 'none' }}
      >
        {errorMessages.map((message) => (
          <Typography
            key={message}
            text={message}
            color='red'
            variant='body2'
          />
        ))}
      </div>
    </>
  )
}

export default memo(TextField)
