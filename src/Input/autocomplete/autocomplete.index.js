import React, { memo, useEffect, useState, useRef } from 'react'

import List from '../../dataDisplay/list/index'
import Animation from '../../miscUtils/animations/Web-Animations-API/index'

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
    let mod = await import(`../form/textField/styles/${inputStyle}`)
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
