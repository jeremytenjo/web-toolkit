import React, { useRef, memo, useState, useEffect } from 'react'

import toBoolean from '../../../../Misc-Utils/String/toBoolean.index'
import Typography from '../../../../Data-Display/Typography/Ui/React/typography.index'
import animation from '../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

import { defaultProps, propTypes } from './fileInput.propTypes'
import { Wrapper, Input, ChildrenWrap } from './fileInput.styles'

const FileInput = ({
  accept,
  children,
  onInput,
  name,
  validation,
  ...nativeProps
}) => {
  const inputRef = useRef(null)
  const [errorMessages, seterrorMessages] = useState([])
  const errMessagesRef = useRef(null)

  // Tracks validilty with react
  const [isValid, setIsValid] = useState(validation.length === 0)
  // Tracks validilty with data attribute for use with Form component
  const [isValidFormCheck, setIsValidFormCheck] = useState(
    validation.length === 0,
  )
  const config = {
    fill: 'forwards',
    duration: 100,
    direction: 'normal',
    easing: 'ease-out',
  }

  useEffect(() => {
    startOnSubmitListener()
    return removeOnSubmitListener
  }, [])

  useEffect(() => {
    if (isValid !== null)
      animation({
        name: 'showHide',
        el: errMessagesRef.current,
        config,
        show: !isValid,
      })
  }, [isValid])

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

    setIsValid(isInputvalid)
    setIsValidFormCheck(isInputvalid)
  }

  const checkValidation = async (file) => {
    const messages = await validation.map(async ({ name, message }) => {
      const mod = await import(`./Validation/${name}/fileInput.${name}.js`)
      const errMessage = mod.default({ value: file, message })
      if (errMessage) return errMessage
    })

    return await Promise.all(messages)
  }

  const handleFileUpload = async () => {
    const filesList = inputRef.current.files
    let errorList = []

    Array.from(filesList).forEach((file) => {
      const currentErrorMessages = checkValidation(file)
      if (currentErrorMessages.length > 0) {
        errorList.push([...currentErrorMessages])
      }
    })

    if (errorList.length === 0) {
      filesList.length === 1 ? onInput(filesList[0]) : onInput(filesList)
      seterrorMessages([])
      setIsValid(true)
      setIsValidFormCheck(true)
    } else {
      setIsValid(false)
      setIsValidFormCheck(false)
      seterrorMessages(errorList)
    }
  }

  return (
    <Wrapper>
      <Input
        ref={inputRef}
        data-isvalid={isValidFormCheck}
        type='file'
        accept={accept}
        onChange={handleFileUpload}
        name={name}
        {...nativeProps}
      />
      <ChildrenWrap>{children}</ChildrenWrap>
      <div
        data-cy='fileinput_errorMessages'
        ref={errMessagesRef}
        style={{ marginTop: 'var(--spacing-xs)', display: 'none' }}
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
    </Wrapper>
  )
}

FileInput.defaultProps = defaultProps
FileInput.propTypes = propTypes

export default memo(FileInput)
