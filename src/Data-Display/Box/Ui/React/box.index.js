import React, { memo } from 'react'

import { defaultProps, propTypes } from './box.propTypes'
import { Wrapper } from './box.styles'

const Box = ({ children, padding, color, style }) => {
  return (
    <Wrapper padding={padding} color={color} style={style}>
      {children}
    </Wrapper>
  )
}

Box.defaultProps = defaultProps
Box.propTypes = propTypes

export default memo(Box)
