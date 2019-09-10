import React, { memo } from 'react'

import { defaultProps, propTypes } from './box.propTypes'
import { Wrapper } from './box.styles'

const Box = ({ children, name, mediaQueries, fullscreen, size, ...styles }) => {
  return (
    <Wrapper
      data-box-name={name}
      mediaQueries={mediaQueries}
      fullscreen={fullscreen}
      size={size}
      {...styles}
    >
      {children}
    </Wrapper>
  )
}

Box.defaultProps = defaultProps
Box.propTypes = propTypes

export default memo(Box)
