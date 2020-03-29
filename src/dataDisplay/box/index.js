import React, { memo, forwardRef } from 'react'

import { Wrapper } from './styles'

const Box = ({ children, name, styles = {}, ...rest }, ref) => {
  return (
    <Wrapper
      ref={ref}
      styles={{ display: 'grid', ...styles }}
      data-box-name={name}
      data-cy={name}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default memo(forwardRef(Box))
