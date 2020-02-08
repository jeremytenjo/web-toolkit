import React, { useState, memo, useEffect, useRef } from 'react'

import toBoolean from '../../../utils/string/toBoolean'
import Icon from '../../../dataDisplay/icon'
import Animation from '../../../miscUtils/animations/Web-Animations-API'
import Typography from '../../../dataDisplay/typography'

import { defaultProps, propTypes } from './propTypes'

const TextField = ({
  Wrapper,
  Input,
  IconLeftCon,
  IconRightCon,
  InputCon,
  CloseIconCon,
  onFocus,
  type,
  name,
  validation,
  font,
  color,
  foregroundColor,
  backgroundColor,
  textColor,
  round,
  iconLeft,
  iconRight,
  placeholder,
  onBlur,
  style,
  width,
  label,
  onLeftIconClick,
  onRightIconClick,
  onInput,
  autocomplete,
  initialInput,
  clearOnSubmit,
  dataCy,
  setInSessionStorage,
}) => {
  // Refs
  const inputRef = useRef(null)
  const closeIconRef = useRef(null)
  const errMessagesRef = useRef(null)

  const hasValidation = validation.length > 0
  const animationType = 'showHide'

  // State
  const [input, setInput] = useState(initialInput)
  const [errorMessages, seterrorMessages] = useState([])
  // Tracks validilty with react
  const [isValid, setIsValid] = useState(true)
  // Tracks validilty with data attribute for use with Form component
  const [isValidFormCheck, setIsValidFormCheck] = useState(null)
  const [focus, setfocus] = useState(null)

  useEffect(() => {
    initialValidation(input)
    startOnSubmitListener()

    if (setInSessionStorage) {
      let sessionInput = sessionStorage.getItem(name)
      if (sessionInput !== '') setInput(sessionInput)
    }

    return removeOnSubmitListener
  }, [])

  useEffect(() => {
    isValidFormCheck !== null && hasValidation && onChangeVaildation(input)
    if (setInSessionStorage && input !== '') sessionStorage.setItem(name, input)
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

  const onClearIconClick = () => {
    inputRef.current.focus()
    setInput('')
    onInput('')
  }

  const initialValidation = async (value) => {
    if (!hasValidation) {
      setIsValid(true)
      setIsValidFormCheck(true)
    } else {
      const errorMessages = await checkValidation(value)
      const hasErrorMessages = errorMessages.includes(undefined)

      errorMessages && seterrorMessages(errorMessages)
      setIsValidFormCheck(hasErrorMessages)
    }
  }

  const onChangeVaildation = async (value) => {
    const errorMessages = await checkValidation(value)
    errorMessages && seterrorMessages(errorMessages)

    const hasErrorMessages = errorMessages.includes(undefined)
    setIsValidFormCheck(hasErrorMessages)
    setIsValid(hasErrorMessages)
  }

  const checkValidation = async (value) => {
    if (hasValidation) {
      const messages = await validation.map(async ({ name, message }) => {
        const mod = await import(`./validation/${name}`)
        const errMessage = mod.default({ value, message })

        if (errMessage) return errMessage
      })

      const allerrorMessages = await Promise.all(messages)
      return allerrorMessages.length > 0 ? allerrorMessages : null
    }
  }

  const handleChange = async ({ target: { value } }) => {
    onInput(value)
    setInput(value)
  }

  const handleFocus = () => {
    onFocus()
    setfocus(true)
  }

  const handleBlur = () => {
    onBlur()
    setfocus(false)
  }

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
        {/* Left Icon */}
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

        {/* Input */}
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
            data-cy={dataCy || name}
          />

          <Animation
            name={animationType}
            show={input !== ''}
            el={closeIconRef}
            displayType='visibility'
          />
          <CloseIconCon
            ref={closeIconRef}
            textColor={textColor}
            style={{ visibility: 'hidden' }}
            data-cy='textfield_closeIcon'
          >
            <Icon
              name='close/material'
              onClick={onClearIconClick}
              size={16}
              fill='black'
              backgroundSize={25}
            />
          </CloseIconCon>
        </InputCon>

        {/* Right Icon */}
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

      {/* Error Message */}
      <Animation name={animationType} show={!isValid} el={errMessagesRef} />
      <div
        data-cy='textfield_errorMessages'
        ref={errMessagesRef}
        style={{ marginTop: 'var(--spacing-xs', display: 'none' }}
      >
        {errorMessages.map((message, index) => (
          <Typography
            key={`${message}${index}`}
            text={message}
            styles={{ color: 'red' }}
            variant='body2'
          />
        ))}
      </div>
    </>
  )
}

TextField.defaultProps = defaultProps
TextField.propTypes = propTypes

export default memo(TextField)
