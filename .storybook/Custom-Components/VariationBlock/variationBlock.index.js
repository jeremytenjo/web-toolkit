import React, { memo } from 'react'

import { Wrapper, Title, Content } from './variationBlock.styles'

const VariationBlock = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content> {children} </Content>
    </Wrapper>
  )
}

export default memo(VariationBlock)
