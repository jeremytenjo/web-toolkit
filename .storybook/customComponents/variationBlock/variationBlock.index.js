import React, { memo } from 'react'

import { Wrapper, Title, Content } from './variationBlock.styles'

const VariationBlock = ({
  children,
  title,
  style,
  contentStyle,
  containerId,
  background,
  titleColor = '#cdfff9',
  color = 'white',
}) => {
  return (
    <Wrapper style={style}>
      <Title style={style} titleColor={titleColor}>
        {title}
      </Title>
      <Content
        style={contentStyle || style}
        id={containerId}
        background={background}
        color={color}
      >
        {children}
      </Content>
    </Wrapper>
  )
}

export default memo(VariationBlock)
