// Vendors
import React, { useState, memo, Fragment } from 'react'

// Main Component
const Input = ({ errMsg, errMesgStyle, showErrMsg, placeholder }) => {
  // State
  const [input, setInput] = useState('')

  // Functions
  const updateInput = async (e) => {
    setInput(e.target.value)
  }

  // Template
  return (
    <Fragment>
      <input value={input} onChange={updateInput} placeholder={placeholder} />
      {showErrMsg && <p style={errMesgStyle}>{errMsg}</p>}
    </Fragment>
  )
}

Input.defaultProps = {
  placeholder: '',
  showErrMsg: null,
  errMesgStyle: {},
  errMsg: '',
}

// Exports
export default memo(Input)
