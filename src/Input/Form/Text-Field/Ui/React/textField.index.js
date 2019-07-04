import React, {
  useState,
  memo,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
} from 'react'

const TextField = (
  {
    Wrapper,
    Input,
    IconLeftCon,
    IconRightCon,
    onFocus = () => null,
    type = 'text',
    name = 'UNAMEDtextField',
    validation = [],
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
    initialInput = '',
    clearOnSubmit = null,
  },
  ref,
) => {
  // Refs
  const inputRef = useRef(null)

  // State
  const [input, setInput] = useState(initialInput)
  const [errMsg, seterrMsg] = useState(null)
  const [isValid, setisValid] = useState(true)
  const [focus, setfocus] = useState(null)

  useEffect(() => {
    clearOnSubmit && startOnSubmitListener()
    return removeOnSubmitListener
  }, [])

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
    const parentForm = inputRef.current.parentNode.parentNode
    parentForm.addEventListener('submit', handleFormListener, true)
  }
  const removeOnSubmitListener = () => {
    const parentForm = inputRef.current.parentNode.parentNode
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
    >
      {iconLeft && (
        <IconLeftCon onClick={onLeftIconClick}>{iconLeft}</IconLeftCon>
      )}

      {label && label}

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
      {errMsg !== '' && <p style={errMesgStyle}>{errMsg}</p>}

      {iconRight && (
        <IconRightCon onClick={onRightIconClick}>{iconRight}</IconRightCon>
      )}
    </Wrapper>
  )
}

export default memo(forwardRef(TextField))
// forwardRef does not support proptypes
