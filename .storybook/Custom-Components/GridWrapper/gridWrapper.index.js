import React, { memo } from 'react'

import { Wrapper, Other } from './gridWrapper.styles'

const GridWrapper = () => {
  return (
    <Wrapper>
      <Other>text</Other>
    </Wrapper>
  )
}

export default memo(GridWrapper)
