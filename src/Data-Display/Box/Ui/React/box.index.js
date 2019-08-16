import React, { memo } from 'react'

import { defaultProps, propTypes } from './box.propTypes'
import { Wrapper } from './box.styles'

const Box = ({ children, mediaQueries, ...styles }) => {
  return (
    <Wrapper mediaQueries={mediaQueries} {...styles}>
      {children}
    </Wrapper>
  )
}

Box.defaultProps = defaultProps
Box.propTypes = propTypes

export default memo(Box)
