import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'
import A from './styles'

const Link = ({ children, ...rest }) => {
  return <A {...rest}>{children}</A>
}

Link.defaultProps = defaultProps
Link.propTypes = propTypes

export default memo(Link)
