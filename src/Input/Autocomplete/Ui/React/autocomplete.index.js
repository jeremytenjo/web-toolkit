import React, { memo, useEffect, useState, useRef } from 'react'

import List from '../../../../Data-Display/List/Ui/React/list.index'
import Animation from '../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

import { defaultProps, propTypes } from './autocomplete.propTypes'
import { Wrapper, Other } from './autocomplete.styles'

const Autocomplete = ({ inputStyle, data }) => {
  const listRef = useRef(null)

  const [Textfield, setTextField] = useState(null)
  const [showList, setshowList] = useState(null)
  const [_data, setData] = useState(data)
  const hasData = _data.length > 0

  // useEffect(() => {
  //   hasData
  // }, [_data])

  useEffect(() => {
    importTextfield()
  }, [])

  const importTextfield = async () => {
    let mod = await import(
      `../../../Form/Text-Field/Ui/React/Styles/textfield.${inputStyle}.index.js`
    )
    setTextField(mod.default({ onInput: handleInput }))
  }

  const handleInput = (value) => {
    setshowList(value !== '')
  }

  return (
    <Wrapper>
      {Textfield}

      <Animation name='showHide' show={showList} el={listRef} />
      <div ref={listRef} style={{ display: 'none' }}>
        <List direction='row'>
          <span>hello</span>
          <span>hello</span>
          <span>hello</span>
        </List>
      </div>
    </Wrapper>
  )
}

Autocomplete.defaultProps = defaultProps
Autocomplete.propTypes = propTypes

export default memo(Autocomplete)
