import React, { memo, useEffect, useState } from 'react'

import { defaultProps, propTypes } from './dropdown.propTypes'
import { Wrapper, Other } from './dropdown.styles'

const Dropdown = ({ inputStyle }) => {
  const [Textfield, setTextField] = useState(null)

  useEffect(() => {
    importTextfield()
  }, [])

  const importTextfield = async () => {
    let mod = await import(`../../../Form/Text-Field/Ui/React/Styles/textfield.${inputStyle}.index.js`)
    setTextField(mod.default)
  }

  console.log(Textfield)

  return <Wrapper>{Textfield}</Wrapper>
}

Dropdown.defaultProps = defaultProps
Dropdown.propTypes = propTypes

export default memo(Dropdown)
