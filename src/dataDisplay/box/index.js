import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper } from './styles'

const Box = ({ children, name, styles, fullscreen, size, ...rest }) => {
  return (
    <Wrapper
      styles={{ display: 'grid', padding: 'xs', ...styles }}
      data-box-name={name}
      fullscreen={fullscreen}
      size={size}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

Box.defaultProps = defaultProps
Box.propTypes = propTypes

export default memo(Box)
