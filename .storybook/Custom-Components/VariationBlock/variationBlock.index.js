import React, { memo } from 'react'

import { Wrapper, Title, Content } from './variationBlock.styles'

const VariationBlock = ({
  children,
  title,
  style,
  contentStyle,
  containerId,
  noBackground,
  color = 'white',
}) => {
  return (
    <Wrapper style={style}>
      <Title style={style}>{title}</Title>
      <Content
        style={contentStyle || style}
        id={containerId}
        noBackground={noBackground}
        color={color}
      >
        {children}
      </Content>
    </Wrapper>
  )
}

export default memo(VariationBlock)
