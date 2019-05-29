import React, { memo } from 'react'

import { Wrapper, Title, Content } from './variationBlock.styles'

const VariationBlock = ({
  children,
  title,
  style,
  contentStyles,
  containerId,
}) => {
  return (
    <Wrapper style={style}>
      <Title style={style}>{title}</Title>
      <Content style={contentStyles || style} id={containerId}>
        {children}
      </Content>
    </Wrapper>
  )
}

export default memo(VariationBlock)
