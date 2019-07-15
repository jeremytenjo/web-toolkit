import React, { useState, memo, useEffect, useRef } from 'react'

import toBoolean from '../../../../../../Misc-Utils/String/toBoolean.index'
import Icon from '../../../../../../Data-Display/Icon/Ui/React/icon.index'
import animation from '../../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'
import Typography from '../../../../../../Data-Display/Typography/Ui/React/typography.index'

import { defaultProps, propTypes } from './textField.base.propTypes'

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
  autocomplete,
  initialInput,
  clearOnSubmit,
  dataCy,
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
  // Tracks validilty with react
  const [isValid, setIsValid] = useState(true)
  // Tracks validilty with data attribute for use with Form component
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
    const hasErrorMessages = errorMessages.includes(undefined)

    errorMessages && seterrorMessages(errorMessages)
    setIsValidFormCheck(hasErrorMessages)
  }

  const onChangeVaildation = async (value) => {
    const errorMessages = await checkValidation(value)
    errorMessages && seterrorMessages(errorMessages)

    const hasErrorMessages = errorMessages.includes(undefined)
    setIsValidFormCheck(hasErrorMessages)
    setIsValid(hasErrorMessages)
  }

  const checkValidation = async (value) => {
    if (validation) {
      const messages = await validation.map(async ({ name, message }) => {
        const mod = await import(`../Validation/${name}/textfield.${name}.js`)
        const errMessage = mod.default({ value, message })

        if (errMessage) return errMessage
      })

      const allerrorMessages = await Promise.all(messages)
      return allerrorMessages.length > 0 ? allerrorMessages : null
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
            data-cy={dataCy || name}
          />

          <CloseIconCon
            ref={closeIconRef}
            textColor={textColor}
            style={{ visibility: 'hidden' }}
            data-cy='textfield_closeIcon'
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

TextField.defaultProps = defaultProps
TextField.propTypes = propTypes

export default memo(TextField)
