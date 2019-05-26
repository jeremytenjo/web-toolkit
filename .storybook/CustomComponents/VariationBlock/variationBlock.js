import React, { memo } from 'react'

import { Wrapper, Other } from './VariationBlock.styles'

const VariationBlock = () => {
  return (
    <Wrapper>
      <Other>text</Other>
    </Wrapper>
  )
}

export default memo(VariationBlock)
