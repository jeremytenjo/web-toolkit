import React, { useRef, memo } from 'react'

import { defaultProps, propTypes } from './fileInput.propTypes'
import { Wrapper, Input, ChildrenWrap } from './fileInput.styles'

const FileInput = ({ accept, children, onInput, name, ...nativeProps }) => {
  const inputRef = useRef(null)

  const handleFileUpload = async () => {
    const filesList = inputRef.current.files
    filesList.length === 1
      ? onInput(inputRef.current.files[0])
      : onInput(filesList)
  }

  return (
    <Wrapper>
      <Input
        ref={inputRef}
        type='file'
        accept={accept}
        onChange={handleFileUpload}
        name={name}
        {...nativeProps}
      />
      <ChildrenWrap>{children}</ChildrenWrap>
    </Wrapper>
  )
}

FileInput.defaultProps = defaultProps
FileInput.propTypes = propTypes

export default memo(FileInput)
